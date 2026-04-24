import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0d1b2e', color: 'rgba(255,255,255,0.75)', paddingTop: 60 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, paddingBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, borderRadius: 8, background: 'linear-gradient(135deg,#0a4d8c,#1a6bbf)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>U</div>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>U-Connect Global Services</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>A dynamic team of business solutions experts with close to a decade of outsourcing experience.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['in', 'f', 'tw'].map(s => (
                <div key={s} style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 12, fontWeight: 700, color: 'white' }}>{s}</div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Quick Links</div>
            {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blog'], ['/contact', 'Contact']].map(([p, l]) => (
              <Link key={p} to={p} style={{ display: 'block', marginBottom: 10, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8a020'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}>{l}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Services</div>
            {[
              ['/record-retrieval-services', 'Record Retrieval'],
              ['/medical-billing-coding', 'Medical Coding'],
              ['/revenue-cycle-management', 'Revenue Cycle'],
              ['/medical-records-summarization', 'Records Summarization'],
            ].map(([p, l]) => (
              <Link key={p} to={p} style={{ display: 'block', marginBottom: 10, fontSize: 14, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8a020'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}>{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: 'white', fontWeight: 700, marginBottom: 16, fontSize: 15 }}>Contact Us</div>
            {[
              ['📍', '1021 E Lincolnway Suite 9864, Cheyenne, WY 82001, US'],
              ['📍', 'A 1003-1005, The Gateway, Nikol, Ahmedabad - 380049, India'],
              ['✉️', 'Info@u-cgs.com'],
              ['📞', '+1 307-213-4034 / +91 88666 42472'],
            ].map(([icon, text], i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, fontSize: 13, lineHeight: 1.5 }}>
                <span>{icon}</span><span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 0', textAlign: 'center', fontSize: 13 }}>
          © 2026 U-Connect Global Services. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}