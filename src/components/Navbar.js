"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { useAuth } from './AuthProvider';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout, loading } = useAuth();

  return (
    <nav style={{
      padding: '1.2rem 2rem',
      background: 'var(--surface)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      transition: 'var(--transition)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 15px rgba(37,99,235,0.2)'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'serif' }}>S</span>
          </div>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.5px' }}>Sahayak</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden-mobile" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <Link href="/search" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'var(--transition-fast)' }}>Services</Link>
          <Link href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'var(--transition-fast)' }}>How it Works</Link>
          
          <div style={{ width: '1px', height: '24px', background: 'var(--border)' }}></div>
          
          <button onClick={toggleTheme} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', transition: 'var(--transition)' }}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {!loading && !user && (
            <Link href="/auth/login" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: 'var(--radius-full)' }}>
              Login / Register
            </Link>
          )}

          {!loading && user && (
            <div style={{ position: 'relative' }}>
              <div 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer', padding: '0.3rem 0.8rem 0.3rem 0.3rem', borderRadius: 'var(--radius-full)', background: 'var(--bg-secondary)', border: '1px solid var(--border)', transition: 'var(--transition-fast)' }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), #06b6d4)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>{user.name.split(' ')[0]}</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)' }}>▼</span>
              </div>

              {isProfileOpen && (
                <div style={{ position: 'absolute', top: 'calc(100% + 0.5rem)', right: 0, width: '200px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', flexDirection: 'column', zIndex: 200 }} className="animate-fade-in">
                  <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>{user.name}</p>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'capitalize' }}>{user.role}</p>
                  </div>
                  
                  {user.role === 'admin' && (
                    <Link href="/dashboard/admin" style={{ padding: '0.8rem 1rem', textDecoration: 'none', color: 'var(--text)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setIsProfileOpen(false)}>📊 Admin Panel</Link>
                  )}
                  {user.role === 'worker' && (
                    <Link href="/dashboard/worker" style={{ padding: '0.8rem 1rem', textDecoration: 'none', color: 'var(--text)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setIsProfileOpen(false)}>👷 Worker Dashboard</Link>
                  )}
                  {user.role === 'user' && (
                    <Link href="/search" style={{ padding: '0.8rem 1rem', textDecoration: 'none', color: 'var(--text)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={() => setIsProfileOpen(false)}>🔍 Find Workers</Link>
                  )}
                  
                  <button onClick={() => { logout(); setIsProfileOpen(false); }} style={{ padding: '0.8rem 1rem', background: 'transparent', border: 'none', borderTop: '1px solid var(--border)', textAlign: 'left', color: '#ef4444', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'inherit' }}>
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-only"
          style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', display: 'none', color: 'var(--text)' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-only" style={{ padding: '1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid var(--border)', marginTop: '1rem' }}>
          <Link href="/search" style={{ color: 'var(--text)' }}>Services</Link>
          {user && user.role === 'worker' && <Link href="/dashboard/worker" style={{ color: 'var(--text)' }}>Worker Portal</Link>}
          {user && user.role === 'admin' && <Link href="/dashboard/admin" style={{ color: 'var(--text)' }}>Admin Panel</Link>}
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0, color: 'var(--text)' }}>
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          {!user ? (
            <Link href="/auth/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Login / Register</Link>
          ) : (
            <button onClick={logout} style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0, color: '#ef4444', fontWeight: 600 }}>Logout</button>
          )}
        </div>
      )}
    </nav>
  );
}
