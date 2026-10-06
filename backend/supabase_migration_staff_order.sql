-- ============================================================
-- Staff order migration: lets staff names be put in a custom order
-- (Staff tab drag / arrow buttons → Assign dropdown order).
--
-- Run in Supabase Dashboard → SQL Editor, as a single paste,
-- AFTER supabase_migration_staff.sql. Idempotent — safe to re-run.
-- ============================================================

ALTER TABLE staff_members ADD COLUMN IF NOT EXISTS sort_order INT;

-- Backfill rows that have no position yet: the original hardcoded order
-- first, then anyone else alphabetically, placed after existing positions.
WITH ranked AS (
  SELECT
    id,
    COALESCE((SELECT MAX(sort_order) FROM staff_members), 0)
      + ROW_NUMBER() OVER (
          ORDER BY
            COALESCE(ARRAY_POSITION(ARRAY[
              'katia', 'diane', 'sathvik', 'umesh', 'ben', 'dheeraj', 'om', 'raj',
              'alana', 'aman', 'maria', 'susheel', 'harsh', 'walter', 'olivia',
              'shaik', 'swatik', 'ras', 'self', 'jugal', 'preet', 'lenny'
            ], LOWER(name)), 1000),
            name
        ) AS pos
  FROM staff_members
  WHERE sort_order IS NULL
)
UPDATE staff_members s
SET sort_order = ranked.pos
FROM ranked
WHERE s.id = ranked.id;
