import React, { useState } from 'react';

interface Staff2LoginProps {
  onLogin: (username: string) => void;
}

export function Staff2Login({ onLogin }: Staff2LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'staff2' && password === 'reliance') {
      onLogin(username);
    } else {
      setError('Invalid credentials. Use staff2/reliance');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-md" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '32px' }}>
        <h1 className="text-center mb-2 text-3xl" style={{ color: 'var(--color-gold)' }}>
          Staff2 Login
        </h1>
        <p className="text-center mb-8" style={{ color: 'var(--color-text-gray)' }}>
          Queue Management
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 rounded-lg"
              style={{ 
                backgroundColor: 'var(--color-background)', 
                border: `1px solid ${error ? '#EF4444' : 'var(--color-border)'}`, 
                color: 'var(--color-text-white)' 
              }}
              placeholder="Enter username"
            />
          </div>

          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-gray)' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full px-4 py-3 rounded-lg"
              style={{ 
                backgroundColor: 'var(--color-background)', 
                border: `1px solid ${error ? '#EF4444' : 'var(--color-border)'}`, 
                color: 'var(--color-text-white)' 
              }}
              placeholder="Enter password"
            />
          </div>

          {error && (
            <div 
              className="p-3 rounded-lg"
              style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #EF4444' }}
            >
              <p style={{ color: '#EF4444', fontSize: '14px' }}>{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-lg"
            style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)' }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
