import { useState } from 'react';

interface PlanetData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  orbitRadius: number;
  size: number;
  color: string;
  animationDuration: string;
}

const spaceships: PlanetData[] = [
  {
    id: 'creative',
    title: 'Creative Builder',
    subtitle: 'Creative Projects',
    description: 'I\'ve founded projects like Student Help (education support) and DEMS (AI-powered data services).',
    orbitRadius: 140,
    size: 24,
    color: '#00d4ff',
    animationDuration: '25s'
  },
  {
    id: 'poetry',
    title: 'Poet & Sound Explorer',
    subtitle: 'Poetry & Music',
    description: 'I write poetry and explore music as an emotional outlet that inspires my digital creations.',
    orbitRadius: 180,
    size: 22,
    color: '#ff6b9d',
    animationDuration: '30s'
  },
  {
    id: 'design',
    title: 'Design Thinker',
    subtitle: 'UI/UX & Design',
    description: 'I create engaging interfaces and visuals that are both beautiful and intuitive.',
    orbitRadius: 220,
    size: 26,
    color: '#39ff14',
    animationDuration: '35s'
  },
  {
    id: 'developer',
    title: 'Full-Stack Developer',
    subtitle: 'Web Development',
    description: 'I build modern, scalable web apps using clean code and real-world logic.',
    orbitRadius: 260,
    size: 23,
    color: '#ff4757',
    animationDuration: '40s'
  },
  {
    id: 'motion',
    title: 'Motion Creator',
    subtitle: 'Motion Graphics',
    description: 'I use animation to bring static designs to life—making stories and products more memorable.',
    orbitRadius: 300,
    size: 21,
    color: '#7bed9f',
    animationDuration: '45s'
  },
  {
    id: 'collaboration',
    title: 'Creative Collaborator',
    subtitle: 'Collaboration',
    description: 'I love working with other passionate minds to build meaningful, creative things.',
    orbitRadius: 340,
    size: 20,
    color: '#ffa502',
    animationDuration: '50s'
  }
];

export default function About() {
  const [hoveredSpaceship, setHoveredSpaceship] = useState<PlanetData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSpaceshipClick = (spaceship: PlanetData) => {
    setHoveredSpaceship(spaceship);
    setModalOpen(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1e 50%, #0a0a15 100%)',
      color: 'white',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header with Navigation */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'sticky',
        top: 0,
        background: 'rgba(26, 26, 46, 0.8)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          color: 'white'
        }}>Evans (Heavans)</div>
        
        <nav style={{
          display: 'flex',
          gap: '40px'
        }}>
          <div className="menu-button animate-fadeInUp delay-100"
               style={{ cursor: 'pointer' }}
               onClick={() => window.location.href = '/'}>Home</div>
          <div className="menu-button animate-fadeInUp delay-200"
               style={{ cursor: 'pointer' }}>About</div>
          <div className="menu-button animate-fadeInUp delay-300"
               style={{ cursor: 'pointer' }}
               onClick={() => alert('Work section coming soon!')}>Work</div>
          <div className="menu-button animate-fadeInUp delay-400"
               style={{ cursor: 'pointer' }}
               onClick={() => alert('Contact section coming soon!')}>Contact</div>
        </nav>
      </header>

      {/* Galaxy Background Stars */}
      <div className="stars"></div>

      {/* Orbital System Container */}
      <div style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        
        {/* Orbital Paths */}
        {spaceships.map((spaceship) => (
          <div
            key={`orbit-${spaceship.id}`}
            className="orbit-ring"
            style={{
              position: 'absolute',
              width: `${spaceship.orbitRadius * 2}px`,
              height: `${spaceship.orbitRadius * 2}px`,
              border: '1px solid rgba(0, 255, 255, 0.2)',
              borderRadius: '50%',
              animation: `pulse 4s ease-in-out infinite`,
              boxShadow: `inset 0 0 20px rgba(0, 255, 255, 0.1)`
            }}
          />
        ))}

        {/* Central Energy Core */}
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00d4ff 0%, #0099cc 30%, #006699 60%, #003d5c 100%)',
          boxShadow: '0 0 80px rgba(0, 212, 255, 0.8), 0 0 160px rgba(0, 212, 255, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          animation: 'coreGlow 4s ease-in-out infinite alternate',
          border: '2px solid rgba(0, 212, 255, 0.6)'
        }}>
          {/* Core Pulse Effect */}
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
            animation: 'corePulse 2s ease-in-out infinite'
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '16px',
            fontWeight: '700',
            color: '#00d4ff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            textShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
            letterSpacing: '0.5px'
          }}>
            Evans (Heavans)
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '-75px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '12px',
            fontWeight: '500',
            color: 'rgba(255, 255, 255, 0.7)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            maxWidth: '200px'
          }}>
            A multidisciplinary creative at the center of code, design, and storytelling
          </div>
        </div>

        {/* Spaceships */}
        {spaceships.map((spaceship, index) => (
          <div
            key={spaceship.id}
            className="spaceship-orbit"
            style={{
              position: 'absolute',
              width: `${spaceship.orbitRadius * 2}px`,
              height: `${spaceship.orbitRadius * 2}px`,
              animation: `rotate ${spaceship.animationDuration} linear infinite`,
              animationDelay: `${index * -3}s`
            }}
          >
            <div
              className="spaceship"
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                zIndex: 5
              }}
              onClick={() => handleSpaceshipClick(spaceship)}
              onMouseEnter={() => setHoveredSpaceship(spaceship)}
              onMouseLeave={() => setHoveredSpaceship(null)}
            >
              {/* Spaceship SVG */}
              <svg 
                width={spaceship.size} 
                height={spaceship.size} 
                viewBox="0 0 24 24" 
                fill="none"
                style={{
                  filter: `drop-shadow(0 0 8px ${spaceship.color}66)`
                }}
              >
                <path 
                  d="M12 2L18 7V12L15 14L12 16L9 14L6 12V7L12 2Z" 
                  fill={spaceship.color}
                  stroke={spaceship.color}
                  strokeWidth="0.5"
                />
                <path 
                  d="M12 7L16 10V13L12 11L8 13V10L12 7Z" 
                  fill="rgba(255,255,255,0.3)"
                />
                <circle cx="12" cy="10" r="2" fill="rgba(255,255,255,0.8)"/>
                <path 
                  d="M10 16L12 22L14 16" 
                  stroke={spaceship.color} 
                  strokeWidth="2" 
                  fill="none"
                />
              </svg>
              
              {/* Motion Trail */}
              <div 
                className="motion-trail"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-20px',
                  width: '15px',
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${spaceship.color}44)`,
                  borderRadius: '1px',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>
          </div>
        ))}

        {/* Hover Tooltip */}
        {hoveredSpaceship && !modalOpen && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 10, 20, 0.95)',
            border: `1px solid ${hoveredSpaceship.color}44`,
            borderRadius: '16px',
            padding: '24px',
            maxWidth: '320px',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease',
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px ${hoveredSpaceship.color}22`,
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '8px',
              color: hoveredSpaceship.color,
              textShadow: `0 0 10px ${hoveredSpaceship.color}66`
            }}>
              {hoveredSpaceship.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0',
              lineHeight: '1.6'
            }}>
              {hoveredSpaceship.description}
            </p>
            <div style={{
              fontSize: '12px',
              color: hoveredSpaceship.color,
              marginTop: '12px',
              fontWeight: '500'
            }}>
              ▶ Click to explore mission
            </div>
          </div>
        )}

        {/* Modal */}
        {modalOpen && hoveredSpaceship && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            animation: 'fadeIn 0.3s ease',
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setModalOpen(false)}>
            <div style={{
              background: 'rgba(5, 15, 25, 0.95)',
              border: `2px solid ${hoveredSpaceship.color}44`,
              borderRadius: '24px',
              padding: '50px',
              maxWidth: '550px',
              margin: '20px',
              animation: 'slideIn 0.3s ease',
              boxShadow: `0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px ${hoveredSpaceship.color}22`
            }}
            onClick={(e) => e.stopPropagation()}>
              
              {/* Spaceship Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '24px'
              }}>
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  style={{
                    filter: `drop-shadow(0 0 12px ${hoveredSpaceship.color}88)`,
                    marginRight: '16px'
                  }}
                >
                  <path 
                    d="M12 2L18 7V12L15 14L12 16L9 14L6 12V7L12 2Z" 
                    fill={hoveredSpaceship.color}
                    stroke={hoveredSpaceship.color}
                    strokeWidth="0.5"
                  />
                  <path 
                    d="M12 7L16 10V13L12 11L8 13V10L12 7Z" 
                    fill="rgba(255,255,255,0.4)"
                  />
                  <circle cx="12" cy="10" r="2" fill="rgba(255,255,255,0.9)"/>
                  <path 
                    d="M10 16L12 22L14 16" 
                    stroke={hoveredSpaceship.color} 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
                
                <div>
                  <h2 style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    marginBottom: '4px',
                    color: hoveredSpaceship.color,
                    textShadow: `0 0 15px ${hoveredSpaceship.color}66`
                  }}>
                    {hoveredSpaceship.title}
                  </h2>
                  
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 0.7)',
                    margin: '0'
                  }}>
                    {hoveredSpaceship.subtitle}
                  </h3>
                </div>
              </div>
              
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: '40px'
              }}>
                {hoveredSpaceship.description}
              </p>
              
              <div style={{
                display: 'flex',
                gap: '16px'
              }}>
                <button
                  style={{
                    background: `linear-gradient(135deg, ${hoveredSpaceship.color}44, ${hoveredSpaceship.color}22)`,
                    border: `1px solid ${hoveredSpaceship.color}66`,
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: `0 4px 15px ${hoveredSpaceship.color}33`
                  }}
                  onClick={() => alert('Mission details coming soon!')}
                >
                  Explore Mission
                </button>
                
                <button
                  onClick={() => setModalOpen(false)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    padding: '14px 28px',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}