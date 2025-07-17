import { Link } from 'wouter';
import { useState } from 'react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      position: 'relative',
      background: '#1E1E1E',
      overflow: 'hidden'
    }}>

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
          padding: '1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img 
              src="./logo.png" 
              alt="HeaVans Logo" 
              style={{
                height: '30px',
                width: 'auto',
                cursor: 'pointer'
              }}
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
          >
            ☰
          </button>

          {/* Desktop Navigation Menu */}
          <div className="nav-menu" style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
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
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '500',
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
        </div>
      </nav>

      {/* Mobile Navigation Backdrop */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)}>×</button>
        <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '1.2rem', padding: '0.75rem 0'}}>Home</Link>
        <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: '500', padding: '0.75rem 0'}}>About</Link>
        <Link href="/experience" onClick={() => setMobileMenuOpen(false)} style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '1.2rem', padding: '0.75rem 0'}}>Experience</Link>

        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{color: 'rgba(255, 255, 255, 0.9)', textDecoration: 'none', fontSize: '1.2rem', padding: '0.75rem 0'}}>Contact</Link>
      </div>

      {/* Mobile Content Layout */}
      <div className="about-mobile-content" style={{
        display: 'none',
        paddingTop: '100px',
        paddingBottom: '40px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h1 style={{
            color: 'white',
            fontFamily: 'DM Sans',
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.4)'
          }}>ABOUT</h1>
          
          <div style={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #fff, transparent)',
            margin: '0 auto 30px',
            borderRadius: '2px'
          }} />
          
          <img 
            src="/profile-image.jpeg" 
            alt="Evans Profile" 
            className="about-mobile-image"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              margin: '20px auto',
              display: 'block',
              objectFit: 'cover',
              border: '3px solid rgba(255, 255, 255, 0.2)'
            }}
            onError={(e) => {
              console.log('Profile image failed to load on mobile');
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              if (img.parentElement) {
                img.parentElement.innerHTML = '<div style="width: 200px; height: 200px; border-radius: 50%; margin: 20px auto; display: flex; align-items: center; justify-content: center; font-size: 80px; color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.1);">👤</div>';
              }
            }}
          />
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '20px'
          }}>
            I'm Evans Armah, a passionate web developer and data analyst who brings creativity and technical expertise to every project. With a love for clean code and user-centered design, I specialize in creating digital experiences that are both functional and visually stunning.
          </p>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '30px'
          }}>
            My journey spans from crafting responsive websites to analyzing complex data patterns, always driven by the goal of solving real-world problems through technology.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              color: 'white'
            }}>React & Next.js</div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              color: 'white'
            }}>Python & Data Analysis</div>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              color: 'white'
            }}>UI/UX Design</div>
          </div>
        </div>
      </div>

      {/* Desktop Content Layout */}
      <div className="about-desktop-only hidden md:flex" style={{
        position: 'absolute',
        left: '96px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'calc(100vw - 192px)',
        height: '400px',
        display: 'flex',
        zIndex: 10
      }}>
        
        {/* Left Side - About Content */}
        <div style={{
          flex: '1',
          paddingRight: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* About Title with Underline */}
          <div style={{
            marginBottom: '40px'
          }}>
            <h1 style={{
              color: 'white',
              fontFamily: 'DM Sans',
              fontSize: '48px',
              fontWeight: '700',
              margin: '0 0 16px 0',
              letterSpacing: '2px',
              textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.3), 0 0 35px rgba(255, 255, 255, 0.2)',
              animation: 'textGlow 3s ease-in-out infinite'
            }} className="animate-fadeInUp delay-200">ABOUT</h1>
            
            {/* Glowing Subtitle */}
            <div style={{
              color: 'white',
              fontFamily: 'DM Sans',
              fontSize: '24px',
              fontWeight: '600',
              margin: '0 0 24px 0',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)',
              animation: 'textGlow 3s ease-in-out infinite'
            }} className="animate-fadeInUp delay-400">
              Shape the Future with HeaVans
            </div>
            <div style={{
              width: '100%',
              height: '2px',
              background: 'white',
              marginBottom: '32px'
            }} className="animate-fadeInLeft delay-600" />
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '1.6',
              margin: '0 0 224px 0',
              maxWidth: '500px'
            }} className="animate-fadeInUp delay-800">
              I'm a versatile Web Developer and Data Analyst with a background in research and a strong eye for user experience. My skills blend technical web development (CMS platforms, cloud systems, responsive design) with data-driven thinking. I enjoy building platforms that solve real problems—especially those that align with social good, innovation, and user-centered impact. I'm collaborative, adaptable, and constantly learning.
            </p>

            {/* Resume Download Link */}
            <a 
              href="/Evans_Armah_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '400',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }} 
              className="resume-link animate-fadeInUp delay-1000"
            >
              ↓ resume
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }} className="animate-fadeInRight delay-600">
          <div style={{
            width: '400px',
            height: '400px',
            borderRadius: '20px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 160, 0, 0.1))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/profile-image.jpeg"
              alt="Evans Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '18px'
              }}
              onError={(e) => {
                console.log('Profile image failed to load');
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
                if (img.parentElement) {
                  img.parentElement.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 120px; color: rgba(255,255,255,0.5);">👤</div>';
                }
              }}
            />
          </div>
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
        .menu-button:hover {
          color: rgba(255, 255, 255, 1) !important;
          transition: color 0.3s ease;
        }

        .resume-link:hover {
          color: rgba(255, 255, 255, 1) !important;
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1.0s; }
      `}</style>
    </div>
  );
}