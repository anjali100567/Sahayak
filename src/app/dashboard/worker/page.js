"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function WorkerDashboard() {
  const [activeTab, setActiveTab] = useState('jobs');

  const jobs = [
    { id: 'LH-A12B34', user: 'Rahul Verma', service: 'Plumbing Repair', date: 'Today, 2:00 PM', status: 'Upcoming', amount: '$45.00' },
    { id: 'LH-X98Y76', user: 'Priya Sharma', service: 'Pipe Installation', date: 'Tomorrow, 10:00 AM', status: 'Pending', amount: '$120.00' },
    { id: 'LH-M55N44', user: 'Amit Patel', service: 'Leak Fix', date: 'Yesterday', status: 'Completed', amount: '$30.00' },
  ];

  const tabStyle = (isActive) => ({
    flex: 1,
    padding: '1rem',
    border: 'none',
    background: isActive ? 'var(--surface)' : 'transparent',
    fontWeight: isActive ? 700 : 500,
    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
    cursor: 'pointer',
    borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
    transition: 'var(--transition-fast)',
    fontSize: '0.95rem',
    fontFamily: 'inherit'
  });

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '1000px', paddingTop: '1.5rem' }}>

        <Link href="/" className="btn btn-secondary" style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '1.8rem' }}>Worker Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Welcome, Rajesh!</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), #06b6d4)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>RK</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>This Month</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--success)', margin: 0 }}>$845</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Jobs Done</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>24</p>
          </div>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Rating</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 800, color: '#facc15', margin: 0 }}>4.8 ★</p>
          </div>
        </div>

        <div className="glass-card" style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'var(--bg-secondary)' }}>
            <button onClick={() => setActiveTab('jobs')} style={tabStyle(activeTab === 'jobs')}>My Jobs</button>
            <button onClick={() => setActiveTab('profile')} style={tabStyle(activeTab === 'profile')}>Profile</button>
            <button onClick={() => setActiveTab('payments')} style={tabStyle(activeTab === 'payments')}>Payments</button>
          </div>

          <div style={{ padding: '2rem' }}>
            {activeTab === 'jobs' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {jobs.map(job => (
                  <div key={job.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg)', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <p style={{ fontWeight: 600, margin: '0 0 0.2rem 0' }}>{job.service} — {job.user}</p>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{job.date} · {job.id}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontWeight: 700 }}>{job.amount}</span>
                      <span className={`badge ${job.status === 'Completed' ? 'badge-available' : job.status === 'Pending' ? 'badge-busy' : 'badge-verified'}`}>{job.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'profile' && (
              <div style={{ maxWidth: '450px' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Profile Settings</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" placeholder="Full Name" defaultValue="Rajesh Kumar" style={{ padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', color: 'var(--text)', fontFamily: 'inherit' }} />
                  <input type="number" placeholder="Hourly Rate" defaultValue="20" style={{ padding: '0.75rem', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)', color: 'var(--text)', fontFamily: 'inherit' }} />
                  <button className="btn btn-primary" style={{ borderRadius: 'var(--radius-sm)' }}>Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div>
                <h3 style={{ marginBottom: '1rem' }}>Payment History</h3>
                <p style={{ color: 'var(--text-muted)' }}>View your payout history and manage bank details.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
