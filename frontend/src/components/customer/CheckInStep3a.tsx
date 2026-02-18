import React, { useState } from 'react';
import { Users, User } from 'lucide-react';

interface CheckInStep3aProps {
  onNext: (data: { adults: number; minors: number }) => void;
  onBack: () => void;
  initialData?: { adults: number; minors: number };
}

export function CheckInStep3a({ onNext, onBack, initialData }: CheckInStep3aProps) {
  const [adults, setAdults] = useState(initialData?.adults || 1);
  const [minors, setMinors] = useState(initialData?.minors || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ adults, minors });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '32px' }}>
        <h1 className="text-center mb-3 text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>Step 3: Party Size</h1>
        <p className="text-center mb-8 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
          Please let us know who's visiting today
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Adults Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Users size={28} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-xl sm:text-2xl" style={{ color: 'var(--color-text-white)' }}>
                How many adults are visiting?
              </h2>
            </div>
            
            <div className="flex items-center justify-center gap-6 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="w-12 h-12 rounded-full text-2xl font-medium transition-colors"
                style={{ 
                  backgroundColor: adults <= 1 ? 'var(--color-card)' : 'var(--color-gold)',
                  color: adults <= 1 ? 'var(--color-text-gray)' : 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  cursor: adults <= 1 ? 'not-allowed' : 'pointer'
                }}
                disabled={adults <= 1}
              >
                −
              </button>
              
              <div className="text-center min-w-[120px]">
                <div className="text-5xl font-light mb-2" style={{ color: 'var(--color-gold)' }}>
                  {adults}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                  {adults === 1 ? 'Adult' : 'Adults'}
                </div>
              </div>
              
              <button
                type="button"
                onClick={() => setAdults(Math.min(10, adults + 1))}
                className="w-12 h-12 rounded-full text-2xl font-medium transition-colors"
                style={{ 
                  backgroundColor: adults >= 10 ? 'var(--color-card)' : 'var(--color-gold)',
                  color: adults >= 10 ? 'var(--color-text-gray)' : 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  cursor: adults >= 10 ? 'not-allowed' : 'pointer'
                }}
                disabled={adults >= 10}
              >
                +
              </button>
            </div>
          </div>

          {/* Minors Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <User size={24} style={{ color: 'var(--color-gold)' }} />
              <h2 className="text-xl sm:text-2xl" style={{ color: 'var(--color-text-white)' }}>
                Number of minors
              </h2>
            </div>
            
            <div className="flex items-center justify-center gap-6 p-6 rounded-lg" style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}>
              <button
                type="button"
                onClick={() => setMinors(Math.max(0, minors - 1))}
                className="w-12 h-12 rounded-full text-2xl font-medium transition-colors"
                style={{ 
                  backgroundColor: minors <= 0 ? 'var(--color-card)' : 'var(--color-gold)',
                  color: minors <= 0 ? 'var(--color-text-gray)' : 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  cursor: minors <= 0 ? 'not-allowed' : 'pointer'
                }}
                disabled={minors <= 0}
              >
                −
              </button>
              
              <div className="text-center min-w-[120px]">
                <div className="text-5xl font-light mb-2" style={{ color: 'var(--color-gold)' }}>
                  {minors}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                  {minors === 1 ? 'Minor' : 'Minors'}
                </div>
              </div>
              
              <button
                type="button"
                onClick={() => setMinors(Math.min(10, minors + 1))}
                className="w-12 h-12 rounded-full text-2xl font-medium transition-colors"
                style={{ 
                  backgroundColor: minors >= 10 ? 'var(--color-card)' : 'var(--color-gold)',
                  color: minors >= 10 ? 'var(--color-text-gray)' : 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  cursor: minors >= 10 ? 'not-allowed' : 'pointer'
                }}
                disabled={minors >= 10}
              >
                +
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgba(212, 167, 54, 0.1)', border: '1px solid var(--color-gold)' }}>
            <p className="text-base sm:text-lg" style={{ color: 'var(--color-text-white)' }}>
              Total visitors: <span style={{ color: 'var(--color-gold)', fontWeight: '600' }}>{adults + minors}</span>
            </p>
          </div>

          {/* Buttons */}
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
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
