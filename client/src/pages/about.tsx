import { useState } from 'react';

const planets = [
  {
    id: 1,
    title: "Creative Builder",
    description: "I've founded projects like Student Help (education support) and DEMS (AI-powered data services).",
    link: "/projects",
    color: "#00d4ff"
  },
  {
    id: 2,
    title: "Poet & Sound Explorer",
    description: "I write poetry and explore music as an emotional outlet that inspires my digital creations.",
    link: "/poetry",
    color: "#ff6b9d"
  },
  {
    id: 3,
    title: "Design Thinker",
    description: "I create engaging interfaces and visuals that are both beautiful and intuitive.",
    link: "/design",
    color: "#39ff14"
  },
  {
    id: 4,
    title: "Full-Stack Developer",
    description: "I build modern, scalable web apps using clean code and real-world logic.",
    link: "/code",
    color: "#ff4757"
  },
  {
    id: 5,
    title: "Motion Creator",
    description: "I use animation to bring static designs to life—making stories and products more memorable.",
    link: "/motion",
    color: "#7bed9f"
  },
  {
    id: 6,
    title: "Creative Collaborator",
    description: "I love working with other passionate minds to build meaningful, creative things.",
    link: "/contact",
    color: "#ffa502"
  }
];

export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0f0f1e 50%, #0a0a15 100%)',
      color: 'white',
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
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

      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '80px 40px 60px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 className="animate-fadeInUp delay-200" style={{
          fontSize: '48px',
          fontWeight: '700',
          marginBottom: '20px',
          color: 'white',
          lineHeight: '1.2'
        }}>
          Hi, I'm Evans (Heavans)
        </h1>
        <p className="animate-fadeInUp delay-300" style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          A multidisciplinary creative at the center of code, design, and storytelling
        </p>
      </div>

      {/* Planet Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '24px',
        padding: '0 40px 80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {planets.map((planet) => (
          <div
            key={planet.id}
            className="planet-card"
            style={{
              position: 'relative',
              padding: '32px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              border: `1px solid ${planet.color}22`,
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.border = `1px solid ${planet.color}44`;
              e.currentTarget.style.boxShadow = `0 16px 48px rgba(0, 0, 0, 0.4), 0 0 20px ${planet.color}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.border = `1px solid ${planet.color}22`;
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            }}
          >
            {/* Color Accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: `linear-gradient(180deg, ${planet.color}, ${planet.color}66)`,
              borderRadius: '2px 0 0 2px'
            }} />
            
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: planet.color,
              marginBottom: '12px',
              textShadow: `0 0 10px ${planet.color}44`
            }}>
              {planet.title}
            </h3>
            
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.85)',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              {planet.description}
            </p>
            
            <a
              href={planet.link}
              style={{
                color: planet.color,
                fontSize: '14px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
                e.currentTarget.style.textShadow = `0 0 8px ${planet.color}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              Explore →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}