import { Link } from 'wouter';

export default function About() {
  return (
    <div style={{
      width: '100vw',
      height: '1230px',
      position: 'relative',
      background: '#1E1E1E',
      overflow: 'hidden'
    }}>

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
          }} className="menu-button">Home</div>
        </Link>
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500',
          position: 'absolute',
          left: '80px',
          top: '0px'
        }} className="menu-button">About</div>
        <Link href="/collections">
          <div style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '400',
            position: 'absolute',
            left: '145px',
            top: '0px',
            cursor: 'pointer'
          }} className="menu-button">Collections</div>
        </Link>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '265px',
          top: '0px'
        }} className="menu-button" onClick={() => alert('Work section coming soon!')}>Work</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '320px',
          top: '0px'
        }} className="menu-button" onClick={() => alert('Contact section coming soon!')}>Contact</div>
      </div>

      {/* Main Content Container */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        textAlign: 'center',
        zIndex: 10
      }}>

        {/* Profile Image */}
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          margin: '0 auto 40px auto',
          background: 'linear-gradient(135deg, #FFD700, #FFA500)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
          boxShadow: '0 0 40px rgba(255, 215, 0, 0.3)'
        }}>
          👤
        </div>

        {/* Music Widget Placeholder */}
        <div style={{
          width: '300px',
          height: '80px',
          margin: '0 auto 60px auto',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          padding: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #FF6B6B, #FF8E53)',
            marginRight: '16px'
          }} />
          <div style={{
            textAlign: 'left',
            flex: 1
          }}>
            <div style={{
              color: 'white',
              fontFamily: 'DM Sans',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '4px'
            }}>Now Playing</div>
            <div style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'DM Sans',
              fontSize: '12px'
            }}>Current Track</div>
          </div>
        </div>

        {/* About Section */}
        <div style={{
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: 'white',
            fontFamily: 'DM Sans',
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            paddingBottom: '16px'
          }}>About</h2>
          
          <p style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'DM Sans',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            Hey, my name is Evans and I use HeaVans as my creative identity across platforms. I'm a graphic designer, UX/UI designer & front-end web developer. I'm also passionate about creative expression and make portraits and universes around what inspires me. I'm always curious to learn more when it comes to new technologies and creative coding.
          </p>
        </div>

        {/* Resume Download Link */}
        <Link href="#" onClick={(e) => { e.preventDefault(); alert('Resume download coming soon!'); }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'DM Sans',
            fontSize: '16px',
            fontWeight: '400',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }} className="resume-link">
            ↓ Resume
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10
      }}>
        <p style={{
          color: 'rgba(255, 255, 255, 0.4)',
          fontFamily: 'DM Sans',
          fontSize: '12px',
          margin: '0',
          textAlign: 'center'
        }}>Designed and coded by HeaVans © 2025</p>
      </div>

      <style>{`
        .menu-button:hover {
          color: rgba(255, 255, 255, 1) !important;
          transition: color 0.3s ease;
        }

        .resume-link:hover {
          color: rgba(255, 255, 255, 1) !important;
        }
      `}</style>
    </div>
  );
}