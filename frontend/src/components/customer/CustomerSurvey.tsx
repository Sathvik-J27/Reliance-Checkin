import React, { useState, useEffect, useRef } from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface CustomerSurveyProps {
  checkInId: string;
  authToken: string;
  onDone: () => void;
}

export function CustomerSurvey({ checkInId, authToken, onDone }: CustomerSurveyProps) {
  const [starRating, setStarRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const onDoneRef = useRef(onDone);

  useEffect(() => { onDoneRef.current = onDone; }, [onDone]);

  // Auto-redirect countdown after submit/skip
  useEffect(() => {
    if (!done) return;
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => onDoneRef.current(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [done]);

  const submitSurvey = async (skip: boolean) => {
    if (skip) {
      setDone(true);
      return;
    }
    if (starRating === 0) return; // shouldn't happen — button is disabled

    setSubmitting(true);
    try {
      await fetch('/api/survey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          starRating,
          comment: comment.trim() || undefined,
        }),
      });
    } catch {
      // best-effort — still show thank-you regardless
    } finally {
      setSubmitting(false);
      setDone(true);
    }
  };

  // Thank-you screen
  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="w-full max-w-md text-center" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '48px' }}>
          <CheckCircle size={72} className="mx-auto mb-6" style={{ color: 'var(--color-success)' }} />
          <h1 className="mb-4" style={{ color: 'var(--color-gold)' }}>Thank You!</h1>
          <p className="mb-6" style={{ color: 'var(--color-text-white)', fontSize: '18px' }}>
            We appreciate your feedback.
          </p>
          <p style={{ color: 'var(--color-text-gray)' }}>
            Returning to home screen in{' '}
            <span style={{ color: 'var(--color-gold)' }}>{countdown}</span> seconds…
          </p>
          <button
            onClick={() => onDoneRef.current()}
            className="mt-6 px-8 py-4 rounded-lg"
            style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // Survey form
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-md" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '48px' }}>

        <h1 className="text-center mb-2" style={{ color: 'var(--color-gold)' }}>
          How was your experience?
        </h1>
        <p className="text-center mb-8" style={{ color: 'var(--color-text-gray)' }}>
          Your feedback helps us improve.
        </p>

        {/* Star rating */}
        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3, 4, 5].map(n => {
            const filled = n <= (hovered || starRating);
            return (
              <button
                key={n}
                onClick={() => setStarRating(n)}
                onMouseEnter={() => setHovered(n)}
                onMouseLeave={() => setHovered(0)}
                className="p-2 rounded-lg transition-transform"
                style={{
                  background: 'none',
                  border: 'none',
                  transform: hovered === n ? 'scale(1.15)' : 'scale(1)',
                  cursor: 'pointer',
                }}
                aria-label={`${n} star${n !== 1 ? 's' : ''}`}
              >
                <Star
                  size={48}
                  fill={filled ? 'var(--color-gold)' : 'none'}
                  style={{ color: filled ? 'var(--color-gold)' : 'var(--color-border)' }}
                />
              </button>
            );
          })}
        </div>

        {/* Comment */}
        <div className="mb-8">
          <label className="block mb-2" style={{ color: 'var(--color-text-white)' }}>
            Any additional feedback?
          </label>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows={4}
            placeholder="Optional — share your thoughts…"
            className="w-full px-4 py-3 rounded-lg resize-none"
            style={{
              backgroundColor: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-white)',
            }}
          />
        </div>

        {/* Submit */}
        <button
          onClick={() => submitSurvey(false)}
          disabled={submitting || starRating === 0}
          className="w-full py-4 rounded-lg mb-4 font-semibold"
          style={{
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-background)',
            opacity: submitting || starRating === 0 ? 0.5 : 1,
            cursor: starRating === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          {submitting ? 'Submitting…' : 'Submit'}
        </button>

        {/* Skip */}
        <div className="text-center">
          <button
            onClick={() => submitSurvey(true)}
            disabled={submitting}
            style={{ color: 'var(--color-text-gray)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', textDecoration: 'underline' }}
          >
            Skip
          </button>
        </div>

      </div>
    </div>
  );
}
