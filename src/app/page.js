import Link from 'next/link';
import Navbar from '../components/Navbar';
import WorkerCard from '../components/WorkerCard';
import { WORKERS, CATEGORIES } from '../lib/mockData';

const STATS = [
  { label: 'Active Workers', value: '1,200+', icon: '👷' },
  { label: 'Happy Customers', value: '8,000+', icon: '😊' },
  { label: 'Bookings Completed', value: '25,000+', icon: '✅' },
  { label: 'Cities Covered', value: '15+', icon: '🏙️' },
];

const TESTIMONIALS = [
  { name: 'Rahul Verma', text: 'Sahayak made finding a reliable plumber so easy. Ahmed fixed our issues in no time!', rating: 5 },
  { name: 'Pooja Mehta', text: 'Sunita has been our house maid for 6 months now, found through Sahayak. Absolutely trustworthy!', rating: 5 },
  { name: 'Sanjay Puri', text: 'The booking process is seamless and the quality of workers is outstanding.', rating: 5 },
];

const BROWSE_CATEGORIES = [
  { name: 'Plumbers', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=400&q=80', count: '120+ workers' },
  { name: 'Cooks', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80', count: '85+ workers' },
  { name: 'Tutors', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80', count: '200+ workers' },
  { name: 'Electricians', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80', count: '95+ workers' },
];

const TOP_WORKERS = WORKERS.filter(w => w.rating >= 4.7).slice(0, 3);

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '0' }}>

        {/* ===== HERO SECTION ===== */}
        <section style={{
          position: 'relative',
          background: 'var(--hero-gradient)',
          padding: '5rem 1rem 7rem 1rem',
          textAlign: 'center',
          color: 'white',
          overflow: 'hidden',
          transition: 'background 0.4s ease'
        }}>
          {/* Animated floating shapes */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '10%', left: '5%', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', animation: 'heroFloat1 8s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', top: '60%', right: '8%', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', animation: 'heroFloat2 10s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', top: '30%', right: '25%', width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', animation: 'heroFloat3 7s ease-in-out infinite', transform: 'rotate(45deg)' }} />
            <div style={{ position: 'absolute', bottom: '20%', left: '15%', width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.04)', animation: 'heroFloat1 9s ease-in-out infinite reverse', transform: 'rotate(30deg)' }} />
            <div style={{ position: 'absolute', top: '15%', left: '40%', width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(6,182,212,0.15)', animation: 'heroFloat2 6s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', bottom: '35%', right: '15%', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(245,158,11,0.1)', animation: 'heroFloat3 11s ease-in-out infinite' }} />
            {/* Gradient orbs */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', animation: 'heroFloat2 12s ease-in-out infinite' }} />
            <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', animation: 'heroFloat1 14s ease-in-out infinite' }} />
          </div>

          <p style={{ position: 'relative', zIndex: 1, fontSize: '0.9rem', fontWeight: 500, marginBottom: '1rem', opacity: 0.85, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Trusted by 8,000+ Households
          </p>
          <h1 style={{ position: 'relative', zIndex: 1, fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, marginBottom: '1.2rem', letterSpacing: '-1px', lineHeight: 1.15, color: 'white' }}>
            Find Trusted Workers<br />In Your Area
          </h1>
          <p style={{ position: 'relative', zIndex: 1, fontSize: '1.15rem', maxWidth: '550px', margin: '0 auto 2.5rem auto', opacity: 0.85, lineHeight: 1.6, color: 'white' }}>
            Book verified maids, plumbers, electricians, cooks & tutors — instantly and safely.
          </p>

          {/* Search Bar */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            maxWidth: '650px',
            margin: '0 auto',
            background: 'var(--surface)',
            borderRadius: 'var(--radius-full)',
            padding: '0.4rem 0.5rem 0.4rem 1.2rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>🔍</span>
            <input
              type="text"
              placeholder="Search for services..."
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                padding: '0.7rem 0.5rem',
                fontSize: '1rem',
                outline: 'none',
                color: 'var(--text)'
              }}
            />
            <Link href="/search" className="btn btn-primary" style={{ borderRadius: 'var(--radius-full)', padding: '0.65rem 1.5rem' }}>
              Search
            </Link>
          </div>

          {/* Category Bubbles */}
          <div style={{
            position: 'absolute',
            bottom: '-35px',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '1.2rem',
            flexWrap: 'wrap',
            padding: '0 1rem'
          }}>
            {CATEGORIES.filter(c => c.value !== 'more').map(cat => (
              <Link key={cat.name} href={`/search?category=${cat.value}`} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                  <div className="animate-float" style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '50%',
                    background: 'var(--surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                    border: '2px solid var(--border)',
                    transition: 'var(--transition)'
                  }}>
                    {cat.icon}
                  </div>
                  <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.8rem' }}>{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* ===== STATS SECTION ===== */}
          <section style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {STATS.map(stat => (
                <div key={stat.label} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== TOP WORKERS ===== */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 className="section-heading">Top Workers in Your Area</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              {TOP_WORKERS.map(worker => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/search" className="btn btn-secondary">View All Workers →</Link>
            </div>
          </section>

          {/* ===== HOW IT WORKS ===== */}
          <section style={{ marginBottom: '4rem', padding: '3rem 0' }}>
            <h2 className="section-heading" style={{ textAlign: 'center', display: 'block' }}>How It Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginTop: '2.5rem', textAlign: 'center' }}>
              {[
                { step: '1', icon: '🔍', title: 'Search', desc: 'Browse workers by category, location, or skill.' },
                { step: '2', icon: '📋', title: 'Compare', desc: 'View profiles, ratings, and reviews to find the best fit.' },
                { step: '3', icon: '📅', title: 'Book', desc: 'Select a date and time that works for you.' },
                { step: '4', icon: '⭐', title: 'Review', desc: 'Rate your experience and help the community.' },
              ].map(item => (
                <div key={item.step} className="glass-card" style={{ padding: '2rem 1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', margin: '0 auto 0.8rem auto' }}>{item.step}</div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== BROWSE BY CATEGORY ===== */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 className="section-heading">Browse by Category</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              {BROWSE_CATEGORIES.map(cat => (
                <Link key={cat.name} href="/search" style={{ textDecoration: 'none' }}>
                  <div className="glass-card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
                    <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                      <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.6) 100%)' }} />
                    </div>
                    <div style={{ padding: '1rem 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, color: 'var(--text)' }}>{cat.name}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cat.count}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ===== TESTIMONIALS ===== */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 className="section-heading">What Our Users Say</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ color: '#facc15', fontSize: '1.1rem', marginBottom: '0.8rem', letterSpacing: '2px' }}>★★★★★</div>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 1rem 0' }}>&ldquo;{t.text}&rdquo;</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem' }}>{t.name.charAt(0)}</div>
                    <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.9rem' }}>{t.name}</span>
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
