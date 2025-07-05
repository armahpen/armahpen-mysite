import { useState, useEffect } from 'react';

const planets = [
  {
    id: 1,
    title: "Creative Builder",
    tooltip: "I bring real ideas to life.",
    description: "I've founded Student Help and DEMS, creating tools that solve real problems.",
    cta: "View Projects",
    link: "/projects",
    color: "#4fc3f7",
    svgColor: "#add8e6"
  },
  {
    id: 2,
    title: "Poet & Sound Explorer", 
    tooltip: "I feel deeply. I write freely.",
    description: "I write poems and explore music to express emotion and recharge creatively.",
    cta: "Read & Listen",
    link: "/poetry",
    color: "#ab47bc",
    svgColor: "#ffffff"
  },
  {
    id: 3,
    title: "Design Thinker",
    tooltip: "I design with clarity and feeling.",
    description: "My UI/UX and graphics connect people to experiences in a meaningful way.",
    cta: "See Designs",
    link: "/design", 
    color: "#66bb6a",
    svgColor: "#ffa500"
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    tooltip: "Code is my language of structure.",
    description: "I build scalable, responsive, and modern web applications for real-world impact.",
    cta: "Explore Code",
    link: "/code",
    color: "#ef5350",
    svgColor: "#ffff00"
  },
  {
    id: 5,
    title: "Motion Creator",
    tooltip: "I move visuals with intention.",
    description: "I use motion design to breathe life into ideas, visuals, and interfaces.",
    cta: "Watch Motion",
    link: "/motion",
    color: "#ff9800",
    svgColor: "#ff4500"
  },
  {
    id: 6,
    title: "Creative Collaborator",
    tooltip: "Great things are built together.",
    description: "I thrive in collaboration—sharing ideas, feedback, and energy with other creatives.",
    cta: "Let's Connect",
    link: "/collaborate",
    color: "#9c27b0",
    svgColor: "#9932cc"
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
          
          {/* Planet Orbital Lines */}
          <ellipse cx="400" cy="300" rx="100" ry="50" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.3)',
              strokeWidth: 2,
              opacity: 0.8
            }} />
          <ellipse cx="400" cy="300" rx="150" ry="75" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.25)',
              strokeWidth: 2,
              opacity: 0.7
            }} />
          <ellipse cx="400" cy="300" rx="200" ry="100" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.25)',
              strokeWidth: 2,
              opacity: 0.7
            }} />
          <ellipse cx="400" cy="300" rx="250" ry="125" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.2)',
              strokeWidth: 2,
              opacity: 0.6
            }} />
          <ellipse cx="400" cy="300" rx="300" ry="150" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.2)',
              strokeWidth: 2,
              opacity: 0.6
            }} />
          
          {/* Central Sun - Evans (Heavans) */}
          <circle 
            cx="400" 
            cy="300" 
            r="30" 
            fill="url(#sunGradient)"
            style={{
              filter: 'drop-shadow(0 0 20px #ffd700)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredPlanet(0)}
            onMouseLeave={() => setHoveredPlanet(null)}
          />
          
          {/* Sun Label */}
          <text
            x="400"
            y="350"
            textAnchor="middle"
            style={{
              fill: '#ffd700',
              fontSize: '14px',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            Evans (Heavans)
          </text>
          
          {/* Animated Planets */}
          {planets.slice(0, 5).map((planet, index) => (
            <circle 
              key={planet.id}
              className={`planet p${index + 1}`}
              cx={planetPositions[index]?.x || (500 + index * 50)}
              cy={planetPositions[index]?.y || (250 - index * 25)}
              r="12" 
              fill={planet.svgColor}
              style={{
                cursor: 'pointer',
                filter: hoveredPlanet === planet.id ? `drop-shadow(0 0 10px ${planet.svgColor})` : 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => setHoveredPlanet(planet.id)}
              onMouseLeave={() => setHoveredPlanet(null)}
            />
          ))}
        </svg>

        {/* Planet Tooltips and Info Cards */}
        {hoveredPlanet === 0 && (
          <div style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(0, 0, 0, 0.9)',
            border: '2px solid #ffd700',
            borderRadius: '12px',
            padding: '20px',
            minWidth: '300px',
            textAlign: 'center',
            animation: 'fadeIn 0.3s ease-out',
            zIndex: 20
          }}>
            <h3 style={{
              color: '#ffd700',
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '8px'
            }}>
              Evans (Heavans)
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '14px',
              lineHeight: '1.4'
            }}>
              A creative planet builder — orbiting ideas, design, code, and imagination.
            </p>
          </div>
        )}

        {planets.slice(0, 5).map((planet, index) => (
          hoveredPlanet === planet.id && (
            <div 
              key={`tooltip-${planet.id}`}
              style={{
                position: 'absolute',
                top: `${planetPositions[index]?.y ? (planetPositions[index].y / 600) * 100 - 8 : 40}%`,
                left: `${planetPositions[index]?.x ? (planetPositions[index].x / 800) * 100 : 50 + index * 10}%`,
                transform: 'translateX(-50%)',
                background: 'rgba(0, 0, 0, 0.95)',
                border: `2px solid ${planet.color}`,
                borderRadius: '16px',
                padding: '24px',
                minWidth: '320px',
                maxWidth: '380px',
                animation: 'fadeIn 0.4s ease-out',
                backdropFilter: 'blur(15px)',
                zIndex: 20
              }}
            >
              {/* Tooltip */}
              <div style={{
                fontSize: '12px',
                color: planet.color,
                fontStyle: 'italic',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                "{planet.tooltip}"
              </div>
              
              {/* Planet Title */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: planet.color,
                marginBottom: '12px',
                textShadow: `0 0 12px ${planet.color}88`,
                textAlign: 'center'
              }}>
                {planet.title}
              </h3>
              
              {/* Description */}
              <p style={{
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.95)',
                lineHeight: '1.6',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                {planet.description}
              </p>
              
              {/* CTA Button */}
              <div style={{ textAlign: 'center' }}>
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
                    padding: '12px 24px',
                    border: `2px solid ${planet.color}55`,
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    background: `${planet.color}15`,
                    textShadow: `0 0 6px ${planet.color}66`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${planet.color}25`;
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 6px 20px ${planet.color}44`;
                    e.currentTarget.style.borderColor = `${planet.color}88`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${planet.color}15`;
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = `${planet.color}55`;
                  }}
                >
                  {planet.cta} →
                </a>
              </div>
            </div>
          )
        ))}

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