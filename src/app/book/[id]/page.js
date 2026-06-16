"use client";

import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import { WORKERS } from '../../../lib/mockData';

export default function BookingPage(props) {
  const params = use(props.params);
  const router = useRouter();
  const worker = WORKERS.find(w => w.id === params.id) || WORKERS[0];

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    address: '',
    paymentMethod: 'card'
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workerId: params.id,
          workerName: worker.name,
          serviceDate: `${formData.date}T${formData.time}`,
          address: formData.address,
          paymentMethod: formData.paymentMethod,
          totalAmount: worker.hourlyRate * 2
        })
      });
      router.push(`/confirmation/${params.id}`);
    } catch {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border)',
    fontSize: '0.95rem',
    color: 'var(--text)',
    background: 'var(--bg-secondary)',
    fontFamily: 'inherit'
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '800px', paddingTop: '1.5rem' }}>

        <Link href={`/profile/${params.id}`} className="btn btn-secondary" style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
          ← Back to Profile
        </Link>

        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Request Booking</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Book <strong style={{ color: 'var(--primary)' }}>{worker.name}</strong> ({worker.categoryLabel}) — You will not be charged until the service is completed.</p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Service Date</label>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} style={inputStyle} />
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Preferred Time</label>
                <input type="time" name="time" required value={formData.time} onChange={handleChange} style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Service Address</label>
              <textarea name="address" required value={formData.address} onChange={handleChange} placeholder="Enter your full address..." rows="3" style={inputStyle}></textarea>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Payment Method</label>
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} style={inputStyle}>
                <option value="card">Credit / Debit Card</option>
                <option value="upi">UPI (GPay, PhonePe)</option>
                <option value="cash">Cash on Completion</option>
              </select>
            </div>

            <div style={{ background: 'var(--bg)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Worker</span>
                <span style={{ fontWeight: 500 }}>{worker.name}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Estimated Duration</span>
                <span style={{ fontWeight: 500 }}>2 Hours</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700, marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <span>Total (Estimate)</span>
                <span style={{ color: 'var(--primary)' }}>${worker.hourlyRate * 2}.00</span>
              </div>
            </div>

            <button type="submit" disabled={submitting} className="btn btn-primary" style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.05rem',
              borderRadius: 'var(--radius-sm)',
              opacity: submitting ? 0.7 : 1
            }}>
              {submitting ? 'Processing...' : 'Confirm Booking Request'}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
