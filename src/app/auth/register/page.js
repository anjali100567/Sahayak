"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { useAuth } from '../../../components/AuthProvider';

export default function RegisterPage() {
  const { register } = useAuth();
  const [method, setMethod] = useState('email'); // 'email' or 'phone'
  const [role, setRole] = useState('user'); // 'user' or 'worker'
  
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await register(name, identifier, password, role);
    if (!res.success) {
      setError(res.error || 'Failed to register');
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
        
        <div className="glass-card" style={{ padding: '3rem 2.5rem', width: '100%', maxWidth: '450px' }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', textAlign: 'center' }}>Create an Account</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center', fontSize: '0.9rem' }}>Join Sahayak and get started today</p>

          {/* Role Selection */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <div 
              onClick={() => setRole('user')}
              style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-sm)', border: role === 'user' ? '2px solid var(--primary)' : '2px solid var(--border)', background: role === 'user' ? 'var(--primary-glow)' : 'var(--bg-secondary)', cursor: 'pointer', textAlign: 'center', transition: 'var(--transition-fast)' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🧑‍🦱</div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: role === 'user' ? 'var(--primary)' : 'var(--text)' }}>Customer</div>
            </div>
            <div 
              onClick={() => setRole('worker')}
              style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-sm)', border: role === 'worker' ? '2px solid var(--success)' : '2px solid var(--border)', background: role === 'worker' ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-secondary)', cursor: 'pointer', textAlign: 'center', transition: 'var(--transition-fast)' }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>👷‍♂️</div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: role === 'worker' ? 'var(--success)' : 'var(--text)' }}>Worker</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', marginBottom: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-sm)', padding: '0.3rem' }}>
            <button
              type="button"
              onClick={() => { setMethod('email'); setIdentifier(''); setError(''); }}
              style={{ flex: 1, padding: '0.6rem', border: 'none', borderRadius: '4px', background: method === 'email' ? 'var(--surface)' : 'transparent', color: method === 'email' ? 'var(--text)' : 'var(--text-muted)', fontWeight: method === 'email' ? 600 : 500, cursor: 'pointer', boxShadow: method === 'email' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none', transition: 'var(--transition-fast)' }}
            >
              Email
            </button>
            <button
              type="button"
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Full Name</label>
              <input type="text" required placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
            </div>
            
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Password</label>
              <input
                type="password"
                required
                placeholder="Create a strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
            </div>

            <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginTop: '0.5rem', borderRadius: 'var(--radius-sm)', justifyContent: 'center' }}>
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </form>

          <p style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Already have an account? <Link href="/auth/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
          </p>
        </div>
      </main>
    </>
  );
}
