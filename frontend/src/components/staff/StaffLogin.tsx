import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import logo from 'figma:asset/5ebff9a217654d307f5ff0e6abe952a2f7edba47.png';

export interface CustomerLoginData {
  token: string;
  checkInId: string;
  customerName: string;
}

interface StaffLoginProps {
  onLogin: (username: string, role: 'staff' | 'pricing' | 'analysis' | 'staff2' | 'rating' | 'customer', customerData?: CustomerLoginData) => void;
}

export function StaffLogin({ onLogin }: StaffLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    if (!password.trim()) {
      setError('Password is required');
      return;
    }

    // Staff role checks
    if (username === 'staff' && password === 'reliance') {
      onLogin(username, 'staff');
    } else if (username === 'pricing' && password === 'reliance') {
      onLogin(username, 'pricing');
    } else if (username === 'analysis' && password === 'reliance') {
      onLogin(username, 'analysis');
    } else if (username === 'staff2' && password === 'reliance') {
      onLogin(username, 'staff2');
    } else if (
      ['katia', 'sarah', 'diane', 'sneha', 'dheeraj', 'ben', 'om', 'guest'].includes(username.toLowerCase()) &&
      password === 'Reliance159'
    ) {
      onLogin(username.toLowerCase(), 'staff2');
    } else if (username === 'rating' && password === 'Reliance33') {
      onLogin(username, 'rating');
    } else if (username === password && username.replace(/\D/g, '').length === 10) {
      // Customer login: phone number (any format) used as both username and password
      const digitsOnly = username.replace(/\D/g, '');
      setLoading(true);
      try {
        const response = await fetch('/api/customer/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: digitsOnly }),
        });
        const result = await response.json();
        if (!response.ok) {
          setError(result.error || 'No check-in found for this phone number.');
        } else {
          onLogin(username, 'customer', {
            token: result.data.authToken,
            checkInId: result.data.checkInId,
            customerName: result.data.customerName,
          });
        }
      } catch {
        setError('Login failed. Please check your connection and try again.');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="w-full max-w-md" style={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '48px' }}>
        <div className="text-center mb-8">
          <img src={logo} alt="Reliance Surfaces" className="w-24 h-24 mx-auto mb-4 object-contain" />
          <h1 style={{ color: 'var(--color-gold)' }}>Reliance Surfaces</h1>
          <p style={{ color: 'var(--color-text-gray)' }}>Login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-white)' }}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-lg"
              style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block mb-2" style={{ color: 'var(--color-text-white)' }}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg pr-12"
                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)', color: 'var(--color-text-white)' }}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-text-gray)' }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--color-error)' }}>
              <p className="text-center" style={{ color: 'var(--color-error)' }}>
                {error}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-lg"
            style={{ backgroundColor: 'var(--color-gold)', color: 'var(--color-background)', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>

        </form>
      </div>
    </div>
  );
}
