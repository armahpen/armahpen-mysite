import { useState, useEffect } from 'react';

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
  const [planetPositions, setPlanetPositions] = useState<Array<{x: number, y: number}>>([]);

  // Animation for planets
  useEffect(() => {
    let angle = 0;
    const centerX = 400;
    const centerY = 300;
    const orbits = [
      { rx: 100, ry: 50 },
      { rx: 150, ry: 75 },
      { rx: 200, ry: 100 },
      { rx: 250, ry: 125 },
      { rx: 300, ry: 150 }
    ];

    const animate = () => {
      const newPositions = orbits.map((orbit, index) => ({
        x: centerX + orbit.rx * Math.cos(angle + index * Math.PI / 2),
        y: centerY + orbit.ry * Math.sin(angle + index * Math.PI / 2)
      }));
      
      setPlanetPositions(newPositions);
      angle += 0.02;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

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

      {/* Welcome Banner */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px 20px',
        animation: 'fadeIn 1s ease-out'
      }}>
        <img 
          src="/attached_assets/cnbcncnc_1751743422698.PNG" 
          alt="Welcome to HeaVans"
          style={{
            maxWidth: '100%',
            height: 'auto',
            filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))',
            borderRadius: '8px'
          }}
        />
      </div>

      {/* Skills Solar System */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 80px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1000px'
      }}>
        {/* Skills Text */}
        <div style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#d3c0a7',
          fontFamily: 'Arial, sans-serif',
          fontSize: '48px',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '2px 2px 10px rgba(255, 215, 0, 0.5)',
          opacity: 0.8,
          zIndex: 15
        }}>
          SKILLS
        </div>

        {/* Solar System SVG */}
        <svg 
          viewBox="0 0 800 600" 
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '800px',
            maxHeight: '600px'
          }}
        >
          <defs>
            <radialGradient id="sunGradient" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" style={{stopColor: '#ffd700'}} />
              <stop offset="70%" style={{stopColor: '#ffcc00'}} />
              <stop offset="100%" style={{stopColor: '#ff4500'}} />
            </radialGradient>
          </defs>
          
          {/* Elliptical orbits for side view */}
          <ellipse cx="400" cy="300" rx="100" ry="50" 
            style={{
              fill: 'none',
              stroke: '#4a4060',
              strokeWidth: 1,
              opacity: 0.7,
              transformOrigin: 'center',
              transform: 'rotateX(70deg)'
            }} />
          <ellipse cx="400" cy="300" rx="150" ry="75" 
            style={{
              fill: 'none',
              stroke: '#4a4060',
              strokeWidth: 1,
              opacity: 0.7,
              transformOrigin: 'center',
              transform: 'rotateX(70deg)'
            }} />
          <ellipse cx="400" cy="300" rx="200" ry="100" 
            style={{
              fill: 'none',
              stroke: '#4a4060',
              strokeWidth: 1,
              opacity: 0.7,
              transformOrigin: 'center',
              transform: 'rotateX(70deg)'
            }} />
          <ellipse cx="400" cy="300" rx="250" ry="125" 
            style={{
              fill: 'none',
              stroke: '#4a4060',
              strokeWidth: 1,
              opacity: 0.7,
              transformOrigin: 'center',
              transform: 'rotateX(70deg)'
            }} />
          <ellipse cx="400" cy="300" rx="300" ry="150" 
            style={{
              fill: 'none',
              stroke: '#4a4060',
              strokeWidth: 1,
              opacity: 0.7,
              transformOrigin: 'center',
              transform: 'rotateX(70deg)'
            }} />
          
          {/* Central Sun */}
          <circle 
            cx="400" 
            cy="300" 
            r="30" 
            fill="url(#sunGradient)"
            style={{
              filter: 'drop-shadow(0 0 20px #ffd700)'
            }}
          />
          
          {/* Animated Planets */}
          <circle 
            className="planet p1" 
            cx={planetPositions[0]?.x || 500}
            cy={planetPositions[0]?.y || 250}
            r="12" 
            fill="#add8e6"
          />
          <circle 
            className="planet p2" 
            cx={planetPositions[1]?.x || 550}
            cy={planetPositions[1]?.y || 225}
            r="12" 
            fill="#ffffff"
          />
          <circle 
            className="planet p3" 
            cx={planetPositions[2]?.x || 600}
            cy={planetPositions[2]?.y || 200}
            r="12" 
            fill="#ffa500"
          />
          <circle 
            className="planet p4" 
            cx={planetPositions[3]?.x || 650}
            cy={planetPositions[3]?.y || 175}
            r="12" 
            fill="#ffff00"
          />
          <circle 
            className="planet p5" 
            cx={planetPositions[4]?.x || 700}
            cy={planetPositions[4]?.y || 150}
            r="12" 
            fill="#ff4500"
          />
        </svg>

        {/* Skill Buttons */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap',
          padding: '0 20px',
          zIndex: 10
        }}>
          {['JAVASCRIPT', 'HTML/CSS', 'ILLUSTRATION', 'CREATIVE SOFTWARE', 'CREATIVE DIRECTION', 'SERVER TECHNOLOGIES', 'VIDEO PRODUCTION', 'APPS', 'NODE.JS'].map((skill) => (
            <div 
              key={skill}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#d3c0a7',
                border: '1px solid #4a4060',
                padding: '10px 20px',
                borderRadius: '5px',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 215, 0, 0.2)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.color = '#d3c0a7';
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}