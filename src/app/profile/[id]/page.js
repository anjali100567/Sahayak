import Link from 'next/link';
import Navbar from '../../../components/Navbar';

// Reuse mock data for now
const MOCK_WORKERS = {
  '1': {
    name: 'Rajesh Kumar',
    category: 'Electrician',
    yearsExperience: 5,
    rating: 4.8,
    reviewCount: 120,
    avatarUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 20,
    bio: 'Hi, I am Rajesh. I have been working as a professional electrician for over 5 years. I specialize in residential wiring, fault finding, and appliance installation. Safety and quality are my top priorities.',
    reviews: [
      { id: 1, user: 'Anita D.', rating: 5, comment: 'Rajesh was very professional and fixed our short circuit issue quickly.' },
      { id: 2, user: 'Sanjay P.', rating: 4, comment: 'Good work, arrived slightly late but the job was done well.' }
    ]
  },
  '2': {
    name: 'Sunita Sharma',
    category: 'Maid',
    yearsExperience: 8,
    rating: 4.9,
    reviewCount: 205,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    hourlyRate: 15,
    bio: 'Experienced housemaid providing deep cleaning, cooking, and general housekeeping services. I bring my own eco-friendly supplies upon request.',
    reviews: [
      { id: 1, user: 'Neha M.', rating: 5, comment: 'Sunita is a lifesaver. Extremely thorough and trustworthy.' }
    ]
  }
};

export default async function ProfilePage(props) {
  const params = await props.params;
  // Hardcode to worker 1 if not found for demo purposes
  const worker = MOCK_WORKERS[params.id] || MOCK_WORKERS['1'];

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
        
        {/* Back Link */}
        <Link href="/search" style={{ 
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
          <span>&larr;</span> Back to Search
        </Link>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          {/* Main Info Column */}
          <div style={{ flex: '1 1 600px' }}>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
              }}>
                <img src={worker.avatarUrl} alt={worker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              <div style={{ flex: 1, minWidth: '250px' }}>
                <h1 style={{ marginBottom: '0.5rem', color: 'var(--text-main)' }}>{worker.name}</h1>
                <p style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', fontWeight: 500, marginBottom: '0.5rem' }}>
                  {worker.category} • {worker.yearsExperience} Years Experience
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#facc15', fontSize: '1.2rem' }}>★</span>
                  <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>{worker.rating.toFixed(1)}</span>
                  <span style={{ color: 'var(--text-muted)' }}>({worker.reviewCount} Reviews)</span>
                </div>
                
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>About Me</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{worker.bio}</p>
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Recent Reviews</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {worker.reviews.map(review => (
                  <div key={review.id} className="glass" style={{ padding: '1.5rem', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 600 }}>{review.user}</span>
                      <span style={{ color: '#facc15' }}>{'★'.repeat(review.rating)}{'☆'.repeat(5-review.rating)}</span>
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <aside style={{ width: '100%', maxWidth: '350px' }}>
            <div className="glass-card" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
              <h3 style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>Booking Details</h3>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>Hourly Rate</span>
                <span style={{ fontWeight: 700, color: 'var(--primary-dark)' }}>${worker.hourlyRate}/hr</span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-block', padding: '0.3rem 0.8rem', background: '#dcfce7', color: '#166534', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                  ● Available Today
                </span>
              </div>
              
              <Link href={`/book/${params.id}`} className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem', padding: '1rem' }}>
                Request Booking
              </Link>
              
              <button className="btn btn-secondary" style={{ width: '100%', padding: '1rem' }}>
                Message Worker
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
                You won't be charged yet.
              </p>
            </div>
          </aside>

        </div>
      </main>
    </>
  );
}
