"use client";

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import WorkerCard from '../../components/WorkerCard';

const MOCK_WORKERS = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    category: 'Electrician',
    yearsExperience: 5,
    rating: 4.8,
    reviewCount: 120,
    avatarUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 20
  },
  {
    id: '2',
    name: 'Sunita Sharma',
    category: 'Maid',
    yearsExperience: 8,
    rating: 4.9,
    reviewCount: 205,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 15
  },
  {
    id: '3',
    name: 'Ahmed Khan',
    category: 'Plumber',
    yearsExperience: 12,
    rating: 4.7,
    reviewCount: 89,
    avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 25
  },
  {
    id: '4',
    name: 'Priya Patel',
    category: 'Tutor',
    yearsExperience: 4,
    rating: 5.0,
    reviewCount: 45,
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    hourlyRate: 30
  }
];

export default function SearchPage() {
  const [filters, setFilters] = useState({
    category: '',
    minRating: 1,
    maxPrice: ''
  });
  const [filteredWorkers, setFilteredWorkers] = useState(MOCK_WORKERS);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const applyFilters = () => {
    let result = MOCK_WORKERS;

    if (filters.category) {
      result = result.filter(w => w.category.toLowerCase() === filters.category.toLowerCase());
    }
    if (filters.minRating) {
      result = result.filter(w => w.rating >= parseFloat(filters.minRating));
    }
    if (filters.maxPrice) {
      result = result.filter(w => w.hourlyRate <= parseFloat(filters.maxPrice));
    }

    setFilteredWorkers(result);
  };

  return (
    <>
      <Navbar />
      <main className="container animate-fade-in" style={{ paddingBottom: '4rem' }}>
        
        <Link href="/" style={{ 
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
          <span>&larr;</span> Back to Home
        </Link>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          
          {/* Filters Sidebar */}
          <aside style={{
            width: '100%',
            maxWidth: '280px',
            padding: '1.5rem',
            background: 'white',
            borderRadius: '12px',
            border: '1px solid #f1f5f9',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            height: 'fit-content'
          }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Filters</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Category</label>
              <select 
                name="category" 
                value={filters.category} 
                onChange={handleFilterChange}
                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', background: 'white' }}
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
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Minimum Rating ({filters.minRating}★)</label>
              <input 
                type="range" 
                name="minRating" 
                min="1" 
                max="5" 
                step="0.5" 
                value={filters.minRating}
                onChange={handleFilterChange}
                style={{ width: '100%' }} 
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#64748b' }}>
                <span>1★</span>
                <span>5★</span>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Max Hourly Rate ($)</label>
              <input 
                type="number" 
                name="maxPrice" 
                placeholder="e.g. 50" 
                value={filters.maxPrice}
                onChange={handleFilterChange}
                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1' }} 
              />
            </div>

            <button onClick={applyFilters} style={{ 
              width: '100%', 
              background: '#2563eb', 
              color: 'white', 
              padding: '0.8rem', 
              borderRadius: '8px', 
              border: 'none', 
              fontWeight: 600, 
              cursor: 'pointer' 
            }}>
              Apply Filters
            </button>
          </aside>

          {/* Results Area */}
          <section style={{ flex: 1 }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Workers Near You</h2>
            
            {filteredWorkers.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', background: 'white', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>No workers found matching your filters.</p>
                <button onClick={() => { setFilters({category: '', minRating: 1, maxPrice: ''}); setFilteredWorkers(MOCK_WORKERS); }} style={{ marginTop: '1rem', background: '#f1f5f9', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}>
                {filteredWorkers.map(worker => (
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
