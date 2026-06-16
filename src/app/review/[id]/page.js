"use client";

import { useState, use } from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default function ReviewPage(props) {
  const params = use(props.params);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitting(true);

    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          workerId: params.id,
          userName: 'Anonymous User',
          rating,
          comment
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>

        <div className="glass-card" style={{ padding: '3rem 2rem', width: '100%', textAlign: 'center' }}>

          {submitted ? (
            <div>
              <div style={{ width: '80px', height: '80px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1.5rem auto', border: '2px solid var(--success)' }}>
                ✓
              </div>
              <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Review Submitted!</h1>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Thank you for your feedback! It helps keep our community safe and trusted.</p>
              <Link href="/" className="btn btn-primary">Return Home</Link>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Rate Your Experience</h1>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>How was the service provided?</p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem' }}>
                  {[...Array(5)].map((_, index) => {
                    const val = index + 1;
                    return (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setRating(val)}
                        onMouseEnter={() => setHover(val)}
                        onMouseLeave={() => setHover(0)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '2.8rem',
                          color: val <= (hover || rating) ? '#facc15' : 'var(--border)',
                          transition: 'color 0.15s, transform 0.15s',
                          transform: val <= (hover || rating) ? 'scale(1.15)' : 'scale(1)'
                        }}
                      >★</button>
                    );
                  })}
                </div>

                <div style={{ textAlign: 'left' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Leave a comment</label>
                  <textarea
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you liked or what could be improved..."
                    rows="4"
                    style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', fontSize: '0.95rem', color: 'var(--text)', fontFamily: 'inherit', background: 'var(--bg-secondary)' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={rating === 0 || submitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    fontSize: '1.05rem',
                    borderRadius: 'var(--radius-sm)',
                    opacity: rating === 0 ? 0.5 : 1,
                    cursor: rating === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
}
