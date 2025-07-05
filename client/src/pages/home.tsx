export default function Home() {
  return (
    <div 
      className="relative w-full h-screen overflow-hidden" 
      style={{backgroundColor: '#1E1E1E'}}
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

      {/* Logo HeaVans */}
      <div 
        style={{
          color: '#FFF',
          fontFamily: 'Poppins',
          fontSize: '42px',
          fontWeight: '400',
          position: 'absolute',
          left: '217px',
          top: '76px',
          width: '238px',
          height: '29px'
        }}
      >
        <span style={{fontFamily: 'Porter Sans Block, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(99,118,124,1)'}}>H</span>
        <span style={{fontFamily: 'Poppins', color: 'rgba(99,118,124,1)'}}>ea</span>
        <span style={{fontFamily: 'Porter Sans Block, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(243,252,255,1)'}}>V</span>
        <span style={{fontFamily: 'Poppins', color: 'rgba(243,252,255,1)'}}>ans</span>
        <span style={{fontFamily: 'Poppins', color: 'rgba(255,255,255,1)'}}>.</span>
      </div>

      {/* Menu Icon */}
      <svg 
        style={{
          display: 'flex',
          width: '28px',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px',
          position: 'absolute',
          left: '51px',
          top: '81px',
          height: '20px'
        }} 
        width="29" height="23" viewBox="0 0 29 23" fill="none"
      >
        <path d="M28.5 1.5H0.500001" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
        <path d="M28.5 11.5H10.5" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
        <path d="M28.5 21.5H18.5" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
      </svg>

      {/* Navigation Menu */}
      <div style={{position: 'absolute', left: '1121px', top: '83px', width: '548px', height: '18px'}}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }}>Home</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '96px',
          top: '0px'
        }}>About</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '194px',
          top: '0px'
        }}>Experience</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '317px',
          top: '0px'
        }}>Skills</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '388px',
          top: '0px'
        }}>Contact</div>
      </div>

      {/* Work Collection Section */}
      <div style={{
        color: '#FFF',
        fontFamily: 'Public Sans',
        fontSize: '20px',
        fontWeight: '600',
        position: 'absolute',
        left: '217px',
        top: '404px'
      }}>Work Collection</div>

      <div style={{
        color: '#FFF',
        fontFamily: 'Public Sans',
        fontSize: '20px',
        fontWeight: '400',
        position: 'absolute',
        left: '217px',
        top: '358px'
      }}>HeaDesign</div>

      <svg style={{
        width: '259px',
        height: '3px',
        position: 'absolute',
        left: '217px',
        top: '385px'
      }} viewBox="0 0 259 4" fill="none">
        <path d="M0 2H258.583" stroke="#63767C" strokeWidth="3"/>
      </svg>

      <div style={{
        width: '243px',
        color: '#FFF',
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: '400',
        position: 'absolute',
        left: '217px',
        top: '431px'
      }}>Multidisciplinary designer in ux/ui, grphic design and motion graphics</div>

      <div style={{
        color: 'rgba(255, 255, 255, 0.45)',
        fontFamily: 'Public Sans',
        fontSize: '14px',
        fontWeight: '400',
        position: 'absolute',
        left: '219px',
        top: '476px'
      }}>see collections</div>

      {/* Hero Section */}
      <div style={{
        color: '#FFF',
        fontFamily: 'Public Sans',
        fontSize: '18px',
        fontWeight: '500',
        position: 'absolute',
        left: '1341px',
        top: '376px'
      }}>Explore 3D Art Creations</div>

      {/* Human Icon */}
      <svg style={{
        width: '24px',
        height: '24px',
        position: 'absolute',
        left: '1307px',
        top: '370px'
      }} viewBox="0 0 24 24" fill="none">
        <path d="M10.9 15L9.27498 22.2C9.22498 22.4333 9.10414 22.625 8.91248 22.775C8.72081 22.925 8.49998 23 8.24998 23C7.91664 23 7.64998 22.875 7.44998 22.625C7.24998 22.375 7.18331 22.0917 7.24998 21.775L10.075 7.45C10.175 6.96667 10.4 6.60417 10.75 6.3625C11.1 6.12083 11.4666 6 11.85 6C12.2333 6 12.5875 6.08333 12.9125 6.25C13.2375 6.41667 13.5 6.66667 13.7 7L14.7 8.6C15 9.08333 15.3875 9.52083 15.8625 9.9125C16.3375 10.3042 16.8833 10.5917 17.5 10.775V9.75C17.5 9.53333 17.5708 9.35417 17.7125 9.2125C17.8541 9.07083 18.0333 9 18.25 9C18.4666 9 18.6458 9.07083 18.7875 9.2125C18.9291 9.35417 19 9.53333 19 9.75V22.25C19 22.4667 18.9291 22.6458 18.7875 22.7875C18.6458 22.9292 18.4666 23 18.25 23C18.0333 23 17.8541 22.9292 17.7125 22.7875C17.5708 22.6458 17.5 22.4667 17.5 22.25V12.85C16.7 12.6667 15.9583 12.375 15.275 11.975C14.5916 11.575 14 11.0833 13.5 10.5L12.9 13.5L14.7 15.2C14.8 15.3 14.875 15.4125 14.925 15.5375C14.975 15.6625 15 15.7917 15 15.925V22C15 22.2833 14.9041 22.5208 14.7125 22.7125C14.5208 22.9042 14.2833 23 14 23C13.7166 23 13.4791 22.9042 13.2875 22.7125C13.0958 22.5208 13 22.2833 13 22V17L10.9 15ZM6.44998 12.95L5.29998 12.725C5.03331 12.675 4.82498 12.5375 4.67498 12.3125C4.52498 12.0875 4.47498 11.8333 4.52498 11.55L5.27498 7.625C5.37498 7.05833 5.67498 6.62917 6.17498 6.3375C6.67498 6.04583 7.21664 5.95833 7.79998 6.075C8.08331 6.125 8.29581 6.2625 8.43748 6.4875C8.57914 6.7125 8.62498 6.96667 8.57498 7.25L7.62498 12.15C7.57498 12.4333 7.43748 12.65 7.21248 12.8C6.98748 12.95 6.73331 13 6.44998 12.95ZM13.5 5.5C12.95 5.5 12.4791 5.30417 12.0875 4.9125C11.6958 4.52083 11.5 4.05 11.5 3.5C11.5 2.95 11.6958 2.47917 12.0875 2.0875C12.4791 1.69583 12.95 1.5 13.5 1.5C14.05 1.5 14.5208 1.69583 14.9125 2.0875C15.3041 2.47917 15.5 2.95 15.5 3.5C15.5 4.05 15.3041 4.52083 14.9125 4.9125C14.5208 5.30417 14.05 5.5 13.5 5.5Z" fill="#E3E3E3"/>
      </svg>

      <div style={{
        width: '345px',
        color: '#FFF',
        fontFamily: 'Public Sans',
        fontSize: '42px',
        fontWeight: '600',
        lineHeight: '42px',
        position: 'absolute',
        left: '1295px',
        top: '434px'
      }}>Shape the Future with Heavan</div>

      <div style={{
        width: '345px',
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'Public Sans',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '24px',
        position: 'absolute',
        left: '1295px',
        top: '534px'
      }}>Evans (Heavans) is a creative web developer blending design, code, and motion to build modern, impactful digital experiences.</div>

      {/* Start Work Button */}
      <div style={{
        display: 'flex',
        width: '152px',
        height: '64px',
        padding: '25px 32px',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.12)',
        position: 'absolute',
        left: '1295px',
        top: '639px'
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500'
        }}>Start work</div>
      </div>

      {/* Bottom Section */}
      <div style={{
        width: '1598px',
        height: '222px',
        background: 'rgba(0, 0, 0, 0.12)',
        backdropFilter: 'blur(6px)',
        position: 'absolute',
        left: '130px',
        top: '921px'
      }} />

      {/* Latest Work Dots */}
      <svg style={{width: '4px', height: '4px', position: 'absolute', left: '170px', top: '1098px'}} viewBox="0 0 4 4" fill="none">
        <circle cx="2" cy="2" r="2" fill="white"/>
      </svg>
      <svg style={{width: '3px', height: '3px', position: 'absolute', left: '179px', top: '1099px'}} viewBox="0 0 3 4" fill="none">
        <circle cx="1.5" cy="2" r="1.5" fill="white" fillOpacity="0.65"/>
      </svg>
      <svg style={{width: '3px', height: '3px', position: 'absolute', left: '187px', top: '1099px'}} viewBox="0 0 3 4" fill="none">
        <circle cx="1.5" cy="2" r="1.5" fill="white" fillOpacity="0.65"/>
      </svg>

      <div style={{
        color: 'rgba(255, 255, 255, 0.85)',
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: '500',
        position: 'absolute',
        left: '906px',
        top: '945px'
      }}>Some of my latest work&gt;&gt;&gt;&gt;</div>

      <div style={{
        color: '#FFF',
        fontFamily: 'DM Sans',
        fontSize: '15px',
        fontWeight: '500',
        letterSpacing: '1.8px',
        textTransform: 'uppercase',
        position: 'absolute',
        left: '1418px',
        top: '945px'
      }}>News</div>

      <div style={{
        color: 'rgba(255, 255, 255, 0.85)',
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: '500',
        position: 'absolute',
        left: '1178px',
        top: '1010px'
      }}>Meet Artist of the Month: @Alex Chen</div>

      <div style={{
        width: '462px',
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        position: 'absolute',
        left: '1178px',
        top: '1043px'
      }}>Discover Alex's stunning 3D worlds created with Artoo. Read More for an exclusive interview.</div>

      <div style={{
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        position: 'absolute',
        left: '1178px',
        top: '1096px'
      }}>Read More...</div>

      {/* Social Links */}
      <div style={{
        transform: 'rotate(-90deg)',
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'Public Sans',
        fontSize: '20px',
        fontWeight: '700',
        position: 'absolute',
        left: '58px',
        top: '1019px'
      }}>Fb</div>

      <div style={{
        transform: 'rotate(-90deg)',
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'Public Sans',
        fontSize: '20px',
        fontWeight: '700',
        position: 'absolute',
        left: '58px',
        top: '935px'
      }}>In</div>

      <div style={{
        transform: 'rotate(-90deg)',
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'Public Sans',
        fontSize: '20px',
        fontWeight: '700',
        position: 'absolute',
        left: '58px',
        top: '844px'
      }}>Tw</div>
    </div>
  );
}