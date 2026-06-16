"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const pendingApprovals = [
    { id: '1', name: 'Vikram Singh', category: 'Plumber', appliedOn: '2024-10-25', status: 'Pending Review' },
    { id: '2', name: 'Meera Das', category: 'Cook', appliedOn: '2024-10-26', status: 'Documents Required' }
  ];

  const sidebarBtn = (tab, icon, label) => ({
    textAlign: 'left',
    padding: '0.8rem 1rem',
    background: activeTab === tab ? 'var(--primary-glow)' : 'transparent',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    color: activeTab === tab ? 'var(--primary)' : 'var(--text-secondary)',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'var(--transition-fast)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    fontFamily: 'inherit',
    width: '100%'
  });

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '1200px', paddingTop: '1.5rem' }}>

        <Link href="/" className="btn btn-secondary" style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.8rem' }}>Admin Panel</h1>
          <span className="badge" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', fontWeight: 700 }}>Super Admin</span>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {[
            { label: 'Active Workers', value: '1,245', color: 'var(--primary)', border: '#3b82f6' },
            { label: 'Monthly Bookings', value: '8,430', color: 'var(--success)', border: '#10b981' },
            { label: 'Pending Approvals', value: '12', color: '#f59e0b', border: '#f59e0b' },
            { label: 'Revenue (Est)', value: '$15.2K', color: '#8b5cf6', border: '#8b5cf6' },
          ].map(stat => (
            <div key={stat.label} className="glass-card" style={{ padding: '1.5rem', borderLeft: `4px solid ${stat.border}` }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{stat.label}</p>
              <p style={{ fontSize: '1.8rem', fontWeight: 800, color: stat.color, margin: 0 }}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Sidebar */}
          <aside style={{ width: '220px', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <button onClick={() => setActiveTab('overview')} style={sidebarBtn('overview', '📊', 'Overview')}>📊 Overview</button>
            <button onClick={() => setActiveTab('workers')} style={sidebarBtn('workers', '👷', 'Approvals')}>👷 Approvals</button>
            <button onClick={() => setActiveTab('reviews')} style={sidebarBtn('reviews', '⭐', 'Moderation')}>⭐ Moderation</button>
          </aside>

          {/* Content */}
          <section className="glass-card" style={{ flex: 1, padding: '2rem', minHeight: '400px' }}>
            {activeTab === 'overview' && (
              <div>
                <h2 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>System Overview</h2>
                <p style={{ color: 'var(--text-muted)' }}>Platform running smoothly. All services operational.</p>
                <div style={{ height: '250px', background: 'var(--bg)', border: '1px dashed var(--border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', color: 'var(--text-muted)' }}>
                  📊 Analytics Chart Placeholder
                </div>
              </div>
            )}

            {activeTab === 'workers' && (
              <div>
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Worker Approvals</h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                        <th style={{ padding: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Name</th>
                        <th style={{ padding: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Category</th>
                        <th style={{ padding: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Applied</th>
                        <th style={{ padding: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Status</th>
                        <th style={{ padding: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingApprovals.map(w => (
                        <tr key={w.id} style={{ borderBottom: '1px solid var(--border)' }}>
                          <td style={{ padding: '0.8rem', fontWeight: 600, fontSize: '0.9rem' }}>{w.name}</td>
                          <td style={{ padding: '0.8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{w.category}</td>
                          <td style={{ padding: '0.8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{w.appliedOn}</td>
                          <td style={{ padding: '0.8rem' }}>
                            <span className="badge badge-busy">{w.status}</span>
                          </td>
                          <td style={{ padding: '0.8rem', display: 'flex', gap: '0.4rem' }}>
                            <button className="btn btn-primary" style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)' }}>Approve</button>
                            <button className="btn btn-secondary" style={{ padding: '0.3rem 0.7rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)' }}>Review</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Flagged Reviews</h2>
                <p style={{ color: 'var(--text-muted)' }}>No flagged reviews at this time. ✅</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
