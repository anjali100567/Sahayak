import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#cbd5e1', padding: '4rem 2rem 2rem', marginTop: 'auto' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        
        <div>
          <h4 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>Sahayak</h4>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#94a3b8' }}>
            Connecting households with trusted, verified local daily workers. Your community's reliable helping hands.
          </p>
        </div>

        <div>
          <h5 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Services</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="/search?category=maid" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Maids & Cleaning</Link></li>
            <li><Link href="/search?category=plumber" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Plumbers</Link></li>
            <li><Link href="/search?category=electrician" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Electricians</Link></li>
            <li><Link href="/search?category=cook" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Cooks</Link></li>
          </ul>
        </div>

        <div>
          <h5 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.1rem' }}>Support</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Help Center</Link></li>
            <li><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Trust & Safety</Link></li>
            <li><Link href="#" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #1e293b', fontSize: '0.85rem', color: '#64748b' }}>
        &copy; {new Date().getFullYear()} Sahayak. All rights reserved.
      </div>
    </footer>
  );
}
