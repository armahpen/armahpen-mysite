import { Link } from 'wouter';

export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: 'white',
      fontFamily: 'DM Sans, sans-serif'
    }} className="mobile-container">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(15, 15, 15, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
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

          {/* Navigation Menu */}
          <div className="nav-menu" style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Home</span>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>About</span>
            </Link>
            <Link href="/experience" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Experience</span>
            </Link>
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Portfolio</span>
            </Link>
            <Link href="/poetry" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Poetry</span>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 1)',
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

      {/* Main Content */}
      <div className="mobile-container" style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            margin: '0 0 24px 0',
            letterSpacing: '2px',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.3), 0 0 35px rgba(255, 255, 255, 0.2)',
            animation: 'textGlow 3s ease-in-out infinite'
          }} className="animate-fadeInUp delay-200">
            CONTACT
          </h1>
          
          <div style={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #fff, transparent)',
            margin: '0 auto 32px',
            borderRadius: '2px'
          }} className="animate-fadeInUp delay-400" />
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }} className="animate-fadeInUp delay-600">
            Let's connect and explore how we can create something amazing together.
          </p>
        </div>

        {/* Contact Information - Minimalist Style like itssharl.ee */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {/* Mail Section */}
          <div style={{
            marginBottom: '60px',
            paddingBottom: '40px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }} className="animate-fadeInUp delay-800">
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              margin: '0 0 16px 0',
              color: 'rgba(255, 255, 255, 0.6)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Mail</h3>
            <a 
              href="mailto:evansarmah30@gmail.com"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px'
              }}
              className="contact-link"
            >
              ↗ evansarmah30@gmail.com
            </a>
            
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              margin: '24px 0 16px 0',
              color: 'rgba(255, 255, 255, 0.6)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Call / WhatsApp</h3>
            <a 
              href="tel:+233200751811"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              className="contact-link"
            >
              ↗ 0200751811
            </a>
          </div>

          {/* Social Medias Section */}
          <div className="animate-fadeInUp delay-1000">
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              margin: '0 0 24px 0',
              color: 'rgba(255, 255, 255, 0.6)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>Social medias</h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <a
                href="https://www.instagram.com/heavanxx?igsh=cm14N29rYWlpdW5p"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '400',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 0',
                  transition: 'color 0.3s ease'
                }}
                className="social-link"
              >
                ↗ Instagram
              </a>
              <a
                href="https://x.com/EvansArmah14?t=Vzk3-qhc-u3XsbkLBThwmA&s=09"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  textDecoration: 'none',
                  fontSize: '18px',
                  fontWeight: '400',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 0',
                  transition: 'color 0.3s ease'
                }}
                className="social-link"
              >
                ↗ X (Twitter)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '40px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.6)',
          textAlign: 'center'
        }}>@2020 HeaVans. All rights reserved. | Designed & Developed by Evans</p>
      </div>

      <style>{`
        .menu-button:hover {
          color: rgba(255, 255, 255, 1) !important;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: rgba(255, 255, 255, 1) !important;
        }

        .social-link:hover {
          color: rgba(255, 255, 255, 1) !important;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1.0s; }

        @media (max-width: 768px) {
          .social-link {
            flex: 1;
            min-width: 120px;
          }
        }
      `}</style>
    </div>
  );
}