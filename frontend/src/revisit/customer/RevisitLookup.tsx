import React, { useState } from 'react';

interface RevisitLookupProps {
  onCustomerFound: (customer: any) => void;
  onBack: () => void;
  checkIns: any[];
}

export function RevisitLookup({ onCustomerFound, onBack, checkIns }: RevisitLookupProps) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFind = async () => {
    if (!input.trim()) {
      setError('Please enter a phone number or email');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Search for customer in checkIns array
      const searchTerm = input.trim().toLowerCase();
      const foundCustomer = checkIns.find(checkIn => {
        // Search by phone
        const phoneMatch = checkIn.phones?.some((phone: string) => 
          phone.replace(/\D/g, '').includes(searchTerm.replace(/\D/g, ''))
        );
        
        // Search by email
        const emailMatch = checkIn.emails?.some((email: string) => 
          email.toLowerCase().includes(searchTerm)
        );
        
        return phoneMatch || emailMatch;
      });

      if (foundCustomer) {
        onCustomerFound(foundCustomer);
      } else {
        setError('No previous check-in found with this information. Please use "Check-In" for first-time visit.');
      }

    } catch (err) {
      setError('No previous check-in found with this information. Please use "Check-In" for first-time visit.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleFind();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-md" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '32px' }}>
        <h1 className="text-center mb-3 text-3xl" style={{ color: 'var(--color-gold)' }}>
          Welcome Back!
        </h1>
        <p className="text-center mb-8" style={{ color: 'var(--color-text-gray)' }}>
          Enter your mobile number or email that you used during check-in
        </p>

        <div className="space-y-6">
          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
              Phone or Email
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError('');
              }}
              onKeyPress={handleKeyPress}
              placeholder="(602) 555-1234 or email@example.com"
              className="w-full px-4 py-3 rounded-lg"
              style={{ 
                backgroundColor: 'var(--color-background)', 
                border: `1px solid ${error ? '#EF4444' : 'var(--color-border)'}`, 
                color: 'var(--color-text-white)' 
              }}
              disabled={loading}
            />
            {error && (
              <p className="mt-2 text-sm" style={{ color: '#EF4444' }}>
                {error}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <button
              onClick={handleFind}
              disabled={loading}
              className="w-full py-3 rounded-lg"
              style={{ 
                backgroundColor: loading ? 'var(--color-border)' : 'var(--color-gold)', 
                color: 'var(--color-background)',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1
              }}
            >
              {loading ? 'Searching...' : 'Find My Information'}
            </button>

            <button
              onClick={onBack}
              disabled={loading}
              className="w-full py-3 rounded-lg"
              style={{ 
                backgroundColor: 'transparent', 
                border: '1px solid var(--color-border)', 
                color: 'var(--color-text-white)',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1
              }}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}