"use client";

import { useState, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';

export default function ReviewPage(props) {
  const params = use(props.params);
  const router = useRouter();
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', maxWidth: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        
        <div style={{ background: '#ffffff', borderRadius: '12px', padding: '3rem 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', width: '100%', textAlign: 'center' }}>
          
          {submitted ? (
            <div>
              <div style={{ width: '80px', height: '80px', background: '#dcfce7', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', margin: '0 auto 1.5rem auto' }}>
                ✓
              </div>
              <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b' }}>Review Submitted</h1>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>Thank you for your feedback! It helps keep our community safe and trusted.</p>
              <Link href="/" style={{ background: '#2563eb', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, textDecoration: 'none' }}>
                Return Home
              </Link>
            </div>
          ) : (
            <>
              <h1 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: '#1e293b' }}>Rate Your Experience</h1>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>How was the service provided by the worker?</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Star Rating */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <button
                        type="button"
                        key={starValue}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '3rem',
                          color: starValue <= (hover || rating) ? '#facc15' : '#e2e8f0',
                          transition: 'color 0.2s'
                        }}
                      >
                        ★
                      </button>
                    );
                  })}
                </div>

                <div style={{ textAlign: 'left' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155' }}>Leave a comment</label>
                  <textarea 
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us what you liked or what could be improved..."
                    rows="4"
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', color: '#334155', fontFamily: 'inherit' }}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={rating === 0}
                  style={{ 
                    background: rating === 0 ? '#94a3b8' : '#2563eb', 
                    color: 'white', 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    fontSize: '1.1rem', 
                    fontWeight: 600, 
                    border: 'none', 
                    cursor: rating === 0 ? 'not-allowed' : 'pointer',
                    marginTop: '0.5rem',
                    transition: 'background 0.3s'
                  }}>
                  Submit Review
                </button>
              </form>
            </>
          )}
        </div>

      </main>
    </>
  );
}
