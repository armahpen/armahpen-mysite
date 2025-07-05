import { Link } from 'wouter';

export default function CreativeBuilder() {
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
        maxWidth: '1200px'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          {/* Planet Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
            margin: '0 auto 30px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(79, 195, 247, 0.4)',
            animation: 'pulse 2s infinite'
          }}>
            <div style={{
              fontSize: '2rem',
              color: 'white',
              fontWeight: 'bold'
            }}>🚀</div>
          </div>
          
          {/* Main Title */}
          <h1 style={{
            fontSize: '4rem',
            fontWeight: '700',
            color: '#4fc3f7',
            marginBottom: '20px',
            textShadow: '0 0 30px rgba(79, 195, 247, 0.5)',
            fontFamily: 'Inter, Arial, sans-serif'
          }}>
            Creative Builder
          </h1>
          
          {/* Quote */}
          <div style={{
            fontSize: '1.3rem',
            color: '#4fc3f7',
            fontStyle: 'italic',
            marginBottom: '40px',
            fontFamily: 'Georgia, serif',
            maxWidth: '600px',
            margin: '0 auto 40px auto',
            lineHeight: '1.6'
          }}>
            "I bring real ideas to life."
          </div>
        </div>

        {/* Main Description */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <p style={{
            fontSize: '1.4rem',
            color: '#4fc3f7',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: 'DM Sans',
            fontWeight: '400'
          }}>
            I've founded Student Help and DEMS, creating tools that solve real problems.
          </p>
        </div>

        {/* Content Sections Grid */}
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
              color: '#4fc3f7',
              marginBottom: '25px',
              fontFamily: 'Inter',
              fontWeight: '600'
            }}>
              Building Real Solutions
            </h2>
            
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              fontFamily: 'DM Sans'
            }}>
              <p style={{marginBottom: '20px'}}>
                Every project starts with a real problem that needs solving. I don't just build products—I create solutions that make a meaningful difference in people's lives.
              </p>
              
              <p style={{marginBottom: '20px'}}>
                From Student Help to DEMS, each venture represents my commitment to turning ideas into functional, impactful tools that serve real communities.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 style={{
              fontSize: '2rem',
              color: '#4fc3f7',
              marginBottom: '25px',
              fontFamily: 'Inter',
              fontWeight: '600'
            }}>
              My Approach
            </h2>
            
            <div style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              fontFamily: 'DM Sans'
            }}>
              <p style={{marginBottom: '20px'}}>
                I believe in starting with the user's actual needs, not assumptions. Research, prototype, test, iterate—this cycle drives everything I build.
              </p>
              
              <p>
                The best solutions feel effortless to use but are built on deep understanding of the problem space and the people who will use them.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Projects Placeholder */}
        <div style={{
          background: 'rgba(79, 195, 247, 0.1)',
          borderRadius: '16px',
          border: '1px solid rgba(79, 195, 247, 0.3)',
          padding: '40px',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: '#4fc3f7',
            marginBottom: '20px',
            fontFamily: 'Inter',
            fontWeight: '600'
          }}>
            Featured Projects
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '30px',
            fontFamily: 'DM Sans'
          }}>
            Project showcases and case studies will be added here.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {['Student Help', 'DEMS', 'Project 3'].map((project, index) => (
              <div key={index} style={{
                background: 'rgba(79, 195, 247, 0.15)',
                border: '1px solid rgba(79, 195, 247, 0.3)',
                borderRadius: '12px',
                padding: '30px 20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(79, 195, 247, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <h4 style={{
                  color: '#4fc3f7',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  fontFamily: 'Inter'
                }}>
                  {project}
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.9rem',
                  fontFamily: 'DM Sans'
                }}>
                  Project details coming soon
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '40px',
          background: 'rgba(79, 195, 247, 0.1)',
          borderRadius: '16px',
          border: '1px solid rgba(79, 195, 247, 0.3)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            color: '#4fc3f7',
            marginBottom: '20px',
            fontFamily: 'Inter',
            fontWeight: '600'
          }}>
            Ready to Build Something?
          </h3>
          
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '30px',
            fontFamily: 'DM Sans'
          }}>
            Let's turn your idea into a solution that makes a difference.
          </p>
          
          <Link href="/about">
            <button style={{
              background: 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
              color: 'white',
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
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(79, 195, 247, 0.4)';
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
              color: 'rgba(255, 255, 255, 0.8)',
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