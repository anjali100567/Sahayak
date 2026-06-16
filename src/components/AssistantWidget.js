"use client";

import { useState } from 'react';

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! 👋 I\'m Sahayak Assistant. How can I help you find a trusted worker today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg = inputText.trim();
    setMessages(prev => [...prev, { from: 'user', text: userMsg }]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let reply = 'I can help you find workers, make bookings, or answer questions about our services. Try searching for a specific service!';
      const lower = userMsg.toLowerCase();
      if (lower.includes('plumber')) reply = 'We have great plumbers available! Try searching on our /search page or I can recommend Ahmed Khan — he has 12 years of experience. 🔧';
      else if (lower.includes('maid') || lower.includes('clean')) reply = 'For cleaning services, Sunita Sharma is our top-rated maid with 4.9★ rating! Check her profile for availability. 🏠';
      else if (lower.includes('electrician')) reply = 'Rajesh Kumar is an excellent electrician with 5 years of experience. He\'s currently available! ⚡';
      else if (lower.includes('cook')) reply = 'Deepak Verma is a professional chef with 5-star hotel experience. Perfect for family dinners! 🍳';
      else if (lower.includes('tutor')) reply = 'We have Priya Patel (Math/Science) and Ananya Gupta (English/IELTS). Both are highly rated! 📚';
      else if (lower.includes('book')) reply = 'To book a worker, go to their profile page and click "Request Booking". You can choose your preferred date, time, and payment method! 📅';
      else if (lower.includes('hi') || lower.includes('hello')) reply = 'Hello! 😊 What kind of service are you looking for today?';

      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.8rem' }}>

      {/* Chat Window */}
      {isOpen && (
        <div className="animate-fade-in" style={{
          background: 'var(--surface)',
          width: '350px',
          height: '450px',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          border: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
            color: 'white',
            padding: '1rem 1.2rem',
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.2rem' }}>🤖</span>
              <div>
                <div style={{ fontSize: '0.95rem' }}>Sahayak Assistant</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.8, fontWeight: 400 }}>Always here to help</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1rem', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          </div>

          {/* Chat Body */}
          <div style={{ flex: 1, padding: '1rem', background: 'var(--bg)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                background: msg.from === 'user' ? 'var(--primary)' : 'var(--surface)',
                color: msg.from === 'user' ? 'white' : 'var(--text)',
                padding: '0.7rem 1rem',
                borderRadius: msg.from === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                fontSize: '0.88rem',
                maxWidth: '82%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                lineHeight: 1.5,
                border: msg.from === 'bot' ? '1px solid var(--border)' : 'none'
              }}>
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'var(--surface)', padding: '0.7rem 1rem', borderRadius: '14px 14px 14px 4px', border: '1px solid var(--border)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-muted)', animation: 'dotPulse 1.4s ease-in-out infinite', animationDelay: '0s' }} />
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-muted)', animation: 'dotPulse 1.4s ease-in-out infinite', animationDelay: '0.2s' }} />
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-muted)', animation: 'dotPulse 1.4s ease-in-out infinite', animationDelay: '0.4s' }} />
              </div>
            )}
          </div>

          {/* Input Area */}
          <div style={{ padding: '0.8rem', borderTop: '1px solid var(--border)', background: 'var(--surface)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button style={{ background: 'var(--bg-secondary)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-muted)', flexShrink: 0 }}>
              🎤
            </button>
            <input
              type="text"
              placeholder="Ask me anything..."
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '0.88rem', background: 'transparent', color: 'var(--text)' }}
            />
            <button onClick={handleSend} style={{ background: 'linear-gradient(135deg, var(--primary), #06b6d4)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'white', flexShrink: 0 }}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
          color: 'white',
          border: 'none',
          boxShadow: '0 6px 20px rgba(37, 99, 235, 0.35)',
          cursor: 'pointer',
          fontSize: '1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'var(--transition)',
          position: 'relative'
        }}
      >
        {isOpen ? '×' : '🤖'}
        {!isOpen && (
          <span style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#10b981',
            border: '2px solid var(--surface)'
          }} />
        )}
      </button>
    </div>
  );
}
