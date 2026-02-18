# Phase 1 Implementation Guide - Separate Codebase

## Overview

This guide documents the **separate implementation** for Phase 1, which includes:

1. **Customer Revisit Flow** - Lookup by phone/email, pre-populate data, re-sign waiver
2. **Staff2 Role** - New queue management dashboard separate from main staff
3. **All code is SEPARATE** from main codebase in `/phase1-components/` folder

---

## Changes to Main Codebase

### ✅ ONLY ONE CHANGE: HomePage.tsx

**File:** `/components/HomePage.tsx`

**Change:** "Learn More" button → "Revisit?" button

```typescript
// BEFORE
<button>Learn More</button>

// AFTER  
<button onClick={onRevisit}>Revisit?</button>
```

**Already completed!** ✓

---

## New Folder Structure

Create a **completely separate** folder for Phase 1 components:

```
/phase1-components/
├── customer/
│   ├── RevisitLookup.tsx          # Enter phone/email to find customer
│   ├── RevisitCheckInStep1.tsx    # Pre-populated customer details
│   ├── RevisitCheckInStep2.tsx    # Pre-populated referral sources
│   ├── RevisitWaiver.tsx          # New waiver signature
│   └── RevisitConfirmation.tsx    # Confirmation page
├── staff2/
│   ├── Staff2Login.tsx            # Login for staff2
│   ├── Staff2Dashboard.tsx        # Main dashboard with queue + history tabs
│   ├── Staff2QueueItem.tsx        # Single customer row in queue
│   ├── Staff2ViewPopup.tsx        # View/Edit customer details popup
│   └── Staff2HistoryStats.tsx     # Daily visitor stats
├── types/
│   └── phase1-types.ts            # TypeScript interfaces for Phase 1
└── Phase1App.tsx                  # Separate app for Phase 1 testing
```

---

## Customer Revisit Flow

### Flow Diagram

```
Home Page
  ↓ (Click "Revisit?")
RevisitLookup
  ↓ (Enter phone or email + click "Find")
  ↓ (API: GET /api/customers/lookup?phone=XXX or email=XXX)
  ↓ (Returns customer data)
RevisitCheckInStep1 (Pre-populated, editable)
  ↓ (Click "Next")
RevisitCheckInStep2 (Pre-populated referral sources, editable)
  ↓ (Click "Next")
RevisitWaiver (Sign again)
  ↓ (Click "Submit")
  ↓ (API: POST /api/check-ins with isRevisit: true)
RevisitConfirmation
  ↓ (Click "Done")
Home Page
```

---

### Component 1: RevisitLookup.tsx

**Purpose:** Customer enters phone or email to find their previous check-in

**UI:**
```
┌─────────────────────────────────────────┐
│         Welcome Back!                   │
│                                         │
│  Enter your mobile number or email     │
│  that you used during check-in          │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │ Phone or Email                    │ │
│  └───────────────────────────────────┘ │
│                                         │
│  [      Find My Information      ]      │
│                                         │
│  [          Back to Home         ]      │
└─────────────────────────────────────────┘
```

**Props:**
```typescript
interface RevisitLookupProps {
  onCustomerFound: (customer: CheckInData) => void;
  onBack: () => void;
}
```

**State:**
```typescript
const [input, setInput] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
```

**Logic:**
```typescript
const handleFind = async () => {
  setLoading(true);
  setError('');
  
  try {
    // Determine if input is phone or email
    const isPhone = /^\d{10}$/.test(input.replace(/\D/g, ''));
    const queryParam = isPhone 
      ? `phone=${input.replace(/\D/g, '')}` 
      : `email=${input}`;
    
    const response = await fetch(`/api/customers/lookup?${queryParam}`);
    
    if (!response.ok) {
      throw new Error('Customer not found');
    }
    
    const data = await response.json();
    onCustomerFound(data.customer);
    
  } catch (err) {
    setError('No previous check-in found with this information. Please use Check-In for first-time visit.');
  } finally {
    setLoading(false);
  }
};
```

**Validation:**
- If input is empty → show error
- If API returns 404 → show "Customer not found" message

---

### Component 2: RevisitCheckInStep1.tsx

**Purpose:** Show customer details pre-populated, allow edits

**UI:** Same as CheckInStep1.tsx but:
- All fields PRE-FILLED with customer data
- Can edit any field
- Header text: "Review Your Information" instead of "Step 1"

**Props:**
```typescript
interface RevisitCheckInStep1Props {
  customerData: CheckInData;
  onNext: (updatedData: Partial<CheckInData>) => void;
  onBack: () => void;
}
```

**Pre-fill all fields:**
```typescript
const [formData, setFormData] = useState({
  firstName: customerData.firstName,
  lastName: customerData.lastName,
  street: customerData.street,
  suiteUnit: customerData.suiteUnit,
  city: customerData.city,
  state: customerData.state,
  zip: customerData.zip,
  country: customerData.country,
  phones: customerData.phones,
  emails: customerData.emails,
});
```

---

### Component 3: RevisitCheckInStep2.tsx

**Purpose:** Show referral sources pre-populated, allow edits

**UI:** Same as CheckInStep2.tsx but:
- Previously selected referral sources already checked
- Names/phones already filled
- Can add new referral sources
- Can edit existing ones

**Props:**
```typescript
interface RevisitCheckInStep2Props {
  referralSources: ReferralSource[];
  onNext: (updatedSources: ReferralSource[]) => void;
  onBack: () => void;
}
```

---

### Component 4: RevisitWaiver.tsx

**Purpose:** Customer signs waiver AGAIN (new signature required)

**UI:** Similar to CheckInStep3b.tsx but:
- Shows party size selection (adults + minors) - can be different from last time
- Full waiver text
- NEW signature required (old signature NOT shown)
- Checkbox: "I have read and agree to the terms"
- If multiple adults → collect all signatures like Step 3c
- If minors → collect names like Step 3d

**Props:**
```typescript
interface RevisitWaiverProps {
  onSubmit: (waiverData: {
    partySize: { adults: number; minors: number };
    signature: string;
    visitors: Visitor[];
  }) => void;
  onBack: () => void;
}
```

**Flow:**
1. Select party size
2. Main customer signs
3. Additional adults sign (if any)
4. Enter minor names (if any)
5. Submit → API call to create new check-in with `isRevisit: true`

---

### Component 5: RevisitConfirmation.tsx

**Purpose:** Show "You're all set!" confirmation

**UI:**
```
┌─────────────────────────────────────────┐
│              ✓                          │
│                                         │
│     Thank You for Revisiting!           │
│                                         │
│  Your updated information has been      │
│  saved. You're now in the queue.        │
│                                         │
│  [         Return to Home        ]      │
└─────────────────────────────────────────┘
```

**Props:**
```typescript
interface RevisitConfirmationProps {
  customerName: string;
  onReturnHome: () => void;
}
```

---

## Staff2 Dashboard

### Overview

**Login:** `staff2` / `reliance`

**Features:**
- View queue of ALL customers (new + revisit) in check-in order
- Each customer shows: Initial circle, name, visitor count, "First Time" or "Revisiting" badge
- Buttons: "View" and "Done"
- View popup: Shows customer details + referral sources (editable)
- Done button: Moves customer to History
- History tab: Shows all completed customers with daily stats (filter by month/day/year)

---

### Component 1: Staff2Login.tsx

**Purpose:** Login page for staff2 role

**UI:** Same as StaffLogin.tsx but only accepts:
- Username: `staff2`
- Password: `reliance`

**On success:** Navigate to Staff2Dashboard

---

### Component 2: Staff2Dashboard.tsx

**Purpose:** Main dashboard with Queue and History tabs

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  [Logo] Reliance Surfaces    Welcome, staff2 [Logout]│
├─────────────────────────────────────────────────────┤
│                                                     │
│  [ Queue ]  [ History ]                             │
│  ─────────                                          │
│                                                     │
│  {Queue content or History content based on tab}    │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Props:**
```typescript
interface Staff2DashboardProps {
  username: string;
  onLogout: () => void;
}
```

**State:**
```typescript
const [activeTab, setActiveTab] = useState<'queue' | 'history'>('queue');
const [customers, setCustomers] = useState<CheckInData[]>([]);
const [selectedCustomer, setSelectedCustomer] = useState<CheckInData | null>(null);
const [showViewPopup, setShowViewPopup] = useState(false);
```

**API Calls:**
```typescript
// Fetch queue (status = 'waiting')
GET /api/staff2/queue

// Fetch history (status = 'done')
GET /api/staff2/history?month=2&year=2026&day=15
```

---

### Component 3: Staff2QueueItem.tsx

**Purpose:** Single customer row in queue

**UI:**
```
┌────────────────────────────────────────────────────┐
│  [J]  John Doe                  👥 3 visitors      │
│       (602) 555-1234            [First Time]       │
│                                                    │
│       [   View   ]    [   Done   ]                 │
└────────────────────────────────────────────────────┘
```

**Breakdown:**
- **[J]** = First initial in gold circle
- **John Doe** = Full name
- **(602) 555-1234** = Primary phone
- **👥 3 visitors** = Total party size (adults + minors)
- **[First Time]** or **[Revisiting]** = Badge (blue for first, gold for revisit)
- **[View]** button = Open view/edit popup
- **[Done]** button = Mark as done, move to history

**Props:**
```typescript
interface Staff2QueueItemProps {
  customer: CheckInData;
  onView: (customer: CheckInData) => void;
  onDone: (customerId: string) => void;
}
```

**Badge Logic:**
```typescript
const isRevisit = customer.isRevisit === true;
const badgeText = isRevisit ? 'Revisiting' : 'First Time';
const badgeColor = isRevisit ? '#D4A736' : '#3B82F6'; // Gold or Blue
```

---

### Component 4: Staff2ViewPopup.tsx

**Purpose:** View and edit customer details

**UI:**
```
┌─────────────────────────────────────────────────────┐
│  John Doe                                    [X]    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Customer Information                               │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  First Name: [John             ]  Last: [Doe     ] │
│  Address: [123 Main St                          ]  │
│  City: [Phoenix    ]  State: [AZ ]  ZIP: [85001 ]  │
│  Phones: (602) 555-1234                            │
│  Emails: john@email.com                            │
│                                                     │
│  Referral Information                               │
│  ─────────────────────────────────────────────────  │
│  • Fabricator: ABC Stone - (602) 555-5678          │
│  • Contractor: XYZ Builders                         │
│                                                     │
│  Party Information                                  │
│  ─────────────────────────────────────────────────  │
│  Adults: 2    Minors: 1                            │
│  Visitors:                                         │
│  • John Doe (Main) ✓                               │
│  • Jane Doe ✓                                      │
│  • Jimmy Doe (Minor)                               │
│                                                     │
│         [      Save Changes      ]                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Props:**
```typescript
interface Staff2ViewPopupProps {
  customer: CheckInData;
  onClose: () => void;
  onSave: (customerId: string, updatedData: Partial<CheckInData>) => void;
}
```

**Features:**
- All fields editable EXCEPT:
  - Waiver signatures (read-only, shown as images)
  - Check-in time (read-only)
- Shows referral sources from Step 2 (editable)
- Save button updates database via API:
  ```typescript
  PUT /api/staff2/customers/{customerId}
  ```

---

### Component 5: Staff2HistoryStats.tsx

**Purpose:** Show daily visitor statistics in History tab

**UI:**
```
┌─────────────────────────────────────────────────────┐
│  Daily Visitors                                     │
│                                                     │
│  Month: [February ▼]  Day: [15 ▼]  Year: [2026 ▼] │
│                                                     │
│  📊 Total Visitors: 24                              │
│  👤 New Customers: 18                               │
│  🔄 Revisits: 6                                     │
│                                                     │
│  ────────────────────────────────────────────────── │
│                                                     │
│  {List of customers for selected date}              │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Props:**
```typescript
interface Staff2HistoryStatsProps {
  customers: CheckInData[];
  onFilterChange: (month: number, day: number, year: number) => void;
}
```

**Calculations:**
```typescript
const totalVisitors = customers.length;
const newCustomers = customers.filter(c => !c.isRevisit).length;
const revisits = customers.filter(c => c.isRevisit).length;
```

---

## TypeScript Types for Phase 1

**File:** `/phase1-components/types/phase1-types.ts`

```typescript
export interface CheckInData {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  suiteUnit: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phones: string[];
  emails: string[];
  referralSources: ReferralSource[];
  signature: string;
  partySize: {
    adults: number;
    minors: number;
  };
  visitors: Visitor[];
  checkInTime: Date;
  status: 'waiting' | 'done';
  isRevisit?: boolean;
  waiverPdfUrl?: string;
}

export interface ReferralSource {
  type: string;  // "Fabricator", "Contractor", etc.
  name: string;
  phone?: string;
}

export interface Visitor {
  name: string;
  signature: string;
  isMain?: boolean;
  isMinor?: boolean;
}
```

---

## Backend API Endpoints Needed

### 1. Customer Lookup (Revisit)

```
GET /api/customers/lookup?phone=6025551234
GET /api/customers/lookup?email=john@email.com
```

**Response (200):**
```json
{
  "success": true,
  "customer": {
    "id": "uuid",
    "firstName": "John",
    "lastName": "Doe",
    "street": "123 Main St",
    // ... all customer fields
    "referralSources": [...],
    "isRevisit": false
  }
}
```

**Response (404):**
```json
{
  "success": false,
  "error": "Customer not found"
}
```

**Logic:**
- Search `check_ins` table by phone (JSONB array search) or email
- Return most recent check-in for that customer
- If not found → 404

---

### 2. Create Revisit Check-In

```
POST /api/check-ins
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  // ... all updated customer fields
  "isRevisit": true,
  "previousCheckInId": "uuid-of-original-check-in"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": "new-uuid",
    "status": "waiting",
    "isRevisit": true,
    "waiverPdfUrl": "..."
  }
}
```

**Logic:**
- Same as regular check-in but with `isRevisit: true` flag
- Generate new PDF with updated info
- Store in database with reference to original check-in

---

### 3. Staff2 - Get Queue

```
GET /api/staff2/queue
```

**Response (200):**
```json
{
  "success": true,
  "queue": [
    {
      "id": "uuid",
      "firstName": "John",
      "lastName": "Doe",
      "phones": ["6025551234"],
      "partySize": { "adults": 2, "minors": 1 },
      "isRevisit": false,
      "checkInTime": "2026-02-15T10:30:00Z"
    },
    // ... more customers
  ]
}
```

**Logic:**
- Query `check_ins` where `status = 'waiting'`
- Order by `check_in_time` ASC (FIFO)
- Return all fields needed for queue display

---

### 4. Staff2 - Get History

```
GET /api/staff2/history?month=2&day=15&year=2026
```

**Response (200):**
```json
{
  "success": true,
  "history": [
    {
      "id": "uuid",
      "firstName": "Jane",
      "lastName": "Smith",
      // ... customer data
      "checkInTime": "2026-02-15T09:00:00Z",
      "isRevisit": true
    }
  ],
  "stats": {
    "totalVisitors": 24,
    "newCustomers": 18,
    "revisits": 6
  }
}
```

**Query Parameters:**
- `month` (1-12)
- `day` (1-31)
- `year` (2024-2027)

**Logic:**
- Query `check_ins` where `status = 'done'`
- Filter by date (check_in_time matches YYYY-MM-DD)
- Calculate stats from results

---

### 5. Staff2 - Mark as Done

```
PUT /api/staff2/customers/{customerId}/done
```

**Response (200):**
```json
{
  "success": true,
  "message": "Customer marked as done"
}
```

**Logic:**
- Update `status` to 'done'
- Set `done_time` to current timestamp
- Customer moves from queue to history

---

### 6. Staff2 - Update Customer

```
PUT /api/staff2/customers/{customerId}
```

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe Updated",
  // ... any fields to update
}
```

**Response (200):**
```json
{
  "success": true,
  "customer": {
    // updated customer data
  }
}
```

**Logic:**
- Update specified fields in `check_ins` table
- Return updated customer data

---

## Integration with Main App (App.tsx)

**Add to App.tsx (minimal changes):**

```typescript
import { HomePage } from './components/HomePage';
// ... existing imports

type View = 
  | 'home'
  | 'customer-step1'
  // ... existing views
  | 'revisit-lookup'        // NEW
  | 'staff2-login'          // NEW
  | 'staff2-dashboard';     // NEW

function App() {
  const [view, setView] = useState<View>('home');

  // ... existing code

  if (view === 'home') {
    return (
      <HomePage 
        onCustomerCheckIn={() => setView('customer-step1')}
        onStaffLogin={() => setView('staff-login')}
        onRevisit={() => setView('revisit-lookup')}  // NEW!
      />
    );
  }

  // Add revisit flow views
  if (view === 'revisit-lookup') {
    return <RevisitLookup ... />;
  }

  // Add staff2 views
  if (view === 'staff2-login') {
    return <Staff2Login ... />;
  }

  if (view === 'staff2-dashboard') {
    return <Staff2Dashboard ... />;
  }

  // ... rest of existing code
}
```

---

## Testing Checklist

### Customer Revisit Flow

- [ ] Click "Revisit?" button on homepage
- [ ] Enter valid phone number → finds customer
- [ ] Enter valid email → finds customer
- [ ] Enter invalid phone/email → shows error
- [ ] Customer details pre-populated correctly
- [ ] Can edit customer details
- [ ] Referral sources pre-populated correctly
- [ ] Can edit/add referral sources
- [ ] Waiver requires new signature (old not shown)
- [ ] Can select different party size than before
- [ ] Multiple adults → collects all signatures
- [ ] Minors → collects names only
- [ ] Submit creates new check-in with `isRevisit: true`
- [ ] Shows confirmation page
- [ ] PDF generated with updated info

### Staff2 Dashboard

- [ ] Login with staff2/reliance works
- [ ] Queue shows all waiting customers (new + revisit)
- [ ] Customer rows show correct initial, name, phone, visitor count
- [ ] "First Time" badge shows for new customers (blue)
- [ ] "Revisiting" badge shows for revisits (gold)
- [ ] Click "View" opens popup with customer details
- [ ] Customer details are editable in popup
- [ ] Referral sources visible and editable
- [ ] Visitor list shows all names and signatures
- [ ] "Save Changes" updates customer in database
- [ ] "Done" button moves customer to history
- [ ] History tab shows completed customers
- [ ] Filter by month/day/year works
- [ ] Daily stats calculate correctly
- [ ] Logout works

---

## Database Schema Additions

**Add to `check_ins` table:**

```sql
ALTER TABLE check_ins
ADD COLUMN is_revisit BOOLEAN DEFAULT FALSE,
ADD COLUMN previous_check_in_id UUID REFERENCES check_ins(id),
ADD COLUMN done_time TIMESTAMP WITH TIME ZONE;

CREATE INDEX idx_check_ins_is_revisit ON check_ins(is_revisit);
```

---

## Summary

### What's Separate (Phase 1 Folder)

✅ All revisit flow components
✅ All staff2 dashboard components
✅ New TypeScript types
✅ Separate test app (Phase1App.tsx)

### What's Changed in Main Code

✅ HomePage.tsx - "Learn More" → "Revisit?" button (DONE)
✅ App.tsx - Add 3 new views (revisit-lookup, staff2-login, staff2-dashboard)

### Backend Needed

✅ 6 new API endpoints:
1. GET /api/customers/lookup
2. POST /api/check-ins (with isRevisit support)
3. GET /api/staff2/queue
4. GET /api/staff2/history
5. PUT /api/staff2/customers/:id/done
6. PUT /api/staff2/customers/:id

---

**Document Version:** 1.0  
**Last Updated:** February 15, 2026  
**Status:** Ready for Implementation
