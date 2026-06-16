import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default async function ConfirmationPage(props) {
  const params = await props.params;
  const bookingId = `LH-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>

        <div className="glass-card" style={{ padding: '3rem 2rem', maxWidth: '500px', width: '100%', textAlign: 'center' }}>

          <div style={{
            width: '80px',
            height: '80px',
            background: 'rgba(16, 185, 129, 0.1)',
            color: 'var(--success)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            margin: '0 auto 1.5rem auto',
            border: '2px solid var(--success)'
          }}>✓</div>

          <h1 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Booking Confirmed!</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
            Your request has been sent to the worker. They will confirm shortly.
          </p>

          <div style={{ background: 'var(--bg)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', marginBottom: '2rem', textAlign: 'left' }}>
            <p style={{ margin: '0 0 0.3rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Booking Reference</p>
            <p style={{ margin: '0 0 1.2rem 0', fontWeight: 700, fontSize: '1.2rem' }}>{bookingId}</p>

            <p style={{ margin: '0 0 0.3rem 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Status</p>
            <span className="badge badge-busy">Pending Confirmation</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <Link href="/" className="btn btn-primary" style={{ justifyContent: 'center', borderRadius: 'var(--radius-sm)', padding: '0.8rem' }}>
              Return to Home
            </Link>
            <Link href="/search" className="btn btn-secondary" style={{ justifyContent: 'center', borderRadius: 'var(--radius-sm)', padding: '0.8rem' }}>
              Browse More Workers
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
