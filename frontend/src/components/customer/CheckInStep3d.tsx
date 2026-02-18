import React, { useState } from 'react';
import { Users } from 'lucide-react';

interface CheckInStep3dProps {
  onNext: (minorNames: string[]) => void;
  onBack: () => void;
  numberOfMinors: number;
}

export function CheckInStep3d({ onNext, onBack, numberOfMinors }: CheckInStep3dProps) {
  const [minorNames, setMinorNames] = useState<string[]>(Array(numberOfMinors).fill(''));

  // Capitalize first letter of each word
  const capitalizeInput = (value: string) => {
    return value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...minorNames];
    newNames[index] = capitalizeInput(value);
    setMinorNames(newNames);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all names are filled
    for (let i = 0; i < minorNames.length; i++) {
      if (!minorNames[i].trim()) {
        alert(`Please enter the name for Minor ${i + 1}`);
        return;
      }
    }
    
    onNext(minorNames.map(name => name.trim()));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '24px' }}>
        <div className="flex items-center justify-center gap-3 mb-3">
          <Users size={32} style={{ color: 'var(--color-gold)' }} />
          <h1 className="text-center text-2xl sm:text-3xl" style={{ color: 'var(--color-gold)' }}>
            Minor Information
          </h1>
        </div>
        
        <p className="text-center mb-6 text-base sm:text-lg" style={{ color: 'var(--color-text-gray)' }}>
          Please provide the name{numberOfMinors > 1 ? 's' : ''} of {numberOfMinors === 1 ? 'the' : 'all'} minor{numberOfMinors > 1 ? 's' : ''} visiting
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Minor Name Inputs */}
          <div className="space-y-4">
            {minorNames.map((name, index) => (
              <div key={index} className="space-y-2">
                <label className="block text-base" style={{ color: 'var(--color-text-white)' }}>
                  Minor {index + 1} Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                  placeholder={`Enter name of minor ${index + 1}`}
                  required
                  className="w-full px-4 py-3 rounded-lg text-base"
                  style={{ 
                    backgroundColor: 'var(--color-background)', 
                    border: '1px solid var(--color-border)', 
                    color: 'var(--color-text-white)' 
                  }}
                />
              </div>
            ))}
          </div>

          {/* Info Message */}
          <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(212, 167, 54, 0.1)', border: '1px solid rgba(212, 167, 54, 0.3)' }}>
            <p className="text-sm text-center" style={{ color: 'var(--color-text-gray)' }}>
              ℹ️ Signatures are not required for minors
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
              Complete Check-In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
