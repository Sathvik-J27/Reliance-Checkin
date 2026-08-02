-- ============================================================
-- Search migration: extend the Staff2 "Search" tab to also match
-- additional (non-main) visitor names, not just the main first/last name.
--
-- Run in Supabase Dashboard → SQL Editor, as a single paste.
-- Additive only — does not modify or remove any existing column,
-- index, or data. Idempotent: safe to re-run this whole file (e.g. if
-- you already ran an earlier version of it) since it drops and
-- recreates visitors_text/its index before rebuilding them correctly.
--
-- ⚠️ This runs against the LIVE production check_ins table.
--    Run during a quiet moment (store closed / low traffic), not
--    during a check-in rush.
--
-- Requires supabase_migration_search.sql to have already been run
-- (uses the same pg_trgm extension it enables).
-- ============================================================

-- Drop any earlier version of visitors_text (an earlier draft of this
-- migration cast the whole visitors array — including each visitor's
-- multi-KB base64 signature image — to text. That embedded signature
-- noise made ILIKE '%query%' spuriously match unrelated customers
-- whenever the search term happened to appear inside the base64 data).
DROP INDEX IF EXISTS idx_check_ins_visitors_text_trgm;
ALTER TABLE check_ins DROP COLUMN IF EXISTS visitors_text;

-- Rebuild visitors_text from ONLY each visitor's "name" field (never
-- "signature"), so search matches are limited to actual visitor names.
-- Generated columns require a single IMMUTABLE expression with no
-- subquery, so a variable-length JSONB array can't be unnested with
-- jsonb_array_elements() here — instead we address up to 24 positional
-- slots directly (visitors->N->>'name'), well above the app's max party
-- size of 10 adults + 10 minors. Built with COALESCE(...,'') + ||  rather
-- than concat_ws() — concat_ws() is only STABLE (not IMMUTABLE) in
-- Postgres because it accepts variadic "any", which Postgres rejects for
-- generated columns even though every argument here is plain text.
-- Backend code (checkInService.js) splits on ' | ' and drops empty
-- strings, so the extra separators around unused slots are harmless.
ALTER TABLE check_ins
  ADD COLUMN visitors_text TEXT GENERATED ALWAYS AS (
    COALESCE(visitors->0->>'name','')  || ' | ' || COALESCE(visitors->1->>'name','')  || ' | ' ||
    COALESCE(visitors->2->>'name','')  || ' | ' || COALESCE(visitors->3->>'name','')  || ' | ' ||
    COALESCE(visitors->4->>'name','')  || ' | ' || COALESCE(visitors->5->>'name','')  || ' | ' ||
    COALESCE(visitors->6->>'name','')  || ' | ' || COALESCE(visitors->7->>'name','')  || ' | ' ||
    COALESCE(visitors->8->>'name','')  || ' | ' || COALESCE(visitors->9->>'name','')  || ' | ' ||
    COALESCE(visitors->10->>'name','') || ' | ' || COALESCE(visitors->11->>'name','') || ' | ' ||
    COALESCE(visitors->12->>'name','') || ' | ' || COALESCE(visitors->13->>'name','') || ' | ' ||
    COALESCE(visitors->14->>'name','') || ' | ' || COALESCE(visitors->15->>'name','') || ' | ' ||
    COALESCE(visitors->16->>'name','') || ' | ' || COALESCE(visitors->17->>'name','') || ' | ' ||
    COALESCE(visitors->18->>'name','') || ' | ' || COALESCE(visitors->19->>'name','') || ' | ' ||
    COALESCE(visitors->20->>'name','') || ' | ' || COALESCE(visitors->21->>'name','') || ' | ' ||
    COALESCE(visitors->22->>'name','') || ' | ' || COALESCE(visitors->23->>'name','')
  ) STORED;

CREATE INDEX idx_check_ins_visitors_text_trgm ON check_ins USING GIN (visitors_text gin_trgm_ops);
