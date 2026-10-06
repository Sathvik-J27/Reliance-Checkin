-- ============================================================
-- Staff migration: editable staff list for the Staff2 "Staff" tab
-- and the "— Assign —" dropdown on queue cards.
--
-- Run in Supabase Dashboard → SQL Editor, as a single paste.
-- Additive only and idempotent — safe to re-run.
-- ============================================================

CREATE TABLE IF NOT EXISTS staff_members (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Names are unique regardless of case ("Om" and "om" are the same person)
CREATE UNIQUE INDEX IF NOT EXISTS idx_staff_members_name_lower ON staff_members (LOWER(name));

-- Backend uses the service role key, which bypasses RLS; this just keeps the
-- table closed to the public anon key.
ALTER TABLE staff_members ENABLE ROW LEVEL SECURITY;

-- Seed with the list that was previously hardcoded in Staff2QueueItem.tsx
INSERT INTO staff_members (name)
SELECT n FROM UNNEST(ARRAY[
  'Katia', 'Diane', 'Sathvik', 'Umesh', 'Ben', 'Dheeraj', 'Om', 'Raj',
  'Alana', 'Aman', 'Maria', 'Susheel', 'Harsh', 'Walter', 'Olivia',
  'Shaik', 'Swatik', 'Ras', 'Self', 'Jugal', 'Preet', 'Lenny'
]) AS n
WHERE NOT EXISTS (SELECT 1 FROM staff_members s WHERE LOWER(s.name) = LOWER(n));
