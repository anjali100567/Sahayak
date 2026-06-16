"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { useAuth } from '../../../components/AuthProvider';

export default function LoginPage() {
  const { login } = useAuth();
  const [method, setMethod] = useState('email'); // 'email' or 'phone'
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await login(identifier, password);
    if (!res.success) {
      setError(res.error || 'Failed to login');
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border)',
    background: 'var(--bg-secondary)',
    color: 'var(--text)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        
        <div className="glass-card" style={{ padding: '3rem 2.5rem', width: '100%', maxWidth: '420px' }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', textAlign: 'center' }}>Welcome Back</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>Sign in to continue to Sahayak</p>

          {/* Tabs */}
          <div style={{ display: 'flex', marginBottom: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', padding: '0.3rem' }}>
            <button
              onClick={() => { setMethod('email'); setIdentifier(''); setError(''); }}
              style={{ flex: 1, padding: '0.6rem', border: 'none', borderRadius: '4px', background: method === 'email' ? 'var(--surface)' : 'transparent', color: method === 'email' ? 'var(--text)' : 'var(--text-muted)', fontWeight: method === 'email' ? 600 : 500, cursor: 'pointer', boxShadow: method === 'email' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none', transition: 'var(--transition-fast)' }}
            >
              Email
            </button>
            <button
              onClick={() => { setMethod('phone'); setIdentifier(''); setError(''); }}
              style={{ flex: 1, padding: '0.6rem', border: 'none', borderRadius: '4px', background: method === 'phone' ? 'var(--surface)' : 'transparent', color: method === 'phone' ? 'var(--text)' : 'var(--text-muted)', fontWeight: method === 'phone' ? 600 : 500, cursor: 'pointer', boxShadow: method === 'phone' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none', transition: 'var(--transition-fast)' }}
            >
              Phone
            </button>
          </div>

          {error && (
            <div style={{ padding: '0.8rem', borderRadius: 'var(--radius-sm)', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', marginBottom: '1.5rem', fontSize: '0.85rem', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {method === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <input
                type={method === 'email' ? 'email' : 'tel'}
                required
                placeholder={method === 'email' ? 'you@example.com' : '9876543210'}
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Password</label>
                <Link href="#" style={{ fontSize: '0.8rem', color: 'var(--primary)', textDecoration: 'none' }}>Forgot?</Link>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem', borderRadius: 'var(--radius-sm)', justifyContent: 'center' }}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Don't have an account? <Link href="/auth/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Sign Up</Link>
          </p>
          
          <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <strong>Demo Accounts:</strong><br/>
            Admin: admin@sahayak.in / password123<br/>
            Worker: rajesh@example.com / password123<br/>
            User: rahul@example.com / password123
          </div>
        </div>
      </main>
    </>
  );
}
