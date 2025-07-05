import { Link } from 'wouter';

export default function Evans() {
  return (
    <div 
      className="relative w-full min-h-screen" 
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
            left: '96px',
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
          left: '194px',
          top: '0px'
        }} className="animate-slideInDown delay-300 menu-button" onClick={() => alert('Experience section coming soon!')}>Experience</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '317px',
          top: '0px'
        }} className="animate-slideInDown delay-400 menu-button" onClick={() => alert('Skills section coming soon!')}>Skills</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '388px',
          top: '0px'
        }} className="animate-slideInDown delay-500 menu-button" onClick={() => alert('Work section coming soon!')}>Work</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '456px',
          top: '0px'
        }} className="animate-slideInDown delay-600 menu-button" onClick={() => alert('Contact section coming soon!')}>Contact</div>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '150px',
        padding: '120px 60px 60px 60px',
        maxWidth: '1000px'
      }}>
        {/* Hero Section - Simplified */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '300',
            color: '#ffd700',
            marginBottom: '30px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2'
          }}>
            Evans (Heavans)
          </h1>
          
          <p style={{
            fontSize: '1.4rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
            maxWidth: '600px'
          }}>
            I'm a creative planet builder based in the digital universe. Since starting my journey, I've enjoyed turning complex problems into simple, beautiful and intuitive solutions. When I'm not building digital experiences, you'll find me writing poetry, exploring music, or collaborating with other creatives.
          </p>
        </div>

        {/* Main Profile Image */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <img
            src="/attached_assets/WhatsApp Image 2025-07-05 at 3.54.30 PM_1751757017392.jpeg"
            alt="Evans (Heavans) - Creative Planet Builder"
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '12px',
              border: '2px solid rgba(255, 215, 0, 0.3)',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.2)';
            }}
          />
        </div>

        {/* Image Grid - 6 lifestyle/workspace images */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '80px'
        }}>
          {/* Workspace Image */}
          <img
            src="/attached_assets/WhatsApp Image 2025-07-05 at 3.50.33 PM_1751756326013.jpeg"
            alt="Evans Workspace"
            style={{
              aspectRatio: '1',
              objectFit: 'cover',
              borderRadius: '8px',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.border = '1px solid rgba(255, 215, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.border = '1px solid rgba(255, 215, 0, 0.2)';
            }}
          />
          
          {/* Remaining placeholders */}
          {['Creative Process', 'Projects', 'Collaboration', 'Inspiration', 'Daily Life'].map((item, index) => (
            <div key={index} style={{
              aspectRatio: '1',
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid rgba(255, 215, 0, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              color: '#ffd700',
              fontFamily: 'DM Sans',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 215, 0, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Two Column Section - Part Builder, Part Creator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          marginBottom: '80px'
        }}>
          {/* Left Column */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              color: '#ffd700',
              marginBottom: '30px',
              fontFamily: 'Georgia, serif',
              fontWeight: '400'
            }}>
              Part builder
            </h2>
            
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              fontSize: '1.1rem',
              lineHeight: '2',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'Georgia, serif'
            }}>
              <li>• Product development</li>
              <li>• Full-stack coding</li>
              <li>• System architecture</li>
              <li>• Problem solving</li>
              <li>• "Making it work"</li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              color: '#ffd700',
              marginBottom: '30px',
              fontFamily: 'Georgia, serif',
              fontWeight: '400'
            }}>
              Part creator
            </h2>
            
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              fontSize: '1.1rem',
              lineHeight: '2',
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'Georgia, serif'
            }}>
              <li>• UI/UX design</li>
              <li>• Visual storytelling</li>
              <li>• Poetry & writing</li>
              <li>• Motion graphics</li>
              <li>• Creative collaboration</li>
            </ul>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <div style={{
            width: '300px',
            height: '300px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '50%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: '#ffd700',
            fontFamily: 'DM Sans'
          }}>
            Part Builder, Part Creator Chart
          </div>
        </div>

        {/* Random Facts */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#ffd700',
            marginBottom: '30px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400'
          }}>
            Random facts
          </h2>
          
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Georgia, serif',
            columns: '2',
            columnGap: '60px'
          }}>
            <li style={{marginBottom: '10px'}}>• I love building things that solve real problems</li>
            <li style={{marginBottom: '10px'}}>• Poetry is my creative recharge time</li>
            <li style={{marginBottom: '10px'}}>• I want to revolutionize digital experiences</li>
            <li style={{marginBottom: '10px'}}>• I'm passionate about clean code</li>
            <li style={{marginBottom: '10px'}}>• I thrive in collaborative environments</li>
            <li style={{marginBottom: '10px'}}>• I'm into motion design</li>
            <li style={{marginBottom: '10px'}}>• I enjoy creating meaningful connections</li>
            <li style={{marginBottom: '10px'}}>• Music inspires my creative process</li>
            <li style={{marginBottom: '10px'}}>• I believe in design with purpose</li>
          </ul>
        </div>

        {/* My Skills */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#ffd700',
            marginBottom: '30px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400'
          }}>
            My skills
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {[
              { skill: 'Creative Vision', level: 95 },
              { skill: 'Full-Stack Development', level: 90 },
              { skill: 'UI/UX Design', level: 85 },
              { skill: 'Poetry & Writing', level: 80 },
              { skill: 'Motion Graphics', level: 75 },
              { skill: 'Collaboration', level: 90 }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'Georgia, serif',
                  minWidth: '180px'
                }}>
                  {item.skill}
                </div>
                <div style={{
                  flex: '1',
                  height: '6px',
                  background: 'rgba(255, 215, 0, 0.2)',
                  borderRadius: '3px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${item.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #ffd700, #ffcc00)',
                    borderRadius: '3px',
                    transition: 'width 2s ease-out'
                  }} />
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#ffd700',
                  fontFamily: 'DM Sans',
                  fontWeight: '600',
                  minWidth: '40px'
                }}>
                  {item.level}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Work */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#ffd700',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400'
          }}>
            Featured here & there
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif'
          }}>
            I've been lucky enough to have my work featured in various digital platforms and design communities. I've also spoken at creative events and enjoy sharing my passion for building meaningful digital experiences.
          </p>
          
          <Link href="/about">
            <div style={{
              color: '#ffd700',
              fontSize: '1.1rem',
              fontFamily: 'Georgia, serif',
              textDecoration: 'underline',
              cursor: 'pointer',
              marginBottom: '30px',
              display: 'inline-block'
            }}>
              View featured work
            </div>
          </Link>
          
          <div style={{
            width: '100%',
            height: '300px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: '#ffd700',
            fontFamily: 'DM Sans',
            cursor: 'pointer'
          }}>
            Featured Work Image
          </div>
        </div>

        {/* My Galaxy */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#ffd700',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400'
          }}>
            My creative galaxy
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif'
          }}>
            Explore the planets in my creative solar system. Each one represents a different skill and passion that orbits around my core mission of building meaningful digital experiences.
          </p>
          
          <Link href="/about">
            <div style={{
              color: '#ffd700',
              fontSize: '1.1rem',
              fontFamily: 'Georgia, serif',
              textDecoration: 'underline',
              cursor: 'pointer',
              marginBottom: '30px',
              display: 'inline-block'
            }}>
              Explore my galaxy
            </div>
          </Link>
          
          <div style={{
            width: '100%',
            height: '300px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: '#ffd700',
            fontFamily: 'DM Sans',
            cursor: 'pointer'
          }}>
            Galaxy System Image
          </div>
        </div>

        {/* My Story */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#ffd700',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400'
          }}>
            My story
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif'
          }}>
            Learn a little bit more about me, how I got into creative development, and how I built my career spanning design, code, and creative collaboration. I've included key insights I've learned, inspirations, and even some behind-the-scenes glimpses of my creative process.
          </p>
          
          <Link href="/about">
            <div style={{
              color: '#ffd700',
              fontSize: '1.1rem',
              fontFamily: 'Georgia, serif',
              textDecoration: 'underline',
              cursor: 'pointer',
              marginBottom: '30px',
              display: 'inline-block'
            }}>
              Read my story
            </div>
          </Link>
          
          <div style={{
            width: '100%',
            height: '300px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: '#ffd700',
            fontFamily: 'DM Sans',
            cursor: 'pointer'
          }}>
            Story/Workspace Image
          </div>
        </div>
      </div>

      {/* Professional Footer */}
      <footer style={{
        width: '100%',
        background: '#63767C',
        padding: '40px 80px',
        boxSizing: 'border-box',
        marginTop: '80px'
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