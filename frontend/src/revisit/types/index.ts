// Phase 1 Type Definitions

export interface Phase1CheckIn {
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
  type: string;
  name?: string;
  phone?: string;
}

export interface Visitor {
  name: string;
  signature: string;
  isMain?: boolean;
  isMinor?: boolean;
}
