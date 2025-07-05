import { Link } from 'wouter';

export default function DesignThinker() {
  return (
    <div 
      className="relative w-full min-h-screen" 
      style={{backgroundColor: 'white'}}
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
        <Link href="/evans">
          <div style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '400',
            position: 'absolute',
            left: '194px',
            top: '0px',
            cursor: 'pointer'
          }} className="animate-slideInDown delay-300 menu-button">Evans</div>
        </Link>
      </div>

      {/* Main Content */}
      <div style={{
        marginLeft: '150px',
        padding: '120px 60px 60px 60px',
        maxWidth: '1000px'
      }}>
        {/* Hero Section */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '300',
            color: '#66bb6a',
            marginBottom: '30px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.2'
          }}>
            Design Thinker
          </h1>
          
          <p style={{
            fontSize: '1.4rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
            maxWidth: '600px'
          }}>
            I design with clarity and feeling. My UI/UX and graphics connect people to experiences in a meaningful way. Design is my language for solving problems and creating connections that resonate deeply.
          </p>
        </div>

        {/* Main Profile Image */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <div style={{
            width: '300px',
            height: '300px',
            background: 'rgba(102, 187, 106, 0.1)',
            border: '2px solid rgba(102, 187, 106, 0.3)',
            borderRadius: '12px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: '#66bb6a',
            fontFamily: 'DM Sans'
          }}>
            Design Portfolio Image
          </div>
        </div>

        {/* Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '80px'
        }}>
          {['Design Studio', 'UI Projects', 'Sketches', 'Design Systems', 'User Research', 'Prototypes'].map((item, index) => (
            <div key={index} style={{
              aspectRatio: '1',
              background: 'rgba(102, 187, 106, 0.1)',
              border: '1px solid rgba(102, 187, 106, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem',
              color: '#66bb6a',
              fontFamily: 'DM Sans',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(102, 187, 106, 0.2)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(102, 187, 106, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Two Column Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          marginBottom: '80px'
        }}>
          <div>
            <h2 style={{
              fontSize: '2rem',
              color: '#66bb6a',
              marginBottom: '30px',
              fontFamily: 'Georgia, serif',
              fontWeight: '400'
            }}>
              Part designer
            </h2>
            
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              fontSize: '1.1rem',
              lineHeight: '2',
              color: 'rgba(0, 0, 0, 0.8)',
              fontFamily: 'Georgia, serif'
            }}>
              <li>• UI/UX design</li>
              <li>• Visual systems</li>
              <li>• User experience</li>
              <li>• Design thinking</li>
              <li>• "Making it beautiful"</li>
            </ul>
          </div>

          <div>
            <h2 style={{
              fontSize: '2rem',
              color: '#66bb6a',
              marginBottom: '30px',
              fontFamily: 'Georgia, serif',
              fontWeight: '400'
            }}>
              Part strategist
            </h2>
            
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0',
              fontSize: '1.1rem',
              lineHeight: '2',
              color: 'rgba(0, 0, 0, 0.8)',
              fontFamily: 'Georgia, serif'
            }}>
              <li>• Problem solving</li>
              <li>• User research</li>
              <li>• Information architecture</li>
              <li>• Design strategy</li>
              <li>• "Making it work"</li>
            </ul>
          </div>
        </div>

        {/* My Skills */}
        <div style={{
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '2rem',
            color: '#66bb6a',
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
              { skill: 'UI/UX Design', level: 95 },
              { skill: 'Design Systems', level: 90 },
              { skill: 'User Research', level: 80 },
              { skill: 'Prototyping', level: 85 },
              { skill: 'Visual Design', level: 90 },
              { skill: 'Design Thinking', level: 95 }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div style={{
                  fontSize: '1.1rem',
                  color: 'rgba(0, 0, 0, 0.8)',
                  fontFamily: 'Georgia, serif',
                  minWidth: '180px'
                }}>
                  {item.skill}
                </div>
                <div style={{
                  flex: '1',
                  height: '6px',
                  background: 'rgba(102, 187, 106, 0.2)',
                  borderRadius: '3px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${item.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #66bb6a, #4caf50)',
                    borderRadius: '3px',
                    transition: 'width 2s ease-out'
                  }} />
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#66bb6a',
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
            color: '#66bb6a',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif',
            fontWeight: '400'
          }}>
            Featured designs
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(0, 0, 0, 0.8)',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif'
          }}>
            A showcase of UI/UX projects, design systems, and visual solutions that demonstrate my approach to creating meaningful user experiences.
          </p>
          
          <Link href="/about">
            <div style={{
              color: '#66bb6a',
              fontSize: '1.1rem',
              fontFamily: 'Georgia, serif',
              textDecoration: 'underline',
              cursor: 'pointer',
              marginBottom: '30px',
              display: 'inline-block'
            }}>
              See designs
            </div>
          </Link>
          
          <div style={{
            width: '100%',
            height: '300px',
            background: 'rgba(102, 187, 106, 0.1)',
            border: '1px solid rgba(102, 187, 106, 0.2)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            color: '#66bb6a',
            fontFamily: 'DM Sans',
            cursor: 'pointer'
          }}>
            Design Portfolio Image
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
              color: 'rgba(0, 0, 0, 0.8)',
              lineHeight: '1.5',
              margin: '0',
              maxWidth: '280px'
            }}>
              Creative web developer blending design, code, and motion to build modern, impactful digital experiences.
            </p>
          </div>

          <div style={{flex: '0 0 auto', marginRight: '60px'}}>
            <h4 style={{
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: '600',
              color: '#FFF',
              marginBottom: '16px',
              margin: '0 0 16px 0'
            }}>Quick Links</h4>
            <ul style={{listStyle: 'none', padding: '0', margin: '0'}}>
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
            </ul>
          </div>

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