import React from 'react';

interface Staff2QueueItemProps {
  customer: any;
  currentUsername: string;
  onView: (customer: any) => void;
  onDone: (customerId: string) => void;
  onAttend: (customerId: string) => void;
}

export function Staff2QueueItem({ customer, currentUsername, onView, onDone, onAttend }: Staff2QueueItemProps) {
  const totalVisitors = (customer.partySize?.adults || 0) + (customer.partySize?.minors || 0);
  const isRevisit = customer.isRevisit === true;
  const attendingBy: string | null = customer.currentlyHelpedBy || null;
  const isAttendingByMe = attendingBy === currentUsername;
  const isAttendingByOther = attendingBy && !isAttendingByMe;

  const formatTime = (dateValue: any) => {
    if (!dateValue) return '';
    const d = new Date(dateValue);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className="p-4 rounded-lg"
      style={{
        backgroundColor: 'var(--color-card)',
        border: isAttendingByOther
          ? '1px solid rgba(212, 167, 54, 0.5)'
          : '1px solid var(--color-border)',
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left side: Initial + Customer Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Initial Circle */}
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0"
            style={{ backgroundColor: 'rgba(212, 167, 54, 0.2)', color: 'var(--color-gold)' }}
          >
            {customer.firstName?.charAt(0).toUpperCase() || '?'}
          </div>

          {/* Customer Info */}
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <p className="font-medium whitespace-nowrap" style={{ color: 'var(--color-text-white)' }}>
                {[customer.firstName, customer.lastName].filter(Boolean).join(' ')}
              </p>
              <p className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-gray)' }}>
                {customer.phones?.[0] || 'No phone'}
              </p>
              <span
                className="px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap"
                style={{
                  backgroundColor: isRevisit ? 'rgba(212, 167, 54, 0.2)' : 'rgba(59, 130, 246, 0.2)',
                  color: isRevisit ? 'var(--color-gold)' : '#3B82F6',
                }}
              >
                {isRevisit ? 'Revisiting' : 'First Time'}
              </span>
              <p className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-gray)' }}>
                👥 {totalVisitors} visitor{totalVisitors !== 1 ? 's' : ''}
              </p>
              {customer.checkInTime && (
                <p className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-gray)' }}>
                  🕐 {formatTime(customer.checkInTime)}
                </p>
              )}
            </div>
            {/* Attending by label */}
            {attendingBy && (
              <p className="text-xs" style={{ color: isAttendingByMe ? '#22C55E' : 'var(--color-gold)' }}>
                {isAttendingByMe ? '✓ You are attending' : `Being attended by ${attendingBy}`}
              </p>
            )}
          </div>
        </div>

        {/* Right side: Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Attend button */}
          <button
            onClick={() => !isAttendingByMe && onAttend(customer.id)}
            className="px-4 py-2 rounded-lg font-medium whitespace-nowrap"
            style={
              isAttendingByMe
                ? { backgroundColor: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22C55E', color: '#22C55E' }
                : isAttendingByOther
                ? { backgroundColor: 'rgba(212, 167, 54, 0.1)', border: '1px solid var(--color-border)', color: 'var(--color-gold)', cursor: 'default' }
                : { backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }
            }
          >
            {isAttendingByMe ? 'Attending' : isAttendingByOther ? 'Attending' : 'Attend'}
          </button>
          <button
            onClick={() => onView(customer)}
            className="px-4 py-2 rounded-lg font-medium whitespace-nowrap"
            style={{
              backgroundColor: 'var(--color-background)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-white)'
            }}
          >
            View
          </button>
          <button
            onClick={() => onDone(customer.id)}
            className="px-4 py-2 rounded-lg font-medium whitespace-nowrap"
            style={{
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-background)'
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
