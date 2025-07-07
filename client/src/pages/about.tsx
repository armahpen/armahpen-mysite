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

      {/* HeaVans Logo - Exact from Home Page */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 20,
        cursor: 'pointer'
      }} onClick={() => window.location.href = '/'}>
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
      
      {/* Navigation Menu - Flexbox Layout for Better Visibility */}
      <div style={{
        position: 'absolute', 
        right: '96px', 
        top: '57px', 
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        zIndex: 20
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          cursor: 'pointer'
        }} className="animate-slideInDown delay-100 menu-button" onClick={() => window.location.href = '/'}>Home</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500',
          cursor: 'pointer'
        }} className="animate-slideInDown delay-200 menu-button">About</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          cursor: 'pointer'
        }} className="animate-slideInDown delay-300 menu-button" onClick={() => alert('Experience section coming soon!')}>Experience</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          cursor: 'pointer'
        }} className="animate-slideInDown delay-400 menu-button" onClick={() => alert('Contact section coming soon!')}>Contact</div>
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
              I'm a versatile Web Developer and Data Analyst with a background in research and a strong eye for user experience. My skills blend technical web development (CMS platforms, cloud systems, responsive design) with data-driven thinking. I enjoy building platforms that solve real problems—especially those that align with social good, innovation, and user-centered impact. I'm collaborative, adaptable, and constantly learning.
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
            border: '2px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 160, 0, 0.1))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/attached_assets/WhatsApp Image 2025-07-05 at 3.50.33 PM_1751917889152.jpeg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '120px',
                fontWeight: '300',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>👤</div>
            </div>
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