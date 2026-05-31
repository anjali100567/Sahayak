"use client";

import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';

export default function BookingPage(props) {
  const params = use(props.params);
  const router = useRouter();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    address: '',
    paymentMethod: 'card'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking process
    setTimeout(() => {
      router.push(`/confirmation/${params.id}`);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '800px' }}>
        
        <Link href={`/profile/${params.id}`} style={{ 
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
          <span>&larr;</span> Back to Profile
        </Link>

        <div style={{ background: '#ffffff', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#1e293b' }}>Request Booking</h1>
          <p style={{ color: '#64748b', marginBottom: '2rem' }}>Fill out the details below to book this service. You will not be charged until the service is completed.</p>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>Service Date</label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#334155' }} 
                />
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>Preferred Time</label>
                <input 
                  type="time" 
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#334155' }} 
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>Service Address</label>
              <textarea 
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address..."
                rows="3"
                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#334155', fontFamily: 'inherit' }}
              ></textarea>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>Payment Method</label>
              <select 
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#334155' }}
              >
                <option value="card">Credit / Debit Card</option>
                <option value="upi">UPI (GPay, PhonePe)</option>
                <option value="cash">Cash on Completion</option>
              </select>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ color: '#64748b' }}>Estimated Duration</span>
                <span style={{ fontWeight: 500, color: '#334155' }}>2 Hours</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700, marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #cbd5e1' }}>
                <span style={{ color: '#1e293b' }}>Total (Estimate)</span>
                <span style={{ color: '#2563eb' }}>$40.00</span>
              </div>
            </div>

            <button type="submit" style={{ 
              background: '#2563eb', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '8px', 
              fontSize: '1.1rem', 
              fontWeight: 600, 
              border: 'none', 
              cursor: 'pointer',
              marginTop: '1rem'
            }}>
              Confirm Booking Request
            </button>
          </form>

        </div>
      </main>
    </>
  );
}
