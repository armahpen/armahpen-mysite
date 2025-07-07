import { Link } from 'wouter';

export default function Contact() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: 'white',
      fontFamily: 'DM Sans, sans-serif'
    }}>
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

          {/* Navigation Menu */}
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
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
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 1)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Contact</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '120px 40px 80px'
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

        {/* Contact Information */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '60px'
        }} className="animate-fadeInUp delay-800">
          {/* Email */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '32px 24px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>📧</div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              margin: '0 0 12px 0',
              color: '#fff'
            }}>Email</h3>
            <a 
              href="mailto:evansarmah30@gmail.com"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '400'
              }}
              className="contact-link"
            >
              evansarmah30@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '32px 24px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>📱</div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              margin: '0 0 12px 0',
              color: '#fff'
            }}>Phone</h3>
            <a 
              href="tel:+233200751811"
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '400'
              }}
              className="contact-link"
            >
              (+233) 200 751 811
            </a>
          </div>

          {/* Location */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '32px 24px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>📍</div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              margin: '0 0 12px 0',
              color: '#fff'
            }}>Location</h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              margin: 0,
              fontSize: '16px',
              fontWeight: '400'
            }}>
              Achimota, Accra<br />Ghana
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div style={{
          textAlign: 'center'
        }} className="animate-fadeInUp delay-1000">
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            margin: '0 0 32px 0',
            color: '#fff'
          }}>Let's Connect</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://linkedin.com/in/evans-armah"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 24px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/evansarmah"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 24px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/evansarmah"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 24px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              className="social-link"
            >
              Twitter
            </a>
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
        }}>Designed and coded by HeaVans © 2025</p>
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
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          transform: translateY(-2px);
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