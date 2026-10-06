import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export interface StaffMember {
  id: string;
  name: string;
}

interface Staff2StaffManagerProps {
  staff: StaffMember[];
  // Called with the server's response so the list updates before the SSE broadcast arrives
  onStaffChange: (updater: (prev: StaffMember[]) => StaffMember[]) => void;
}

export function Staff2StaffManager({ staff, onStaffChange }: Staff2StaffManagerProps) {
  const [newName, setNewName] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Remove takes two clicks: first arms the row, second confirms
  const [pendingRemoveId, setPendingRemoveId] = useState<string | null>(null);

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
      onStaffChange(prev =>
        prev.some(s => s.id === json.data.id)
          ? prev
          : [...prev, json.data].sort((a, b) => a.name.localeCompare(b.name))
      );
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

  return (
    <div>
      <h2 className="text-2xl mb-2" style={{ color: 'var(--color-text-white)' }}>
        Staff
      </h2>
      <p className="text-sm mb-6" style={{ color: 'var(--color-text-gray)' }}>
        These names appear in the — Assign — dropdown on queue cards. Changes show up on every open dashboard immediately.
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
        <div className="flex flex-wrap gap-3">
          {staff.map(member => {
            const armed = pendingRemoveId === member.id;
            return (
              <div
                key={member.id}
                className="flex items-center gap-2 pl-3 pr-1 py-1 rounded-lg"
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: armed ? '1px solid var(--color-error)' : '1px solid var(--color-border)',
                }}
              >
                <span style={{ color: 'var(--color-text-white)' }}>{member.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemove(member)}
                  onBlur={() => armed && setPendingRemoveId(null)}
                  title={armed ? `Click again to remove ${member.name}` : `Remove ${member.name}`}
                  className="flex items-center gap-1 px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: armed ? 'var(--color-error)' : 'transparent',
                    color: armed ? 'var(--color-text-white)' : 'var(--color-text-gray)',
                  }}
                >
                  {armed ? 'Remove?' : <X size={14} />}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
