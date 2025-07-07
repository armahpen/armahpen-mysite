import { Link } from 'wouter';

export default function Collections() {
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      position: 'relative',
      background: '#1E1E1E',
      overflow: 'hidden'
    }}>
      
      {/* Starfield Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 20px 30px, white, transparent),
          radial-gradient(2px 2px at 40px 70px, white, transparent),
          radial-gradient(1px 1px at 90px 40px, white, transparent),
          radial-gradient(1px 1px at 130px 80px, white, transparent),
          radial-gradient(2px 2px at 160px 30px, white, transparent),
          radial-gradient(1px 1px at 200px 90px, white, transparent),
          radial-gradient(2px 2px at 240px 50px, white, transparent),
          radial-gradient(1px 1px at 280px 10px, white, transparent),
          radial-gradient(1px 1px at 320px 70px, white, transparent),
          radial-gradient(2px 2px at 360px 40px, white, transparent),
          radial-gradient(1px 1px at 400px 90px, white, transparent),
          radial-gradient(2px 2px at 440px 20px, white, transparent),
          radial-gradient(1px 1px at 480px 60px, white, transparent),
          radial-gradient(2px 2px at 520px 100px, white, transparent),
          radial-gradient(1px 1px at 560px 30px, white, transparent),
          radial-gradient(2px 2px at 600px 80px, white, transparent),
          radial-gradient(1px 1px at 640px 10px, white, transparent),
          radial-gradient(1px 1px at 680px 50px, white, transparent),
          radial-gradient(2px 2px at 720px 90px, white, transparent),
          radial-gradient(1px 1px at 760px 20px, white, transparent),
          radial-gradient(2px 2px at 800px 70px, white, transparent),
          radial-gradient(1px 1px at 840px 40px, white, transparent),
          radial-gradient(1px 1px at 880px 100px, white, transparent),
          radial-gradient(2px 2px at 920px 15px, white, transparent),
          radial-gradient(1px 1px at 960px 55px, white, transparent),
          radial-gradient(2px 2px at 1000px 85px, white, transparent),
          radial-gradient(1px 1px at 1040px 25px, white, transparent),
          radial-gradient(2px 2px at 1080px 65px, white, transparent),
          radial-gradient(1px 1px at 1120px 95px, white, transparent),
          radial-gradient(2px 2px at 1160px 5px, white, transparent),
          radial-gradient(1px 1px at 1200px 45px, white, transparent),
          radial-gradient(2px 2px at 1240px 75px, white, transparent),
          radial-gradient(1px 1px at 1280px 35px, white, transparent),
          radial-gradient(2px 2px at 1320px 85px, white, transparent),
          radial-gradient(1px 1px at 1360px 15px, white, transparent),
          radial-gradient(2px 2px at 1400px 55px, white, transparent),
          radial-gradient(1px 1px at 1440px 95px, white, transparent),
          radial-gradient(2px 2px at 1480px 25px, white, transparent),
          radial-gradient(1px 1px at 1520px 65px, white, transparent),
          radial-gradient(2px 2px at 1560px 105px, white, transparent)
        `,
        backgroundRepeat: 'repeat',
        backgroundSize: '1600px 200px',
        animation: 'twinkle 4s ease-in-out infinite alternate',
        zIndex: 2
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(30, 30, 30, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img 
              src="/logo.png" 
              alt="HeaVans Logo" 
              style={{
                height: '30px',
                width: 'auto',
                cursor: 'pointer'
              }}
            />
          </Link>

          {/* Navigation Menu - Desktop */}
          <div className="hidden md:flex" style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Home</span>
            </Link>
            <Link href="/collections" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>Collections</span>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>About</span>
            </Link>
            <Link href="/experience" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Experience</span>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.65)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Contact</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer'
            }}>☰</button>
          </div>
        </div>
      </nav>

      {/* Central Sun - Evans (Heavans) */}
      <div className="hidden md:block" style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: `
          radial-gradient(circle at 30% 30%, 
            rgba(255, 215, 0, 0.9) 0%, 
            rgba(255, 165, 0, 0.8) 30%, 
            rgba(255, 140, 0, 0.6) 60%, 
            rgba(255, 69, 0, 0.4) 100%
          )
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: `
          0 0 40px rgba(255, 215, 0, 0.6),
          0 0 80px rgba(255, 165, 0, 0.4),
          0 0 120px rgba(255, 140, 0, 0.2),
          inset 0 0 40px rgba(255, 255, 255, 0.2)
        `,
        animation: 'pulse 4s ease-in-out infinite',
        zIndex: 15,
        cursor: 'pointer'
      }} onClick={() => window.location.href = '/evans'}>
        <div style={{
          color: 'rgba(0, 0, 0, 0.8)',
          fontFamily: 'DM Sans',
          fontSize: '16px',
          fontWeight: '700',
          textAlign: 'center',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          letterSpacing: '1px'
        }}>
          Evans<br />
          (Heavans)
        </div>
      </div>

      {/* Mobile Central Content */}
      <div className="md:hidden" style={{
        position: 'relative',
        top: '100px',
        padding: '32px 16px',
        textAlign: 'center',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: `
            radial-gradient(circle at 30% 30%, 
              rgba(255, 215, 0, 0.9) 0%, 
              rgba(255, 165, 0, 0.8) 30%, 
              rgba(255, 140, 0, 0.6) 60%, 
              rgba(255, 69, 0, 0.4) 100%
            )
          `,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: `
            0 0 30px rgba(255, 215, 0, 0.6),
            0 0 60px rgba(255, 165, 0, 0.4)
          `,
          marginBottom: '32px',
          cursor: 'pointer'
        }} onClick={() => window.location.href = '/evans'}>
          <div style={{
            color: 'rgba(0, 0, 0, 0.8)',
            fontFamily: 'DM Sans',
            fontSize: '14px',
            fontWeight: '700',
            textAlign: 'center',
            letterSpacing: '1px'
          }}>
            Evans<br />
            (Heavans)
          </div>
        </div>

        <h1 style={{
          color: 'white',
          fontFamily: 'DM Sans',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '16px'
        }}>Skill Collections</h1>

        <p style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'DM Sans',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.5',
          marginBottom: '32px',
          maxWidth: '300px'
        }}>Explore the different areas of expertise and creative skills</p>

        {/* Mobile Skill Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '280px'
        }}>
          {[
            { name: 'Creative Projects', color: 'rgba(255, 99, 71, 0.8)' },
            { name: 'Poetry', color: 'rgba(147, 112, 219, 0.8)' },
            { name: 'UI/UX', color: 'rgba(30, 144, 255, 0.8)' },
            { name: 'Development', color: 'rgba(50, 205, 50, 0.8)' },
            { name: 'Motion Graphics', color: 'rgba(255, 20, 147, 0.8)' },
            { name: 'Collaboration', color: 'rgba(255, 165, 0, 0.8)' }
          ].map((skill, index) => (
            <div key={index} style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: skill.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 20px ${skill.color}`,
              cursor: 'pointer'
            }}>
              <span style={{
                color: 'white',
                fontFamily: 'DM Sans',
                fontSize: '10px',
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.4)',
          fontFamily: 'DM Sans',
          fontSize: '12px',
          margin: '0',
          textAlign: 'center'
        }}>@2020 HeaVans. All rights reserved. | Designed & Developed by Evans</p>
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }

        .menu-button:hover {
          color: rgba(255, 255, 255, 1) !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
}