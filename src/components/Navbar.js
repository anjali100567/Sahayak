"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      padding: '0.8rem 1.5rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{
          width: '36px',
          height: '36px',
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
          borderRadius: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 10px rgba(37,99,235,0.2)'
        }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'serif' }}>S</span>
        </div>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.5px' }}>
          Sahayak
        </span>
      </Link>

      {/* Center Links (Dashboards for easy access) */}
      <div className="hidden-mobile" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link href="/dashboard/worker" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#2563eb'} onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
          Worker Portal
        </Link>
        <Link href="/dashboard/admin" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#2563eb'} onMouseLeave={e => e.currentTarget.style.color = '#475569'}>
          Admin Panel
        </Link>
      </div>

      {/* Right Controls */}
      <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          border: '1px solid #cbd5e1', 
          borderRadius: '8px', 
          padding: '0.5rem 1rem',
          background: 'white',
          fontSize: '0.9rem',
          color: '#475569',
          minWidth: '220px',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
        }}>
          <span style={{ marginRight: '0.4rem' }}>📍</span> Location/Green Park, Delhi
        </div>
        
        <select style={{ 
          border: '1px solid #cbd5e1', 
          borderRadius: '8px', 
          padding: '0.5rem 1rem',
          background: 'white',
          fontSize: '0.9rem',
          color: '#334155',
          cursor: 'pointer',
          fontWeight: 500,
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
        }}>
          <option value="">All Services</option>
          <option value="maid">Maid</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="cook">Cook</option>
          <option value="tutor">Tutor</option>
        </select>
        
        <select style={{ 
          border: '1px solid #cbd5e1', 
          borderRadius: '8px', 
          padding: '0.5rem 1rem',
          background: 'white',
          fontSize: '0.9rem',
          color: '#334155',
          cursor: 'pointer',
          fontWeight: 500,
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)'
        }}>
          <option value="">Filters</option>
          <option value="rating">Top Rated</option>
          <option value="price_low">Price: Low to High</option>
          <option value="price_high">Price: High to Low</option>
        </select>
      </div>
    </nav>
  );
}
