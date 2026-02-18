/**
 * One-time migration runner for Phase 2 schema changes.
 * Run with:  node run_migration.js
 *
 * Adds columns to check_ins table:
 *   selection_sheet_number, materials, fabricator, helped_by, draft_step
 */
require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function runMigration() {
  console.log('Running Phase 2 migration...');

  // supabase-js v2 doesn't expose raw DDL directly.
  // The safest way: call a Postgres function via rpc, or use the Management API.
  // Instead, we verify the columns exist by trying a lightweight SELECT.

  const { error: checkError } = await supabase
    .from('check_ins')
    .select('selection_sheet_number, materials, fabricator, helped_by, draft_step')
    .limit(1);

  if (!checkError) {
    console.log('✅ Phase 2 columns already exist. No migration needed.');
    return;
  }

  console.log('⚠️  Phase 2 columns not found:', checkError.message);
  console.log('');
  console.log('Please run the following SQL in your Supabase Dashboard');
  console.log('(Dashboard → SQL Editor → New Query → paste and run):');
  console.log('');
  console.log('─'.repeat(60));
  console.log(`
ALTER TABLE check_ins
  ADD COLUMN IF NOT EXISTS selection_sheet_number VARCHAR(50),
  ADD COLUMN IF NOT EXISTS materials              JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS fabricator             JSONB,
  ADD COLUMN IF NOT EXISTS helped_by              VARCHAR(100),
  ADD COLUMN IF NOT EXISTS draft_step             INT  DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_check_ins_sheet_number ON check_ins(selection_sheet_number);
CREATE INDEX IF NOT EXISTS idx_check_ins_materials    ON check_ins USING GIN(materials);
  `.trim());
  console.log('─'.repeat(60));
  console.log('');
  console.log('After running the SQL above, restart the backend server.');
}

runMigration().catch(err => {
  console.error('Migration check failed:', err.message);
  process.exit(1);
});
