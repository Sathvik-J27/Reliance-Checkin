# Phase 1: Customer Check-In Backend Implementation

## Overview

This phase focuses on implementing the backend for the customer check-in flow. When a customer completes the 4-step check-in process and clicks submit, the system needs to:

1. **Store all customer data** in Supabase database
2. **Generate a PDF waiver** with template overlay
3. **Store the PDF** in Supabase Storage with organized folder structure
4. **Return confirmation** to frontend

---

## Customer Check-In Flow Summary

### Step 1: Customer Details
Customer enters:
- First Name, Last Name
- Street Address, Suite/Unit, City, State, ZIP, Country
- Phone Number(s) - multiple allowed
- Email Address(es) - multiple allowed

### Step 2: Referral Sources
Customer selects all that apply from:
- Fabricator, Contractor, Kitchen & Bath, Architect, Builder, Friends/Family, Other

For each selected source:
- Name (required)
- Phone (optional)

### Step 3: Liability Waiver (Multi-Visitor)

**Step 3a:** Party size
- Number of adults (1-20)
- Number of minors (0-20)

**Step 3b:** Main customer waiver
- Reads waiver text
- Agrees to terms
- Signs on canvas (base64 PNG signature)

**Step 3c:** Additional adult waivers (if adults > 1)
- Each additional adult enters name
- Each additional adult signs

**Step 3d:** Minor names (if minors > 0)
- Enter name for each minor
- No signatures required

### Step 4: Thank You & Submit
- All data compiled
- Submitted to backend
- Customer added to queue with status "waiting"

---

## Data Structure Submitted to Backend

When customer clicks submit on Step 4, the following data object is sent:

```typescript
{
  // Step 1: Customer Details
  firstName: string;
  lastName: string;
  street: string;
  suiteUnit: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phones: string[];              // ["6025551001", "6025551002"]
  emails: string[];              // ["john@email.com"]
  
  // Step 2: Referral Sources
  referralSources: [
    {
      type: string;              // "Fabricator", "Contractor", etc.
      name: string;              // "John Smith"
      phone?: string;            // "6025551234"
    }
  ];
  
  // Step 3: Waiver & Visitors
  signature: string;             // Base64 PNG data (main customer)
  partySize: {
    adults: number;              // Total including main customer
    minors: number;
  };
  visitors: [
    {
      name: string;              // "John Doe" (main customer's full name)
      signature: string;         // Base64 PNG
      isMain: boolean;           // true for main customer
      isMinor: boolean;          // false
    },
    {
      name: string;              // "Jane Doe" (additional adult)
      signature: string;         // Base64 PNG
      isMain: boolean;           // false
      isMinor: boolean;          // false
    },
    {
      name: string;              // "Jimmy Doe" (minor)
      signature: string;         // "" (empty)
      isMain: boolean;           // false
      isMinor: boolean;          // true
    }
  ];
  
  // Metadata
  checkInTime: Date;             // Auto-generated timestamp
  status: "waiting";             // Initial status
}
```

---

## Database Schema (Supabase PostgreSQL)

### Table: `check_ins`

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | UUID | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique check-in ID |
| `first_name` | VARCHAR(100) | NOT NULL | Customer first name |
| `last_name` | VARCHAR(100) | NOT NULL | Customer last name |
| `street` | VARCHAR(255) | NOT NULL | Street address |
| `suite_unit` | VARCHAR(50) | NULL | Suite/Unit number |
| `city` | VARCHAR(100) | NOT NULL | City |
| `state` | VARCHAR(50) | NOT NULL | State |
| `zip` | VARCHAR(20) | NOT NULL | ZIP code |
| `country` | VARCHAR(3) | NOT NULL | Country code (USA/CAN/MEX) |
| `phones` | JSONB | NOT NULL | Array of phone numbers |
| `emails` | JSONB | NOT NULL | Array of email addresses |
| `referral_sources` | JSONB | NOT NULL | Array of referral source objects |
| `signature` | TEXT | NOT NULL | Base64 PNG signature (main) |
| `party_size` | JSONB | NOT NULL | {adults: number, minors: number} |
| `visitors` | JSONB | NOT NULL | Array of visitor objects with signatures |
| `waiver_pdf_url` | TEXT | NULL | URL to generated PDF in Supabase Storage |
| `check_in_time` | TIMESTAMP WITH TIME ZONE | NOT NULL, DEFAULT NOW() | When customer checked in |
| `status` | VARCHAR(20) | NOT NULL, DEFAULT 'waiting' | waiting, helping, helped |
| `currently_helped_by` | VARCHAR(100) | NULL | Staff username currently helping |
| `helped_time` | TIMESTAMP WITH TIME ZONE | NULL | When marked as helped |
| `created_at` | TIMESTAMP WITH TIME ZONE | NOT NULL, DEFAULT NOW() | Record creation time |
| `updated_at` | TIMESTAMP WITH TIME ZONE | NOT NULL, DEFAULT NOW() | Last update time |

**Indexes:**
```sql
CREATE INDEX idx_check_ins_status ON check_ins(status);
CREATE INDEX idx_check_ins_check_in_time ON check_ins(check_in_time DESC);
CREATE INDEX idx_check_ins_last_name ON check_ins(last_name);
CREATE INDEX idx_check_ins_phones ON check_ins USING GIN(phones);
```

**JSONB Column Structures:**

```sql
-- phones
["6025551001", "6025551002"]

-- emails
["john@email.com", "jane@email.com"]

-- referral_sources
[
  {
    "type": "Fabricator",
    "name": "John Smith",
    "phone": "6025551234"
  },
  {
    "type": "Contractor",
    "name": "ABC Construction",
    "phone": "4805559876"
  }
]

-- party_size
{
  "adults": 3,
  "minors": 2
}

-- visitors
[
  {
    "name": "John Doe",
    "signature": "data:image/png;base64,iVBORw0KG...",
    "isMain": true,
    "isMinor": false
  },
  {
    "name": "Jane Doe",
    "signature": "data:image/png;base64,iVBORw0KG...",
    "isMain": false,
    "isMinor": false
  },
  {
    "name": "Jimmy Doe",
    "signature": "",
    "isMain": false,
    "isMinor": true
  }
]
```

---

## PDF Generation Requirements

### Template
- **Format:** PNG image (provided as template background)
- **Size:** 8.5" x 11" (Letter size)
- **Layout:** Professional waiver document design

### PDF Content (Overlaid on Template)

**Section 1: Header**
- Reliance Surfaces Logo
- Document Title: "LIABILITY WAIVER"
- Date: [Check-in date]

**Section 2: Customer Information**
```
Customer Name: [First Name] [Last Name]
Address: [Street], [Suite/Unit]
         [City], [State] [ZIP]
Country: [Country]
Phone(s): [Phone 1], [Phone 2], ...
Email(s): [Email 1], [Email 2], ...
```

**Section 3: Referral Information**
```
How did you hear about us?
• [Referral Type 1]: [Name] - [Phone]
• [Referral Type 2]: [Name] - [Phone]
```

**Section 4: Party Information**
```
Party Size: [X] Adults, [Y] Minors
```

**Section 5: Waiver Text (Full Legal Text)**
```
[Complete liability waiver text - see CheckInStep3b.tsx for full text]

ASSUMPTION OF RISK:
I understand and acknowledge that...
[Full waiver paragraphs]
```

**Section 6: Signatures**

**Main Customer:**
```
I have read and agree to the terms above.

Main Customer: [First Name] [Last Name]
Signature: [Signature Image]
Date: [Check-in date]
```

**Additional Adults (if any):**
```
Additional Visitor 2:
Name: [Visitor Name]
Signature: [Signature Image]
Date: [Check-in date]

Additional Visitor 3:
Name: [Visitor Name]
Signature: [Signature Image]
Date: [Check-in date]
```

**Minors (if any):**
```
Minors in Party:
• [Minor Name 1]
• [Minor Name 2]
(No signatures required - under 18)
```

**Section 7: Footer**
```
Document ID: [Check-in UUID]
Generated: [Timestamp]
```

---

## Supabase Storage Structure

### Bucket: `waivers`

**Settings:**
- Public: No (private bucket, requires authentication)
- File size limit: 5MB per file
- Allowed MIME types: application/pdf

**Folder Structure:**
```
waivers/
├── 2026/
│   ├── 01/              # January
│   │   ├── 15/          # Day 15
│   │   │   ├── John_Doe_Waiver.pdf
│   │   │   ├── Jane_Smith_Waiver.pdf
│   │   │   └── ...
│   │   ├── 16/
│   │   └── ...
│   ├── 02/              # February
│   │   ├── 01/
│   │   ├── 02/
│   │   └── ...
│   └── ...
├── 2027/
└── ...
```

**File Naming Convention:**
```
[FirstName]_[LastName]_Waiver.pdf
```

**Examples:**
- `John_Doe_Waiver.pdf`
- `Mary_Jane_Watson_Waiver.pdf` (handles middle names in first/last)
- `Jane_Smith_Waiver.pdf`

**If duplicate name on same day:**
- `John_Doe_Waiver_1.pdf`
- `John_Doe_Waiver_2.pdf`

**Full Path Format:**
```
waivers/YYYY/MM/DD/FirstName_LastName_Waiver.pdf
```

**Example:**
```
waivers/2026/02/15/John_Doe_Waiver.pdf
```

**Stored URL in Database:**
```
https://[project-id].supabase.co/storage/v1/object/public/waivers/2026/02/15/John_Doe_Waiver.pdf
```

---

## Backend Implementation Tasks

### Task 1: Setup Supabase Project
**Goal:** Initialize Supabase database and storage

**Sub-tasks:**
1. Create Supabase project (if not exists)
2. Get project URL and API keys
3. Enable Row Level Security (RLS) on tables
4. Create `waivers` storage bucket (private)

**Deliverables:**
- Supabase project URL
- Supabase anon key
- Supabase service_role key (for server-side operations)

---

### Task 2: Database Schema Creation
**Goal:** Create PostgreSQL tables for check-ins

**Sub-tasks:**
1. Create `check_ins` table with all columns
2. Create indexes for performance
3. Setup RLS policies:
   - Allow INSERT for authenticated users (customer check-in)
   - Allow SELECT/UPDATE for authenticated staff users only
   - Prevent public access to sensitive data
4. Create database functions/triggers:
   - Auto-update `updated_at` timestamp
   - Validate phone/email formats

**SQL Script:**
```sql
-- See full schema in Task 2 section above
-- Need to generate complete migration file
```

**Deliverables:**
- Migration SQL file
- RLS policies configured
- Database functions created

---

### Task 3: API Endpoint - Create Check-In
**Goal:** Accept check-in data and store in database

**Endpoint:** `POST /api/check-ins`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "street": "123 Main St",
  "suiteUnit": "Apt 4B",
  "city": "Phoenix",
  "state": "Arizona",
  "zip": "85001",
  "country": "USA",
  "phones": ["6025551001"],
  "emails": ["john@email.com"],
  "referralSources": [
    {
      "type": "Fabricator",
      "name": "ABC Stone",
      "phone": "6025551234"
    }
  ],
  "signature": "data:image/png;base64,...",
  "partySize": {
    "adults": 2,
    "minors": 1
  },
  "visitors": [
    {
      "name": "John Doe",
      "signature": "data:image/png;base64,...",
      "isMain": true,
      "isMinor": false
    },
    {
      "name": "Jane Doe",
      "signature": "data:image/png;base64,...",
      "isMain": false,
      "isMinor": false
    },
    {
      "name": "Jimmy Doe",
      "signature": "",
      "isMain": false,
      "isMinor": true
    }
  ],
  "checkInTime": "2026-02-15T10:30:00Z"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "data": {
    "id": "uuid-here",
    "firstName": "John",
    "lastName": "Doe",
    "status": "waiting",
    "checkInTime": "2026-02-15T10:30:00Z",
    "waiverPdfUrl": "https://[project].supabase.co/storage/v1/object/waivers/2026/02/15/John_Doe_Waiver.pdf"
  },
  "message": "Check-in completed successfully"
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    "firstName is required",
    "Invalid email format"
  ]
}
```

**Sub-tasks:**
1. Validate all required fields
2. Sanitize inputs (prevent SQL injection)
3. Validate email formats
4. Validate phone formats (10 digits)
5. Insert into `check_ins` table
6. Trigger PDF generation (Task 4)
7. Return check-in ID and PDF URL

**Deliverables:**
- API endpoint `/api/check-ins` (POST)
- Input validation
- Error handling
- Success response

---

### Task 4: PDF Generation with Template
**Goal:** Generate waiver PDF with template overlay and signatures

**Sub-tasks:**

**4.1: Setup PDF Library**
- Install library: `jsPDF` or `pdf-lib` (recommended: pdf-lib for better image handling)
- Install image processing: `sharp` or `canvas` for base64 decoding

**4.2: Load Template**
- Store template PNG in project assets
- Load template as background image
- Set PDF page size to match template (8.5" x 11")

**4.3: Extract Waiver Text from Frontend**
- Copy full waiver text from `CheckInStep3b.tsx`
- Store in backend constants/config file
- Ensure exact text matches what customer saw

**4.4: Overlay Customer Data**
- Position customer info (name, address, phones, emails)
- Position referral sources
- Position party size info
- Use consistent fonts and positioning

**4.5: Overlay Signatures**
- Decode base64 PNG signatures
- Resize to appropriate size (e.g., 200px x 60px)
- Position main signature below waiver text
- Position additional adult signatures in sequence
- Add "Signed on [date]" below each signature

**4.6: Overlay Minor Names**
- List minor names with bullets
- Add note: "(No signatures required - under 18)"

**4.7: Generate Final PDF**
- Combine all layers
- Output as PDF buffer
- Optimize file size

**Code Structure:**
```javascript
async function generateWaiverPDF(checkInData) {
  // 1. Load template
  const template = await loadTemplate('waiver-template.png');
  
  // 2. Create PDF document
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]); // 8.5" x 11" at 72 DPI
  
  // 3. Embed template as background
  const templateImage = await pdfDoc.embedPng(template);
  page.drawImage(templateImage, {
    x: 0,
    y: 0,
    width: 612,
    height: 792,
  });
  
  // 4. Add customer information
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  page.drawText(`${checkInData.firstName} ${checkInData.lastName}`, {
    x: 100,
    y: 700,
    size: 12,
    font: font,
  });
  
  // 5. Add signatures
  for (let visitor of checkInData.visitors) {
    if (visitor.signature && !visitor.isMinor) {
      const signatureImage = await pdfDoc.embedPng(visitor.signature);
      page.drawImage(signatureImage, {
        x: 100,
        y: yPosition,
        width: 200,
        height: 60,
      });
      yPosition -= 80;
    }
  }
  
  // 6. Save PDF
  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
```

**Deliverables:**
- PDF generation function
- Template integration
- Signature embedding
- PDF buffer output

---

### Task 5: Upload PDF to Supabase Storage
**Goal:** Store generated PDF in organized folder structure

**Sub-tasks:**

**5.1: Generate File Path**
```javascript
function generatePDFPath(checkInData) {
  const date = new Date(checkInData.checkInTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  const firstName = checkInData.firstName.replace(/\s/g, '_');
  const lastName = checkInData.lastName.replace(/\s/g, '_');
  const fileName = `${firstName}_${lastName}_Waiver.pdf`;
  
  const path = `${year}/${month}/${day}/${fileName}`;
  return path;
}

// Example output: "2026/02/15/John_Doe_Waiver.pdf"
```

**5.2: Handle Duplicate Names**
- Check if file already exists at path
- If exists, append `_1`, `_2`, etc.
- Example: `John_Doe_Waiver_1.pdf`

**5.3: Upload to Supabase**
```javascript
async function uploadWaiverPDF(pdfBuffer, filePath) {
  const { data, error } = await supabase.storage
    .from('waivers')
    .upload(filePath, pdfBuffer, {
      contentType: 'application/pdf',
      upsert: false, // Don't overwrite existing files
    });
    
  if (error) {
    throw new Error(`PDF upload failed: ${error.message}`);
  }
  
  // Get public URL (if bucket is public) or signed URL
  const { data: urlData } = supabase.storage
    .from('waivers')
    .getPublicUrl(filePath);
    
  return urlData.publicUrl;
}
```

**5.4: Update Database with PDF URL**
```javascript
async function updateCheckInWithPDF(checkInId, pdfUrl) {
  const { error } = await supabase
    .from('check_ins')
    .update({ waiver_pdf_url: pdfUrl })
    .eq('id', checkInId);
    
  if (error) {
    throw new Error(`Failed to update PDF URL: ${error.message}`);
  }
}
```

**Deliverables:**
- File path generation function
- Duplicate name handling
- Supabase upload function
- Database update function

---

### Task 6: Integration - Complete Flow
**Goal:** Connect all pieces into working endpoint

**Flow:**
```
1. POST /api/check-ins receives data
   ↓
2. Validate input data
   ↓
3. Insert into check_ins table → Get check_in_id
   ↓
4. Generate PDF with template + data
   ↓
5. Generate file path (YYYY/MM/DD/Name_Waiver.pdf)
   ↓
6. Upload PDF to Supabase Storage
   ↓
7. Get PDF URL from Supabase
   ↓
8. Update check_in record with PDF URL
   ↓
9. Return success response with check_in_id and PDF URL
```

**Error Handling:**
- If PDF generation fails → Still save check-in, mark PDF as failed
- If upload fails → Retry up to 3 times
- If all fails → Save check-in, log error, return partial success
- Background job can retry failed PDFs later

**Sub-tasks:**
1. Create main handler function
2. Implement transaction handling (rollback on failure)
3. Add comprehensive error logging
4. Add retry logic for PDF upload
5. Test with various data scenarios

**Deliverables:**
- Complete API endpoint with full flow
- Error handling and logging
- Retry mechanisms
- Test coverage

---

### Task 7: Testing & Validation
**Goal:** Ensure system works correctly

**Test Cases:**

**7.1: Basic Check-In (Single Adult, No Minors)**
- Input: 1 adult, 0 minors
- Expected: PDF with 1 signature, saved correctly

**7.2: Multiple Adults**
- Input: 3 adults, 0 minors
- Expected: PDF with 3 signatures in sequence

**7.3: Adults + Minors**
- Input: 2 adults, 2 minors
- Expected: PDF with 2 signatures + 2 minor names listed

**7.4: Multiple Referral Sources**
- Input: 3 referral sources selected
- Expected: PDF shows all 3 with names/phones

**7.5: Long Names/Addresses**
- Input: Very long names and addresses
- Expected: Text wraps or truncates properly in PDF

**7.6: Duplicate Names Same Day**
- Input: "John_Doe" twice on same day
- Expected: First → `John_Doe_Waiver.pdf`, Second → `John_Doe_Waiver_1.pdf`

**7.7: Missing Optional Fields**
- Input: No suite/unit, only 1 phone, only 1 email
- Expected: Handles gracefully, PDF generated

**7.8: Special Characters in Names**
- Input: Names with apostrophes, hyphens, spaces
- Expected: Sanitized to `Mary_OConnor_Waiver.pdf`

**Deliverables:**
- Test suite for all scenarios
- Validation that PDFs are viewable
- Confirmation database records are correct

---

### Task 8: Frontend Integration
**Goal:** Update frontend to call new API endpoint

**Changes Needed in Frontend:**

**8.1: Update App.tsx**

Replace current local state submission with API call:

```typescript
// OLD CODE (Current)
const completeCheckIn = (submittedMinorNames?: string[], ...) => {
  const newCheckIn: CheckIn = {
    id: Date.now().toString(),
    // ... all customer data
  };
  setCheckIns([...checkIns, newCheckIn]);
  setView('customer-step4');
};

// NEW CODE (With API)
const completeCheckIn = async (submittedMinorNames?: string[], ...) => {
  try {
    const checkInData = {
      firstName: currentCheckIn.firstName,
      lastName: currentCheckIn.lastName,
      // ... all data
      signature: finalMainSignature?.signature || '',
      visitors: allVisitors,
      checkInTime: new Date().toISOString(),
    };
    
    const response = await fetch('/api/check-ins', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(checkInData),
    });
    
    if (!response.ok) {
      throw new Error('Check-in failed');
    }
    
    const result = await response.json();
    console.log('Check-in successful:', result.data.id);
    console.log('PDF URL:', result.data.waiverPdfUrl);
    
    setView('customer-step4');
  } catch (error) {
    console.error('Check-in error:', error);
    alert('Check-in failed. Please try again.');
  }
};
```

**8.2: Add Loading State**
- Show spinner while submitting
- Disable back button during submission
- Show error message if submission fails

**8.3: Update CheckInStep4**
- Optionally show "View Waiver PDF" button
- Link to PDF URL from response

**Deliverables:**
- Updated frontend API integration
- Loading states
- Error handling UI

---

## Files/Components Needed for Implementation

### Frontend Files to Reference

**1. Customer Check-In Components (Read-Only for Context)**

**File: `/components/customer/CheckInStep1.tsx`**
- Shows what fields are collected
- Shows validation rules
- Reference for database schema

**File: `/components/customer/CheckInStep2.tsx`**
- Shows referral source options
- Shows referral data structure
- Reference for PDF content

**File: `/components/customer/CheckInStep3a.tsx`**
- Shows party size selection
- Reference for visitor logic

**File: `/components/customer/CheckInStep3b.tsx`**
- **CRITICAL:** Contains full waiver text
- Shows signature capture
- This text must be copied to PDF exactly

**File: `/components/customer/CheckInStep3c.tsx`**
- Shows additional visitor flow
- Shows how visitor names/signatures collected

**File: `/components/customer/CheckInStep3d.tsx`**
- Shows minor name collection
- Reference for minor data structure

**File: `/components/customer/CheckInStep4.tsx`**
- Thank you page (can add PDF link here)

**2. Type Definitions**

**File: `/components/staff/CustomerPopup.tsx`** (lines 4-40)
- Contains `CheckIn` interface
- Contains `DraftData` interface
- Shows complete data structure

**3. Main App Logic**

**File: `/App.tsx`** (lines 360-470)
- Contains `completeCheckIn` function (line ~400)
- Shows how all data is compiled
- Shows visitor array structure
- This function needs to be modified for API call

**4. Template File (Not in Codebase)**

**Required:** `waiver-template.png`
- Professional waiver template design
- Size: 8.5" x 11" at 300 DPI
- Should have:
  - Reliance Surfaces branding
  - Placeholder areas for:
    - Customer info
    - Waiver text
    - Signatures
    - Date/Document ID
- Needs to be created by designer or provided

---

## Summary of Backend Stack

### Required Technologies

**1. Runtime:** Node.js (v18+) or Deno

**2. Framework:** Express.js, Fastify, or Next.js API Routes

**3. Database:** Supabase (PostgreSQL)

**4. Storage:** Supabase Storage

**5. PDF Library:** 
- `pdf-lib` (recommended) - Better image/template handling
- OR `jsPDF` - Simpler but less features

**6. Image Processing:**
- `sharp` - For image manipulation (if needed)
- Built-in Canvas API - For base64 decoding

**7. Supabase Client:**
- `@supabase/supabase-js` - Official SDK

### Environment Variables Needed

```env
SUPABASE_URL=https://ysynnehummnuaytijomp.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzeW5uZWh1bW1udWF5dGlqb21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMzk2NzIsImV4cCI6MjA4NTgxNTY3Mn0.6NNnbTwOy4BRswu1DUfK3DPPc_g6ZTjnpIQfPjg2Lp0
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzeW5uZWh1bW1udWF5dGlqb21wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDIzOTY3MiwiZXhwIjoyMDg1ODE1NjcyfQ.9FXcx1vMLFOx0aAtsDuy1chIU8_QceKiUG0cR8RQ4GQ
```

---

## Implementation Order

### Phase 1A: Database Setup 
- [ ] Task 1: Setup Supabase Project
- [ ] Task 2: Database Schema Creation

### Phase 1B: Basic API 
- [ ] Task 3: API Endpoint - Create Check-In (without PDF)
- [ ] Test basic data insertion

### Phase 1C: PDF Generation
- [ ] Task 4: PDF Generation with Template
- [ ] Test PDF creation locally

### Phase 1D: Storage Integration
- [ ] Task 5: Upload PDF to Supabase Storage
- [ ] Test file uploads and URL generation

### Phase 1E: Complete Flow
- [ ] Task 6: Integration - Complete Flow
- [ ] End-to-end testing

### Phase 1F: Testing & Deployment
- [ ] Task 7: Testing & Validation
- [ ] Task 8: Frontend Integration
- [ ] Production deployment


---

## Success Criteria

✅ Customer can complete all 4 check-in steps
✅ Data is stored in Supabase database correctly
✅ PDF is generated with all customer info and signatures
✅ PDF is stored in Supabase Storage with correct path structure
✅ Database record contains PDF URL
✅ Frontend receives confirmation with check-in ID
✅ PDF can be downloaded and viewed correctly
✅ All signatures are visible in PDF
✅ Waiver text is complete and readable
✅ System handles errors gracefully

---

## Next Steps After Phase 1

Once customer check-in is complete, we can move to:

- **Phase 2:** Staff Dashboard API (queue management)
- **Phase 3:** Material Selection & Fabricator Management
- **Phase 4:** Pricing Dashboard API
- **Phase 5:** Analysis & Reporting

---

**Document Version:** 1.0  
**Last Updated:** February 15, 2026  
**Status:** Ready for Implementation
