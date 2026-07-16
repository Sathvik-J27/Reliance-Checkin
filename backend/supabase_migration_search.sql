-- ============================================================
-- Search migration: fast partial-match search on name/phone/email
-- for the Staff2 "Search" tab.
--
-- Run in Supabase Dashboard → SQL Editor, as a single paste.
-- Additive only — does not modify or remove any existing column,
-- index, or data. Every statement is idempotent (IF NOT EXISTS),
-- so it's safe to re-run this whole file if it fails partway through.
--
-- ⚠️ This runs against the LIVE production check_ins table.
--    Run during a quiet moment (store closed / low traffic), not
--    during a check-in rush.
--
-- NOTE: CREATE INDEX CONCURRENTLY (which avoids blocking reads/writes
-- during index build) is intentionally NOT used here — Supabase's SQL
-- Editor runs pasted queries inside an implicit transaction, and
-- CONCURRENTLY errors with "cannot run inside a transaction block" in
-- that context. Plain CREATE INDEX is used instead, which briefly
-- blocks writes to check_ins (same category of lock as the ALTER TABLE
-- below) while each index builds — for a single-location check-in
-- table this should be a sub-second-to-few-second blip per index, not
-- a real outage, but it's still the reason to run this during a quiet
-- moment. (If you want true zero-blocking index builds, run this file
-- with CONCURRENTLY added back via `psql` using your Supabase
-- connection string instead of the web SQL Editor.)
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Flatten phones/emails JSONB arrays to plain TEXT so they can be
-- ILIKE-searched. Uses a plain jsonb::text cast (built-in, IMMUTABLE,
-- no subquery) rather than
--   array_to_string(ARRAY(SELECT jsonb_array_elements_text(...)), ' ')
-- — that form is rejected by Postgres for STORED generated columns
-- ("cannot use subquery in column generation expression"). Casting to
-- text keeps each phone/email's characters contiguous (only wrapped in
-- quotes/brackets/commas), so ILIKE '%1234%' / ILIKE '%diane@%' still
-- match correctly.
--
-- This ALTER TABLE briefly takes an exclusive lock on check_ins while
-- Postgres rewrites the table to populate the new generated columns
-- for existing rows (reads/writes, including new check-ins, block for
-- the duration). There is no way to make this step non-blocking in
-- Postgres.
ALTER TABLE check_ins
  ADD COLUMN IF NOT EXISTS phones_text TEXT GENERATED ALWAYS AS (phones::text) STORED,
  ADD COLUMN IF NOT EXISTS emails_text TEXT GENERATED ALWAYS AS (emails::text) STORED;

CREATE INDEX IF NOT EXISTS idx_check_ins_first_name_trgm  ON check_ins USING GIN (first_name  gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_check_ins_last_name_trgm   ON check_ins USING GIN (last_name   gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_check_ins_phones_text_trgm ON check_ins USING GIN (phones_text gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_check_ins_emails_text_trgm ON check_ins USING GIN (emails_text gin_trgm_ops);
