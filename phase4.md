# Phase 4: Customer Login, Image Upload, Survey & Rating Dashboard

## Overview

Currently, after check-in the customer sees a 15-second confirmation screen and is redirected home. This phase adds:
1. Customers **manually log in** (via the existing shared login page) with username=phone, password=phone
2. After login, upload material photos (up to 15) with quantities — optional
3. After clicking "Done", **sign out** and show a **survey** (star rating + comment)
4. Staff sees customer images in their dashboard
5. A new **Rating Dashboard** (role: `rating` / `Reliance33`) for viewing survey responses

**No auto-login.** Check-in confirmation (Step4) stays as-is. Customers use the same "Login" button on the homepage that staff use.

---

## Customer Flow

```
Customer checks in → Step4 confirmation (unchanged, redirects home)
                          ↓ (later, customer clicks "Login" on homepage)
Shared Login Page → enters phone/phone → backend validates → auth token returned
                          ↓
Customer Image Upload page (most recent check-in auto-selected)
  - Upload up to 15 images, each with quantity (+/- controls)
  - Optional: can submit with 0 images
                          ↓ (clicks "Done")
Session cleared (signed out) → Survey page appears
  - Star rating (1-5)
  - Free-text comment
  - "Submit" or "Skip"
                          ↓
Thank-you message → auto-redirect home (15 seconds)
```

---

## Phase 4A: Database Schema

### Task 1: Add auth token columns to `check_ins`
```sql
ALTER TABLE check_ins
  ADD COLUMN IF NOT EXISTS auth_token VARCHAR(64) UNIQUE,
  ADD COLUMN IF NOT EXISTS auth_token_expires_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_check_ins_auth_token ON check_ins(auth_token);
```

### Task 2: Create `customer_images` table
```sql
CREATE TABLE IF NOT EXISTS customer_images (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  check_in_id  UUID NOT NULL REFERENCES check_ins(id) ON DELETE CASCADE,
  image_url    TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  quantity     INT NOT NULL DEFAULT 1 CHECK (quantity >= 1 AND quantity <= 99),
  sort_order   INT NOT NULL DEFAULT 0,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_customer_images_check_in_id ON customer_images(check_in_id);
```

### Task 3: Create `survey_responses` table
```sql
CREATE TABLE IF NOT EXISTS survey_responses (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  check_in_id  UUID NOT NULL REFERENCES check_ins(id) ON DELETE CASCADE,
  star_rating  INT NOT NULL CHECK (star_rating >= 1 AND star_rating <= 5),
  comment      TEXT,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_survey_responses_check_in_id ON survey_responses(check_in_id);
CREATE INDEX IF NOT EXISTS idx_survey_responses_created_at ON survey_responses(created_at DESC);
```

### Task 4: Create Supabase Storage bucket
Create bucket `customer-images`:
- Public: Yes
- File size limit: 10MB
- Allowed MIME types: `image/*`

Add env variable: `IMAGE_BUCKET=customer-images`

**File**: `backend/supabase_migration.sql` — append as Phase 4 migration

---

## Phase 4B: Backend Services

### Task 5: Install multer
```bash
cd backend && npm install multer
```

### Task 6: Create `backend/src/services/imageService.js`
- `generateAuthToken(checkInId)` — `crypto.randomBytes(32).toString('hex')`, 2-hour expiry, stored in `check_ins`
- `validateAuthToken(token)` — lookup by token + expiry check, returns check-in record or null
- `authenticateByPhone(phone)` — lookup most recent check-in by phone (JSONB contains), generate + return auth token and check-in data
- `saveImage(checkInId, imageUrl, storagePath, quantity, sortOrder)`
- `getImagesByCheckInId(checkInId)`
- `getImagesByPhone(phone)` — all images across check-ins for this phone (staff + revisit view)
- `updateImageQuantity(imageId, quantity)`
- `deleteImage(imageId, storagePath)` — DB + storage removal

### Task 7: Create `backend/src/services/surveyService.js`
- `saveSurveyResponse(checkInId, starRating, comment)` — insert into `survey_responses`
- `getAllSurveyResponses(filters)` — paginated query with optional date range filter, joins customer name from `check_ins`

### Task 8: Extend `backend/src/services/storageService.js`
- `uploadImage(imageBuffer, checkInId, originalFilename, contentType)` — uploads to `customer-images` bucket at `{checkInId}/{uuid}.{ext}`, returns `{ publicUrl, storagePath }`
- `deleteImageFromStorage(storagePath)` — removes from bucket

---

## Phase 4C: Backend Auth & Validation

### Task 9: Create `backend/src/middleware/customerAuth.js`
- Extracts `Bearer` token from `Authorization` header
- Calls `validateAuthToken(token)` → attaches `req.customerCheckIn` or returns 401

### Task 10: Create `backend/src/validators/imageValidator.js`
- Zod schema for login request: `{ phone: z.string().length(10) }`
- Zod schema for quantity update: `{ quantity: z.number().int().min(1).max(99) }`
- Zod schema for survey submission: `{ starRating: z.number().int().min(1).max(5), comment: z.string().optional() }`

---

## Phase 4D: Backend API Endpoints

### Task 11: Create `backend/src/routes/imageRoutes.js`

| Endpoint | Auth | Description |
|----------|------|-------------|
| `POST /api/customer/login` | none | Body: `{ phone }`. Looks up most recent check-in by phone. Returns `{ authToken, checkInId, customerName }` or 401. |
| `POST /api/images/upload` | customerAuth | Multipart: `images` (max 15 files, 10MB each) + `quantities` (JSON). Returns saved image records. |
| `GET /api/images/check-in/:checkInId` | customerAuth | Images for customer's own check-in (token must match). |
| `PATCH /api/images/:imageId/quantity` | customerAuth | Body: `{ quantity }` (1-99). |
| `DELETE /api/images/:imageId` | customerAuth | Deletes image (DB + storage). |
| `GET /api/images/customer/:phone` | IP whitelist | Staff endpoint: all images grouped by check-in for a phone. |

### Task 12: Create `backend/src/routes/surveyRoutes.js`

| Endpoint | Auth | Description |
|----------|------|-------------|
| `POST /api/survey` | customerAuth | Body: `{ starRating, comment? }`. Saves survey tied to check-in. |
| `GET /api/survey/responses` | IP whitelist | Rating dashboard endpoint. Query params: `page`, `startDate`, `endDate`. Returns paginated responses with customer info. |

### Task 13: Register routes in `backend/app.js`
- Register `imageRoutes` under `/api`
- Register `surveyRoutes` under `/api`

---

## Phase 4E: Frontend — Login & Routing

### Task 14: Modify `frontend/src/components/staff/StaffLogin.tsx`

**Current roles**: `staff`, `pricing`, `analysis`, `staff2` (all hardcoded)

**Add**:
- New role `'rating'` with credentials `rating` / `Reliance33` → routes to Rating Dashboard
- New role `'customer'` — when username/password don't match any hardcoded role, treat both fields as a phone number. If they match (`username === password` and looks like a 10-digit phone), call `POST /api/customer/login` with that phone. On success, call `onLogin(phone, 'customer')` with the auth token data.

**Update `onLogin` prop type**: `'staff' | 'pricing' | 'analysis' | 'staff2' | 'rating' | 'customer'`

Add a second parameter for customer data: `onLogin(username, role, customerData?)` where `customerData = { token, checkInId, customerName }`.

**UI change**: Rename subtitle from "Staff Login" to just "Login" since customers use it too.

### Task 15: Modify `frontend/src/App.tsx`

**Add view types** to `View` union (line 61):
- `'customer-upload'`
- `'customer-survey'`
- `'rating-dashboard'`

**Add state**:
```ts
const [customerSession, setCustomerSession] = useState<{
  token: string; checkInId: string; customerName: string;
} | null>(null);
```

**Modify `handleStaffLogin`** (line 347):
- Handle `role === 'customer'`: store customerSession, navigate to `'customer-upload'`
- Handle `role === 'rating'`: navigate to `'rating-dashboard'`

**Add handlers**:
- `handleImagesDone()`: clear customerSession, navigate to `'customer-survey'`
- `handleSurveyDone()`: navigate to `'home'` (the survey component handles its own auto-redirect)

**Add view rendering** for `'customer-upload'`, `'customer-survey'`, `'rating-dashboard'`

---

## Phase 4F: Frontend — Customer Image Upload

### Task 16: Create `frontend/src/components/customer/CustomerImageUpload.tsx`

**Props**: `customerName`, `checkInId`, `authToken`, `onDone`

**Layout** (vertical, dark theme, matching existing patterns):
1. Header: "Welcome, {name}"
2. Instruction: "Upload photos of materials you're interested in (optional)"
3. Upload button (accepts `image/*`, max 15)
4. Vertical image list — one per row:
   - Thumbnail (~120px, left)
   - Quantity: `[-]` | number | `[+]` (default 1, right)
   - Delete `[X]` (far right)
5. Counter: "X / 15 images"
6. "Done" button (primary gold)

**Behavior**:
- File select → `POST /api/images/upload` with Bearer token
- Quantity change → debounced `PATCH` (reuse `useDebounce` hook from `frontend/src/hooks/useDebounce.ts`)
- On mount → `GET /api/images/check-in/:checkInId` (restore after refresh)
- "Done" → calls `onDone` (parent clears session, navigates to survey)

---

## Phase 4G: Frontend — Customer Survey

### Task 17: Create `frontend/src/components/customer/CustomerSurvey.tsx`

**Props**: `checkInId`, `authToken`, `onDone`

**Layout**:
1. "How was your experience?" heading
2. Star rating (1-5 clickable stars, large touch targets)
3. Optional comment textarea ("Any additional feedback?")
4. "Submit" button + "Skip" link
5. After submit/skip: "Thank you!" message + 15-second auto-redirect countdown

**Behavior**:
- Submit → `POST /api/survey` with Bearer token (token still valid since 2-hour TTL)
- Skip → go straight to thank-you with countdown
- Auto-redirect calls `onDone` after 15 seconds

---

## Phase 4H: Frontend — Rating Dashboard

### Task 18: Create `frontend/src/components/staff/RatingDashboard.tsx`

**Props**: `onLogout`

**Layout**:
- Header with "Customer Ratings" title + logout button
- Date range filter (start/end date pickers)
- Summary stats: average rating, total responses, rating distribution bar chart
- Paginated table: date, customer name, star rating (visual stars), comment
- Sort by date (newest first)

**Data**: fetches from `GET /api/survey/responses?page=X&startDate=Y&endDate=Z`

---

## Phase 4I: Frontend — Staff Image Viewing

### Task 19: Modify `frontend/src/components/staff/CustomerPopup.tsx`

In Step 1 (customer data view), add **"Uploaded Images"** collapsible section:
- On popup open, fetch `GET /api/images/customer/:phone` using `customer.phones[0]`
- Read-only image grid with quantity badges
- Grouped by check-in date if multiple visits (revisits)
- "No images uploaded" if empty

### Task 20: Modify `frontend/src/revisit/staff2/Staff2ViewPopup.tsx`

Same as Task 19 — add read-only images section using phone-based endpoint.

---

## Security

| Concern | Mitigation |
|---------|------------|
| Customer auth | Phone-based lookup → backend generates opaque 32-byte token, 2-hour TTL |
| Token scope | Tied to specific check-in ID; validated on every request |
| Login brute force | Existing rate limiter (60 req/min) applies to login endpoint |
| Image access (customer) | Bearer token required; check-in ID validated against token |
| Image access (staff) | IP whitelist protects staff-only endpoints |
| File validation | Client `accept="image/*"` + server multer MIME filter + 10MB limit |
| Rating dashboard | Hardcoded credentials (`rating`/`Reliance33`), same pattern as other staff roles |

---

## Files Summary

| Action | File | Phase |
|--------|------|-------|
| **Modify** | `backend/supabase_migration.sql` | 4A |
| **Modify** | `backend/package.json` (add multer) | 4B |
| **Create** | `backend/src/services/imageService.js` | 4B |
| **Create** | `backend/src/services/surveyService.js` | 4B |
| **Modify** | `backend/src/services/storageService.js` | 4B |
| **Create** | `backend/src/middleware/customerAuth.js` | 4C |
| **Create** | `backend/src/validators/imageValidator.js` | 4C |
| **Create** | `backend/src/routes/imageRoutes.js` | 4D |
| **Create** | `backend/src/routes/surveyRoutes.js` | 4D |
| **Modify** | `backend/app.js` | 4D |
| **Modify** | `frontend/src/components/staff/StaffLogin.tsx` | 4E |
| **Modify** | `frontend/src/App.tsx` | 4E |
| **Create** | `frontend/src/components/customer/CustomerImageUpload.tsx` | 4F |
| **Create** | `frontend/src/components/customer/CustomerSurvey.tsx` | 4G |
| **Create** | `frontend/src/components/staff/RatingDashboard.tsx` | 4H |
| **Modify** | `frontend/src/components/staff/CustomerPopup.tsx` | 4I |
| **Modify** | `frontend/src/revisit/staff2/Staff2ViewPopup.tsx` | 4I |

---

## Implementation Order

### Phase 4A: Database Schema
- [ ] Task 1: Add auth token columns to `check_ins`
- [ ] Task 2: Create `customer_images` table
- [ ] Task 3: Create `survey_responses` table
- [ ] Task 4: Create Supabase Storage bucket `customer-images`

### Phase 4B: Backend Services
- [ ] Task 5: Install multer
- [ ] Task 6: Create imageService.js
- [ ] Task 7: Create surveyService.js
- [ ] Task 8: Extend storageService.js

### Phase 4C: Backend Auth & Validation
- [ ] Task 9: Create customerAuth.js middleware
- [ ] Task 10: Create imageValidator.js

### Phase 4D: Backend API Endpoints
- [ ] Task 11: Create imageRoutes.js
- [ ] Task 12: Create surveyRoutes.js
- [ ] Task 13: Register routes in app.js

### Phase 4E: Frontend — Login & Routing
- [ ] Task 14: Modify StaffLogin.tsx (add customer + rating roles)
- [ ] Task 15: Modify App.tsx (new views, state, routing)

### Phase 4F: Frontend — Customer Image Upload
- [ ] Task 16: Create CustomerImageUpload.tsx

### Phase 4G: Frontend — Customer Survey
- [ ] Task 17: Create CustomerSurvey.tsx

### Phase 4H: Frontend — Rating Dashboard
- [ ] Task 18: Create RatingDashboard.tsx

### Phase 4I: Frontend — Staff Image Viewing
- [ ] Task 19: Modify CustomerPopup.tsx (add images section)
- [ ] Task 20: Modify Staff2ViewPopup.tsx (add images section)

---

## Verification

1. **Customer login**: Go to Login → enter phone/phone → should redirect to image upload for most recent check-in
2. **Image upload**: Upload 1-3 images → adjust quantities → click Done → should clear session and show survey
3. **Survey**: Rate 4 stars + comment → Submit → see thank-you → auto-redirect home
4. **Staff view**: Login as staff → click customer → see uploaded images with quantities
5. **Revisit**: Revisit check-in → customer logs in → sees images from all visits
6. **Rating dashboard**: Login as `rating`/`Reliance33` → see all survey responses with filters
7. **Edge cases**: Login with non-existent phone (401); upload 0 images + Done (works); upload 15 images (blocks 16th); skip survey (works)
8. **Security**: Access upload endpoint without token (401); expired token (401)

---

## Success Criteria

- [ ] Customer can log in with phone number and reach image upload page
- [ ] Customer can upload up to 15 images with quantity controls
- [ ] Customer can click Done with 0 images (optional upload)
- [ ] Customer sees survey after Done, can rate 1-5 stars + comment
- [ ] Customer can skip survey
- [ ] Auto-redirect home after survey submit/skip
- [ ] Staff can see customer-uploaded images in CustomerPopup
- [ ] Staff2 can see customer-uploaded images in Staff2ViewPopup
- [ ] Images persist across revisits (grouped by check-in date)
- [ ] Rating dashboard shows all survey responses with date filters
- [ ] Rating dashboard login works with `rating` / `Reliance33`
- [ ] Auth tokens expire after 2 hours
- [ ] Invalid/expired tokens return 401

---

**Document Version:** 1.0
**Last Updated:** March 24, 2026
**Status:** Ready for Implementation
