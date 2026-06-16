import Link from 'next/link';

export default function WorkerCard({ worker }) {
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < full; i++) stars += '★';
    if (half) stars += '☆';
    return stars;
  };

  return (
    <div className="glass-card" style={{
      padding: '1.2rem',
      display: 'flex',
      gap: '1.2rem',
      alignItems: 'stretch',
      cursor: 'default'
    }}>
      {/* Worker Photo */}
      <div style={{
        width: '110px',
        minHeight: '130px',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative'
      }}>
        {worker.avatarUrl ? (
          <img src={worker.avatarUrl} alt={worker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Photo</div>
        )}
        {/* Verified Badge */}
        {worker.verified && (
          <div style={{
            position: 'absolute',
            top: '6px',
            right: '6px',
            background: 'rgba(37, 99, 235, 0.9)',
            color: 'white',
            borderRadius: '50%',
            width: '22px',
            height: '22px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
          }}>✓</div>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '0.3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>{worker.name}</h3>
        </div>

        <p style={{ margin: 0, color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>
          {worker.categoryLabel || worker.category}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
          <span style={{ color: '#facc15', letterSpacing: '1px' }}>{renderStars(worker.rating)}</span>
          <span style={{ fontWeight: 600 }}>{worker.rating}</span>
          <span>·</span>
          <span>{worker.reviewCount} reviews</span>
          <span>·</span>
          <span>{worker.yearsExperience}y exp</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', marginTop: '0.1rem' }}>
          {worker.availability === 'available' ? (
            <span className="badge badge-available"><span className="pulse-dot"></span> Available</span>
          ) : (
            <span className="badge badge-busy">Busy</span>
          )}
          <span style={{ color: 'var(--text-muted)' }}>· ${worker.hourlyRate}/hr</span>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem' }}>
          <button className="btn btn-secondary" style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)' }}>
            ✆ Call
          </button>
          <Link href={`/profile/${worker.id}`} className="btn btn-primary" style={{ padding: '0.35rem 0.7rem', fontSize: '0.8rem', borderRadius: 'var(--radius-sm)' }}>
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
