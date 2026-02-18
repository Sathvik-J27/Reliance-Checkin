import React, { useState, useEffect, useCallback } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
import { Loading } from '../ui/loading';

export interface CheckIn {
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
  referralSources: {
    type: string;
    name?: string;
    phone?: string;
  }[];
  signature: string;
  checkInTime: Date;
  helpedTime?: Date;
  status: 'waiting' | 'helped' | 'done';
  isRevisit?: boolean;
  draft?: DraftData;
  priced?: boolean;
  pricedTime?: Date;
  partySize?: {
    adults: number;
    minors: number;
  };
  visitors?: Array<{
    name: string;
    signature: string;
    isMain?: boolean;
    isMinor?: boolean;
  }>;
  salesPerson?: string;
  currentlyHelpedBy?: string; // Track who's currently viewing/helping
}

export interface DraftData {
  step: number;
  editedCustomerData?: Partial<CheckIn>;
  selectedFabricator?: Fabricator;
  materials: Material[];
  helpedBy?: string;
  selectionSheetNumber?: string;
  isHold?: boolean;
  isRevisit?: boolean;
  previousMaterialsCount?: number;
}

export interface Fabricator {
  id: string;
  companyName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone1: string;
  phone2?: string;
  mobile?: string;
  email: string;
  salesPerson?: string;
}

export interface Material {
  id: string;
  name: string;
  soldAs: string;
  size: { l: string; h: string };
  lot: string;
  location?: string; // Location field
  quantity: number;
  finish?: string; // Polished, Honed, Polished/Honed, Leather, Honed/Leather
  hold?: boolean;
  slabNumbers?: string;
  price?: string; // Price for pricing dashboard
  priceType?: 'per SFT' | 'per Slab'; // Price type for pricing dashboard
  converted?: boolean; // Converted status for pricing dashboard
}

interface CustomerPopupProps {
  customer: CheckIn;
  onClose: () => void;
  onSubmit: (customerId: string, data: DraftData) => void;
  onMarkAsHelped: (customerId: string) => void;
  onRevisit?: (customer: CheckIn) => void;
  staffUsername: string;
  isViewOnly?: boolean;
  allCheckIns: CheckIn[];
}

export function CustomerPopup({ customer, onClose, onSubmit, onMarkAsHelped, onRevisit, staffUsername, isViewOnly, allCheckIns }: CustomerPopupProps) {
  const [currentStep, setCurrentStep] = useState(customer.draft?.step || 1);
  const [editedData, setEditedData] = useState<Partial<CheckIn>>(customer.draft?.editedCustomerData || {});
  const [selectedFabricator, setSelectedFabricator] = useState<Fabricator | undefined>(customer.draft?.selectedFabricator);
  const [materialsList, setMaterialsList] = useState<Material[]>(customer.draft?.materials || []);
  // Use currentlyHelpedBy if it exists (someone clicked View), otherwise use draft helpedBy or logged-in user
  const [helpedBy, setHelpedBy] = useState(customer.currentlyHelpedBy || customer.draft?.helpedBy || staffUsername);
  const [selectionSheetNumber, setSelectionSheetNumber] = useState(customer.draft?.selectionSheetNumber || '');
  const [fabricatorSearch, setFabricatorSearch] = useState(customer.draft?.selectedFabricator?.companyName || '');
  const [materialSearch, setMaterialSearch] = useState('');
  const [showFabricatorResults, setShowFabricatorResults] = useState(false);
  const [showMaterialResults, setShowMaterialResults] = useState(false);

  // Debounced search values — prevents API call on every keystroke
  const debouncedFabricatorSearch = useDebounce(fabricatorSearch, 300);
  const debouncedMaterialSearch   = useDebounce(materialSearch, 300);

  // Live search results from backend
  const [fabricatorResults, setFabricatorResults] = useState<Fabricator[]>([]);
  const [materialResults, setMaterialResults]     = useState<{ id: string; name: string }[]>([]);
  const [isFabricatorLoading, setIsFabricatorLoading] = useState(false);
  const [isMaterialLoading, setIsMaterialLoading]     = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update helpedBy when currentlyHelpedBy changes (e.g., another staff views)
  useEffect(() => {
    if (customer.currentlyHelpedBy) {
      setHelpedBy(customer.currentlyHelpedBy);
    }
  }, [customer.currentlyHelpedBy]);

  const getCurrentCustomerData = (): CheckIn => ({
    ...customer,
    ...editedData,
  });

  // Fetch fabricator search results from backend when debounced query changes
  useEffect(() => {
    if (debouncedFabricatorSearch.length < 3) {
      setFabricatorResults([]);
      return;
    }
    setIsFabricatorLoading(true);
    fetch(`/api/accounts/search?q=${encodeURIComponent(debouncedFabricatorSearch)}`)
      .then(r => r.json())
      .then(res => setFabricatorResults(res.success ? res.data : []))
      .catch(() => setFabricatorResults([]))
      .finally(() => setIsFabricatorLoading(false));
  }, [debouncedFabricatorSearch]);

  // Fetch material search results from backend when debounced query changes
  useEffect(() => {
    if (debouncedMaterialSearch.length < 3) {
      setMaterialResults([]);
      return;
    }
    setIsMaterialLoading(true);
    fetch(`/api/materials/search?q=${encodeURIComponent(debouncedMaterialSearch)}`)
      .then(r => r.json())
      .then(res => setMaterialResults(res.success ? res.data : []))
      .catch(() => setMaterialResults([]))
      .finally(() => setIsMaterialLoading(false));
  }, [debouncedMaterialSearch]);

  const handleClose = () => {
    // Only save draft if customer is still waiting (not in history)
    if (customer.status === 'waiting') {
      const draft: DraftData = {
        step: currentStep,
        editedCustomerData: editedData,
        selectedFabricator,
        materials: materialsList,
        helpedBy,
        selectionSheetNumber,
        isHold: materialsList.some(m => m.hold),
        isRevisit: customer.draft?.isRevisit,
        previousMaterialsCount: customer.draft?.previousMaterialsCount,
      };
      onSubmit(customer.id, draft);

      // Persist draft to DB so it survives a page refresh
      fetch(`/api/check-ins/${customer.id}/draft`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          draftStep: currentStep,
          materials: materialsList,
          fabricator: selectedFabricator || null,
          helpedBy,
          selectionSheetNumber,
        }),
      }).catch(err => console.warn('Draft save failed:', err));
    }
    onClose();
  };

  const handleFabricatorSelect = (fabricator: Fabricator) => {
    setSelectedFabricator(fabricator);
    setFabricatorSearch(fabricator.companyName);
    setShowFabricatorResults(false);
    // Auto-populate Sales Person from account record
    if (fabricator.salesPerson) {
      setEditedData(prev => ({ ...prev, salesPerson: fabricator.salesPerson }));
    }
  };

  const handleFabricatorSearchChange = (value: string) => {
    setFabricatorSearch(value);
    setShowFabricatorResults(true);
    
    // Only clear selection if the new value is significantly different
    // Don't clear if user is just editing the current selection
    if (selectedFabricator && value.toLowerCase() !== selectedFabricator.companyName.toLowerCase()) {
      // Check if the current value could be part of searching for something else
      const isPartialMatch = selectedFabricator.companyName.toLowerCase().startsWith(value.toLowerCase());
      if (!isPartialMatch && value.length >= 3) {
        setSelectedFabricator(undefined);
      }
    }
  };

  const addMaterial = (materialName: string) => {
    const newMaterial: Material = {
      id: Date.now().toString(),
      name: materialName,
      soldAs: '',
      size: { l: '', h: '' },
      lot: '',
      location: '', // Initialize location field
      quantity: 1,
      finish: 'Polished', // Default finish
      hold: false,
      slabNumbers: '',
    };
    setMaterialsList([...materialsList, newMaterial]);
    setMaterialSearch('');
    setShowMaterialResults(false);
  };

  const updateMaterial = (id: string, field: keyof Material, value: any) => {
    setMaterialsList(materialsList.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const deleteMaterial = (id: string) => {
    setMaterialsList(materialsList.filter(m => m.id !== id));
  };

  const handleSubmit = async () => {
    if (currentStep !== 3 || isSubmitting) return;
    setIsSubmitting(true);

    const finalData: DraftData = {
      step: 3,
      editedCustomerData: editedData,
      selectedFabricator,
      materials: materialsList,
      helpedBy,
      selectionSheetNumber,
      isHold: materialsList.some(m => m.hold),
      isRevisit: customer.draft?.isRevisit,
      previousMaterialsCount: customer.draft?.previousMaterialsCount,
    };

    // Call backend to update DB status + send customer email (best-effort)
    try {
      await fetch(`/api/check-ins/${customer.id}/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          materials: materialsList,
          selectedFabricator,
          helpedBy,
          selectionSheetNumber,
        }),
      });
    } catch (err) {
      console.error('Complete API error:', err);
      // Non-blocking — local state update proceeds regardless
    }

    setIsSubmitting(false);
    onSubmit(customer.id, finalData);
    onClose();
  };

  // Check if this is the latest sheet for this customer
  const isLatestSheet = () => {
    if (!customer.draft?.selectionSheetNumber) return false;

    // Get all sheets for this customer
    const customerSheets = allCheckIns.filter(c =>
      c.firstName === customer.firstName &&
      c.lastName === customer.lastName &&
      c.status === 'helped' &&
      c.draft?.selectionSheetNumber
    );

    // Get the base number from current sheet (e.g., "800" from "800.1")
    const currentSheetNumber = customer.draft.selectionSheetNumber;
    const currentParts = currentSheetNumber.split('.');
    const currentBase = currentParts[0];

    // Find all sheets with the same base number
    const relatedSheets = customerSheets.filter(c => {
      const sheetNum = c.draft?.selectionSheetNumber || '';
      return sheetNum.startsWith(currentBase);
    });

    // Sort by sheet number (800, 800.1, 800.2, etc.)
    relatedSheets.sort((a, b) => {
      const aNum = a.draft?.selectionSheetNumber || '';
      const bNum = b.draft?.selectionSheetNumber || '';
      
      const aParts = aNum.split('.');
      const bParts = bNum.split('.');
      
      // Compare base numbers first
      const aBase = parseInt(aParts[0]) || 0;
      const bBase = parseInt(bParts[0]) || 0;
      if (aBase !== bBase) return aBase - bBase;
      
      // Then compare decimal parts
      const aDecimal = aParts.length > 1 ? parseInt(aParts[1]) : 0;
      const bDecimal = bParts.length > 1 ? parseInt(bParts[1]) : 0;
      return aDecimal - bDecimal;
    });

    // Check if current customer is the last one in the sorted array
    const latestSheet = relatedSheets[relatedSheets.length - 1];
    return latestSheet?.id === customer.id;
  };

  const currentData = getCurrentCustomerData();

  return (
    <div className="fixed inset-0 flex items-center justify-center p-6 z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '32px' }}>
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 style={{ color: 'var(--color-gold)' }}>
              {currentData.firstName} {currentData.lastName}
            </h2>
            <p style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
              Step {currentStep} of 3
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-opacity-50"
            style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text-gray)' }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Step Progress Indicator */}
        <div className="flex gap-2 mb-8">
          {[1, 2, 3].map(step => (
            <div
              key={step}
              className="flex-1 h-2 rounded-full"
              style={{ backgroundColor: step <= currentStep ? 'var(--color-gold)' : 'var(--color-border)' }}
            />
          ))}
        </div>

        {/* Step 1: Customer Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 style={{ color: 'var(--color-text-white)' }}>Customer Details</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>First Name</label>
                <input
                  type="text"
                  value={editedData.firstName ?? currentData.firstName}
                  onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
              </div>
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Last Name</label>
                <input
                  type="text"
                  value={editedData.lastName ?? currentData.lastName}
                  onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Street Address</label>
              <input
                type="text"
                value={editedData.street ?? currentData.street}
                onChange={(e) => setEditedData({ ...editedData, street: e.target.value })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Suite/Unit</label>
              <input
                type="text"
                value={editedData.suiteUnit ?? currentData.suiteUnit}
                onChange={(e) => setEditedData({ ...editedData, suiteUnit: e.target.value })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>City</label>
                <input
                  type="text"
                  value={editedData.city ?? currentData.city}
                  onChange={(e) => setEditedData({ ...editedData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
              </div>
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>State</label>
                <input
                  type="text"
                  value={editedData.state ?? currentData.state}
                  onChange={(e) => setEditedData({ ...editedData, state: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
              </div>
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>ZIP</label>
                <input
                  type="text"
                  value={editedData.zip ?? currentData.zip}
                  onChange={(e) => setEditedData({ ...editedData, zip: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Country</label>
              <select
                value={editedData.country ?? currentData.country}
                onChange={(e) => setEditedData({ ...editedData, country: e.target.value })}
                className="w-full px-4 py-3 rounded-lg"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              >
                <option value="USA">USA</option>
                <option value="CAN">CAN</option>
                <option value="MEX">MEX</option>
              </select>
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Phone Numbers</label>
              {(editedData.phones ?? currentData.phones).map((phone, index) => (
                <input
                  key={index}
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const newPhones = [...(editedData.phones ?? currentData.phones)];
                    newPhones[index] = e.target.value;
                    setEditedData({ ...editedData, phones: newPhones });
                  }}
                  className="w-full px-4 py-3 rounded-lg mb-2"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
              ))}
            </div>

            <div>
              <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Email Addresses</label>
              {(editedData.emails ?? currentData.emails).map((email, index) => (
                <input
                  key={index}
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const newEmails = [...(editedData.emails ?? currentData.emails)];
                    newEmails[index] = e.target.value;
                    setEditedData({ ...editedData, emails: newEmails });
                  }}
                  className="w-full px-4 py-3 rounded-lg mb-2"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                />
              ))}
            </div>

            {/* Visitors & Signatures Section */}
            {currentData.visitors && currentData.visitors.length > 0 ? (
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
                  All Visitors ({currentData.visitors.length})
                </label>
                <div className="space-y-4">
                  {currentData.visitors.filter(v => v && v.name).map((visitor, index) => {
                    console.log(`Visitor ${index}:`, {
                      name: visitor.name,
                      hasSignature: !!visitor.signature,
                      signatureLength: visitor.signature?.length,
                      isMinor: visitor.isMinor,
                      isMain: visitor.isMain
                    });
                    
                    return (
                    <div 
                      key={index} 
                      className="p-4 rounded-lg"
                      style={{ 
                        backgroundColor: 'var(--color-background)',
                        border: visitor.isMain ? '2px solid var(--color-gold)' : '1px solid var(--color-border)'
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span style={{ color: 'var(--color-text-white)', fontSize: '15px', fontWeight: '500' }}>
                          {visitor.name}
                        </span>
                        {visitor.isMain && (
                          <span 
                            className="px-2 py-0.5 rounded text-xs"
                            style={{ backgroundColor: 'rgba(212, 167, 54, 0.2)', color: 'var(--color-gold)' }}
                          >
                            Main
                          </span>
                        )}
                        {visitor.isMinor && (
                          <span 
                            className="px-2 py-0.5 rounded text-xs"
                            style={{ backgroundColor: 'rgba(100, 100, 100, 0.2)', color: 'var(--color-text-gray)' }}
                          >
                            Minor
                          </span>
                        )}
                      </div>
                      {visitor.signature && visitor.signature.length > 0 ? (
                        <div className="rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '8px' }}>
                          <img
                            src={visitor.signature}
                            alt={`${visitor.name}'s signature`}
                            className="w-full rounded"
                            style={{ maxHeight: '80px', objectFit: 'contain' }}
                          />
                        </div>
                      ) : visitor.isMinor ? (
                        <div 
                          className="rounded flex items-center justify-center"
                          style={{ 
                            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                            padding: '12px',
                            minHeight: '80px'
                          }}
                        >
                          <span style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
                            No signature (Minor)
                          </span>
                        </div>
                      ) : null}
                    </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Fallback to show single waiver signature if no visitors array */
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Waiver Signature</label>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background)' }}>
                  <img
                    src={currentData.signature}
                    alt="Signature"
                    className="w-full rounded"
                    style={{ maxHeight: '150px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Referral & Fabricator */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 style={{ color: 'var(--color-text-white)' }}>Referral Information</h3>
              <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-background)' }}>
                {currentData.referralSources && currentData.referralSources.length > 0 ? (
                  currentData.referralSources.map((ref, index) => (
                    <div key={index} className="mb-3">
                      <p style={{ color: 'var(--color-text-white)' }}>
                        <span style={{ color: 'var(--color-gold)' }}>•</span> {ref.type}
                      </p>
                      {ref.name && <p style={{ color: 'var(--color-text-gray)', fontSize: '14px', marginLeft: '20px' }}>Name: {ref.name}</p>}
                      {ref.phone && <p style={{ color: 'var(--color-text-gray)', fontSize: '14px', marginLeft: '20px' }}>Phone: {ref.phone}</p>}
                    </div>
                  ))
                ) : (
                  <p style={{ color: 'var(--color-text-gray)' }}>No referral information provided</p>
                )}
              </div>
            </div>

            <div>
              <h3 style={{ color: 'var(--color-text-white)', marginBottom: '16px' }}>Fabricator Selection *</h3>
              <div className="relative">
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Search by Company Name</label>
                <input
                  type="text"
                  value={fabricatorSearch}
                  onChange={(e) => handleFabricatorSearchChange(e.target.value)}
                  onFocus={() => setShowFabricatorResults(true)}
                  onBlur={() => {
                    // Delay to allow click on dropdown items
                    setTimeout(() => setShowFabricatorResults(false), 200);
                  }}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: `1px solid ${selectedFabricator ? 'var(--color-gold)' : 'var(--color-border)'}`, color: 'var(--color-text-white)' }}
                  placeholder="Type 3+ characters to search..."
                />
                {showFabricatorResults && fabricatorSearch.length >= 3 && (
                  <div className="absolute z-10 w-full mt-1 rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', maxHeight: '200px', overflowY: 'auto' }}>
                    {isFabricatorLoading ? (
                      <div className="px-4 py-3 flex items-center gap-2">
                        <Loading size="small" color="#ccb331" />
                        <span style={{ color: 'var(--color-text-gray)', fontSize: '13px' }}>Searching...</span>
                      </div>
                    ) : fabricatorResults.length > 0 ? (
                      fabricatorResults.map(fab => (
                        <button
                          key={fab.id}
                          onClick={() => handleFabricatorSelect(fab)}
                          className="w-full text-left px-4 py-3 hover:bg-opacity-50"
                          style={{ backgroundColor: 'transparent', color: 'var(--color-text-white)', borderBottom: '1px solid var(--color-border)' }}
                        >
                          <div>{fab.companyName}</div>
                          <div style={{ color: 'var(--color-text-gray)', fontSize: '12px' }}>{fab.city}, {fab.state}</div>
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3">
                        <p style={{ color: 'var(--color-text-gray)' }}>
                          No accounts found matching "{fabricatorSearch}"
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {fabricatorSearch.length > 0 && fabricatorSearch.length < 3 && (
                  <p className="text-sm mt-1" style={{ color: 'var(--color-text-gray)' }}>
                    Type at least 3 characters to search
                  </p>
                )}
              </div>
            </div>

            {selectedFabricator && (
              <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--color-background)', border: '2px solid var(--color-gold)' }}>
                <div className="flex items-center justify-between mb-4">
                  <h4 style={{ color: 'var(--color-gold)' }}>Selected Fabricator</h4>
                  <button
                    onClick={() => {
                      setSelectedFabricator(undefined);
                      setFabricatorSearch('');
                    }}
                    className="px-3 py-1 rounded text-sm"
                    style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
                  >
                    Change
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Company Name</label>
                    <input
                      type="text"
                      value={selectedFabricator.companyName}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, companyName: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Address</label>
                    <input
                      type="text"
                      value={selectedFabricator.address}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>City</label>
                    <input
                      type="text"
                      value={selectedFabricator.city}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, city: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>State</label>
                    <input
                      type="text"
                      value={selectedFabricator.state}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, state: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>ZIP</label>
                    <input
                      type="text"
                      value={selectedFabricator.zip}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, zip: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Sales Person</label>
                    <input
                      type="text"
                      value={editedData.salesPerson ?? currentData.salesPerson ?? ''}
                      onChange={(e) => setEditedData({ ...editedData, salesPerson: e.target.value })}
                      placeholder="Sales person name"
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Phone 1</label>
                    <input
                      type="text"
                      value={selectedFabricator.phone1}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, phone1: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Phone 2</label>
                    <input
                      type="text"
                      value={selectedFabricator.phone2 || ''}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, phone2: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Mobile</label>
                    <input
                      type="text"
                      value={selectedFabricator.mobile || ''}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, mobile: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2" style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>Email</label>
                    <input
                      type="email"
                      value={selectedFabricator.email}
                      onChange={(e) => setSelectedFabricator({ ...selectedFabricator, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg"
                      style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Materials */}
        {currentStep === 3 && (
          <div className="space-y-6">
            {customer.draft?.isRevisit && (
              <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: 'rgba(212, 167, 54, 0.1)', border: '1px solid var(--color-gold)' }}>
                <p style={{ color: 'var(--color-gold)', fontSize: '14px' }}>
                  <strong>Re-visit Mode:</strong> You can edit all materials. Use the <strong>−</strong> button when quantity is 1 to delete a material.
                </p>
              </div>
            )}
            
            <div>
              <h3 style={{ color: 'var(--color-text-white)' }}>Materials / Selection Sheet</h3>
              <div className="relative mt-4">
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Search Materials</label>
                <input
                  type="text"
                  value={materialSearch}
                  onChange={(e) => {
                    setMaterialSearch(e.target.value);
                    setShowMaterialResults(true);
                  }}
                  onFocus={() => setShowMaterialResults(true)}
                  disabled={isViewOnly}
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', cursor: isViewOnly ? 'not-allowed' : 'text', opacity: isViewOnly ? 0.6 : 1 }}
                  placeholder={isViewOnly ? "View only mode" : "Search for materials..."}
                />
                {!isViewOnly && showMaterialResults && materialSearch.length >= 3 && (
                  <div className="absolute z-10 w-full mt-1 rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', maxHeight: '200px', overflowY: 'auto' }}>
                    {isMaterialLoading ? (
                      <div className="px-4 py-3 flex items-center gap-2">
                        <Loading size="small" color="#ccb331" />
                        <span style={{ color: 'var(--color-text-gray)', fontSize: '13px' }}>Searching...</span>
                      </div>
                    ) : materialResults.length > 0 ? (
                      materialResults.map(mat => (
                        <button
                          key={mat.id}
                          onClick={() => addMaterial(mat.name)}
                          className="w-full text-left px-4 py-3 hover:bg-opacity-50 flex items-center justify-between"
                          style={{ backgroundColor: 'transparent', color: 'var(--color-text-white)', borderBottom: '1px solid var(--color-border)' }}
                        >
                          <span>{mat.name}</span>
                          <Plus size={16} style={{ color: 'var(--color-gold)' }} />
                        </button>
                      ))
                    ) : (
                      <div className="px-4 py-3">
                        <p style={{ color: 'var(--color-text-gray)' }}>No materials found matching "{materialSearch}"</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {materialsList.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-background)' }}>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', width: '110px' }}>Qty</th>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', minWidth: '160px' }}>Name</th>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', minWidth: '130px' }}>Sold As</th>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', minWidth: '130px' }}>Finish</th>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', minWidth: '150px' }}>Size (L x H)</th>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', minWidth: '90px' }}>Lot</th>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', minWidth: '110px' }}>Location</th>
                      <th className="px-5 py-4 text-left" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: '600', minWidth: '110px' }}>Hold</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialsList.map((material, index) => {
                      const isPreviousMaterial = customer.draft?.isRevisit && index < (customer.draft?.previousMaterialsCount || 0);
                      
                      return (
                        <tr 
                          key={material.id} 
                          style={{ 
                            backgroundColor: isPreviousMaterial ? 'rgba(100, 100, 100, 0.2)' : 'var(--color-background)',
                            borderRadius: '8px'
                          }}
                        >
                          <td className="px-5 py-5" style={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}>
                            <div className="flex items-center gap-1.5">
                              <button
                                onClick={() => {
                                  if (material.quantity === 1) {
                                    deleteMaterial(material.id);
                                  } else {
                                    updateMaterial(material.id, 'quantity', material.quantity - 1);
                                  }
                                }}
                                disabled={isViewOnly}
                                className="p-2 rounded"
                                style={{ 
                                  backgroundColor: 'var(--color-card)', 
                                  color: 'var(--color-text-white)',
                                  opacity: isViewOnly ? 0.5 : 1,
                                  cursor: isViewOnly ? 'not-allowed' : 'pointer'
                                }}
                                title={material.quantity === 1 ? "Delete material" : "Decrease quantity"}
                              >
                                <Minus size={16} />
                              </button>
                              <span style={{ color: 'var(--color-text-white)', minWidth: '30px', textAlign: 'center', fontSize: '15px', fontWeight: '500' }}>{material.quantity}</span>
                              <button
                                onClick={() => updateMaterial(material.id, 'quantity', material.quantity + 1)}
                                disabled={isViewOnly}
                                className="p-2 rounded"
                                style={{ 
                                  backgroundColor: 'var(--color-card)', 
                                  color: 'var(--color-text-white)',
                                  opacity: isViewOnly ? 0.5 : 1,
                                  cursor: isViewOnly ? 'not-allowed' : 'pointer'
                                }}
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          </td>
                          <td className="px-5 py-5">
                            <div className="flex items-center gap-2">
                              <span style={{ color: 'var(--color-text-white)', fontSize: '15px' }}>{material.name}</span>
                              {isPreviousMaterial && (
                                <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--color-card)', color: 'var(--color-text-gray)', border: '1px solid var(--color-border)' }}>
                                  Previous
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-5 py-5">
                            <input
                              type="text"
                              value={material.soldAs || ''}
                              onChange={(e) => updateMaterial(material.id, 'soldAs', e.target.value)}
                              disabled={isViewOnly}
                              placeholder="Alternative"
                              className="w-full px-3 py-2.5 rounded-lg"
                              style={{ 
                                backgroundColor: 'var(--color-card)', 
                                border: '1px solid var(--color-border)', 
                                color: 'var(--color-text-white)', 
                                fontSize: '14px',
                                opacity: isViewOnly ? 0.6 : 1,
                                cursor: isViewOnly ? 'not-allowed' : 'text'
                              }}
                            />
                          </td>
                          <td className="px-5 py-5">
                            <select
                              value={material.finish || 'Polished'}
                              onChange={(e) => updateMaterial(material.id, 'finish', e.target.value)}
                              disabled={isViewOnly}
                              className="w-full px-3 py-2.5 rounded-lg"
                              style={{ 
                                backgroundColor: 'var(--color-card)', 
                                border: '1px solid var(--color-border)', 
                                color: 'var(--color-text-white)', 
                                fontSize: '14px',
                                opacity: isViewOnly ? 0.6 : 1,
                                cursor: isViewOnly ? 'not-allowed' : 'pointer'
                              }}
                            >
                              <option value="Polished">Polished</option>
                              <option value="Honed">Honed</option>
                              <option value="Polished/Honed">Polished/Honed</option>
                              <option value="Leather">Leather</option>
                              <option value="Honed/Leather">Honed/Leather</option>
                            </select>
                          </td>
                          <td className="px-5 py-5">
                            <div className="flex items-center gap-3">
                              <input
                                type="text"
                                value={material.size?.l || ''}
                                onChange={(e) => updateMaterial(material.id, 'size', { ...(material.size || { l: '', h: '' }), l: e.target.value })}
                                disabled={isViewOnly}
                                placeholder="L"
                                className="w-16 px-2 py-2.5 rounded-lg"
                                style={{ 
                                  backgroundColor: 'var(--color-card)', 
                                  border: '1px solid var(--color-border)', 
                                  color: 'var(--color-text-white)', 
                                  fontSize: '14px', 
                                  textAlign: 'center',
                                  opacity: isViewOnly ? 0.6 : 1,
                                  cursor: isViewOnly ? 'not-allowed' : 'text'
                                }}
                              />
                              <span style={{ color: 'var(--color-gold)', fontWeight: 'bold', fontSize: '16px' }}>×</span>
                              <input
                                type="text"
                                value={material.size?.h || ''}
                                onChange={(e) => updateMaterial(material.id, 'size', { ...(material.size || { l: '', h: '' }), h: e.target.value })}
                                disabled={isViewOnly}
                                placeholder="H"
                                className="w-16 px-2 py-2.5 rounded-lg"
                                style={{ 
                                  backgroundColor: 'var(--color-card)', 
                                  border: '1px solid var(--color-border)', 
                                  color: 'var(--color-text-white)', 
                                  fontSize: '14px', 
                                  textAlign: 'center',
                                  opacity: isViewOnly ? 0.6 : 1,
                                  cursor: isViewOnly ? 'not-allowed' : 'text'
                                }}
                              />
                            </div>
                          </td>
                          <td className="px-5 py-5">
                            <input
                              type="text"
                              value={material.lot || ''}
                              onChange={(e) => updateMaterial(material.id, 'lot', e.target.value)}
                              disabled={isViewOnly}
                              placeholder="Lot #"
                              className="w-full px-3 py-2.5 rounded-lg"
                              style={{ 
                                backgroundColor: 'var(--color-card)', 
                                border: '1px solid var(--color-border)', 
                                color: 'var(--color-text-white)', 
                                fontSize: '14px',
                                opacity: isViewOnly ? 0.6 : 1,
                                cursor: isViewOnly ? 'not-allowed' : 'text'
                              }}
                            />
                          </td>
                          <td className="px-5 py-5">
                            <input
                              type="text"
                              value={material.location || ''}
                              onChange={(e) => updateMaterial(material.id, 'location', e.target.value)}
                              disabled={isViewOnly}
                              placeholder="Location"
                              className="w-full px-3 py-2.5 rounded-lg"
                              style={{ 
                                backgroundColor: 'var(--color-card)', 
                                border: '1px solid var(--color-border)', 
                                color: 'var(--color-text-white)', 
                                fontSize: '14px',
                                opacity: isViewOnly ? 0.6 : 1,
                                cursor: isViewOnly ? 'not-allowed' : 'text'
                              }}
                            />
                          </td>
                          <td className="px-5 py-5">
                            <div>
                              <label className="flex items-center gap-2 mb-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={material.hold}
                                  onChange={(e) => updateMaterial(material.id, 'hold', e.target.checked)}
                                  disabled={isViewOnly}
                                  className="w-4 h-4 rounded"
                                  style={{ 
                                    accentColor: 'var(--color-gold)',
                                    opacity: isViewOnly ? 0.5 : 1,
                                    cursor: isViewOnly ? 'not-allowed' : 'pointer'
                                  }}
                                />
                                <span style={{ color: 'var(--color-text-white)', fontSize: '14px' }}>Hold</span>
                              </label>
                              {material.hold && (
                                <input
                                  type="text"
                                  value={material.slabNumbers || ''}
                                  onChange={(e) => updateMaterial(material.id, 'slabNumbers', e.target.value)}
                                  disabled={isViewOnly}
                                  placeholder="Slab #s"
                                  className="w-full px-3 py-2 rounded-lg"
                                  style={{ 
                                    backgroundColor: 'var(--color-card)', 
                                    border: '1px solid var(--color-gold)', 
                                    color: 'var(--color-text-white)', 
                                    fontSize: '14px',
                                    opacity: isViewOnly ? 0.6 : 1,
                                    cursor: isViewOnly ? 'not-allowed' : 'text'
                                  }}
                                />
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Helped By</label>
                <div
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ 
                    backgroundColor: 'rgba(100, 100, 100, 0.2)', 
                    border: '1px solid var(--color-gold)', 
                    color: 'var(--color-text-white)'
                  }}
                >
                  {helpedBy}
                </div>
              </div>
              <div>
                <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>Selection Sheet Number</label>
                <input
                  type="text"
                  value={selectionSheetNumber}
                  onChange={(e) => setSelectionSheetNumber(e.target.value)}
                  readOnly={customer.draft?.isRevisit || isViewOnly}
                  placeholder="e.g. 800, 801..."
                  className="w-full px-4 py-3 rounded-lg"
                  style={{ 
                    backgroundColor: (customer.draft?.isRevisit || isViewOnly) ? 'rgba(100, 100, 100, 0.2)' : 'var(--color-background)', 
                    border: `1px solid ${(customer.draft?.isRevisit || isViewOnly) ? 'var(--color-gold)' : 'var(--color-border)'}`, 
                    color: 'var(--color-text-white)',
                    cursor: (customer.draft?.isRevisit || isViewOnly) ? 'not-allowed' : 'text',
                    opacity: isViewOnly ? 0.6 : 1
                  }}
                />
                {customer.draft?.isRevisit && !isViewOnly && (
                  <p className="text-xs mt-1" style={{ color: 'var(--color-gold)' }}>
                    Auto-generated from previous sheet
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {currentStep > 1 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="px-6 py-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            >
              Back
            </button>
          )}
          {!isViewOnly && currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === 2 && !selectedFabricator}
              className="flex-1 py-3 rounded-lg"
              style={{
                backgroundColor: (currentStep === 2 && !selectedFabricator) ? 'var(--color-border)' : 'var(--color-gold)',
                color: 'var(--color-background)',
                cursor: (currentStep === 2 && !selectedFabricator) ? 'not-allowed' : 'pointer',
              }}
            >
              Next
            </button>
          ) : isViewOnly && currentStep < 3 ? (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex-1 py-3 rounded-lg"
              style={{
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-background)',
              }}
            >
              Next
            </button>
          ) : !isViewOnly ? (
            <button
              onClick={handleSubmit}
              disabled={!selectionSheetNumber || selectionSheetNumber.trim() === '' || isSubmitting}
              className="flex-1 py-3 rounded-lg flex items-center justify-center gap-2"
              style={{
                backgroundColor: (!selectionSheetNumber || selectionSheetNumber.trim() === '' || isSubmitting) ? 'var(--color-border)' : 'var(--color-success)',
                color: 'var(--color-background)',
                cursor: (!selectionSheetNumber || selectionSheetNumber.trim() === '' || isSubmitting) ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <>
                  <Loading size="small" color="var(--color-background)" />
                  <span>Submitting...</span>
                </>
              ) : 'Submit'}
            </button>
          ) : null}
        </div>

        {/* Re-visit Button for History View */}
        {isViewOnly && onRevisit && currentStep === 3 && isLatestSheet() && (
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => {
                onRevisit(customer);
                onClose();
              }}
              className="flex-1 py-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
            >
              Re-visit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}