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
          top: '50px',
          width: '120px',
          height: '40px',
          zIndex: 30,
          cursor: 'pointer'
        }}>
          <img 
            src="/attached_assets/ChatGPT_Image_Jul_5__2025__05_30_15_AM-removebg-preview_1751726559922.png" 
            alt="HeaVans Logo" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        </div>
      </Link>
      
      {/* Navigation Menu */}
      <div style={{
        position: 'absolute', 
        right: '96px', 
        top: '57px', 
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        zIndex: 20
      }}>
        <Link href="/">
          <div style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '400',
            cursor: 'pointer'
          }} className="menu-button">Home</div>
        </Link>
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500'
        }} className="menu-button">About</div>
        <Link href="/collections">
          <div style={{
            color: 'rgba(255, 255, 255, 0.65)',
            fontFamily: 'DM Sans',
            fontSize: '18px',
            fontWeight: '400',
            cursor: 'pointer'
          }} className="menu-button">Collections</div>
        </Link>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          cursor: 'pointer'
        }} className="menu-button" onClick={() => alert('Work section coming soon!')}>Work</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          cursor: 'pointer'
        }} className="menu-button" onClick={() => alert('Contact section coming soon!')}>Contact</div>
      </div>

      {/* Main Content Split Layout */}
      <div style={{
        position: 'absolute',
        left: '96px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 'calc(100vw - 192px)',
        height: '400px',
        display: 'flex',
        zIndex: 10
      }}>
        
        {/* Left Side - About Content */}
        <div style={{
          flex: '1',
          paddingRight: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* About Title with Underline */}
          <div style={{
            marginBottom: '40px'
          }}>
            <h1 style={{
              color: 'white',
              fontFamily: 'DM Sans',
              fontSize: '48px',
              fontWeight: '700',
              margin: '0 0 16px 0',
              letterSpacing: '2px'
            }}>ABOUT</h1>
            <div style={{
              width: '100%',
              height: '2px',
              background: 'white',
              marginBottom: '32px'
            }} />
            
            <p style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: 'DM Sans',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '1.6',
              margin: '0 0 32px 0',
              maxWidth: '500px'
            }}>
              Hey, my name is Evans Bruyerre and I use HeaVans as my nickname across social medias. I'm a graphic designer, UX/UI designer & front-end web developer from France. I'm also passionate about creative expression and make portraits and universes around what I listen to and I'm always curious to learn more when it comes to new technologies and creative coding.
            </p>

            {/* Resume Download Link */}
            <Link href="#" onClick={(e) => { e.preventDefault(); alert('Resume download coming soon!'); }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: 'rgba(255, 255, 255, 0.8)',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                fontWeight: '400',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'color 0.3s ease'
              }} className="resume-link">
                ↓ resume
              </div>
            </Link>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            width: '400px',
            height: '400px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 160, 0, 0.2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '120px',
            border: '2px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJncmFkaWVudCg0NWRlZywgIzMzMywgIzU1NSkiLz4KPGJ0ZXh0IHg9IjIwMCIgeT0iMjIwIiBmb250LWZhbWlseT0iRE0gU2Fucywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMjAiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj7wn5GKPC90ZXh0Pgo8L3N2Zz4K") center/cover',
              borderRadius: '18px'
            }}></div>
          </div>
        </div>
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