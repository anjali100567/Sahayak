import Link from 'next/link';
import Navbar from '../components/Navbar';
import WorkerCard from '../components/WorkerCard';

const CATEGORIES = [
  { name: 'Maid', icon: '🏠', color: '#10b981' },
  { name: 'Plumber', icon: '🔧', color: '#3b82f6' },
  { name: 'Electrician', icon: '⚡', color: '#f59e0b' },
  { name: 'Cook', icon: '🧑‍🍳', color: '#10b981' },
  { name: 'Tutor', icon: '📝', color: '#ef4444' },
  { name: 'More', icon: '📋', color: '#3b82f6' },
];

const MOCK_WORKERS = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    category: 'Electrician',
    yearsExperience: 5,
    rating: 5,
    reviewCount: 120,
    avatarUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 20
  },
  {
    id: '2',
    name: 'Sunita Sharma',
    category: 'House Maid',
    yearsExperience: 5,
    rating: 4.6,
    reviewCount: 99,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 15
  },
  {
    id: '3',
    name: 'Ahmed Khan',
    category: 'Tutor',
    yearsExperience: 6,
    rating: 4.8,
    reviewCount: 45,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 30
  }
];

const BROWSE_CATEGORIES = [
  { name: 'Plumbers', image: 'https://images.unsplash.com/photo-1581092921461-7031e484c988?auto=format&fit=crop&w=300&q=80' },
  { name: 'Cooks', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=300&q=80' },
  { name: 'Gardeners', image: 'https://images.unsplash.com/photo-1416879598555-220b33230d74?auto=format&fit=crop&w=300&q=80' },
  { name: 'Electricians', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=300&q=80' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '4rem', background: '#f8fafc' }}>
        
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          background: 'linear-gradient(90deg, #4481c7 0%, #68a4e3 100%)', /* Blue gradient matching image */
          padding: '4rem 1rem 6rem 1rem',
          textAlign: 'center',
          color: 'white',
          marginBottom: '4rem'
        }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem' }}>
            Find Trusted Workers in Your Area
          </h1>
          
          {/* Search Bar matching mockup */}
          <div style={{
            display: 'flex',
            maxWidth: '700px',
            margin: '0 auto',
            background: 'white',
            borderRadius: '50px',
            padding: '0.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <span style={{ paddingLeft: '1rem', color: '#64748b', fontSize: '1.2rem' }}>🔍</span>
            <input 
              type="text" 
              placeholder="Search for services..." 
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                padding: '0.8rem',
                fontSize: '1rem',
                outline: 'none',
                color: '#334155'
              }}
            />
            <select style={{ 
              border: 'none', 
              background: '#f1f5f9',
              borderRadius: '20px',
              padding: '0.6rem 1rem',
              color: '#334155',
              fontWeight: 500,
              outline: 'none',
              cursor: 'pointer'
            }}>
              <option value="">All Services</option>
              <option value="maid">Maid</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="cook">Cook</option>
              <option value="tutor">Tutor</option>
            </select>
            <select style={{ 
              border: 'none', 
              background: '#f1f5f9',
              borderRadius: '20px',
              padding: '0.6rem 1rem',
              color: '#334155',
              fontWeight: 500,
              outline: 'none',
              cursor: 'pointer',
              marginRight: '0.5rem'
            }}>
              <option value="">Filters</option>
              <option value="rating">Top Rated</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
          </div>

          {/* Overlapping Categories */}
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {CATEGORIES.map(cat => (
              <div key={cat.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <Link href={`/search?category=${cat.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0',
                    color: cat.color
                  }}>
                    {cat.icon}
                  </div>
                </Link>
                <span style={{ fontWeight: 600, color: '#1e293b', fontSize: '0.9rem' }}>{cat.name}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
          
          {/* Top Workers Section */}
          <section style={{ marginBottom: '3rem', paddingTop: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1.5rem' }}>Top Workers in Your Area</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}>
              {MOCK_WORKERS.map(worker => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>
          </section>

          {/* Browse by Category Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#1e40af', marginBottom: '1.5rem' }}>Browse by Category</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}>
              {BROWSE_CATEGORIES.map(cat => (
                <div key={cat.name} style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  border: '1px solid #f1f5f9'
                }}>
                  <div style={{ height: '140px', overflow: 'hidden' }}>
                    <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1rem', fontWeight: 600, color: '#1e293b' }}>
                    {cat.name}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </main>
    </>
  );
}
