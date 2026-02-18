import React, { useState } from 'react';

interface CheckInStep2Props {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
  initialData?: Partial<Step2Data>;
}

export interface Step2Data {
  referralSources: {
    type: string;
    name?: string;
    phone?: string;
  }[];
}

const referralOptions = [
  'Fabricator',
  'Contractor',
  'Kitchen & Bath',
  'Architect',
  'Builder',
  'Friends/Family',
  'Other',
];

export function CheckInStep2({ onNext, onBack, initialData }: CheckInStep2Props) {
  const [selectedSources, setSelectedSources] = useState<string[]>(initialData?.referralSources?.map(source => source.type) || []);
  const [referralDetails, setReferralDetails] = useState<Record<string, { name: string; phone: string }>>(initialData?.referralSources?.reduce((acc, source) => {
    acc[source.type] = { name: source.name || '', phone: source.phone || '' };
    return acc;
  }, {}) || {});

  // Capitalize first letter of each word
  const capitalizeInput = (value: string) => {
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const toggleSource = (source: string) => {
    if (selectedSources.includes(source)) {
      setSelectedSources(selectedSources.filter(s => s !== source));
      const newDetails = { ...referralDetails };
      delete newDetails[source];
      setReferralDetails(newDetails);
    } else {
      setSelectedSources([...selectedSources, source]);
    }
  };

  const updateReferralDetail = (source: string, field: 'name' | 'phone', value: string) => {
    setReferralDetails({
      ...referralDetails,
      [source]: {
        ...referralDetails[source],
        name: field === 'name' ? value : (referralDetails[source]?.name || ''),
        phone: field === 'phone' ? value : (referralDetails[source]?.phone || ''),
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate: At least one source must be selected
    if (selectedSources.length === 0) {
      alert('Please select at least one option');
      return;
    }
    
    // Validate: Each selected source must have a name
    for (const source of selectedSources) {
      if (!referralDetails[source]?.name?.trim()) {
        alert(`Please enter a name for ${source}`);
        return;
      }
    }
    
    const data: Step2Data = {
      referralSources: selectedSources.map(source => ({
        type: source,
        name: referralDetails[source]?.name,
        phone: referralDetails[source]?.phone,
      })),
    };
    onNext(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
        <h1 className="text-center mb-2 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>Step 2: How Did You Hear About Us?</h1>
        <p className="text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium" style={{ color: 'var(--color-text-gray)' }}>Select all that apply</p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-4">
            {referralOptions.map((option) => (
              <div key={option}>
                <label className="flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors" style={{ backgroundColor: selectedSources.includes(option) ? 'var(--color-background)' : 'transparent', border: `1px solid ${selectedSources.includes(option) ? 'var(--color-gold)' : 'var(--color-border)'}` }}>
                  <input
                    type="checkbox"
                    checked={selectedSources.includes(option)}
                    onChange={() => toggleSource(option)}
                    className="w-5 h-5 flex-shrink-0"
                    style={{ accentColor: 'var(--color-gold)' }}
                  />
                  <span className="text-sm sm:text-base" style={{ color: 'var(--color-text-white)' }}>{option}</span>
                </label>

                {selectedSources.includes(option) && (
                  <div className="ml-6 sm:ml-8 mt-3 space-y-3">
                    <input
                      type="text"
                      value={referralDetails[option]?.name || ''}
                      onChange={(e) => updateReferralDetail(option, 'name', capitalizeInput(e.target.value))}
                      placeholder="Name (required)"
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base"
                      style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                    <input
                      type="tel"
                      value={referralDetails[option]?.phone || ''}
                      onChange={(e) => updateReferralDetail(option, 'phone', e.target.value)}
                      placeholder="Phone (optional)"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base"
                      style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button
              type="button"
              onClick={onBack}
              className="w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base"
              style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base"
              style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
            >
              Continue to Step 3
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}