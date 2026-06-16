import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import { WORKERS, REVIEWS } from '../../../lib/mockData';

export default async function ProfilePage(props) {
  const params = await props.params;
  const worker = WORKERS.find(w => w.id === params.id) || WORKERS[0];
  const reviews = REVIEWS.filter(r => r.workerId === params.id);

  const renderStars = (rating) => {
    let stars = '';
    for (let i = 0; i < Math.floor(rating); i++) stars += '★';
    if (rating % 1 >= 0.5) stars += '☆';
    return stars;
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', paddingTop: '1.5rem' }}>

        <Link href="/search" className="btn btn-secondary" style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
          ← Back to Search
        </Link>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

          {/* Main Content */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: 'var(--radius)', overflow: 'hidden', flexShrink: 0, border: '3px solid var(--primary-glow)' }}>
                  <img src={worker.avatarUrl} alt={worker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.3rem' }}>
                    <h1 style={{ margin: 0, fontSize: '1.8rem' }}>{worker.name}</h1>
                    {worker.verified && <span className="badge badge-verified">✓ Verified</span>}
                  </div>
                  <p style={{ color: 'var(--primary)', fontWeight: 600, margin: '0 0 0.4rem 0', fontSize: '1.05rem' }}>{worker.categoryLabel}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#facc15' }}>{renderStars(worker.rating)} {worker.rating}</span>
                    <span>·</span>
                    <span>{worker.reviewCount} reviews</span>
                    <span>·</span>
                    <span>{worker.yearsExperience} years exp</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    {worker.availability === 'available' ? (
                      <span className="badge badge-available"><span className="pulse-dot"></span> Available Now</span>
                    ) : (
                      <span className="badge badge-busy">Currently Busy</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>About</h3>
              <p style={{ lineHeight: 1.8, margin: 0 }}>{worker.bio}</p>
            </div>

            {/* Skills */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Skills & Expertise</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {worker.skills.map(skill => (
                  <span key={skill} style={{ padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-full)', background: 'var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Languages</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {worker.languages.map(lang => (
                  <span key={lang} style={{ padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-full)', background: 'var(--primary-glow)', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>{lang}</span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ marginBottom: '1.5rem' }}>Reviews ({reviews.length})</h3>
              {reviews.length === 0 ? (
                <p style={{ color: 'var(--text-muted)' }}>No reviews yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {reviews.map(review => (
                    <div key={review.id} style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg)', border: '1px solid var(--border-light)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem' }}>{review.userName.charAt(0)}</div>
                          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{review.userName}</span>
                        </div>
                        <span style={{ color: '#facc15', fontSize: '0.85rem' }}>{renderStars(review.rating)}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>{review.comment}</p>
                      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{review.createdAt}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar — Booking */}
          <aside style={{ width: '100%', maxWidth: '320px' }}>
            <div className="glass-card" style={{ padding: '1.5rem', position: 'sticky', top: '80px' }}>
              <h3 style={{ marginBottom: '1rem' }}>Booking Details</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Hourly Rate</span>
                <span style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '1.1rem' }}>${worker.hourlyRate}/hr</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Location</span>
                <span style={{ fontWeight: 500 }}>{worker.location}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Phone</span>
                <span style={{ fontWeight: 500 }}>{worker.phone}</span>
              </div>
              <Link href={`/book/${worker.id}`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', borderRadius: 'var(--radius-sm)', padding: '0.8rem' }}>
                Request Booking
              </Link>
              <Link href={`/review/${worker.id}`} className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', borderRadius: 'var(--radius-sm)', padding: '0.8rem', marginTop: '0.8rem' }}>
                Write a Review
              </Link>
            </div>
          </aside>

        </div>
      </main>
    </>
  );
}
