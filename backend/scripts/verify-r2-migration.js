/**
 * Verifies the Supabase → R2 migration before Supabase files are deleted.
 *
 *   1. Every file in the Supabase buckets exists in R2 with the same size.
 *   2. No check_ins / customer_images rows still point at Supabase Storage.
 *   3. Every R2 URL stored in the DB resolves to an object in R2.
 *
 * Usage (from backend/):  node scripts/verify-r2-migration.js
 * Exits 0 and prints "SAFE TO DELETE" only if every check passes.
 */
require('dotenv').config();
const { ListObjectsV2Command } = require('@aws-sdk/client-s3');
const supabase = require('../src/config/supabase');
const r2       = require('../src/config/r2');

const R2_BUCKET  = process.env.R2_BUCKET;
const PUBLIC_URL = process.env.R2_PUBLIC_URL.replace(/\/+$/, '');

const SOURCES = [
  { bucket: process.env.STORAGE_BUCKET || 'waivers',         prefix: '' },
  { bucket: process.env.IMAGE_BUCKET   || 'customer-images', prefix: 'customer-images/' },
];

async function listSupabase(bucket, dir = '') {
  const files = [];
  const PAGE = 1000;
  for (let offset = 0; ; offset += PAGE) {
    const { data, error } = await supabase.storage.from(bucket).list(dir, { limit: PAGE, offset });
    if (error) throw new Error(`list ${bucket}/${dir}: ${error.message}`);
    for (const item of data) {
      const full = dir ? `${dir}/${item.name}` : item.name;
      if (item.id === null) files.push(...await listSupabase(bucket, full));
      else if (item.name !== '.emptyFolderPlaceholder') files.push({ path: full, size: item.metadata?.size });
    }
    if (data.length < PAGE) break;
  }
  return files;
}

/** Map of every R2 key → size. */
async function listR2() {
  const sizes = new Map();
  let ContinuationToken;
  do {
    const res = await r2.send(new ListObjectsV2Command({ Bucket: R2_BUCKET, ContinuationToken }));
    (res.Contents || []).forEach(o => sizes.set(o.Key, o.Size));
    ContinuationToken = res.IsTruncated ? res.NextContinuationToken : undefined;
  } while (ContinuationToken);
  return sizes;
}

async function selectAll(table, column) {
  const rows = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await supabase
      .from(table).select(`id, ${column}`).not(column, 'is', null).range(from, from + PAGE - 1);
    if (error) throw new Error(`select ${table}: ${error.message}`);
    rows.push(...data);
    if (data.length < PAGE) break;
  }
  return rows;
}

async function main() {
  const r2Sizes = await listR2();
  console.log(`R2 bucket has ${r2Sizes.size} objects`);
  let problems = 0;

  // 1. File-by-file comparison
  for (const { bucket, prefix } of SOURCES) {
    const files = await listSupabase(bucket);
    const bad = files.filter(f => {
      const r2Size = r2Sizes.get(prefix + f.path);
      return r2Size === undefined || (f.size !== undefined && r2Size !== f.size);
    });
    console.log(`[${bucket}] ${files.length} Supabase files — ${files.length - bad.length} match in R2, ${bad.length} missing/mismatched`);
    bad.forEach(f => console.log(`  MISSING ${f.path} (supabase ${f.size} B, r2 ${r2Sizes.get(prefix + f.path) ?? 'none'})`));
    problems += bad.length;
  }

  // 2 + 3. DB links
  for (const [table, column] of [['check_ins', 'waiver_pdf_url'], ['customer_images', 'image_url']]) {
    const rows = await selectAll(table, column);
    const stillSupabase = rows.filter(r => r[column].includes('/storage/v1/object/'));
    const brokenR2 = rows.filter(r =>
      r[column].startsWith(PUBLIC_URL + '/') && !r2Sizes.has(decodeURIComponent(r[column].slice(PUBLIC_URL.length + 1))));
    console.log(`[${table}.${column}] ${rows.length} links — ${stillSupabase.length} still on Supabase, ${brokenR2.length} R2 links with no object`);
    stillSupabase.forEach(r => console.log(`  STILL SUPABASE ${r.id}`));
    brokenR2.forEach(r => console.log(`  BROKEN ${r.id} ${r[column]}`));
    problems += stillSupabase.length + brokenR2.length;
  }

  console.log(problems === 0
    ? '\nSAFE TO DELETE — every Supabase file is in R2 and every DB link points to R2.'
    : `\nNOT SAFE — ${problems} problem(s) above. Re-run the migration, then verify again.`);
  process.exit(problems === 0 ? 0 : 1);
}

main().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
