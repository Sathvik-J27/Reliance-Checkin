import React, { useState } from 'react';
import { Plus, X, GripVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export interface StaffMember {
  id: string;
  name: string;
}

interface Staff2StaffManagerProps {
  staff: StaffMember[];
  // Called with the server's response so the list updates before the SSE broadcast arrives
  onStaffChange: (updater: (prev: StaffMember[]) => StaffMember[]) => void;
}

// The precompiled Tailwind CSS in index.css doesn't include flex-wrap / responsive
// grid utilities, so the layout lives here: 5 per row on desktop, fewer on smaller screens.
const STAFF_GRID_CSS = `
.staff-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; }
@media (max-width: 1024px) { .staff-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
@media (max-width: 800px)  { .staff-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 600px)  { .staff-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 380px)  { .staff-grid { grid-template-columns: minmax(0, 1fr); } }
.staff-chip-btn { display: flex; align-items: center; justify-content: center; border-radius: 4px; padding: 4px; flex-shrink: 0; }
.staff-chip-btn:disabled { opacity: 0.25; cursor: default; }
`;

function moveItem<T>(list: T[], from: number, to: number): T[] {
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function Staff2StaffManager({ staff, onStaffChange }: Staff2StaffManagerProps) {
  const [newName, setNewName] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Remove takes two clicks: first arms the row, second confirms
  const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;

    setSaving(true);
    setError(null);
    try {
      const res = await fetch('/api/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      const json = await res.json();
      if (!json.success) {
        setError(json.error || 'Could not add staff member.');
        return;
      }
      // New staff go to the end of the list (matches the server's ordering)
      onStaffChange(prev => (prev.some(s => s.id === json.data.id) ? prev : [...prev, json.data]));
      setNewName('');
    } catch {
      setError('Could not add staff member. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleRemove = async (member: StaffMember) => {
    if (pendingRemoveId !== member.id) {
      setPendingRemoveId(member.id);
      return;
    }

    setPendingRemoveId(null);
    setError(null);
    try {
      const res = await fetch(`/api/staff/${member.id}`, { method: 'DELETE' });
      const json = await res.json();
      if (!json.success) {
        setError(json.error || `Could not remove ${member.name}.`);
        return;
      }
      onStaffChange(prev => prev.filter(s => s.id !== member.id));
    } catch {
      setError(`Could not remove ${member.name}. Please try again.`);
    }
  };

  const handleMove = async (from: number, to: number) => {
    if (to < 0 || to >= staff.length || from === to) return;

    const previous = staff;
    const reordered = moveItem(staff, from, to);
    onStaffChange(() => reordered); // optimistic
    setError(null);
    try {
      const res = await fetch('/api/staff/order', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: reordered.map(s => s.id) }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.error);
    } catch {
      onStaffChange(() => previous);
      setError('Could not save the new order. Please try again.');
    }
  };

  const endDrag = () => {
    setDragIndex(null);
    setDragOverIndex(null);
  };

  return (
    <div>
      <style>{STAFF_GRID_CSS}</style>

      <h2 className="text-2xl mb-2" style={{ color: 'var(--color-text-white)' }}>
        Staff
      </h2>
      <p className="text-sm mb-6" style={{ color: 'var(--color-text-gray)' }}>
        These names appear in the — Assign — dropdown on queue cards, in this order. Drag a name (or use the arrows) to reorder.
        Changes show up on every open dashboard immediately.
      </p>

      {/* Add staff */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-4">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New staff member name"
          maxLength={100}
          className="flex-1 rounded-lg"
          style={{
            padding: '12px 16px',
            backgroundColor: 'var(--color-card)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-white)',
            fontSize: '15px',
            minWidth: 0,
          }}
        />
        <button
          type="submit"
          disabled={saving || !newName.trim()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap"
          style={{
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-background)',
            opacity: saving || !newName.trim() ? 0.5 : 1,
          }}
        >
          <Plus size={18} />
          Add
        </button>
      </form>

      {error && (
        <p className="text-sm mb-4" style={{ color: 'var(--color-error)' }}>
          {error}
        </p>
      )}

      {/* Staff list */}
      {staff.length === 0 ? (
        <div
          className="text-center py-12 rounded-lg"
          style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)' }}
        >
          <p style={{ color: 'var(--color-text-gray)' }}>No staff members yet</p>
        </div>
      ) : (
        <div className="staff-grid">
          {staff.map((member, index) => {
            const armed = pendingRemoveId === member.id;
            const isDragOver = dragOverIndex === index && dragIndex !== null && dragIndex !== index;
            return (
              <div
                key={member.id}
                draggable
                onDragStart={(e) => {
                  setDragIndex(index);
                  e.dataTransfer.effectAllowed = 'move';
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  if (dragOverIndex !== index) setDragOverIndex(index);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  if (dragIndex !== null) handleMove(dragIndex, index);
                  endDrag();
                }}
                onDragEnd={endDrag}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  minWidth: 0,
                  padding: '6px 4px 6px 6px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-card)',
                  border: armed
                    ? '1px solid var(--color-error)'
                    : isDragOver
                      ? '1px solid var(--color-gold)'
                      : '1px solid var(--color-border)',
                  opacity: dragIndex === index ? 0.4 : 1,
                  cursor: 'grab',
                }}
              >
                <GripVertical size={16} style={{ color: 'var(--color-text-gray)', flexShrink: 0 }} />
                <span
                  title={member.name}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: 'var(--color-text-white)',
                  }}
                >
                  {member.name}
                </span>

                {armed ? (
                  <button
                    type="button"
                    onClick={() => handleRemove(member)}
                    onBlur={() => setPendingRemoveId(null)}
                    autoFocus
                    title={`Click again to remove ${member.name}`}
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{ backgroundColor: 'var(--color-error)', color: 'var(--color-text-white)', flexShrink: 0 }}
                  >
                    Remove?
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => handleMove(index, index - 1)}
                      disabled={index === 0}
                      title="Move earlier"
                      className="staff-chip-btn"
                      style={{ color: 'var(--color-text-gray)' }}
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMove(index, index + 1)}
                      disabled={index === staff.length - 1}
                      title="Move later"
                      className="staff-chip-btn"
                      style={{ color: 'var(--color-text-gray)' }}
                    >
                      <ChevronRight size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemove(member)}
                      title={`Remove ${member.name}`}
                      className="staff-chip-btn"
                      style={{ color: 'var(--color-text-gray)' }}
                    >
                      <X size={14} />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
