/**
 * One-off migration: Supabase Storage → Cloudflare R2.
 *
 *   1. Copies every object in the Supabase `waivers` bucket to the R2 bucket
 *      root (same key), and every object in `customer-images` to
 *      `customer-images/<key>` in R2. Objects already in R2 are skipped.
 *   2. Rewrites check_ins.waiver_pdf_url and customer_images.image_url from
 *      Supabase URLs to R2 public URLs — only for files that are confirmed in R2.
 *
 * Usage (from backend/):
 *   node scripts/migrate-storage-to-r2.js --dry-run   # report only, change nothing
 *   node scripts/migrate-storage-to-r2.js             # do it
 *
 * Safe to re-run. Does NOT delete anything from Supabase.
 */
require('dotenv').config();
const { PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');
const supabase = require('../src/config/supabase');
const r2       = require('../src/config/r2');

const DRY_RUN    = process.argv.includes('--dry-run');
const R2_BUCKET  = process.env.R2_BUCKET;
const PUBLIC_URL = process.env.R2_PUBLIC_URL.replace(/\/+$/, '');

const SOURCES = [
  { bucket: process.env.STORAGE_BUCKET || 'waivers',       prefix: '' },
  { bucket: process.env.IMAGE_BUCKET   || 'customer-images', prefix: 'customer-images/' },
];

/** Recursively lists every file path in a Supabase bucket. */
async function listAll(bucket, dir = '') {
  const files = [];
  const PAGE = 1000;
  for (let offset = 0; ; offset += PAGE) {
    const { data, error } = await supabase.storage.from(bucket).list(dir, { limit: PAGE, offset });
    if (error) throw new Error(`list ${bucket}/${dir}: ${error.message}`);
    for (const item of data) {
      const full = dir ? `${dir}/${item.name}` : item.name;
      if (item.id === null) files.push(...await listAll(bucket, full)); // folder
      else if (item.name !== '.emptyFolderPlaceholder') files.push({ path: full, size: item.metadata?.size || 0 });
    }
    if (data.length < PAGE) break;
  }
  return files;
}

async function existsInR2(key) {
  try {
    await r2.send(new HeadObjectCommand({ Bucket: R2_BUCKET, Key: key }));
    return true;
  } catch (err) {
    if (err.$metadata?.httpStatusCode === 404) return false;
    throw err;
  }
}

async function copyBucket({ bucket, prefix }) {
  const files = await listAll(bucket);
  const totalMb = files.reduce((s, f) => s + f.size, 0) / 1024 / 1024;
  console.log(`\n[${bucket}] ${files.length} files, ${totalMb.toFixed(1)} MB`);

  const inR2 = new Set();
  const failed = [];
  let copied = 0, skipped = 0;

  for (const [i, f] of files.entries()) {
    const key = prefix + f.path;
    try {
      if (await existsInR2(key)) {
        skipped++;
        inR2.add(key);
        continue;
      }
      if (DRY_RUN) { inR2.add(key); continue; }

      const { data: blob, error } = await supabase.storage.from(bucket).download(f.path);
      if (error) throw new Error(error.message);
      await r2.send(new PutObjectCommand({
        Bucket:      R2_BUCKET,
        Key:         key,
        Body:        Buffer.from(await blob.arrayBuffer()),
        ContentType: blob.type || 'application/octet-stream',
      }));
      copied++;
      inR2.add(key);
    } catch (err) {
      failed.push(`${f.path}: ${err.message}`);
    }
    if ((i + 1) % 50 === 0) console.log(`  ...${i + 1}/${files.length}`);
  }

  console.log(`  copied ${copied}, already in R2 ${skipped}, failed ${failed.length}` +
    (DRY_RUN ? ` (dry run — would copy ${inR2.size - skipped})` : ''));
  failed.forEach(m => console.log(`  FAILED ${m}`));
  return inR2;
}

/** Rewrites Supabase URLs in table.column to R2 URLs, for keys confirmed in R2. */
async function rewriteUrls(table, column, { bucket, prefix }, inR2) {
  const pattern = new RegExp(`/storage/v1/object/(?:public/|sign/)?${bucket}/([^?]+)`);
  const rows = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await supabase
      .from(table)
      .select(`id, ${column}`)
      .like(column, '%/storage/v1/object/%')
      .range(from, from + PAGE - 1);
    if (error) throw new Error(`select ${table}: ${error.message}`);
    rows.push(...data);
    if (data.length < PAGE) break;
  }

  let updated = 0;
  const missing = [];
  for (const row of rows) {
    const match = row[column].match(pattern);
    if (!match) continue;
    const key = prefix + decodeURIComponent(match[1]);
    if (!inR2.has(key)) {
      missing.push(`${row.id} → ${key}`);
      continue;
    }
    if (DRY_RUN) { updated++; continue; }
    const { error } = await supabase.from(table).update({ [column]: `${PUBLIC_URL}/${key}` }).eq('id', row.id);
    if (error) missing.push(`${row.id}: ${error.message}`);
    else updated++;
  }

  console.log(`\n[${table}.${column}] ${rows.length} Supabase URLs, ` +
    `${DRY_RUN ? 'would update' : 'updated'} ${updated}, not migrated ${missing.length}`);
  missing.forEach(m => console.log(`  SKIPPED ${m}`));
}

async function main() {
  console.log(DRY_RUN ? '=== DRY RUN — nothing will be changed ===' : '=== MIGRATING ===');
  const [waivers, images] = SOURCES;

  const waiverKeys = await copyBucket(waivers);
  const imageKeys  = await copyBucket(images);

  await rewriteUrls('check_ins',       'waiver_pdf_url', waivers, waiverKeys);
  await rewriteUrls('customer_images', 'image_url',      images,  imageKeys);

  console.log('\nDone.');
}

main().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
