import { Link } from 'wouter';

export default function Evans() {
  return (
    <div 
      className="relative w-full" 
      style={{backgroundColor: '#1E1E1E'}}
    >
      {/* Left Border */}
      <div 
        style={{
          width: '130px',
          height: '100vh',
          borderRight: '1px solid rgba(255, 255, 255, 0.12)',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }}
      />
      
      {/* HeaVans Logo - Clickable */}
      <Link href="/">
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          zIndex: 20,
          cursor: 'pointer'
        }}>
          <img
            src="/logo.png"
            alt="HeaVans Logo"
            style={{
              width: '120px',
              height: '36px',
              objectFit: 'contain'
            }}
            className="ml-[89px] mr-[89px] pl-[-3px] pr-[-3px] mt-[43px] mb-[43px]" />
        </div>
      </Link>
      
      {/* Navigation Menu */}
      <div style={{position: 'absolute', left: '1101px', top: '57px', width: '548px', height: '18px', zIndex: 20}}>
        <Link href="/">
          <div style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '400',
            position: 'absolute',
            left: '0px',
            top: '0px',
            cursor: 'pointer'
          }} className="animate-slideInDown delay-100 menu-button">Home</div>
        </Link>
        <Link href="/about">
          <div style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '400',
            position: 'absolute',
            left: '80px',
            top: '0px',
            cursor: 'pointer'
          }} className="animate-slideInDown delay-200 menu-button">About</div>
        </Link>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '145px',
          top: '0px'
        }} className="animate-slideInDown delay-300 menu-button" onClick={() => alert('Experience section coming soon!')}>Experience</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '265px',
          top: '0px'
        }} className="animate-slideInDown delay-400 menu-button" onClick={() => alert('Work section coming soon!')}>Work</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '320px',
          top: '0px'
        }} className="animate-slideInDown delay-500 menu-button" onClick={() => alert('Contact section coming soon!')}>Contact</div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '150px',
        padding: '120px 60px 60px 60px',
        maxWidth: '1200px'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          {/* Main Title with Glow Effect */}
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #ffd700, #ffcc00, #ff4500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            textShadow: '0 0 30px rgba(255, 215, 0, 0.5)',
            fontFamily: 'Inter, Arial, sans-serif'
          }}>
            Evans (Heavans)
          </h1>
          
          {/* Subtitle */}
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '30px',
            fontFamily: 'DM Sans',
            fontWeight: '300'
          }}>
            Creative Planet Builder
          </p>
          
          {/* Quote */}
          <div style={{
            fontSize: '1.1rem',
            color: '#ffd700',
            fontStyle: 'italic',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            lineHeight: '1.6'
          }}>
            "A creative planet builder — orbiting ideas, design, code, and imagination."
          </div>
        </div>

        {/* About Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
          marginBottom: '80px'
        }}>
          {/* Left Column - About */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              color: '#ffd700',
              marginBottom: '25px',
              fontFamily: 'Inter',
              fontWeight: '600'
            }}>
              Who I Am
            </h2>
            
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              fontFamily: 'DM Sans',
              marginBottom: '30px'
            }}>
              <p style={{marginBottom: '20px'}}>
                I'm Evans, but my creative universe goes by <strong style={{color: '#ffd700'}}>Heavans</strong>. 
                I exist at the intersection of imagination and execution, where wild ideas become digital realities.
              </p>
              
              <p style={{marginBottom: '20px'}}>
                Like a central star in my own creative solar system, I'm surrounded by orbiting skills and passions—each one a planet with its own unique energy and purpose.
              </p>
              
              <p>
                I believe that great work happens when creativity meets strategy, when design meets functionality, 
                and when individual talents collaborate in harmony.
              </p>
            </div>
          </div>

          {/* Right Column - Philosophy */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              color: '#ffd700',
              marginBottom: '25px',
              fontFamily: 'Inter',
              fontWeight: '600'
            }}>
              My Philosophy
            </h2>
            
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              fontFamily: 'DM Sans'
            }}>
              <p style={{marginBottom: '20px'}}>
                Every project is a universe waiting to be born. I approach each challenge as an opportunity 
                to create something that didn't exist before—something that matters.
              </p>
              
              <p style={{marginBottom: '20px'}}>
                My work spans multiple dimensions: building functional products, crafting beautiful interfaces, 
                writing meaningful words, and collaborating with other creators to amplify our collective impact.
              </p>
              
              <p>
                I'm not just building websites or apps—I'm building experiences, stories, and connections 
                that resonate with real people.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Galaxy Preview */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: '#ffd700',
            marginBottom: '30px',
            fontFamily: 'Inter',
            fontWeight: '600'
          }}>
            My Creative Galaxy
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px auto',
            lineHeight: '1.6',
            fontFamily: 'DM Sans'
          }}>
            Explore the planets in my creative solar system. Each one represents a different skill and passion that orbits around my core mission.
          </p>

          {/* Quick Navigation to Planets */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              { name: 'Creative Builder', color: '#4fc3f7', link: '/creative-builder' },
              { name: 'Poet & Sound Explorer', color: '#ab47bc', link: '/poet' },
              { name: 'Design Thinker', color: '#66bb6a', link: '/design' },
              { name: 'Full-Stack Developer', color: '#ef5350', link: '/developer' },
              { name: 'Motion Creator', color: '#ff9800', link: '/motion' },
              { name: 'Creative Collaborator', color: '#9c27b0', link: '/collaborator' }
            ].map((planet, index) => (
              <Link key={index} href={planet.link}>
                <div style={{
                  background: `${planet.color}15`,
                  border: `2px solid ${planet.color}`,
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: planet.color,
                  fontFamily: 'DM Sans',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${planet.color}25`;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px ${planet.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${planet.color}15`;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  {planet.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '40px',
          background: 'rgba(255, 215, 0, 0.1)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 215, 0, 0.3)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            color: '#ffd700',
            marginBottom: '20px',
            fontFamily: 'Inter',
            fontWeight: '600'
          }}>
            Ready to Build Something Amazing?
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '30px',
            fontFamily: 'DM Sans'
          }}>
            Let's collaborate and create something that matters. Whether it's a product, a story, or an experience.
          </p>
          
          <Link href="/about">
            <button style={{
              background: 'linear-gradient(135deg, #ffd700, #ffcc00)',
              color: '#1E1E1E',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'DM Sans'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              Explore My Galaxy
            </button>
          </Link>
        </div>
      </div>

      {/* Professional Footer */}
      <footer style={{
        width: '100%',
        background: '#63767C',
        padding: '40px 80px',
        boxSizing: 'border-box',
        marginTop: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '1440px',
          margin: '0 auto'
        }}>
          {/* Logo and Description */}
          <div style={{flex: '1', marginRight: '60px'}}>
            <div style={{
              fontFamily: 'Poppins',
              fontSize: '24px',
              fontWeight: '600',
              color: '#FFF',
              marginBottom: '12px'
            }}>HeaVans.</div>
            <p style={{
              fontFamily: 'Public Sans',
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.5',
              margin: '0',
              maxWidth: '280px'
            }}>
              Creative web developer blending design, code, and motion to build modern, impactful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{flex: '0 0 auto', marginRight: '60px'}}>
            <h4 style={{
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFF',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>Quick Links</h4>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{marginBottom: '8px'}}>
                <Link href="/" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>Home</Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link href="/about" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>About</Link>
              </li>
              <li style={{marginBottom: '8px'}}>
                <Link href="/evans" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>Evans</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div style={{flex: '0 0 auto', marginRight: '60px'}}>
            <h4 style={{
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFF',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>Get In Touch</h4>
            <div style={{
              fontFamily: 'DM Sans',
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.6'
            }}>
              <p style={{margin: '0 0 8px 0'}}>evans@heavans.com</p>
              <p style={{margin: '0 0 8px 0'}}>Available for freelance work</p>
            </div>
          </div>

          {/* Social Links */}
          <div style={{flex: '0 0 auto'}}>
            <h4 style={{
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFF',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>Follow Me</h4>
            <div style={{display: 'flex', gap: '12px'}}>
              <a href="#" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Public Sans',
                fontSize: '14px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>Tw</a>
              <a href="#" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Public Sans',
                fontSize: '14px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>In</a>
              <a href="#" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontFamily: 'Public Sans',
                fontSize: '14px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>Fb</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          marginTop: '32px',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{
            fontFamily: 'DM Sans',
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.6)',
            margin: '0'
          }}>
            © 2025 HeaVans. All rights reserved. | Designed & Developed by Evans
          </p>
        </div>
      </footer>
    </div>
  );
}