"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const pendingApprovals = [
    { id: '1', name: 'Vikram Singh', category: 'Plumber', appliedOn: '2023-10-25', status: 'Pending Review' },
    { id: '2', name: 'Meera Das', category: 'Cook', appliedOn: '2023-10-26', status: 'Documents Required' }
  ];

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '1200px' }}>
        
        <Link href="/" style={{ 
          color: '#334155', 
          textDecoration: 'none', 
          display: 'inline-flex', 
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem', 
          fontWeight: 600,
          background: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
          <span>&larr;</span> Back to Home
        </Link>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', color: '#1e293b' }}>Platform Admin Panel</h1>
          <span style={{ background: '#ef4444', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600 }}>Super Admin</span>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #3b82f6' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Active Workers</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1e293b' }}>1,245</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #10b981' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Total Bookings (Monthly)</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1e293b' }}>8,430</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #f59e0b' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Pending Worker Approvals</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1e293b' }}>12</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', borderLeft: '4px solid #8b5cf6' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Platform Revenue (Est)</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1e293b' }}>$15,200</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Sidebar */}
          <aside style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button onClick={() => setActiveTab('overview')} style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'overview' ? '#e0e7ff' : 'transparent', border: 'none', borderRadius: '8px', color: activeTab === 'overview' ? '#1e40af' : '#64748b', fontWeight: 600, cursor: 'pointer' }}>
              📊 Overview
            </button>
            <button onClick={() => setActiveTab('workers')} style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'workers' ? '#e0e7ff' : 'transparent', border: 'none', borderRadius: '8px', color: activeTab === 'workers' ? '#1e40af' : '#64748b', fontWeight: 600, cursor: 'pointer' }}>
              👷 Worker Approvals
            </button>
            <button onClick={() => setActiveTab('reviews')} style={{ textAlign: 'left', padding: '1rem', background: activeTab === 'reviews' ? '#e0e7ff' : 'transparent', border: 'none', borderRadius: '8px', color: activeTab === 'reviews' ? '#1e40af' : '#64748b', fontWeight: 600, cursor: 'pointer' }}>
              ⭐ Moderation
            </button>
          </aside>

          {/* Content Area */}
          <section style={{ flex: 1, background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2rem' }}>
            
            {activeTab === 'overview' && (
              <div>
                <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>System Overview</h2>
                <p style={{ color: '#64748b' }}>Platform is running smoothly. All services operational.</p>
                
                <div style={{ height: '300px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', color: '#94a3b8' }}>
                  [Analytics Chart Placeholder]
                </div>
              </div>
            )}

            {activeTab === 'workers' && (
              <div>
                <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Worker Approvals</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                      <th style={{ padding: '1rem', color: '#334155' }}>Name</th>
                      <th style={{ padding: '1rem', color: '#334155' }}>Category</th>
                      <th style={{ padding: '1rem', color: '#334155' }}>Applied On</th>
                      <th style={{ padding: '1rem', color: '#334155' }}>Status</th>
                      <th style={{ padding: '1rem', color: '#334155' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingApprovals.map(worker => (
                      <tr key={worker.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '1rem', fontWeight: 500 }}>{worker.name}</td>
                        <td style={{ padding: '1rem', color: '#64748b' }}>{worker.category}</td>
                        <td style={{ padding: '1rem', color: '#64748b' }}>{worker.appliedOn}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ background: '#fef3c7', color: '#b45309', padding: '0.3rem 0.6rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600 }}>
                            {worker.status}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', display: 'flex', gap: '0.5rem' }}>
                          <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Approve</button>
                          <button style={{ background: 'white', border: '1px solid #cbd5e1', color: '#334155', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 500 }}>Review</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Flagged Reviews</h2>
                <p style={{ color: '#64748b' }}>No flagged reviews at this time.</p>
              </div>
            )}

          </section>
        </div>

      </main>
    </>
  );
}
