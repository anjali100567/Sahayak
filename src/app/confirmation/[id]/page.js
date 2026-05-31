import Link from 'next/link';
import Navbar from '../../../components/Navbar';

export default async function ConfirmationPage(props) {
  const params = await props.params;
  // Mock booking details
  const bookingId = `LH-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        
        <div style={{ background: '#ffffff', borderRadius: '12px', padding: '3rem 2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
          
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: '#dcfce7', 
            color: '#16a34a', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '3rem',
            margin: '0 auto 1.5rem auto'
          }}>
            ✓
          </div>

          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1e293b' }}>Booking Confirmed!</h1>
          <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Your request has been successfully sent to the worker. They will review it and confirm shortly.
          </p>
          
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '2rem', textAlign: 'left' }}>
            <p style={{ margin: '0 0 0.5rem 0', color: '#64748b', fontSize: '0.9rem' }}>Booking Reference</p>
            <p style={{ margin: '0 0 1.5rem 0', fontWeight: 700, fontSize: '1.2rem', color: '#0f172a' }}>{bookingId}</p>

            <p style={{ margin: '0 0 0.5rem 0', color: '#64748b', fontSize: '0.9rem' }}>Worker</p>
            <p style={{ margin: '0 0 1.5rem 0', fontWeight: 600, color: '#334155' }}>Rajesh Kumar (Electrician)</p>

            <p style={{ margin: '0 0 0.5rem 0', color: '#64748b', fontSize: '0.9rem' }}>Service Date</p>
            <p style={{ margin: '0', fontWeight: 600, color: '#334155' }}>Pending Confirmation</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href={`/dashboard/user`} style={{ 
              background: '#2563eb', 
              color: 'white', 
              padding: '1rem', 
              borderRadius: '8px', 
              fontSize: '1rem', 
              fontWeight: 600, 
              border: 'none', 
              cursor: 'pointer',
              textDecoration: 'none'
            }}>
              Track Booking
            </Link>
            
            <Link href="/" style={{ 
              background: 'white', 
              color: '#334155', 
              padding: '1rem', 
              borderRadius: '8px', 
              fontSize: '1rem', 
              fontWeight: 600, 
              border: '1px solid #cbd5e1', 
              cursor: 'pointer',
              textDecoration: 'none'
            }}>
              Return to Home
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
