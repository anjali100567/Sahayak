"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import WorkerCard from '../../components/WorkerCard';

export default function SearchPage() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    minRating: 1,
    maxPrice: '',
    search: ''
  });

  const fetchWorkers = async () => {
    setLoading(true);
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.minRating > 1) params.set('minRating', filters.minRating);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    if (filters.search) params.set('search', filters.search);

    try {
      const res = await fetch(`/api/workers?${params.toString()}`);
      const data = await res.json();
      setWorkers(data.workers);
    } catch {
      setWorkers([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWorkers();
  }, [filters]);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({ category: '', minRating: 1, maxPrice: '', search: '' });
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem', paddingTop: '1.5rem' }}>

        <Link href="/" className="btn btn-secondary" style={{ marginBottom: '1.5rem', borderRadius: 'var(--radius-sm)', padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
          ← Back to Home
        </Link>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

          {/* Filters Sidebar */}
          <aside className="glass-card" style={{
            width: '100%',
            maxWidth: '280px',
            padding: '1.5rem',
            height: 'fit-content',
            position: 'sticky',
            top: '80px'
          }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>🔍 Filters</h3>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Search</label>
              <input
                type="text"
                name="search"
                placeholder="Name, skill..."
                value={filters.search}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text)', fontSize: '0.9rem' }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Category</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text)', fontSize: '0.9rem' }}
              >
                <option value="">All Services</option>
                <option value="maid">Maid</option>
                <option value="plumber">Plumber</option>
                <option value="electrician">Electrician</option>
                <option value="cook">Cook</option>
                <option value="tutor">Tutor</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Min Rating: {filters.minRating}★</label>
              <input
                type="range"
                name="minRating"
                min="1"
                max="5"
                step="0.5"
                value={filters.minRating}
                onChange={handleChange}
                style={{ width: '100%', accentColor: 'var(--primary)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>1★</span><span>5★</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Max Hourly Rate ($)</label>
              <input
                type="number"
                name="maxPrice"
                placeholder="e.g. 50"
                value={filters.maxPrice}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.7rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-secondary)', color: 'var(--text)', fontSize: '0.9rem' }}
              />
            </div>

            <button onClick={clearFilters} className="btn btn-secondary" style={{ width: '100%', borderRadius: 'var(--radius-sm)' }}>
              Clear Filters
            </button>
          </aside>

          {/* Results Area */}
          <section style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Workers Near You</h2>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{workers.length} results</span>
            </div>

            {loading ? (
              <div style={{ padding: '4rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
                <p style={{ color: 'var(--text-muted)' }}>Loading workers...</p>
              </div>
            ) : workers.length === 0 ? (
              <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>No workers found matching your filters.</p>
                <button onClick={clearFilters} className="btn btn-primary" style={{ marginTop: '1rem' }}>Clear Filters</button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}>
                {workers.map(worker => (
                  <WorkerCard key={worker.id} worker={worker} />
                ))}
              </div>
            )}
          </section>

        </div>
      </main>
    </>
  );
}
