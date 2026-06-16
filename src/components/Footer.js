"use client";

import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer style={{
      position: 'relative',
      marginTop: 'auto',
      overflow: 'hidden',
      transition: 'var(--transition)'
    }}>
      {/* Animated Gradient Top Strip */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(90deg, #2563eb, #06b6d4, #8b5cf6, #f59e0b, #2563eb)',
        backgroundSize: '300% 100%',
        animation: 'gradientMove 5s ease infinite'
      }} />

      {/* Wave SVG Separator */}
      <div style={{ background: 'var(--bg)', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill={theme === 'dark' ? '#0f172a' : '#0f172a'} />
        </svg>
      </div>

      {/* Main Footer Body */}
      <div style={{
        background: '#0f172a',
        padding: '3rem 2rem 2rem',
        color: '#cbd5e1'
      }}>
        {/* Background floating elements */}
        <div style={{ position: 'absolute', top: '30%', left: '5%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

          {/* Top Row — Logo + Newsletter */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem', paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ maxWidth: '380px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 4px 15px rgba(37,99,235,0.3)'
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.3rem', fontFamily: 'serif' }}>S</span>
                </div>
                <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', letterSpacing: '-0.5px' }}>Sahayak</span>
              </div>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#94a3b8', margin: 0 }}>
                Your trusted platform for connecting with verified local daily workers. Building stronger communities, one service at a time.
              </p>
            </div>

            {/* Newsletter */}
            <div style={{ minWidth: '280px', maxWidth: '380px' }}>
              <h5 style={{ color: 'white', marginBottom: '0.6rem', fontSize: '1.05rem', fontWeight: 700 }}>Stay in the Loop</h5>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.8rem' }}>Get updates on new workers, features & offers.</p>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    flex: 1,
                    padding: '0.7rem 1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.05)',
                    color: 'white',
                    fontSize: '0.88rem',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
                <button style={{
                  padding: '0.7rem 1.2rem',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                  color: 'white',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(37,99,235,0.25)',
                  transition: 'transform 0.2s'
                }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
            <div>
              <h6 style={{ color: 'white', marginBottom: '1rem', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>Services</h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {[
                  { label: 'Maids & Cleaning', href: '/search?category=maid' },
                  { label: 'Plumbers', href: '/search?category=plumber' },
                  { label: 'Electricians', href: '/search?category=electrician' },
                  { label: 'Cooks & Chefs', href: '/search?category=cook' },
                  { label: 'Tutors', href: '/search?category=tutor' },
                ].map(item => (
                  <li key={item.label}>
                    <Link href={item.href} style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.6rem', color: '#475569' }}>›</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 style={{ color: 'white', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', fontWeight: 700 }}>Company</h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {['About Us', 'How It Works', 'Careers', 'Blog', 'Press'].map(item => (
                  <li key={item}>
                    <Link href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.6rem', color: '#475569' }}>›</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 style={{ color: 'white', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', fontWeight: 700 }}>Support</h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {['Help Center', 'Trust & Safety', 'Contact Us', 'FAQs', 'Report an Issue'].map(item => (
                  <li key={item}>
                    <Link href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.6rem', color: '#475569' }}>›</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 style={{ color: 'white', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', fontWeight: 700 }}>Contact</h6>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94a3b8', fontSize: '0.88rem' }}>
                  <span>📍</span> Green Park, New Delhi, India
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94a3b8', fontSize: '0.88rem' }}>
                  <span>📞</span> +91 98765 43210
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#94a3b8', fontSize: '0.88rem' }}>
                  <span>✉️</span> hello@sahayak.in
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{ margin: 0, fontSize: '0.82rem', color: '#475569' }}>
              &copy; {new Date().getFullYear()} Sahayak. All rights reserved.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { label: '𝕏', bg: 'rgba(255,255,255,0.05)' },
                { label: 'in', bg: 'rgba(255,255,255,0.05)' },
                { label: 'fb', bg: 'rgba(255,255,255,0.05)' },
                { label: 'ig', bg: 'rgba(255,255,255,0.05)' },
                { label: 'yt', bg: 'rgba(255,255,255,0.05)' },
              ].map(icon => (
                <a key={icon.label} href="#" style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: icon.bg,
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease'
                }}>{icon.label}</a>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.82rem' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map(item => (
                <Link key={item} href="#" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}>{item}</Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
