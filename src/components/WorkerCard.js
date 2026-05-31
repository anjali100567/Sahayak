import Link from 'next/link';

export default function WorkerCard({ worker }) {
  return (
    <div style={{ 
      background: '#ffffff', 
      borderRadius: '12px', 
      padding: '1rem', 
      display: 'flex', 
      gap: '1.2rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      border: '1px solid #f1f5f9',
      alignItems: 'stretch'
    }}>
      {/* Worker Photo */}
      <div style={{
        width: '100px',
        borderRadius: '8px',
        overflow: 'hidden',
        flexShrink: 0,
        position: 'relative'
      }}>
        {worker.avatarUrl ? (
          <img src={worker.avatarUrl} alt={worker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Photo</div>
        )}
      </div>

      {/* Info */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h3 style={{ margin: '0 0 0.2rem 0', fontSize: '1.1rem', color: '#1e293b', fontWeight: 700 }}>{worker.name}</h3>
        <p style={{ margin: '0 0 0.4rem 0', color: '#b45309', fontSize: '0.85rem', fontWeight: 500 }}>
          {worker.category}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.4rem', fontSize: '0.8rem', color: '#64748b' }}>
          <span style={{ color: '#facc15' }}>★★★★★</span>
          <span>{worker.yearsExperience} Years [{worker.reviewCount}] Experience</span>
        </div>

        <div style={{ color: '#16a34a', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.8rem' }}>
          4 Available Now)
        </div>
        
        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
          <button style={{ 
            padding: '0.4rem 0.8rem', 
            fontSize: '0.85rem', 
            background: 'white', 
            border: '1px solid #cbd5e1', 
            borderRadius: '6px', 
            cursor: 'pointer',
            fontWeight: 500,
            color: '#334155',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}>
            <span style={{ fontSize: '1rem' }}>✆</span> Call
          </button>
          <Link href={`/profile/${worker.id}`} style={{ 
            padding: '0.4rem 0.8rem', 
            fontSize: '0.85rem', 
            background: '#2563eb', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            textDecoration: 'none',
            fontWeight: 500,
            display: 'inline-block'
          }}>
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
