export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1a',
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
        background: '#1a1a1a',
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
        maxWidth: '800px',
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
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          I craft digital experiences, blending creativity, code, and emotion.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        padding: '0 40px 80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Card 1: Creative Work & Projects */}
        <div className="about-card animate-fadeInUp delay-400" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '16px',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            Creative Builder & Visionary
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.75)',
            marginBottom: '24px'
          }}>
            I bring ideas to life—from functional websites and client portals to SaaS platforms and creative tools. I've founded services like Student Help (a tutoring network) and DEMS (a data and AI support business). My work is focused on building real solutions for real users.
          </p>
          <button style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            View My Work
          </button>
        </div>

        {/* Card 2: Poetry, Music & Expression */}
        <div className="about-card animate-fadeInUp delay-500" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '16px',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            Words, Rhythm & Reflection
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.75)',
            marginBottom: '24px'
          }}>
            Beyond code and design, I write poetry and explore music as a form of emotional storytelling. These passions keep me grounded, inspired, and deeply connected to the human experience—fueling everything I create.
          </p>
          <button style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Read a Poem or Listen In
          </button>
        </div>

        {/* Card 3: Design & User Experience */}
        <div className="about-card animate-fadeInUp delay-600" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '20px',
          padding: '40px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '16px',
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            Designing With Feeling
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.75)',
            marginBottom: '24px'
          }}>
            I specialize in UI/UX, motion graphics, and branding—creating experiences that look sharp and feel intuitive. My design approach blends creativity, structure, and clarity to connect users with meaning.
          </p>
          <button style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            View My Design Work
          </button>
        </div>
      </div>
    </div>
  );
}