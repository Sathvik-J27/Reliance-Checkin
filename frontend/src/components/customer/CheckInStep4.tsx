import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

interface CheckInStep4Props {
  customerName: string;
  onReturnHome: () => void;
}

export function CheckInStep4({ customerName, onReturnHome }: CheckInStep4Props) {
  const [countdown, setCountdown] = useState(15);
  const onReturnHomeRef = useRef(onReturnHome);

  // Keep ref updated
  useEffect(() => {
    onReturnHomeRef.current = onReturnHome;
  }, [onReturnHome]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Call via ref to avoid dependencies issue
          setTimeout(() => onReturnHomeRef.current(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-2xl text-center" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '48px' }}>
        <div className="flex justify-center mb-6">
          <CheckCircle size={80} style={{ color: 'var(--color-success)' }} />
        </div>

        <h1 className="mb-4" style={{ color: 'var(--color-gold)' }}>Thank You, {customerName}!</h1>
        
        <p className="mb-8" style={{ color: 'var(--color-text-white)', fontSize: '18px' }}>
          Your check-in is complete. A member of our team will be with you shortly.
        </p>

        <p className="mb-6" style={{ color: 'var(--color-text-gray)' }}>
          Returning to home screen in <span style={{ color: 'var(--color-gold)' }}>{countdown}</span> seconds...
        </p>

        <button
          onClick={onReturnHome}
          className="px-8 py-4 rounded-lg"
          style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}