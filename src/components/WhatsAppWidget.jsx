import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, Sparkles } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(true);

  // Dkson Associates WhatsApp support line (+91 9871177166 / +1 760 588 2207)
  const whatsappNumber = '919337491479';

  const quickPrompts = [
    '👋 I need a fast quote for an upcoming steel project.',
    '⚡ Inquire about 24/7 detailing squad availability.',
    '📐 Inquire about PE Stamped Connection Design in our state.',
    '📥 Can you send sample Tekla shop drawings & CNC files?'
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || message || 'Hello Dkson Associates, I would like to inquire about your structural steel detailing and BIM services.';
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="whatsapp-floating-widget">
      
      {/* Interactive Chat Box Popup */}
      {isOpen && (
        <div className="whatsapp-chat-box">
          {/* Header */}
          <div className="whatsapp-chat-header">
            <div className="whatsapp-avatar-wrap">
              <div className="whatsapp-avatar">
                <span>DK</span>
                <span className="whatsapp-status-dot"></span>
              </div>
              <div>
                <div className="whatsapp-agent-name">DKSONASSOCIATES</div>
                <div className="whatsapp-agent-role">Structural Detailing Desk • Online</div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              style={{ color: '#ffffff', opacity: 0.8, cursor: 'pointer', padding: '0.2rem' }}
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="whatsapp-chat-body">
            <div className="whatsapp-bubble">
              Hello! 👋 Welcome to <strong>DKSONASSOCIATES</strong>. 
              Looking for fast-track shop drawings, PE connection stamping?
            </div>
            <div style={{ fontSize: '0.74rem', color: '#94a3b8', margin: '0.2rem 0' }}>
              Select a quick prompt or message us directly:
            </div>

            {quickPrompts.map((prompt, idx) => (
              <button 
                key={idx}
                className="whatsapp-quick-prompt"
                onClick={() => handleSend(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Footer Input */}
          <div className="whatsapp-chat-footer">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input 
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                style={{
                  flex: 1,
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.5rem 0.75rem',
                  color: '#ffffff',
                  fontSize: '0.85rem'
                }}
              />
              <button 
                onClick={() => handleSend()}
                style={{
                  background: '#25d366',
                  color: '#ffffff',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.5rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <Send size={15} />
              </button>
            </div>

            <button 
              className="whatsapp-start-btn"
              onClick={() => handleSend()}
            >
              <span>Chat on WhatsApp</span>
            </button>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <div style={{ position: 'relative' }}>
        
        {/* Tooltip Notification */}
        {tooltipVisible && !isOpen && (
          <div className="whatsapp-tooltip">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#25d366', display: 'inline-block' }}></span>
            <span>Chat With Detailing Specialist</span>
          </div>
        )}

        {/* Pulse Ripple Waves */}
        <div className="whatsapp-ripple"></div>
        <div className="whatsapp-ripple" style={{ animationDelay: '0.8s' }}></div>

        {/* Main WhatsApp Button */}
        <button 
          className="whatsapp-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setTooltipVisible(false);
          }}
          aria-label="Open WhatsApp Chat Support"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            /* WhatsApp Official SVG Icon */
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.944.555 3.757 1.517 5.292L2 22l4.823-1.488a9.99 9.99 0 0 0 5.208 1.488c5.536 0 10.031-4.495 10.031-10.031C22.062 6.495 17.567 2 12.031 2zm0 18.23a8.21 8.21 0 0 1-4.28-1.196l-.307-.184-2.86.883.896-2.784-.2-.317a8.196 8.196 0 0 1-1.34-4.602c0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.23-8.23 8.23zm4.512-6.177c-.247-.123-1.464-.722-1.691-.805-.228-.083-.394-.123-.56.123-.167.247-.643.805-.788.97-.145.166-.29.186-.537.062-.247-.123-1.043-.385-1.986-1.226-.734-.655-1.23-1.464-1.374-1.711-.145-.247-.015-.38.108-.503.111-.111.247-.29.37-.435.123-.145.166-.247.248-.413.083-.166.041-.311-.02-.435-.063-.124-.56-1.35-.768-1.85-.202-.487-.407-.421-.56-.428l-.478-.008c-.166 0-.435.062-.663.311-.228.247-.87 0.85-.87 2.073s.891 2.404 1.015 2.57c.124.166 1.753 2.678 4.248 3.756.593.256 1.057.41 1.419.525.596.189 1.139.162 1.568.098.479-.072 1.464-.599 1.671-1.178.207-.579.207-1.075.145-1.178-.062-.104-.228-.166-.475-.29z"/>
            </svg>
          )}
        </button>
      </div>

    </div>
  );
}



