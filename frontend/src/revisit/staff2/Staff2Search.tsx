import React, { useEffect, useState } from 'react';
import { Search as SearchIcon, Phone, Mail, Calendar } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';

interface Staff2SearchProps {
  onView: (customer: any) => void;
}

const STATUS_LABELS: Record<string, string> = {
  waiting: 'Waiting',
  helped: 'Helped',
  done: 'Done',
};

function formatDate(dateValue: any) {
  if (!dateValue) return '';
  const d = new Date(dateValue);
  if (isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function Staff2Search({ onView }: Staff2SearchProps) {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const term = debouncedQuery.trim();
    if (term.length < 2) {
      setResults([]);
      setError(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(`/api/check-ins/search?q=${encodeURIComponent(term)}`)
      .then(r => r.json())
      .then(json => {
        if (cancelled) return;
        if (json.success && Array.isArray(json.data)) {
          setResults(json.data);
        } else {
          setResults([]);
          setError('Search failed. Please try again.');
        }
      })
      .catch(() => {
        if (!cancelled) {
          setResults([]);
          setError('Search failed. Please try again.');
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [debouncedQuery]);

  const openWaiver = (url: string | null) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <h2 className="text-2xl mb-6" style={{ color: 'var(--color-text-white)' }}>
        Search Customers
      </h2>

      {/* Search input */}
      <div style={{ position: 'relative', marginBottom: '28px' }}>
        <SearchIcon
          size={18}
          style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-gray)' }}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, phone number, or email..."
          className="w-full rounded-lg"
          style={{
            padding: '14px 16px 14px 46px',
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-white)',
            fontSize: '15px',
          }}
        />
      </div>

      {query.trim().length > 0 && query.trim().length < 2 && (
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-gray)' }}>
          Keep typing — enter at least 2 characters to search.
        </p>
      )}

      {loading && (
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-gray)' }}>
          Searching...
        </p>
      )}

      {error && (
        <p className="text-sm mb-4" style={{ color: 'var(--color-error)' }}>
          {error}
        </p>
      )}

      {!loading && !error && debouncedQuery.trim().length >= 2 && results.length === 0 && (
        <div
          className="text-center rounded-lg"
          style={{ padding: '48px 24px', backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
        >
          <p style={{ color: 'var(--color-text-gray)' }}>
            No customers found
          </p>
        </div>
      )}

      {results.length === 0 && !loading && !error && debouncedQuery.trim().length < 2 && (
        <div
          className="text-center rounded-lg"
          style={{ padding: '48px 24px', backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
        >
          <p style={{ color: 'var(--color-text-gray)' }}>
            Start typing to search for a customer
          </p>
        </div>
      )}

      {results.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {results.map((customer, idx) => (
            <div
              key={`${customer.phones?.[0] || customer.emails?.[0] || idx}`}
              className="rounded-lg"
              style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', padding: '20px' }}
            >
              {/* Customer header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  paddingBottom: '16px',
                  marginBottom: '16px',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: 'rgba(212, 167, 54, 0.2)', color: 'var(--color-gold)', flexShrink: 0 }}
                >
                  {customer.firstName?.charAt(0).toUpperCase() || '?'}
                </div>
                <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <p className="font-medium text-lg" style={{ color: 'var(--color-text-white)' }}>
                    {[customer.firstName, customer.lastName].filter(Boolean).join(' ')}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {customer.phones?.length > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={14} style={{ color: 'var(--color-text-gray)', flexShrink: 0 }} />
                        <span className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                          {customer.phones.join('  •  ')}
                        </span>
                      </div>
                    )}
                    {customer.emails?.length > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mail size={14} style={{ color: 'var(--color-text-gray)', flexShrink: 0 }} />
                        <span className="text-sm" style={{ color: 'var(--color-text-gray)' }}>
                          {customer.emails.join('  •  ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Visits */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {customer.visits.map((visit: any) => (
                  <div
                    key={visit.id}
                    className="rounded-lg"
                    style={{
                      backgroundColor: 'var(--color-background)',
                      border: '1px solid var(--color-border)',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '14px', rowGap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} style={{ color: 'var(--color-text-gray)' }} />
                        <span className="text-sm" style={{ color: 'var(--color-text-white)', whiteSpace: 'nowrap' }}>
                          {formatDate(visit.checkInTime)}
                        </span>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{
                          backgroundColor: visit.isRevisit ? 'rgba(212, 167, 54, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                          color: visit.isRevisit ? 'var(--color-gold)' : '#3B82F6',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {visit.isRevisit ? 'Revisiting' : 'First Time'}
                      </span>
                      <span className="text-xs" style={{ color: 'var(--color-text-gray)', whiteSpace: 'nowrap' }}>
                        {STATUS_LABELS[visit.status] || visit.status}
                      </span>
                      {visit.helpedBy && (
                        <span className="text-xs" style={{ color: 'var(--color-success)', whiteSpace: 'nowrap' }}>
                          ✓ Helped by {visit.helpedBy}
                        </span>
                      )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0, marginLeft: 'auto' }}>
                      <button
                        onClick={() => onView({ ...visit, firstName: customer.firstName, lastName: customer.lastName, phones: customer.phones, emails: customer.emails })}
                        className="px-4 py-2 rounded-lg font-medium"
                        style={{
                          backgroundColor: 'var(--color-card)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-white)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        View
                      </button>
                      <button
                        onClick={() => openWaiver(visit.waiverPdfUrl)}
                        disabled={!visit.waiverPdfUrl}
                        title={visit.waiverPdfUrl ? undefined : 'No waiver on file'}
                        className="px-4 py-2 rounded-lg font-medium"
                        style={{
                          backgroundColor: 'var(--color-gold)',
                          color: 'var(--color-background)',
                          opacity: visit.waiverPdfUrl ? 1 : 0.5,
                          cursor: visit.waiverPdfUrl ? 'pointer' : 'not-allowed',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Waiver
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
