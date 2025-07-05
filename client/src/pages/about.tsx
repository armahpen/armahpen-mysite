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

const planets: PlanetData[] = [
  {
    id: 'creative',
    title: 'Creative Builder',
    subtitle: 'Creative Projects',
    description: 'From building tutoring networks like Student Help to launching platforms like DEMS, I turn ideas into real tools.',
    orbitRadius: 120,
    size: 20,
    color: '#4facfe',
    animationDuration: '20s'
  },
  {
    id: 'poetry',
    title: 'Poet & Wordsmith',
    subtitle: 'Poetry & Expression',
    description: 'I write and read poetry, and explore music for creative expression. Words help me think, feel, and build better.',
    orbitRadius: 160,
    size: 18,
    color: '#f093fb',
    animationDuration: '25s'
  },
  {
    id: 'design',
    title: 'Designer & Visual Thinker',
    subtitle: 'UI/UX & Graphic Design',
    description: 'I design sleek user interfaces, motion graphics, and branding that speaks clearly and emotionally.',
    orbitRadius: 200,
    size: 22,
    color: '#43e97b',
    animationDuration: '30s'
  },
  {
    id: 'developer',
    title: 'Code Architect',
    subtitle: 'Developer Life',
    description: 'Full-stack development with modern tools. Clean, scalable, efficient—built for real-world impact.',
    orbitRadius: 240,
    size: 19,
    color: '#fa709a',
    animationDuration: '35s'
  },
  {
    id: 'motion',
    title: 'Visual Movement',
    subtitle: 'Motion Graphics',
    description: 'I bring interfaces and stories to life with fluid motion design and interactive visual thinking.',
    orbitRadius: 280,
    size: 17,
    color: '#38f9d7',
    animationDuration: '40s'
  },
  {
    id: 'collaboration',
    title: 'Creative Networker',
    subtitle: 'Collaboration',
    description: 'I love connecting with like-minded creators to brainstorm, build, and grow together.',
    orbitRadius: 320,
    size: 16,
    color: '#ffecd2',
    animationDuration: '45s'
  }
];

export default function About() {
  const [hoveredPlanet, setHoveredPlanet] = useState<PlanetData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlanetClick = (planet: PlanetData) => {
    setHoveredPlanet(planet);
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
        {planets.map((planet) => (
          <div
            key={`orbit-${planet.id}`}
            className="orbit-ring"
            style={{
              position: 'absolute',
              width: `${planet.orbitRadius * 2}px`,
              height: `${planet.orbitRadius * 2}px`,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              animation: `pulse 4s ease-in-out infinite`
            }}
          />
        ))}

        {/* Central Sun */}
        <div style={{
          position: 'absolute',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ffd700 0%, #ff6b35 50%, #ff8e53 100%)',
          boxShadow: '0 0 60px rgba(255, 215, 0, 0.6), 0 0 120px rgba(255, 215, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          animation: 'sunGlow 3s ease-in-out infinite alternate'
        }}>
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '14px',
            fontWeight: '600',
            color: 'white',
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }}>
            Evans (Heavans)
          </div>
        </div>

        {/* Planets */}
        {planets.map((planet, index) => (
          <div
            key={planet.id}
            className="planet-orbit"
            style={{
              position: 'absolute',
              width: `${planet.orbitRadius * 2}px`,
              height: `${planet.orbitRadius * 2}px`,
              animation: `rotate ${planet.animationDuration} linear infinite`,
              animationDelay: `${index * -2}s`
            }}
          >
            <div
              className="planet"
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                borderRadius: '50%',
                background: `radial-gradient(circle at 30% 30%, ${planet.color}, ${planet.color}88)`,
                boxShadow: `0 0 20px ${planet.color}66`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                zIndex: 5
              }}
              onClick={() => handlePlanetClick(planet)}
              onMouseEnter={() => setHoveredPlanet(planet)}
              onMouseLeave={() => setHoveredPlanet(null)}
            />
          </div>
        ))}

        {/* Hover Tooltip */}
        {hoveredPlanet && !modalOpen && (
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '12px',
            padding: '20px',
            maxWidth: '300px',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '8px',
              color: hoveredPlanet.color
            }}>
              {hoveredPlanet.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0',
              lineHeight: '1.5'
            }}>
              {hoveredPlanet.description}
            </p>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.6)',
              marginTop: '8px'
            }}>
              Click to explore
            </div>
          </div>
        )}

        {/* Modal */}
        {modalOpen && hoveredPlanet && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            animation: 'fadeIn 0.3s ease'
          }}
          onClick={() => setModalOpen(false)}>
            <div style={{
              background: 'rgba(26, 26, 46, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '500px',
              margin: '20px',
              animation: 'slideIn 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${hoveredPlanet.color}, ${hoveredPlanet.color}88)`,
                boxShadow: `0 0 30px ${hoveredPlanet.color}66`,
                marginBottom: '20px'
              }}></div>
              
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '8px',
                color: hoveredPlanet.color
              }}>
                {hoveredPlanet.title}
              </h2>
              
              <h3 style={{
                fontSize: '16px',
                fontWeight: '500',
                marginBottom: '20px',
                color: 'rgba(255, 255, 255, 0.7)'
              }}>
                {hoveredPlanet.subtitle}
              </h3>
              
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '30px'
              }}>
                {hoveredPlanet.description}
              </p>
              
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}