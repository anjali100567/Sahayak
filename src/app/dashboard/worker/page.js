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

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '1000px' }}>
        
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
          <h1 style={{ fontSize: '2rem', color: '#1e293b' }}>Worker Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 600, color: '#334155' }}>Welcome back, Rajesh!</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>RK</div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>This Month's Earnings</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#16a34a' }}>$845.00</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Jobs Completed</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#334155' }}>24</p>
          </div>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Overall Rating</p>
            <p style={{ fontSize: '1.8rem', fontWeight: 700, color: '#f59e0b' }}>4.8 ★</p>
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
            <button 
              onClick={() => setActiveTab('jobs')}
              style={{ flex: 1, padding: '1rem', border: 'none', background: activeTab === 'jobs' ? 'white' : 'transparent', fontWeight: activeTab === 'jobs' ? 600 : 500, color: activeTab === 'jobs' ? '#2563eb' : '#64748b', cursor: 'pointer', borderBottom: activeTab === 'jobs' ? '2px solid #2563eb' : 'none' }}>
              My Jobs
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              style={{ flex: 1, padding: '1rem', border: 'none', background: activeTab === 'profile' ? 'white' : 'transparent', fontWeight: activeTab === 'profile' ? 600 : 500, color: activeTab === 'profile' ? '#2563eb' : '#64748b', cursor: 'pointer', borderBottom: activeTab === 'profile' ? '2px solid #2563eb' : 'none' }}>
              Profile Settings
            </button>
            <button 
              onClick={() => setActiveTab('payments')}
              style={{ flex: 1, padding: '1rem', border: 'none', background: activeTab === 'payments' ? 'white' : 'transparent', fontWeight: activeTab === 'payments' ? 600 : 500, color: activeTab === 'payments' ? '#2563eb' : '#64748b', cursor: 'pointer', borderBottom: activeTab === 'payments' ? '2px solid #2563eb' : 'none' }}>
              Payments
            </button>
          </div>

          {/* Tab Content */}
          <div style={{ padding: '2rem' }}>
            {activeTab === 'jobs' && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Upcoming & Recent Jobs</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {jobs.map(job => (
                    <div key={job.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                      <div>
                        <p style={{ fontWeight: 600, color: '#334155', margin: '0 0 0.3rem 0' }}>{job.service} for {job.user}</p>
                        <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>{job.date} • Ref: {job.id}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <span style={{ fontWeight: 600, color: '#1e293b' }}>{job.amount}</span>
                        <span style={{ 
                          padding: '0.3rem 0.8rem', 
                          borderRadius: '50px', 
                          fontSize: '0.8rem', 
                          fontWeight: 600,
                          background: job.status === 'Upcoming' ? '#dbeafe' : job.status === 'Pending' ? '#fef3c7' : '#dcfce7',
                          color: job.status === 'Upcoming' ? '#1e40af' : job.status === 'Pending' ? '#b45309' : '#166534'
                        }}>
                          {job.status}
                        </span>
                        {job.status !== 'Completed' && (
                          <button className="btn btn-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>Action</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'profile' && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Profile Settings</h3>
                <p style={{ color: '#64748b' }}>Manage your public profile, availability, and services offered here.</p>
                {/* Form placeholder */}
                <div style={{ maxWidth: '500px', marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <input type="text" placeholder="Full Name" defaultValue="Rajesh Kumar" style={{ padding: '0.8rem', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
                  <input type="text" placeholder="Hourly Rate" defaultValue="20" style={{ padding: '0.8rem', border: '1px solid #cbd5e1', borderRadius: '6px' }} />
                  <button className="btn btn-primary">Save Changes</button>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div>
                <h3 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Payment History</h3>
                <p style={{ color: '#64748b' }}>View your payout history and manage your bank details.</p>
              </div>
            )}
          </div>

        </div>

      </main>
    </>
  );
}
