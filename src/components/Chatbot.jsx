import { useState, useRef, useEffect } from 'react'

const QA = [
  { q: 'What services do you offer?', a: 'We offer Record Retrieval, Medical Coding, Revenue Cycle Management, and Medical Records Summarization services.' },
  { q: 'How do I contact you?', a: 'Email us at Info@u-cgs.com or call +1 307-213-4034. You can also use our Contact page to send a message.' },
  { q: 'Where are you located?', a: 'We have offices in Cheyenne, WY, USA and Ahmedabad, Gujarat, India.' },
  { q: 'Are you HIPAA compliant?', a: 'Yes! We hold ISO 27001:2013 certification for Information Security and follow all HIPAA compliance standards.' },
  { q: 'How can I book a consultation?', a: `Click the "Book Now" button in the navigation, or visit our Contact page. We'll get back to you within 24 hours.` },
  { q: 'What industries do you serve?', a: 'We serve Healthcare, Legal, and Insurance industries with specialized BPO solutions.' },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! 👋 I\'m the U-CGS assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])

  const sendMessage = (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: userMsg }])

    setTimeout(() => {
      const match = QA.find(qa => qa.q === userMsg)
      const reply = match ? match.a : "I'm not sure about that. Please contact us at Info@u-cgs.com or call +1 307-213-4034 for more details!"
      setMessages(prev => [...prev, { from: 'bot', text: reply }])
    }, 600)
  }

  return (
    <div style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 9999 }}>
      {/* Chat window */}
      {open && (
        <div style={{
          width: 340, background: 'white', borderRadius: 20,
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)', marginBottom: 16,
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
          animation: 'slideUp 0.3s ease'
        }}>
          <style>{`@keyframes slideUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }`}</style>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,#0a4d8c,#1a6bbf)', padding: '18px 20px', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>U-CGS Assistant</div>
                <div style={{ fontSize: 12, opacity: 0.8 }}>🟢 Online</div>
              </div>
              <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', borderRadius: 8, width: 30, height: 30, cursor: 'pointer', fontSize: 16 }}>×</button>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', maxHeight: 300, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '10px 14px', borderRadius: m.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: m.from === 'user' ? 'linear-gradient(135deg,#0a4d8c,#1a6bbf)' : '#f1f5f9',
                  color: m.from === 'user' ? 'white' : '#334155',
                  fontSize: 13, lineHeight: 1.5
                }}>{m.text}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick questions */}
          <div style={{ padding: '10px 16px', borderTop: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 8, fontWeight: 600 }}>QUICK QUESTIONS</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {QA.map((qa, i) => (
                <button key={i} onClick={() => sendMessage(qa.q)} style={{
                  background: '#f0f7ff', border: '1px solid #c7dcf5', color: '#0a4d8c',
                  borderRadius: 20, padding: '5px 12px', fontSize: 11, cursor: 'pointer', fontWeight: 500
                }}>{qa.q}</button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: 8 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              style={{ flex: 1, border: '1px solid #e2e8f0', borderRadius: 10, padding: '8px 14px', fontSize: 13, outline: 'none' }}
            />
            <button onClick={() => sendMessage()} style={{
              background: 'linear-gradient(135deg,#0a4d8c,#1a6bbf)', color: 'white',
              border: 'none', borderRadius: 10, padding: '8px 14px', cursor: 'pointer', fontSize: 18
            }}>➤</button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button onClick={() => setOpen(!open)} style={{
        width: 60, height: 60, borderRadius: '50%',
        background: 'linear-gradient(135deg,#0a4d8c,#1a6bbf)',
        border: 'none', cursor: 'pointer', color: 'white',
        fontSize: 26, boxShadow: '0 8px 24px rgba(10,77,140,0.45)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform 0.3s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? '×' : '💬'}
      </button>
    </div>
  )
}