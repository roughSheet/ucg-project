import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const services = [
  { label: 'Record Retrieval Services', path: '/record-retrieval-services' },
  { label: 'Medical Coding Services', path: '/medical-billing-coding' },
  { label: 'Revenue Cycle Management', path: '/revenue-cycle-management' },
  { label: 'Medical Records Summarization', path: '/medical-records-summarization' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setServicesOpen(false) }, [location])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      transition: 'all 0.4s ease',
      padding: scrolled ? '14px 0' : '20px 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'linear-gradient(135deg, #0a4d8c, #1a6bbf)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: 16
          }}>U</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: scrolled ? '#0d1b2e' : 'white', lineHeight: 1.1 }}>U-Connect Global</div>
            <div style={{ fontSize: 11, color: scrolled ? '#64748b' : 'rgba(255,255,255,0.8)', letterSpacing: 1 }}>SERVICES</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32, fontSize: 15, fontWeight: 500 }} className="desktop-nav">
          {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact']].map(([path, label]) => (
            <Link key={path} to={path} style={{
              color: scrolled ? '#334155' : 'rgba(255,255,255,0.9)',
              borderBottom: location.pathname === path ? '2px solid #e8a020' : '2px solid transparent',
              paddingBottom: 2, transition: 'all 0.2s'
            }}>{label}</Link>
          ))}
          {/* Services dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <span style={{
              color: scrolled ? '#334155' : 'rgba(255,255,255,0.9)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4
            }}>
              Services <span style={{ fontSize: 10 }}>▼</span>
            </span>
            {servicesOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                background: 'white', borderRadius: 12, boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                padding: '12px 0', minWidth: 260, marginTop: 10
              }}>
                {services.map(s => (
                  <Link key={s.path} to={s.path} style={{
                    display: 'block', padding: '10px 20px', color: '#334155',
                    fontSize: 14, transition: 'all 0.2s',
                    borderLeft: '3px solid transparent'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderLeftColor = '#0a4d8c' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent' }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>Book Now</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer',
          flexDirection: 'column', gap: 5
        }} className="hamburger">
          {[0,1,2].map(i => (
            <span key={i} style={{ display: 'block', width: 24, height: 2, background: scrolled ? '#0d1b2e' : 'white', borderRadius: 2 }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: 'white', padding: '20px 24px', borderTop: '1px solid #e2e8f0' }}>
          {[['/', 'Home'], ['/about', 'About Us'], ['/blogs', 'Blogs'], ['/contact', 'Contact Us']].map(([path, label]) => (
            <Link key={path} to={path} style={{ display: 'block', padding: '12px 0', color: '#334155', borderBottom: '1px solid #f1f5f9', fontWeight: 500 }}>{label}</Link>
          ))}
          <div style={{ padding: '12px 0 4px', color: '#94a3b8', fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Services</div>
          {services.map(s => (
            <Link key={s.path} to={s.path} style={{ display: 'block', padding: '10px 0 10px 12px', color: '#334155', borderBottom: '1px solid #f1f5f9', fontSize: 14 }}>{s.label}</Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 16 }}>Book Now</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}