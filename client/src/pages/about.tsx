import { useState } from 'react';

const planets = [
  {
    id: 1,
    title: "Creative Builder",
    description: "I've founded Student Help and DEMS, bringing real ideas to life.",
    link: "/projects",
    color: "#4fc3f7",
    orbitRadius: 180,
    size: 22
  },
  {
    id: 2,
    title: "Poet & Sound Explorer", 
    description: "I write poetry and explore music as creative outlets.",
    link: "/poetry",
    color: "#ab47bc",
    orbitRadius: 220,
    size: 20
  },
  {
    id: 3,
    title: "Design Thinker",
    description: "I craft intuitive UI/UX and graphics that connect.",
    link: "/design", 
    color: "#66bb6a",
    orbitRadius: 260,
    size: 24
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    description: "I build functional, clean, and scalable digital tools.",
    link: "/code",
    color: "#ef5350",
    orbitRadius: 300,
    size: 21
  },
  {
    id: 5,
    title: "Motion Creator",
    description: "I use animation to give visuals life and meaning.",
    link: "/motion",
    color: "#ff9800",
    orbitRadius: 340,
    size: 19
  },
  {
    id: 6,
    title: "Creative Collaborator",
    description: "I love working with others to make ideas real.",
    link: "/contact",
    color: "#26c6da",
    orbitRadius: 380,
    size: 18
  }
];

export default function About() {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#3B3B3B',
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
        background: 'rgba(59, 59, 59, 0.9)',
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

      {/* Floating Stars Background */}
      <div className="stars-field"></div>

      {/* Orbital System Container */}
      <div style={{
        position: 'relative',
        width: '100vw',
        height: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        
        {/* Orbital Paths */}
        {planets.map((planet) => (
          <div
            key={`orbit-${planet.id}`}
            className="orbit-path"
            style={{
              position: 'absolute',
              width: `${planet.orbitRadius * 2}px`,
              height: `${planet.orbitRadius * 2}px`,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
              animation: 'orbitGlow 6s ease-in-out infinite alternate'
            }}
          />
        ))}

        {/* Central Glowing Orb */}
        <div style={{
          position: 'absolute',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(135, 206, 250, 0.8) 30%, rgba(100, 149, 237, 0.6) 60%, rgba(72, 61, 139, 0.4) 100%)',
          boxShadow: '0 0 60px rgba(135, 206, 250, 0.8), 0 0 120px rgba(135, 206, 250, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          animation: 'centralGlow 4s ease-in-out infinite alternate',
          cursor: 'pointer'
        }}>
          {/* Inner Core */}
          <div style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
            animation: 'coreRotate 8s linear infinite'
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '-60px',
            textAlign: 'center',
            maxWidth: '300px',
            zIndex: 15
          }}>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: 'white',
              marginBottom: '8px',
              textShadow: '0 0 15px rgba(135, 206, 250, 0.8)'
            }}>
              Evans (Heavans)
            </div>
            <div style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4',
              textAlign: 'center'
            }}>
              A multidisciplinary creative at the center of code, design, and storytelling
            </div>
          </div>
        </div>

        {/* Orbiting Planets */}
        {planets.map((planet, index) => (
          <div
            key={planet.id}
            className="planet-orbit"
            style={{
              position: 'absolute',
              width: `${planet.orbitRadius * 2}px`,
              height: `${planet.orbitRadius * 2}px`,
              animation: `orbitRotate ${20 + index * 5}s linear infinite`,
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
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: hoveredPlanet === planet.id ? 20 : 5
              }}
              onMouseEnter={() => setHoveredPlanet(planet.id)}
              onMouseLeave={() => setHoveredPlanet(null)}
            >
              {/* Planet Visual */}
              <div style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                borderRadius: '50%',
                background: `radial-gradient(circle at 30% 30%, ${planet.color}, ${planet.color}CC, ${planet.color}88)`,
                boxShadow: `0 0 15px ${planet.color}AA, inset -5px -5px 10px rgba(0,0,0,0.3)`,
                transform: hoveredPlanet === planet.id ? 'scale(2)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: `1px solid ${planet.color}DD`
              }}>
                {/* Planet Glow Ring */}
                <div style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  right: '-8px',
                  bottom: '-8px',
                  borderRadius: '50%',
                  border: `1px solid ${planet.color}44`,
                  opacity: hoveredPlanet === planet.id ? 1 : 0,
                  transform: hoveredPlanet === planet.id ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }} />
              </div>

              {/* Planet Info Card */}
              {hoveredPlanet === planet.id && (
                <div style={{
                  position: 'absolute',
                  top: `${planet.size + 20}px`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0, 0, 0, 0.9)',
                  border: `2px solid ${planet.color}66`,
                  borderRadius: '12px',
                  padding: '20px',
                  minWidth: '280px',
                  maxWidth: '320px',
                  animation: 'cardFadeIn 0.3s ease-out',
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px ${planet.color}33`,
                  backdropFilter: 'blur(10px)'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: planet.color,
                    marginBottom: '8px',
                    textShadow: `0 0 8px ${planet.color}88`
                  }}>
                    {planet.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.5',
                    marginBottom: '16px'
                  }}>
                    {planet.description}
                  </p>
                  
                  <a
                    href={planet.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: planet.color,
                      fontSize: '14px',
                      fontWeight: '600',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      border: `1px solid ${planet.color}44`,
                      borderRadius: '6px',
                      transition: 'all 0.3s ease',
                      background: `${planet.color}11`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${planet.color}22`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 4px 15px ${planet.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${planet.color}11`;
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    Explore →
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}