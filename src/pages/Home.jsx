import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '500+', label: 'Clients Served' },
  { number: '99%', label: 'Client Retention' },
  { number: '24/7', label: 'Support Available' },
]

const whyUs = [
  { icon: '🏆', title: 'Industry Expertise', desc: 'Proven operational performance by talented resources, guided by an experienced professional team with deep knowledge of Healthcare.' },
  { icon: '🌐', title: 'Network Availability', desc: 'Redundant infrastructure, onshore data storage in highly secure locations, purpose-built for real-time applications.' },
  { icon: '🤝', title: 'Seamless Client Experience', desc: 'Risk-free transition, hands-on focus, and cultural alignment through local Client Relationship Managers.' },
  { icon: '⏱️', title: 'On-Time Service', desc: 'Proven track record of consistently delivering timely and reliable services, meeting client expectations with precision.' },
  { icon: '🔒', title: 'Security & Compliance', desc: 'ISO 27001:2013 certified for Information Security and Management Systems (ISMS).' },
  { icon: '👥', title: 'Availability of Resources', desc: 'State-of-the-art workspace with scalable operations and a vast talent pool of skilled agents ready to work seamlessly.' },
]

const industries = [
  { icon: '⚖️', title: 'Legal', desc: 'Enhance efficiency with expert legal outsourcing — document review, legal research, record retrieval, and litigation support.' },
  { icon: '🛡️', title: 'Insurance', desc: 'Streamline operations with expert back-office support — claims processing, data entry, and record retrieval services.' },
  { icon: '🏥', title: 'Healthcare', desc: 'Optimize revenue cycles with end-to-end solutions — medical billing, coding, claims processing, and payment posting.' },
]

const testimonials = [
  { text: 'I am truly impressed with the work of U-CGS. Your excellent outsourcing services have given us time to focus on the growth of our Business. I would highly recommend your services.', name: 'CEO', company: 'Record Retrieval Firm' },
  { text: 'My experience with the U-CGS Team has been extremely positive! While significantly reducing our cost of doing business, U-CGS professionalism and efficiency has been unsurpassed!', name: 'CEO', company: 'Medical Billing Firm' },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = 1
        el.style.transform = 'translateY(0)'
        obs.unobserve(el)
      }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #0d1b2e 0%, #0a4d8c 60%, #1a6bbf 100%)',
        position: 'relative', overflow: 'hidden', paddingTop: 100
      }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute', borderRadius: '50%',
              background: 'rgba(255,255,255,0.04)',
              width: `${120 + i * 80}px`, height: `${120 + i * 80}px`,
              top: `${10 + i * 12}%`, right: `${-5 + i * 8}%`,
              animation: `float ${4 + i}s ease-in-out infinite alternate`
            }} />
          ))}
        </div>
        <style>{`
          @keyframes float { from { transform: translateY(0); } to { transform: translateY(-20px); } }
          @keyframes fadeSlide { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        `}</style>

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '60px 24px' }}>
          <div style={{ animation: 'fadeSlide 0.8s ease forwards' }}>
            <div className="section-tag" style={{ background: 'rgba(232,160,32,0.2)', color: '#e8a020' }}>Trusted BPO Consultant & Solutions Provider</div>
            <h1 style={{ fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800, color: 'white', lineHeight: 1.15, margin: '20px 0 24px' }}>
              Empowering Your Business<br />
              <span style={{ color: '#e8a020' }}>With Seamless Outsourcing</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 640, margin: '0 auto 40px' }}>
              Achieve exponential growth by outsourcing non-core functions — Record Retrieval, Revenue Cycle Management, Medical Coding, and more.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>Get Started Today</Link>
              <Link to="/about" className="btn-outline" style={{ fontSize: 16, padding: '14px 36px', color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '60px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24 }}>
            {stats.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ textAlign: 'center', padding: '32px 20px', background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: '#0a4d8c' }}>{s.number}</div>
                  <div style={{ fontSize: 14, color: '#64748b', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeIn>
              <div style={{ background: 'linear-gradient(135deg,#0a4d8c,#1a6bbf)', borderRadius: 24, padding: 48, color: 'white', position: 'relative' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🏢</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Who We Are</h3>
                <p style={{ lineHeight: 1.7, opacity: 0.9 }}>At U-CGS, we prioritize the security of sensitive healthcare data, ensuring the highest standards in data management and service delivery. With close to a decade of practical outsourcing knowledge, U-CGS brings valuable expertise to the table.</p>
                <div style={{ marginTop: 24, padding: '16px 20px', background: 'rgba(255,255,255,0.15)', borderRadius: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 24 }}>🏅</span>
                  <div><div style={{ fontWeight: 700 }}>ISO 27001:2013 Certified</div><div style={{ fontSize: 13, opacity: 0.8 }}>Information Security Management</div></div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <span className="section-tag">About U-CGS</span>
                <h2 className="section-title">Enabling Clients to Focus on Their Strengths</h2>
                <p className="section-sub" style={{ marginBottom: 24 }}>We take pride not in claiming to be the best, but in delivering exceptional, cost-effective, and professional solutions that exceed expectations.</p>
                <p className="section-sub" style={{ marginBottom: 32 }}>Our dedicated professionals work tirelessly to meet client requirements, ensuring seamless financial and transactional management with clarity, efficiency, and excellence.</p>
                <Link to="/about" className="btn-primary">Learn About Us</Link>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Why Choose Us</span>
              <h2 className="section-title">Why Choose U-Connect Global Services?</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {whyUs.map((w, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  background: 'white', borderRadius: 16, padding: 32,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                  borderTop: '4px solid transparent',
                  borderImage: 'linear-gradient(90deg,#0a4d8c,#1a6bbf) 1'
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, color: '#0d1b2e', marginBottom: 10, fontSize: 17 }}>{w.title}</h3>
                  <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: 14 }}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag">Industries</span>
              <h2 className="section-title">Comprehensive Industry Expertise</h2>
              <p className="section-sub" style={{ margin: '0 auto' }}>We specialize in understanding your unique business needs and delivering customized workforce solutions.</p>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {industries.map((ind, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.09)', background: 'white' }}>
                  <div style={{ background: `linear-gradient(135deg, hsl(${210 + i * 20},70%,${25 + i * 5}%), hsl(${210 + i * 20},70%,${40 + i * 5}%))`, padding: '40px 32px', color: 'white' }}>
                    <div style={{ fontSize: 48 }}>{ind.icon}</div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, marginTop: 12 }}>{ind.title}</h3>
                  </div>
                  <div style={{ padding: '28px 32px' }}>
                    <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: 14 }}>{ind.desc}</p>
                    <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#0a4d8c', fontWeight: 600, marginTop: 16, fontSize: 14 }}>Learn More →</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: 'linear-gradient(135deg,#0d1b2e,#0a4d8c)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <FadeIn>
              <span className="section-tag" style={{ background: 'rgba(232,160,32,0.2)', color: '#e8a020' }}>Testimonials</span>
              <h2 className="section-title" style={{ color: 'white' }}>What Our Clients Say</h2>
            </FadeIn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div style={{ background: 'rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)', borderRadius: 20, padding: 36, border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ fontSize: 40, color: '#e8a020', lineHeight: 1, marginBottom: 16 }}>"</div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>{t.text}</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16 }}>
                    <div style={{ fontWeight: 700, color: 'white' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: '#e8a020' }}>{t.company}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center' }}>
        <div className="container">
          <FadeIn>
            <div style={{ background: 'linear-gradient(135deg,#0a4d8c,#1a6bbf)', borderRadius: 24, padding: '64px 40px', color: 'white' }}>
              <h2 style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 800, marginBottom: 16 }}>Ready to Transform Your Business?</h2>
              <p style={{ opacity: 0.85, fontSize: 17, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>Partner with U-CGS and experience the difference that expert outsourcing can make.</p>
              <Link to="/contact" className="btn-primary" style={{ background: '#e8a020', fontSize: 16, padding: '16px 40px' }}>Book a Free Consultation</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}