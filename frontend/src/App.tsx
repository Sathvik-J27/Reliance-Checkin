import React, { useState, useCallback, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { CheckInStep1, Step1Data } from './components/customer/CheckInStep1';
import { CheckInStep2, Step2Data } from './components/customer/CheckInStep2';
import { CheckInStep3a } from './components/customer/CheckInStep3a';
import { CheckInStep3b } from './components/customer/CheckInStep3b';
import { CheckInStep3c } from './components/customer/CheckInStep3c';
import { CheckInStep3d } from './components/customer/CheckInStep3d';
import { CheckInStep4 } from './components/customer/CheckInStep4';
import { StaffLogin } from './components/staff/StaffLogin';
import { StaffDashboard } from './components/staff/StaffDashboard';
import { PricingDashboard } from './components/staff/PricingDashboard';
import { AnalysisDashboard } from './components/staff/AnalysisDashboard';
import { CheckIn, DraftData } from './components/staff/CustomerPopup';
import { Loading } from './components/ui/loading';
import logo from 'figma:asset/5ebff9a217654d307f5ff0e6abe952a2f7edba47.png';
import { RevisitLookup } from './revisit/customer/RevisitLookup';
import { RevisitCheckInStep1 } from './revisit/customer/RevisitCheckInStep1';
import { RevisitCheckInStep2 } from './revisit/customer/RevisitCheckInStep2';
import { RevisitWaiver } from './revisit/customer/RevisitWaiver';
import { RevisitConfirmation } from './revisit/customer/RevisitConfirmation';
import { Staff2Login } from './revisit/staff2/Staff2Login';
import { Staff2Dashboard } from './revisit/staff2/Staff2Dashboard';

function mapApiCheckIn(record: any): CheckIn {
  const materials = record.materials || [];
  const hasDraft = materials.length > 0 || record.selectionSheetNumber || record.fabricator || record.draftStep > 0;
  return {
    id: record.id,
    isRevisit: record.isRevisit || false,
    firstName: record.firstName,
    lastName: record.lastName,
    street: record.street,
    suiteUnit: record.suiteUnit || '',
    city: record.city,
    state: record.state,
    zip: record.zip,
    country: record.country,
    phones: record.phones || [],
    emails: record.emails || [],
    referralSources: record.referralSources || [],
    signature: record.signature || '',
    checkInTime: new Date(record.checkInTime),
    helpedTime: record.helpedTime ? new Date(record.helpedTime) : undefined,
    status: record.status,
    currentlyHelpedBy: record.currentlyHelpedBy || undefined,
    partySize: record.partySize || { adults: 1, minors: 0 },
    visitors: record.visitors || [],
    draft: hasDraft ? {
      step: record.status === 'helped' ? 3 : (record.draftStep || 0),
      editedCustomerData: {},
      materials,
      selectedFabricator: record.fabricator || undefined,
      helpedBy: record.helpedBy || undefined,
      selectionSheetNumber: record.selectionSheetNumber || '',
      isHold: materials.some((m: any) => m.hold),
    } : undefined,
  };
}

type View = 'home' | 'customer-step1' | 'customer-step2' | 'customer-step3a' | 'customer-step3b' | 'customer-step3c' | 'customer-step3d' | 'customer-step4' | 'staff-login' | 'staff-dashboard' | 'pricing-dashboard' | 'analysis-dashboard' | 'revisit-lookup' | 'revisit-step1' | 'revisit-step2' | 'revisit-waiver' | 'revisit-confirmation' | 'staff2-login' | 'staff2-dashboard';

function App() {
  const [view, setView] = useState<View>('home');
  const [currentCheckIn, setCurrentCheckIn] = useState<Partial<CheckIn>>({});
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [staffUsername, setStaffUsername] = useState<string>('');

  // Multi-visitor flow state
  const [partySize, setPartySize] = useState<{ adults: number; minors: number }>({ adults: 1, minors: 0 });
  const [mainSignature, setMainSignature] = useState<{ agreed: boolean; signature: string } | null>(null);
  const [additionalAdultSignatures, setAdditionalAdultSignatures] = useState<Array<{ name: string; signature: string }>>([]);
  const [currentAdultIndex, setCurrentAdultIndex] = useState(0);
  const [minorNames, setMinorNames] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Revisit flow state
  const [revisitCustomer, setRevisitCustomer] = useState<any>(null);

  // Staff2 state
  const [staff2Username, setStaff2Username] = useState<string>('');

  // Load all check-ins from the backend on app startup
  useEffect(() => {
    fetch('/api/check-ins')
      .then(r => r.json())
      .then(res => {
        if (res.success && Array.isArray(res.data)) {
          setCheckIns(res.data.map(mapApiCheckIn));
        }
      })
      .catch(err => console.error('Failed to load check-ins:', err));
  }, []);

  const handleStep1Next = (data: Step1Data) => {
    setCurrentCheckIn({ ...currentCheckIn, ...data });
    setView('customer-step2');
  };

  const handleStep2Next = (data: Step2Data) => {
    setCurrentCheckIn({ ...currentCheckIn, ...data });
    setView('customer-step3a');
  };

  const handleStep3aNext = (data: { adults: number; minors: number }) => {
    setPartySize(data);
    setView('customer-step3b');
  };

  const handleStep3bNext = (data: { agreed: boolean; signature: string }) => {
    console.log('=== STEP 3B NEXT ===');
    console.log('Signature data received:', {
      hasSignature: !!data.signature,
      signatureLength: data.signature?.length,
      signaturePreview: data.signature?.substring(0, 50)
    });
    setMainSignature(data);
    
    // If more than 1 adult, collect additional signatures
    if (partySize.adults > 1) {
      setCurrentAdultIndex(0);
      setAdditionalAdultSignatures([]);
      setView('customer-step3c');
    }
    // If only minors, go to minor names
    else if (partySize.minors > 0) {
      setView('customer-step3d');
    }
    // Otherwise, complete check-in - PASS signature data directly
    else {
      completeCheckIn(undefined, undefined, data);
    }
  };

  const handleStep3cNext = (data: { name: string; signature: string }) => {
    // Update or add the signature at the current index
    const updatedSignatures = [...additionalAdultSignatures];
    updatedSignatures[currentAdultIndex] = data;
    setAdditionalAdultSignatures(updatedSignatures);
    
    // Check if we need more adult signatures
    // Total additional adults needed = partySize.adults - 1 (minus the main person)
    // Indices run from 0 to (partySize.adults - 2)
    // So we continue if currentAdultIndex < (partySize.adults - 2)
    const lastAdditionalAdultIndex = partySize.adults - 2;
    
    if (currentAdultIndex < lastAdditionalAdultIndex) {
      // Move to next visitor
      setCurrentAdultIndex(currentAdultIndex + 1);
      // Stay on step3c for next adult
    }
    // All adult signatures collected, check for minors
    else if (partySize.minors > 0) {
      setView('customer-step3d');
    }
    // No minors, complete check-in with the updated signatures
    else {
      completeCheckIn(undefined, updatedSignatures); // Pass updated signatures directly
    }
  };

  const handleStep3cBack = () => {
    // If we're on the first additional visitor (index 0), go back to main waiver
    if (currentAdultIndex === 0) {
      setView('customer-step3b');
    } else {
      // Go back to previous visitor - just decrement index
      setCurrentAdultIndex(currentAdultIndex - 1);
      // Stay on step3c but with previous visitor number
    }
  };

  const handleStep3dSubmit = (names: string[]) => {
    console.log('=== STEP 3D SUBMIT ===');
    console.log('Received names:', names);
    console.log('Names length:', names.length);
    completeCheckIn(names); // Pass names directly instead of relying on state
  };

  const completeCheckIn = async (submittedMinorNames?: string[], submittedAdultSignatures?: Array<{ name: string; signature: string }>, submittedMainSignature?: { agreed: boolean; signature: string }) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Use submitted values if provided, otherwise fall back to state
    const finalMinorNames = submittedMinorNames !== undefined ? submittedMinorNames : minorNames;
    const finalAdultSignatures = submittedAdultSignatures !== undefined ? submittedAdultSignatures : additionalAdultSignatures;
    const finalMainSignature = submittedMainSignature !== undefined ? submittedMainSignature : mainSignature;

    // Compile all visitor data
    const allVisitors = [
      {
        name: `${currentCheckIn.firstName} ${currentCheckIn.lastName}`,
        signature: finalMainSignature?.signature || '',
        isMain: true,
        isMinor: false,
      },
      ...finalAdultSignatures.map(sig => ({
        name: sig.name,
        signature: sig.signature,
        isMain: false,
        isMinor: false,
      })),
      ...finalMinorNames.map(name => ({
        name,
        signature: '',
        isMain: false,
        isMinor: true,
      })),
    ];

    const checkInPayload = {
      firstName:       currentCheckIn.firstName,
      lastName:        currentCheckIn.lastName,
      street:          currentCheckIn.street,
      suiteUnit:       currentCheckIn.suiteUnit || '',
      city:            currentCheckIn.city,
      state:           currentCheckIn.state,
      zip:             currentCheckIn.zip,
      country:         currentCheckIn.country,
      phones:          currentCheckIn.phones,
      emails:          currentCheckIn.emails,
      referralSources: currentCheckIn.referralSources || [],
      signature:       finalMainSignature?.signature || '',
      partySize,
      visitors:        allVisitors,
      checkInTime:     new Date().toISOString(),
    };

    try {
      const response = await fetch('/api/check-ins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkInPayload),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Check-in API error:', result);
        const errorMsg = response.status === 409
          ? result.error
          : 'Check-in failed. Please try again.';
        alert(errorMsg);
        if (response.status === 409) setView('customer-step1');
        setIsSubmitting(false);
        return;
      }

      console.log('Check-in successful:', result.data.id);
      if (result.data.waiverPdfUrl) {
        console.log('Waiver PDF:', result.data.waiverPdfUrl);
      }

      // Also keep local state in sync for staff dashboard
      const newCheckIn: CheckIn = {
        id: result.data.id,
        ...(currentCheckIn as any),
        signatureData: finalMainSignature?.signature || '',
        checkInTime: new Date(result.data.checkInTime),
        status: 'waiting',
        partySize,
        visitors: allVisitors,
      };
      setCheckIns([...checkIns, newCheckIn]);

    } catch (err) {
      console.error('Check-in network error:', err);
      alert('Check-in failed. Please check your connection and try again.');
      setIsSubmitting(false);
      return;
    }

    // Reset multi-visitor state
    setPartySize({ adults: 1, minors: 0 });
    setMainSignature(null);
    setAdditionalAdultSignatures([]);
    setCurrentAdultIndex(0);
    setMinorNames([]);
    setIsSubmitting(false);

    setView('customer-step4');
  };

  const handleReturnHome = useCallback(() => {
    setCurrentCheckIn({});
    setPartySize({ adults: 1, minors: 0 });
    setMainSignature(null);
    setAdditionalAdultSignatures([]);
    setCurrentAdultIndex(0);
    setMinorNames([]);
    setView('home');
  }, []);

  const handleStaffLogin = (username: string, role: 'staff' | 'pricing' | 'analysis' | 'staff2') => {
    if (role === 'staff2') {
      setStaff2Username(username);
      setView('staff2-dashboard');
    } else {
      setStaffUsername(username);
      if (role === 'pricing') {
        setView('pricing-dashboard');
      } else if (role === 'analysis') {
        setView('analysis-dashboard');
      } else {
        setView('staff-dashboard');
      }
    }
  };

  const handleStaffLogout = () => {
    setStaffUsername('');
    setView('home');
  };

  const handleMarkAsHelped = (id: string) => {
    setCheckIns(prevCheckIns => prevCheckIns.map(checkIn =>
      checkIn.id === id
        ? { ...checkIn, status: 'helped', helpedTime: new Date(), currentlyHelpedBy: undefined }
        : checkIn
    ));
  };

  const handleUpdateCurrentlyHelpedBy = (id: string, staffName: string) => {
    setCheckIns(prevCheckIns => prevCheckIns.map(checkIn =>
      checkIn.id === id
        ? { ...checkIn, currentlyHelpedBy: staffName }
        : checkIn
    ));
  };

  const handleMarkAsPriced = (id: string) => {
    setCheckIns(prevCheckIns => prevCheckIns.map(checkIn =>
      checkIn.id === id
        ? { ...checkIn, priced: true, pricedTime: new Date() }
        : checkIn
    ));
  };

  const handleResetHoldDate = (id: string) => {
    // Reset the checkInTime to current date so it's no longer "older than 5 days"
    setCheckIns(prevCheckIns => prevCheckIns.map(checkIn =>
      checkIn.id === id
        ? { ...checkIn, checkInTime: new Date() }
        : checkIn
    ));
  };

  // Revisit handlers
  const handleRevisitFound = (customer: any) => {
    setRevisitCustomer(customer);
    setView('revisit-step1');
  };

  const handleRevisitStep1Next = (updatedData: any) => {
    setRevisitCustomer((prev: any) => ({ ...prev, ...updatedData }));
    setView('revisit-step2');
  };

  const handleRevisitStep2Next = (sources: any[]) => {
    setRevisitCustomer((prev: any) => ({ ...prev, referralSources: sources }));
    setView('revisit-waiver');
  };

  const handleRevisitWaiverSubmit = async (waiverData: {
    partySize: { adults: number; minors: number };
    signature: string;
    visitors: any[];
  }) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const checkInPayload = {
      firstName:       revisitCustomer.firstName,
      lastName:        revisitCustomer.lastName,
      street:          revisitCustomer.street,
      suiteUnit:       revisitCustomer.suiteUnit || '',
      city:            revisitCustomer.city,
      state:           revisitCustomer.state,
      zip:             revisitCustomer.zip,
      country:         revisitCustomer.country,
      phones:          revisitCustomer.phones,
      emails:          revisitCustomer.emails,
      referralSources: revisitCustomer.referralSources || [],
      signature:       waiverData.signature,
      partySize:       waiverData.partySize,
      visitors:        waiverData.visitors,
      checkInTime:     new Date().toISOString(),
      isRevisit:       true,
    };

    try {
      const response = await fetch('/api/check-ins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkInPayload),
      });
      const result = await response.json();
      if (!response.ok) {
        alert('Revisit check-in failed. Please try again.');
        setIsSubmitting(false);
        return;
      }
      const newCheckIn: CheckIn = {
        id: result.data.id,
        ...revisitCustomer,
        isRevisit: true,
        signature: waiverData.signature,
        checkInTime: new Date(result.data.checkInTime),
        status: 'waiting',
        partySize: waiverData.partySize,
        visitors: waiverData.visitors,
      };
      setCheckIns(prev => [...prev, newCheckIn]);
    } catch (err) {
      alert('Revisit check-in failed. Please check your connection.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setView('revisit-confirmation');
  };

  // Staff2 handlers
  const handleStaff2Login = (username: string) => {
    setStaff2Username(username);
    setView('staff2-dashboard');
  };

  const handleStaff2Logout = () => {
    setStaff2Username('');
    setView('home');
  };

  const handleMarkAsDone = async (id: string) => {
    // Optimistically update local state for instant UI feedback
    setCheckIns(prev => prev.map(c =>
      c.id === id ? { ...c, status: 'done' } : c
    ));
    // Persist to backend so status survives a page refresh
    try {
      await fetch(`/api/check-ins/${id}/done`, { method: 'PATCH' });
    } catch (err) {
      console.error('Failed to persist done status:', err);
    }
  };

  const handleSaveDraft = (id: string, draft: DraftData) => {
    setCheckIns(prevCheckIns => prevCheckIns.map(checkIn =>
      checkIn.id === id
        ? { ...checkIn, draft }
        : checkIn
    ));
  };

  const handleRevisit = (customer: CheckIn) => {
    // Find the latest selection sheet number for this customer
    const customerHistory = checkIns.filter(c => 
      c.firstName === customer.firstName && 
      c.lastName === customer.lastName &&
      c.status === 'helped' &&
      c.draft?.selectionSheetNumber
    );

    let newSheetNumber = customer.draft?.selectionSheetNumber || '';
    
    if (newSheetNumber) {
      // Parse the sheet number to handle increments like 800 -> 800.1 -> 800.2
      const parts = newSheetNumber.split('.');
      const baseNumber = parts[0];
      
      if (parts.length === 1) {
        // First re-visit: 800 -> 800.1
        newSheetNumber = `${baseNumber}.1`;
      } else {
        // Subsequent re-visits: 800.1 -> 800.2, etc.
        const decimal = parseInt(parts[1]) || 0;
        newSheetNumber = `${baseNumber}.${decimal + 1}`;
      }
    }

    // Create a new check-in with re-visit flag and previous materials
    const revisitCheckIn: CheckIn = {
      ...customer,
      id: Date.now().toString(),
      checkInTime: new Date(),
      status: 'waiting',
      helpedTime: undefined,
      draft: {
        step: 3, // Start at step 3 for re-visits
        editedCustomerData: {},
        selectedFabricator: customer.draft?.selectedFabricator,
        materials: customer.draft?.materials || [], // Copy previous materials
        helpedBy: staffUsername,
        selectionSheetNumber: newSheetNumber,
        isHold: false,
        isRevisit: true,
        previousMaterialsCount: (customer.draft?.materials || []).length, // Track how many are from previous visit
      },
    };

    setCheckIns([...checkIns, revisitCheckIn]);
  };

  // Full-screen loading overlay shown while submitting check-in to the server
  const loadingOverlay = isSubmitting ? (
    <Loading fullScreen color="#ccb331" text="Submitting your check-in…" />
  ) : null;

  if (view === 'customer-step1') {
    return <>{loadingOverlay}<CheckInStep1 onNext={handleStep1Next} initialData={currentCheckIn as Step1Data} /></>;
  }

  if (view === 'customer-step2') {
    return (
      <>{loadingOverlay}<CheckInStep2
        onNext={handleStep2Next}
        onBack={() => setView('customer-step1')}
        initialData={currentCheckIn as Step2Data}
      /></>
    );
  }

  if (view === 'customer-step3a') {
    return (
      <>{loadingOverlay}<CheckInStep3a
        onNext={handleStep3aNext}
        onBack={() => setView('customer-step2')}
        initialData={partySize}
      /></>
    );
  }

  if (view === 'customer-step3b') {
    return (
      <>{loadingOverlay}<CheckInStep3b
        onNext={handleStep3bNext}
        onBack={() => setView('customer-step3a')}
        initialData={mainSignature || undefined}
      /></>
    );
  }

  if (view === 'customer-step3c') {
    const currentVisitorData = currentAdultIndex < additionalAdultSignatures.length
      ? additionalAdultSignatures[currentAdultIndex]
      : undefined;

    return (
      <>{loadingOverlay}<CheckInStep3c
        key={currentAdultIndex}
        onNext={handleStep3cNext}
        onBack={handleStep3cBack}
        visitorNumber={currentAdultIndex + 2}
        totalAdults={partySize.adults}
        initialData={currentVisitorData}
      /></>
    );
  }

  if (view === 'customer-step3d') {
    return (
      <>{loadingOverlay}<CheckInStep3d
        onNext={handleStep3dSubmit}
        onBack={() => {
          if (partySize.adults > 1) {
            setCurrentAdultIndex(partySize.adults - 2);
            setView('customer-step3c');
          } else {
            setView('customer-step3b');
          }
        }}
        numberOfMinors={partySize.minors}
      /></>
    );
  }

  if (view === 'customer-step4') {
    return (
      <CheckInStep4
        customerName={`${currentCheckIn.firstName} ${currentCheckIn.lastName}`}
        onReturnHome={handleReturnHome}
      />
    );
  }

  if (view === 'staff-login') {
    return <StaffLogin onLogin={handleStaffLogin} />;
  }

  if (view === 'staff-dashboard') {
    return (
      <StaffDashboard
        username={staffUsername}
        onLogout={handleStaffLogout}
        checkIns={checkIns}
        onMarkAsHelped={handleMarkAsHelped}
        onSaveDraft={handleSaveDraft}
        onRevisit={handleRevisit}
        onUpdateCurrentlyHelpedBy={handleUpdateCurrentlyHelpedBy}
      />
    );
  }

  if (view === 'pricing-dashboard') {
    return (
      <PricingDashboard
        username={staffUsername}
        onLogout={handleStaffLogout}
        checkIns={checkIns}
        fabricators={[]}
        onComplete={handleMarkAsPriced}
        onResetHoldDate={handleResetHoldDate}
      />
    );
  }

  if (view === 'analysis-dashboard') {
    return (
      <AnalysisDashboard
        username={staffUsername}
        onLogout={handleStaffLogout}
        checkIns={checkIns}
        fabricators={[]}
        onComplete={handleMarkAsPriced}
        onResetHoldDate={handleResetHoldDate}
      />
    );
  }

  if (view === 'revisit-lookup') {
    return (
      <RevisitLookup
        checkIns={checkIns}
        onCustomerFound={handleRevisitFound}
        onBack={() => setView('home')}
      />
    );
  }

  if (view === 'revisit-step1') {
    return (
      <RevisitCheckInStep1
        customerData={revisitCustomer}
        onNext={handleRevisitStep1Next}
        onBack={() => setView('revisit-lookup')}
      />
    );
  }

  if (view === 'revisit-step2') {
    return (
      <RevisitCheckInStep2
        referralSources={revisitCustomer?.referralSources || []}
        onNext={handleRevisitStep2Next}
        onBack={() => setView('revisit-step1')}
      />
    );
  }

  if (view === 'revisit-waiver') {
    return (
      <>{loadingOverlay}<RevisitWaiver
        customerName={`${revisitCustomer?.firstName} ${revisitCustomer?.lastName}`}
        onSubmit={handleRevisitWaiverSubmit}
        onBack={() => setView('revisit-step2')}
      /></>
    );
  }

  if (view === 'revisit-confirmation') {
    return (
      <RevisitConfirmation
        customerName={`${revisitCustomer?.firstName} ${revisitCustomer?.lastName}`}
        onReturnHome={handleReturnHome}
      />
    );
  }

  if (view === 'staff2-login') {
    return <Staff2Login onLogin={handleStaff2Login} />;
  }

  if (view === 'staff2-dashboard') {
    return (
      <Staff2Dashboard
        username={staff2Username}
        onLogout={handleStaff2Logout}
        checkIns={checkIns}
        onMarkAsDone={handleMarkAsDone}
      />
    );
  }

  // Home screen
  return (
    <HomePage
      onCustomerCheckIn={() => setView('customer-step1')}
      onStaffLogin={() => setView('staff-login')}
      onRevisit={() => setView('revisit-lookup')}
      onStaff2Login={() => setView('staff2-login')}
    />
  );
}

export default App;