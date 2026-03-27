import React, { useState, useEffect, useCallback } from 'react';
import { LogOut, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/5ebff9a217654d307f5ff0e6abe952a2f7edba47.png';

interface SurveyResponse {
  id: string;
  checkInId: string;
  starRating: number;
  comment: string | null;
  createdAt: string;
  customerName: string;
}

interface SurveyMeta {
  total: number;
  page: number;
  totalPages: number;
  averageRating: number;
  distribution: Record<1 | 2 | 3 | 4 | 5, number>;
}

interface RatingDashboardProps {
  onLogout: () => void;
}

const ITEMS_PER_PAGE = 15;

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(n => (
        <Star
          key={n}
          size={16}
          fill={n <= rating ? 'var(--color-gold)' : 'none'}
          style={{ color: n <= rating ? 'var(--color-gold)' : 'var(--color-border)' }}
        />
      ))}
    </div>
  );
}

export function RatingDashboard({ onLogout }: RatingDashboardProps) {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [meta, setMeta] = useState<SurveyMeta | null>(null);
  const [page, setPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async (p: number, start: string, end: string) => {
    setLoading(true);
    setError('');
    try {
      const params = new URLSearchParams({ page: String(p) });
      if (start) params.set('startDate', start);
      if (end) params.set('endDate', end);

      const res = await fetch(`/api/survey/responses?${params}`);
      const result = await res.json();

      if (!res.ok) {
        setError(result.error || 'Failed to load responses.');
      } else {
        setResponses(result.data);
        setMeta(result.meta);
      }
    } catch {
      setError('Failed to load responses. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(page, startDate, endDate);
  }, [page, fetchData]); // only re-fetch on page change; filter applied via button

  const handleFilter = () => {
    setPage(1);
    fetchData(1, startDate, endDate);
  };

  const handleClear = () => {
    setStartDate('');
    setEndDate('');
    setPage(1);
    fetchData(1, '', '');
  };

  // Distribution bar chart helpers
  const maxCount = meta
    ? Math.max(...([1, 2, 3, 4, 5] as const).map(n => meta.distribution[n] ?? 0), 1)
    : 1;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>

      {/* Header */}
      <header style={{ backgroundColor: 'var(--color-card)', borderBottom: '1px solid var(--color-border)', padding: '16px 24px' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Reliance" className="w-10 h-10 object-contain" />
            <div>
              <h2 style={{ color: 'var(--color-gold)', margin: 0 }}>Customer Ratings</h2>
              <p style={{ color: 'var(--color-text-gray)', fontSize: '13px', margin: 0 }}>Survey responses</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg"
            style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-6">

        {/* Summary stats */}
        {meta && (
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>

            {/* Average rating card */}
            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-gray)', fontSize: '13px', marginBottom: 8 }}>Average Rating</p>
              <div className="flex items-end gap-2">
                <span style={{ color: 'var(--color-gold)', fontSize: '40px', fontWeight: 700, lineHeight: 1 }}>
                  {meta.averageRating.toFixed(1)}
                </span>
                <Star size={24} fill="var(--color-gold)" style={{ color: 'var(--color-gold)', marginBottom: 4 }} />
              </div>
              <p style={{ color: 'var(--color-text-gray)', fontSize: '13px', marginTop: 4 }}>out of 5</p>
            </div>

            {/* Total responses card */}
            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-gray)', fontSize: '13px', marginBottom: 8 }}>Total Responses</p>
              <span style={{ color: 'var(--color-text-white)', fontSize: '40px', fontWeight: 700, lineHeight: 1 }}>
                {meta.total}
              </span>
              <p style={{ color: 'var(--color-text-gray)', fontSize: '13px', marginTop: 4 }}>submissions</p>
            </div>

            {/* Distribution card */}
            <div className="p-5 rounded-xl" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', gridColumn: 'span 2' }}>
              <p style={{ color: 'var(--color-text-gray)', fontSize: '13px', marginBottom: 12 }}>Rating Distribution</p>
              <div className="space-y-2">
                {([5, 4, 3, 2, 1] as const).map(n => {
                  const count = meta.distribution[n] ?? 0;
                  const pct = meta.total > 0 ? (count / meta.total) * 100 : 0;
                  const barWidth = maxCount > 0 ? (count / maxCount) * 100 : 0;
                  return (
                    <div key={n} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 flex-shrink-0" style={{ width: 80 }}>
                        <span style={{ color: 'var(--color-text-white)', fontSize: '13px', width: 12, textAlign: 'right' }}>{n}</span>
                        <Star size={12} fill="var(--color-gold)" style={{ color: 'var(--color-gold)' }} />
                      </div>
                      <div className="flex-1 rounded-full overflow-hidden" style={{ height: 8, backgroundColor: 'var(--color-background)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${barWidth}%`, backgroundColor: 'var(--color-gold)', transition: 'width 0.3s ease' }}
                        />
                      </div>
                      <span style={{ color: 'var(--color-text-gray)', fontSize: '12px', width: 60, textAlign: 'right' }}>
                        {count} ({pct.toFixed(0)}%)
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Date range filter */}
        <div className="p-4 rounded-xl flex flex-wrap items-end gap-4" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
          <div>
            <label className="block mb-1" style={{ color: 'var(--color-text-gray)', fontSize: '13px' }}>From</label>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="px-3 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', colorScheme: 'dark' }}
            />
          </div>
          <div>
            <label className="block mb-1" style={{ color: 'var(--color-text-gray)', fontSize: '13px' }}>To</label>
            <input
              type="date"
              value={endDate}
              onChange={e => setEndDate(e.target.value)}
              className="px-3 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)', colorScheme: 'dark' }}
            />
          </div>
          <button
            onClick={handleFilter}
            className="px-5 py-2 rounded-lg font-semibold"
            style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
          >
            Apply
          </button>
          {(startDate || endDate) && (
            <button
              onClick={handleClear}
              className="px-4 py-2 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-gray)' }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(239,68,68,0.1)', border: '1px solid var(--color-error)' }}>
            <p style={{ color: 'var(--color-error)' }}>{error}</p>
          </div>
        )}

        {/* Table */}
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--color-border)' }}>
          <table className="w-full" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-card)', borderBottom: '1px solid var(--color-border)' }}>
                {['Date', 'Customer', 'Rating', 'Comment'].map(col => (
                  <th
                    key={col}
                    className="text-left px-4 py-3"
                    style={{ color: 'var(--color-text-gray)', fontSize: '13px', fontWeight: 600 }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-4 py-12 text-center" style={{ color: 'var(--color-text-gray)' }}>
                    Loading…
                  </td>
                </tr>
              ) : responses.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-12 text-center" style={{ color: 'var(--color-text-gray)' }}>
                    No survey responses found.
                  </td>
                </tr>
              ) : (
                responses.map((r, i) => (
                  <tr
                    key={r.id}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'var(--color-background)' : 'var(--color-card)',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    <td className="px-4 py-3" style={{ color: 'var(--color-text-gray)', fontSize: '14px', whiteSpace: 'nowrap' }}>
                      {new Date(r.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-4 py-3" style={{ color: 'var(--color-text-white)', fontSize: '14px' }}>
                      {r.customerName}
                    </td>
                    <td className="px-4 py-3">
                      <StarDisplay rating={r.starRating} />
                    </td>
                    <td className="px-4 py-3" style={{ color: 'var(--color-text-gray)', fontSize: '14px', maxWidth: 400 }}>
                      {r.comment || <span style={{ fontStyle: 'italic', opacity: 0.5 }}>No comment</span>}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {meta && meta.totalPages > 1 && (
          <div className="flex items-center justify-between">
            <p style={{ color: 'var(--color-text-gray)', fontSize: '14px' }}>
              Page {meta.page} of {meta.totalPages} &middot; {meta.total} total
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="flex items-center gap-1 px-3 py-2 rounded-lg"
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: page <= 1 ? 'var(--color-text-gray)' : 'var(--color-text-white)',
                  cursor: page <= 1 ? 'not-allowed' : 'pointer',
                  opacity: page <= 1 ? 0.5 : 1,
                }}
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <button
                onClick={() => setPage(p => Math.min(meta.totalPages, p + 1))}
                disabled={page >= meta.totalPages}
                className="flex items-center gap-1 px-3 py-2 rounded-lg"
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  color: page >= meta.totalPages ? 'var(--color-text-gray)' : 'var(--color-text-white)',
                  cursor: page >= meta.totalPages ? 'not-allowed' : 'pointer',
                  opacity: page >= meta.totalPages ? 0.5 : 1,
                }}
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
