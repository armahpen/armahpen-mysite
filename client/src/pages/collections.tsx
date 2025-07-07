import { Link } from 'wouter';

export default function Collections() {
  return (
    <div style={{
      width: '100vw',
      height: '1230px',
      position: 'relative',
      background: '#1E1E1E',
      overflow: 'hidden'
    }}>
      
      {/* Starfield Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(2px 2px at 20px 30px, white, transparent),
          radial-gradient(2px 2px at 40px 70px, white, transparent),
          radial-gradient(1px 1px at 90px 40px, white, transparent),
          radial-gradient(1px 1px at 130px 80px, white, transparent),
          radial-gradient(2px 2px at 160px 30px, white, transparent),
          radial-gradient(1px 1px at 200px 90px, white, transparent),
          radial-gradient(2px 2px at 240px 50px, white, transparent),
          radial-gradient(1px 1px at 280px 10px, white, transparent),
          radial-gradient(1px 1px at 320px 70px, white, transparent),
          radial-gradient(2px 2px at 360px 40px, white, transparent),
          radial-gradient(1px 1px at 400px 80px, white, transparent),
          radial-gradient(2px 2px at 440px 20px, white, transparent),
          radial-gradient(1px 1px at 480px 60px, white, transparent),
          radial-gradient(1px 1px at 520px 30px, white, transparent),
          radial-gradient(2px 2px at 560px 90px, white, transparent),
          radial-gradient(1px 1px at 600px 10px, white, transparent),
          radial-gradient(2px 2px at 640px 50px, white, transparent),
          radial-gradient(1px 1px at 680px 80px, white, transparent),
          radial-gradient(1px 1px at 720px 20px, white, transparent),
          radial-gradient(2px 2px at 760px 60px, white, transparent),
          radial-gradient(1px 1px at 800px 40px, white, transparent),
          radial-gradient(2px 2px at 840px 70px, white, transparent),
          radial-gradient(1px 1px at 880px 30px, white, transparent),
          radial-gradient(1px 1px at 920px 90px, white, transparent),
          radial-gradient(2px 2px at 960px 50px, white, transparent),
          radial-gradient(1px 1px at 1000px 10px, white, transparent),
          radial-gradient(2px 2px at 1040px 80px, white, transparent),
          radial-gradient(1px 1px at 1080px 40px, white, transparent),
          radial-gradient(1px 1px at 1120px 60px, white, transparent),
          radial-gradient(2px 2px at 1160px 20px, white, transparent),
          radial-gradient(1px 1px at 1200px 70px, white, transparent),
          radial-gradient(2px 2px at 1240px 50px, white, transparent),
          radial-gradient(1px 1px at 1280px 30px, white, transparent),
          radial-gradient(1px 1px at 1320px 90px, white, transparent),
          radial-gradient(2px 2px at 1360px 40px, white, transparent),
          radial-gradient(1px 1px at 1400px 80px, white, transparent),
          radial-gradient(2px 2px at 1440px 20px, white, transparent),
          radial-gradient(1px 1px at 1480px 60px, white, transparent),
          radial-gradient(1px 1px at 1520px 10px, white, transparent),
          radial-gradient(2px 2px at 1560px 70px, white, transparent),
          radial-gradient(1px 1px at 1600px 50px, white, transparent)
        `,
        backgroundSize: '100px 100px',
        opacity: 0.3,
        zIndex: 1
      }} />
      
      {/* Galaxy Particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
          radial-gradient(circle at 25% 25%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(75, 0, 130, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 20, 147, 0.05) 0%, transparent 70%)
        `,
        zIndex: 2
      }} />

      {/* Logo */}
      <Link href="/">
        <div style={{
          position: 'absolute',
          left: '96px',
          top: '59px',
          width: '100px',
          height: '30px',
          zIndex: 30,
          cursor: 'pointer'
        }}>
          <div style={{
            color: 'white',
            fontFamily: 'DM Sans',
            fontSize: '24px',
            fontWeight: '700',
            lineHeight: '30px',
            letterSpacing: '1.2px'
          }}>HeaVans</div>
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
          left: '80px',
          top: '0px'
        }} className="animate-slideInDown delay-200 menu-button">Collections</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '145px',
          top: '0px'
        }} className="animate-slideInDown delay-300 menu-button" onClick={() => alert('Experience section coming soon!')}>Experience</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '265px',
          top: '0px'
        }} className="animate-slideInDown delay-400 menu-button" onClick={() => alert('Work section coming soon!')}>Work</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '320px',
          top: '0px'
        }} className="animate-slideInDown delay-500 menu-button" onClick={() => alert('Contact section coming soon!')}>Contact</div>
      </div>

      {/* Solar System Container */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        zIndex: 5
      }}>
        
        {/* Central Sun - Evans (Heavans) */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FFD700, #FFA500)',
          boxShadow: '0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#1E1E1E',
          textAlign: 'center',
          cursor: 'pointer',
          zIndex: 15,
          animation: 'pulse 3s ease-in-out infinite'
        }}>
          <Link href="/evans" style={{ textDecoration: 'none', color: '#1E1E1E' }}>
            Evans<br/>(Heavans)
          </Link>
        </div>

        {/* Orbital Rings */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'rotate 60s linear infinite'
        }} />
        
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          animation: 'rotate 90s linear infinite reverse'
        }} />
        
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          borderRadius: '50%',
          animation: 'rotate 120s linear infinite'
        }} />

        {/* Planet 1: Creative Projects */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          animation: 'orbit1 20s linear infinite'
        }}>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
            boxShadow: '0 0 20px rgba(255, 107, 107, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            cursor: 'pointer'
          }} title="Creative Projects">
            🎨
          </div>
        </div>

        {/* Planet 2: Poetry & Sound */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          animation: 'orbit2 30s linear infinite'
        }}>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4ECDC4, #44A08D)',
            boxShadow: '0 0 20px rgba(78, 205, 196, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            cursor: 'pointer'
          }} title="Poetry & Sound Explorer">
            🎵
          </div>
        </div>

        {/* Planet 3: UI/UX Design */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          animation: 'orbit3 45s linear infinite'
        }}>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            boxShadow: '0 0 20px rgba(102, 126, 234, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            cursor: 'pointer'
          }} title="UI/UX Design Thinker">
            💻
          </div>
        </div>

        {/* Planet 4: Development */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          animation: 'orbit4 25s linear infinite reverse'
        }}>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f093fb, #f5576c)',
            boxShadow: '0 0 20px rgba(240, 147, 251, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            cursor: 'pointer'
          }} title="Full-Stack Developer">
            ⚡
          </div>
        </div>

        {/* Planet 5: Motion Graphics */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          animation: 'orbit5 35s linear infinite'
        }}>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
            boxShadow: '0 0 20px rgba(255, 236, 210, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            cursor: 'pointer'
          }} title="Motion Creator">
            🎬
          </div>
        </div>

        {/* Planet 6: Collaboration */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '350px',
          height: '350px',
          animation: 'orbit6 40s linear infinite reverse'
        }}>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a8edea, #fed6e3)',
            boxShadow: '0 0 20px rgba(168, 237, 234, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            cursor: 'pointer'
          }} title="Creative Collaborator">
            🤝
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '80px',
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: 'DM Sans',
          fontSize: '14px',
          margin: '0'
        }}>@2020 HeaVans - Creative Collections & Design Portfolio</p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.05); }
        }
        
        @keyframes rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes orbit1 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes orbit2 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes orbit3 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes orbit4 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes orbit5 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes orbit6 {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .animate-slideInDown {
          opacity: 0;
          animation: slideInDown 0.6s ease-out forwards;
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }

        .menu-button:hover {
          color: rgba(255, 255, 255, 1) !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
}