import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';

const planets = [
  {
    id: 1,
    name: "Creative Builder",
    title: "Creative Builder",
    tooltip: "I bring real ideas to life.",
    description: "I've founded Student Help and DEMS, creating tools that solve real problems.",
    cta: "View Projects",
    link: "/projects",
    color: "#4fc3f7",
    svgColor: "#4fc3f7"
  },
  {
    id: 2,
    name: "Poet & Sound Explorer",
    title: "Poet & Sound Explorer", 
    tooltip: "I feel deeply. I write freely.",
    description: "I write poems and explore music to express emotion and recharge creatively.",
    cta: "Read & Listen",
    link: "/poetry",
    color: "#ab47bc",
    svgColor: "#ab47bc"
  },
  {
    id: 3,
    name: "Design Thinker",
    title: "Design Thinker",
    tooltip: "I design with clarity and feeling.",
    description: "My UI/UX and graphics connect people to experiences in a meaningful way.",
    cta: "See Designs",
    link: "/design", 
    color: "#66bb6a",
    svgColor: "#66bb6a"
  },
  {
    id: 4,
    name: "Full-Stack Developer",
    title: "Full-Stack Developer",
    tooltip: "Code is my language of structure.",
    description: "I build scalable, responsive, and modern web applications for real-world impact.",
    cta: "Explore Code",
    link: "/code",
    color: "#ef5350",
    svgColor: "#ef5350"
  },
  {
    id: 5,
    name: "Motion Creator",
    title: "Motion Creator",
    tooltip: "I move visuals with intention.",
    description: "I use motion design to breathe life into ideas, visuals, and interfaces.",
    cta: "Watch Motion",
    link: "/motion",
    color: "#ff9800",
    svgColor: "#ff9800"
  },
  {
    id: 6,
    name: "Creative Collaborator",
    title: "Creative Collaborator",
    tooltip: "Great things are built together.",
    description: "I thrive in collaboration—sharing ideas, feedback, and energy with other creatives.",
    cta: "Let's Connect",
    link: "/collaborate",
    color: "#9c27b0",
    svgColor: "#9c27b0"
  }
];

export default function About() {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  const [clickedPlanet, setClickedPlanet] = useState<number | null>(null);
  const [planetPositions, setPlanetPositions] = useState<Array<{x: number, y: number}>>([]);

  const animationRefs = useRef<Array<number>>([]);
  const angleRefs = useRef<Array<number>>([0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const updatePlanetPositions = () => {
      const centerX = 700;
      const centerY = 400;
      
      const orbitalData = [
        { rx: 120, ry: 60, speed: 0.004 },
        { rx: 180, ry: 90, speed: 0.003 },
        { rx: 240, ry: 120, speed: 0.002 },
        { rx: 300, ry: 150, speed: 0.0015 },
        { rx: 360, ry: 180, speed: 0.0012 },
        { rx: 420, ry: 210, speed: 0.001 }
      ];

      const newPositions = orbitalData.map((orbit, index) => {
        if (hoveredPlanet !== index) {
          angleRefs.current[index] += orbit.speed;
        }
        
        const x = centerX + orbit.rx * Math.cos(angleRefs.current[index]);
        const y = centerY + orbit.ry * Math.sin(angleRefs.current[index]);
        return { x, y };
      });

      setPlanetPositions(newPositions);
    };

    const interval = setInterval(updatePlanetPositions, 16);
    return () => clearInterval(interval);
  }, [hoveredPlanet, clickedPlanet]);

  return (
    <div 
      className="relative w-full" 
      style={{backgroundColor: '#1E1E1E', width: '1600px', height: '1400px', transform: 'scale(0.9)', transformOrigin: 'top left'}}
    >
      {/* Left Border */}
      <div 
        style={{
          width: '130px',
          height: '1117px',
          borderRight: '1px solid rgba(255, 255, 255, 0.12)',
          position: 'absolute',
          left: '0px',
          top: '26px'
        }}
      />
      
      {/* HeaVans Logo - Clickable Image Logo */}
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
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500',
          position: 'absolute',
          left: '96px',
          top: '0px'
        }} className="animate-slideInDown delay-200 menu-button">About</div>
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

      {/* Floating Stars Background */}
      <div className="stars-field"></div>

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
          viewBox="0 0 1400 800" 
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '1400px',
            maxHeight: '800px'
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
          <ellipse cx="700" cy="400" rx="120" ry="60" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.4)',
              strokeWidth: 1,
              opacity: 0.8
            }} />
          <ellipse cx="700" cy="400" rx="180" ry="90" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.35)',
              strokeWidth: 1,
              opacity: 0.7
            }} />
          <ellipse cx="700" cy="400" rx="240" ry="120" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.3)',
              strokeWidth: 1,
              opacity: 0.7
            }} />
          <ellipse cx="700" cy="400" rx="300" ry="150" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.25)',
              strokeWidth: 1,
              opacity: 0.6
            }} />
          <ellipse cx="700" cy="400" rx="360" ry="180" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.2)',
              strokeWidth: 1,
              opacity: 0.6
            }} />
          <ellipse cx="700" cy="400" rx="420" ry="210" 
            style={{
              fill: 'none',
              stroke: 'rgba(255, 255, 255, 0.15)',
              strokeWidth: 1,
              opacity: 0.5
            }} />
          
          {/* Central Sun - Evans (Heavans) */}
          <circle 
            cx="700" 
            cy="400" 
            r="25" 
            fill="url(#sunGradient)"
            style={{
              filter: 'drop-shadow(0 0 20px #ffd700)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredPlanet(-1)}
            onMouseLeave={() => setHoveredPlanet(null)}
            onClick={() => setClickedPlanet(clickedPlanet === -1 ? null : -1)}
          />
          
          {/* Sun Label */}
          <text
            x="700"
            y="440"
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
          {planets.slice(0, 6).map((planet, index) => (
            <circle 
              key={planet.id}
              className={`planet p${index + 1}`}
              cx={planetPositions[index]?.x || (500 + index * 50)}
              cy={planetPositions[index]?.y || (250 - index * 25)}
              r="12" 
              fill={planet.svgColor}
              style={{
                cursor: 'pointer',
                filter: hoveredPlanet === index ? `drop-shadow(0 0 10px ${planet.svgColor})` : 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={() => setHoveredPlanet(index)}
              onMouseLeave={() => setHoveredPlanet(null)}
              onClick={() => setClickedPlanet(clickedPlanet === index ? null : index)}
            />
          ))}
        </svg>

        {/* Planet Tooltips and Info Cards */}
        {(hoveredPlanet === -1 || clickedPlanet === -1) && (
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

        {planets.slice(0, 6).map((planet, index) => (
          (hoveredPlanet === index || clickedPlanet === index) && (
            <div 
              key={`tooltip-${planet.id}`}
              style={{
                position: 'absolute',
                top: '20%',
                right: '5%',
                background: 'rgba(0, 0, 0, 0.95)',
                border: `2px solid ${planet.color}`,
                borderRadius: '16px',
                padding: '20px',
                width: '320px',
                animation: 'fadeIn 0.4s ease-out',
                backdropFilter: 'blur(15px)',
                zIndex: 20,
                pointerEvents: 'none'
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
                color: planet.color,
                lineHeight: '1.6',
                marginBottom: '20px',
                textAlign: 'center',
                fontWeight: '400'
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
      </div>

      {/* Clickable Planet Names - Positioned above footer */}
      <div style={{
        position: 'absolute',
        top: '970px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        flexWrap: 'wrap',
        padding: '0 20px',
        zIndex: 10
      }}>
        {/* Sun */}
        <div 
          style={{
            background: clickedPlanet === -1 ? 'rgba(255, 215, 0, 0.4)' : 'rgba(255, 215, 0, 0.15)',
            color: '#ffd700',
            border: '2px solid #ffd700',
            padding: '10px 18px',
            borderRadius: '8px',
            fontFamily: 'Arial, sans-serif',
            fontSize: '13px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setClickedPlanet(clickedPlanet === -1 ? null : -1)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 215, 0, 0.3)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = clickedPlanet === -1 ? 'rgba(255, 215, 0, 0.4)' : 'rgba(255, 215, 0, 0.15)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Evans (Heavans)
        </div>

        {/* Planet Names */}
        {planets.slice(0, 6).map((planet, index) => (
          <div 
            key={planet.id}
            style={{
              background: clickedPlanet === index ? `${planet.color}40` : `${planet.color}15`,
              color: planet.color,
              border: `2px solid ${planet.color}`,
              padding: '10px 18px',
              borderRadius: '8px',
              fontFamily: 'Arial, sans-serif',
              fontSize: '13px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setClickedPlanet(clickedPlanet === index ? null : index)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${planet.color}30`;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = clickedPlanet === index ? `${planet.color}40` : `${planet.color}15`;
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {planet.name}
          </div>
        ))}
      </div>

      {/* Professional Footer */}
      <footer style={{
        width: '1600px',
        background: '#63767C',
        position: 'absolute',
        left: '0px',
        top: '1050px',
        padding: '40px 80px',
        boxSizing: 'border-box',
        zIndex: 20
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
            }} className="animate-fadeInLeft delay-100 hover-grow">HeaVans.</div>
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
                <a href="/" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>Home</a>
              </li>
              <li style={{marginBottom: '8px'}}>
                <a href="/about" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>About</a>
              </li>
              <li style={{marginBottom: '8px'}}>
                <a href="#experience" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>Experience</a>
              </li>
              <li style={{marginBottom: '8px'}}>
                <a href="#contact" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>Contact</a>
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