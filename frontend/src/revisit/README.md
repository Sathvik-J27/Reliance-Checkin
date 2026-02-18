# Phase 1 - Revisit & Staff2 Implementation

## Overview

This folder contains the **separate implementation** for Phase 1 features:

1. **Customer Revisit Flow** - Returning customers can look up their previous check-in and update/re-sign
2. **Staff2 Dashboard** - Queue management with view/edit capabilities and daily visitor stats

All Phase 1 code is **completely separate** from the main codebase and organized in this `/phase1/` folder.

---

## Folder Structure

```
/phase1/
├── customer/               # Revisit flow components
│   ├── RevisitLookup.tsx
│   ├── RevisitCheckInStep1.tsx
│   ├── RevisitCheckInStep2.tsx
│   ├── RevisitWaiver.tsx
│   └── RevisitConfirmation.tsx
├── staff2/                # Staff2 dashboard components
│   ├── Staff2Login.tsx
│   ├── Staff2Dashboard.tsx
│   ├── Staff2QueueItem.tsx
│   └── Staff2ViewPopup.tsx
└── types/                 # TypeScript interfaces
    └── index.ts
```

---

## Customer Revisit Flow

### Flow:
1. Click **"Revisit?"** button on home page
2. **RevisitLookup** - Enter phone or email
3. **RevisitCheckInStep1** - Review/edit customer details (pre-populated)
4. **RevisitCheckInStep2** - Review/edit referral sources (pre-populated)
5. **RevisitWaiver** - Sign new waiver (party size + signatures)
6. **RevisitConfirmation** - Success message

### Key Features:
- ✅ Phone/email lookup from database
- ✅ All fields pre-populated with previous data
- ✅ All fields editable
- ✅ NEW waiver signature required
- ✅ Party size can change
- ✅ Multi-visitor support (adults + minors)
- ✅ Submits to `/api/check-ins` with `isRevisit: true`

---

## Staff2 Dashboard

### Login:
- Username: `staff2`
- Password: `reliance`

### Features:

#### Queue Tab:
- Shows all waiting customers (new + revisit)
- Each row displays:
  - First initial in gold circle
  - Full name
  - Primary phone
  - Visitor count (adults + minors)
  - Badge: "First Time" (blue) or "Revisiting" (gold)
  - **View** button - opens popup
  - **Done** button - moves to history

#### History Tab:
- Filter by Month / Day / Year
- Shows daily visitor statistics:
  - Total Visitors
  - New Customers
  - Revisits
- List of all customers for selected date
- Click any customer to view details

#### View/Edit Popup:
- Shows all customer information (editable)
- Shows referral sources (read-only display)
- Shows party information
- Shows visitor list with signatures
- **Save Changes** button - updates database
- **Cancel** button - closes without saving

---

## API Endpoints Required

### Customer Revisit:
```
GET /api/customers/lookup?phone=6025551234
GET /api/customers/lookup?email=john@email.com
POST /api/check-ins (with isRevisit: true)
```

### Staff2 Dashboard:
```
GET /api/staff2/queue
GET /api/staff2/history?month=2&day=15&year=2026
PUT /api/staff2/customers/{id}
PUT /api/staff2/customers/{id}/done
```

---

## Integration with Main App

### Changes to Main Codebase:

**1. HomePage.tsx** ✅
- Changed "Learn More" to "Revisit?"
- Added `onRevisit` prop

**2. App.tsx** ✅
- Added Phase 1 imports
- Added new view types:
  - `revisit-lookup`
  - `revisit-step1`
  - `revisit-step2`
  - `revisit-waiver`
  - `revisit-confirmation`
  - `staff2-login`
  - `staff2-dashboard`
- Added view handlers for all Phase 1 flows

---

## TypeScript Types

See `/phase1/types/index.ts` for:
- `Phase1CheckIn` interface
- `ReferralSource` interface
- `Visitor` interface

---

## Testing

### Test Revisit Flow:
1. Click "Revisit?" on home page
2. Enter phone: 6025551234 (or any test phone)
3. Should load customer data
4. Update any fields
5. Complete waiver
6. Submit and see confirmation

### Test Staff2 Dashboard:
1. Navigate to `/staff2-login` (add button in StaffLogin or type URL)
2. Login with `staff2` / `reliance`
3. View queue
4. Click "View" on customer
5. Edit details and save
6. Click "Done" to move to history
7. Switch to History tab
8. Filter by date
9. View stats

---

## Next Steps

### Backend Implementation:
Follow the **PHASE1_IMPLEMENTATION_GUIDE.md** in the root folder for complete backend specifications.

### Database Changes:
```sql
ALTER TABLE check_ins
ADD COLUMN is_revisit BOOLEAN DEFAULT FALSE,
ADD COLUMN previous_check_in_id UUID REFERENCES check_ins(id),
ADD COLUMN done_time TIMESTAMP WITH TIME ZONE;
```

---

## Notes

- All Phase 1 code is **isolated** in `/phase1/` folder
- No changes to main staff/customer/pricing/analysis flows
- Staff2 is completely separate from main Staff role
- Revisit flow is completely separate from regular check-in flow
- Ready for backend integration following phase1.md spec

---

**Created:** February 15, 2026  
**Version:** 1.0  
**Status:** Frontend Complete, Ready for Backend
