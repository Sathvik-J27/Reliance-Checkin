const { S3Client } = require('@aws-sdk/client-s3');

const accountId       = process.env.R2_ACCOUNT_ID;
const accessKeyId     = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

if (!accountId || !accessKeyId || !secretAccessKey || !process.env.R2_BUCKET || !process.env.R2_PUBLIC_URL) {
  throw new Error('Missing R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET or R2_PUBLIC_URL in environment variables');
}

// Cloudflare R2 speaks the S3 API — region is always "auto"
const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: { accessKeyId, secretAccessKey },
});

module.exports = r2;
