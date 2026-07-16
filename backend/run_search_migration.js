/**
 * One-time migration check for the Staff2 Search tab.
 * Run with:  node run_search_migration.js
 *
 * Adds to check_ins: phones_text, emails_text (generated columns) plus
 * trigram indexes on first_name/last_name/phones_text/emails_text for
 * fast partial-match search.
 */
require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function runMigration() {
  console.log('Checking search migration (phones_text/emails_text + trigram indexes)...');

  const { error: checkError } = await supabase
    .from('check_ins')
    .select('phones_text, emails_text')
    .limit(1);

  if (!checkError) {
    console.log('✅ Search columns already exist. No migration needed.');
    return;
  }

  console.log('⚠️  Search columns not found:', checkError.message);
  console.log('');
  console.log('This app\'s database is LIVE production. Run the SQL below during a');
  console.log('quiet moment (store closed / low traffic), not during a check-in rush.');
  console.log('');
  console.log('Please run backend/supabase_migration_search.sql in your Supabase');
  console.log('Dashboard (Dashboard → SQL Editor → New Query) as a single paste:');
  console.log('');
  console.log('─'.repeat(60));
  console.log(`
CREATE EXTENSION IF NOT EXISTS pg_trgm;

ALTER TABLE check_ins
  ADD COLUMN IF NOT EXISTS phones_text TEXT GENERATED ALWAYS AS (phones::text) STORED,
  ADD COLUMN IF NOT EXISTS emails_text TEXT GENERATED ALWAYS AS (emails::text) STORED;

CREATE INDEX IF NOT EXISTS idx_check_ins_first_name_trgm  ON check_ins USING GIN (first_name  gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_check_ins_last_name_trgm   ON check_ins USING GIN (last_name   gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_check_ins_phones_text_trgm ON check_ins USING GIN (phones_text gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_check_ins_emails_text_trgm ON check_ins USING GIN (emails_text gin_trgm_ops);
  `.trim());
  console.log('─'.repeat(60));
  console.log('(CONCURRENTLY is intentionally not used — Supabase\'s SQL Editor runs');
  console.log('pasted queries in an implicit transaction, which CONCURRENTLY rejects.');
  console.log('Plain CREATE INDEX briefly blocks writes to check_ins while it builds —');
  console.log('that\'s the reason to run this during a quiet moment.)');
  console.log('');
  console.log('Full file with comments: backend/supabase_migration_search.sql');
  console.log('After running the SQL above, restart the backend server.');
}

runMigration().catch(err => {
  console.error('Migration check failed:', err.message);
  process.exit(1);
});
