-- ============================================================
-- Phase 1 Migration: check_ins table
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ============================================================

-- Enable UUID extension (safe to run if already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create check_ins table
CREATE TABLE IF NOT EXISTS check_ins (
  id                   UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name           VARCHAR(100) NOT NULL,
  last_name            VARCHAR(100) NOT NULL,
  street               VARCHAR(255) NOT NULL,
  suite_unit           VARCHAR(50),
  city                 VARCHAR(100) NOT NULL,
  state                VARCHAR(50)  NOT NULL,
  zip                  VARCHAR(20)  NOT NULL,
  country              VARCHAR(3)   NOT NULL,
  phones               JSONB        NOT NULL,
  emails               JSONB        NOT NULL,
  referral_sources     JSONB        NOT NULL DEFAULT '[]'::jsonb,
  signature            TEXT         NOT NULL,
  party_size           JSONB        NOT NULL,
  visitors             JSONB        NOT NULL DEFAULT '[]'::jsonb,
  waiver_pdf_url       TEXT,
  check_in_time        TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  status               VARCHAR(20)  NOT NULL DEFAULT 'waiting',
  currently_helped_by  VARCHAR(100),
  helped_time          TIMESTAMPTZ,
  created_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Indexes for common query patterns
CREATE INDEX IF NOT EXISTS idx_check_ins_status         ON check_ins(status);
CREATE INDEX IF NOT EXISTS idx_check_ins_check_in_time  ON check_ins(check_in_time DESC);
CREATE INDEX IF NOT EXISTS idx_check_ins_last_name      ON check_ins(last_name);
CREATE INDEX IF NOT EXISTS idx_check_ins_phones         ON check_ins USING GIN(phones);

-- Auto-update updated_at on every UPDATE
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON check_ins;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON check_ins
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- NOTE: RLS is intentionally left disabled for Phase 1 (service_role key bypasses it).
-- Enable and configure RLS policies in Phase 2 when staff authentication is added.

-- ============================================================
-- Phase 2 Migration: persist staff selection data on check_ins
-- Run AFTER the Phase 1 migration if upgrading an existing DB.
-- ============================================================

ALTER TABLE check_ins
  ADD COLUMN IF NOT EXISTS selection_sheet_number VARCHAR(50),
  ADD COLUMN IF NOT EXISTS materials              JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS fabricator             JSONB,
  ADD COLUMN IF NOT EXISTS helped_by              VARCHAR(100),
  ADD COLUMN IF NOT EXISTS draft_step             INT  DEFAULT 0;

-- Index sheet number for quick lookups in history filters
CREATE INDEX IF NOT EXISTS idx_check_ins_sheet_number ON check_ins(selection_sheet_number);
-- Index for hold status filtering (materials JSONB contains hold flags)
CREATE INDEX IF NOT EXISTS idx_check_ins_materials ON check_ins USING GIN(materials);
