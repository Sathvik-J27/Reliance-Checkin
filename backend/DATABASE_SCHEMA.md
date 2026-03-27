# Database Schema Documentation

## Table: `check_ins`

Primary table storing all customer check-in records, waiver data, staff selection data, and ESIGN compliance fields.

### Phase 1 — Core Check-In Fields

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| `id` | UUID | NOT NULL | `uuid_generate_v4()` | Primary key |
| `first_name` | VARCHAR(100) | NOT NULL | — | Customer first name |
| `last_name` | VARCHAR(100) | NOT NULL | — | Customer last name |
| `street` | VARCHAR(255) | NOT NULL | — | Street address |
| `suite_unit` | VARCHAR(50) | NULL | — | Suite or unit number |
| `city` | VARCHAR(100) | NOT NULL | — | City |
| `state` | VARCHAR(50) | NOT NULL | — | State |
| `zip` | VARCHAR(20) | NOT NULL | — | ZIP code |
| `country` | VARCHAR(3) | NOT NULL | — | ISO country code (USA, CAN, MEX) |
| `phones` | JSONB | NOT NULL | — | Array of phone number strings (10-digit) |
| `emails` | JSONB | NOT NULL | — | Array of email address strings |
| `referral_sources` | JSONB | NOT NULL | `'[]'` | Array of referral objects: `{ type, name, phone? }` |
| `signature` | TEXT | NOT NULL | — | Base64-encoded PNG of main customer signature |
| `party_size` | JSONB | NOT NULL | — | `{ adults: number, minors: number }` |
| `visitors` | JSONB | NOT NULL | `'[]'` | Array of visitor objects: `{ name, signature, isMain, isMinor }` |
| `waiver_pdf_url` | TEXT | NULL | — | URL to generated waiver PDF in Supabase Storage |
| `check_in_time` | TIMESTAMPTZ | NOT NULL | `NOW()` | When customer checked in |
| `status` | VARCHAR(20) | NOT NULL | `'waiting'` | Current status: `waiting`, `helped`, or `done` |
| `currently_helped_by` | VARCHAR(100) | NULL | — | Staff member currently viewing/helping this customer |
| `helped_time` | TIMESTAMPTZ | NULL | — | Timestamp when marked as helped |
| `created_at` | TIMESTAMPTZ | NOT NULL | `NOW()` | Record creation time |
| `updated_at` | TIMESTAMPTZ | NOT NULL | `NOW()` | Auto-updated on every UPDATE via trigger |

### Phase 2 — Staff Selection Data

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| `selection_sheet_number` | VARCHAR(50) | NULL | — | Selection sheet number (e.g., "800" or "800.1") |
| `materials` | JSONB | NULL | `'[]'` | Array of material selection objects with specs |
| `fabricator` | JSONB | NULL | — | Selected fabricator details (company, address, contact) |
| `helped_by` | VARCHAR(100) | NULL | — | Staff member who completed the selection |
| `draft_step` | INT | NULL | `0` | Current step in staff selection flow (0-3) |

### Phase 3 — ESIGN Act Compliance

| Column | Type | Nullable | Default | Description |
|--------|------|----------|---------|-------------|
| `esign_consent_timestamp` | TIMESTAMPTZ | NULL | — | ISO8601 timestamp when customer consented to electronic signature (ESIGN Act requirement) |
| `ip_address` | VARCHAR(45) | NULL | — | Client IP address of signatory (proves attribution and location) |
| `session_id` | UUID | NULL | — | Unique browser session ID (differentiates customers on same device/IP) |
| `device_info` | JSONB | NULL | — | Device metadata: `{ userAgent, screenWidth, screenHeight, deviceType, timestamp }` (accessibility compliance) |

### Indexes

| Index | Type | Column(s) | Purpose |
|-------|------|-----------|---------|
| `idx_check_ins_status` | B-tree | `status` | Filter by waiting/helped/done |
| `idx_check_ins_check_in_time` | B-tree | `check_in_time DESC` | Sort by most recent |
| `idx_check_ins_last_name` | B-tree | `last_name` | Name lookups |
| `idx_check_ins_phones` | GIN | `phones` | JSONB phone number search |
| `idx_check_ins_sheet_number` | B-tree | `selection_sheet_number` | History filter by sheet number |
| `idx_check_ins_materials` | GIN | `materials` | JSONB materials/hold filtering |
| `idx_check_ins_audit_trail` | B-tree (composite) | `ip_address, session_id, check_in_time` | ESIGN audit trail queries |
| `idx_check_ins_session_id` | B-tree | `session_id` | Session-based lookups |

### Triggers

| Trigger | Event | Description |
|---------|-------|-------------|
| `set_updated_at` | BEFORE UPDATE | Automatically sets `updated_at` to `NOW()` on every update |

### Notes

- **RLS** is disabled; access control is handled by the service_role key on the backend and IP whitelist middleware in production.
- **Revisit tracking**: The `is_revisit` boolean flag (added via application logic) marks returning customers. Revisit check-ins create new rows rather than updating existing ones.
- **PDF generation** is best-effort — if it fails, the check-in record is still saved with `waiver_pdf_url = NULL`.
