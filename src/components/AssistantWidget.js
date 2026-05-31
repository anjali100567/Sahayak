"use client";

import { useState } from 'react';

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
      
      {/* Chat Window */}
      {isOpen && (
        <div className="animate-fade-in" style={{ 
          background: 'white', 
          width: '320px', 
          height: '400px', 
          borderRadius: '16px', 
          boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
          border: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ background: '#2563eb', color: 'white', padding: '1rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🤖</span> LocalHelpers Support
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
          </div>
          
          {/* Chat Body */}
          <div style={{ flex: 1, padding: '1rem', background: '#f8fafc', overflowY: 'auto' }}>
            <div style={{ background: '#e0e7ff', color: '#1e3a8a', padding: '0.8rem', borderRadius: '12px 12px 12px 0', marginBottom: '1rem', fontSize: '0.9rem', maxWidth: '85%' }}>
              Hi! How can I help you find a trusted worker today? You can type or use the microphone.
            </div>
          </div>
          
          {/* Input Area */}
          <div style={{ padding: '0.8rem', borderTop: '1px solid #e2e8f0', background: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
              🎤
            </button>
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.9rem', background: 'transparent' }} 
            />
            <button style={{ background: '#2563eb', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white' }}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
          cursor: 'pointer',
          fontSize: '1.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isOpen ? '×' : '🤖'}
      </button>

    </div>
  );
}
