export default function About() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#3B3B3B',
      color: '#FFF',
      fontFamily: 'Public Sans, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Header Section */}
      <header style={{
        padding: '40px 80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: '600',
          color: '#FFF'
        }} className="animate-fadeInLeft delay-100 hover-grow cursor-pointer">
          HeaVans.
        </div>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div className="menu-button animate-slideInDown delay-200" 
               onClick={() => window.location.href = '/'}>Home</div>
          <div className="menu-button animate-slideInDown delay-300"
               style={{ color: 'rgba(255, 255, 255, 1)', fontWeight: '600' }}>About</div>
          <div className="menu-button animate-slideInDown delay-400"
               onClick={() => alert('Experience section coming soon!')}>Experience</div>
          <div className="menu-button animate-slideInDown delay-500"
               onClick={() => alert('Contact section coming soon!')}>Contact</div>
        </nav>
      </header>

      {/* Anatomical Icons Section */}
      <div style={{
        background: '#3B3B3B',
        padding: '80px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '120px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Heart Icon */}
        <div className="animate-fadeInUp delay-200 hover-grow" style={{ cursor: 'pointer' }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 110c-2-1.5-4.5-3.5-7.5-6C35 88 15 68 15 45c0-18 12-30 30-30 8 0 15 4 20 10 5-6 12-10 20-10 18 0 30 12 30 30 0 23-20 43-37.5 59-3 2.5-5.5 4.5-7.5 6z" 
                  stroke="rgba(255, 255, 255, 0.8)" 
                  strokeWidth="2" 
                  fill="none"/>
            <path d="M30 35h15M52 35h13M30 45h10M65 45h10M35 55h8M70 55h8" 
                  stroke="rgba(255, 255, 255, 0.6)" 
                  strokeWidth="1.5"/>
            <circle cx="40" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)"/>
            <circle cx="80" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)"/>
          </svg>
        </div>

        {/* Brain Icon */}
        <div className="animate-fadeInUp delay-300 hover-grow" style={{ cursor: 'pointer' }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 45c0-15 10-25 25-25h20c15 0 25 10 25 25v35c0 15-10 25-25 25H50c-15 0-25-10-25-25V45z" 
                  stroke="rgba(255, 255, 255, 0.8)" 
                  strokeWidth="2" 
                  fill="none"/>
            <path d="M35 35c5-8 15-12 25-12s20 4 25 12M60 25v80M40 40c3-2 6-3 10-3s7 1 10 3M40 55c3-2 6-3 10-3s7 1 10 3M70 40c3-2 6-3 10-3s7 1 10 3M70 55c3-2 6-3 10-3s7 1 10 3" 
                  stroke="rgba(255, 255, 255, 0.6)" 
                  strokeWidth="1.5"/>
            <circle cx="45" cy="45" r="2" fill="rgba(255, 255, 255, 0.4)"/>
            <circle cx="75" cy="45" r="2" fill="rgba(255, 255, 255, 0.4)"/>
            <circle cx="45" cy="65" r="2" fill="rgba(255, 255, 255, 0.4)"/>
            <circle cx="75" cy="65" r="2" fill="rgba(255, 255, 255, 0.4)"/>
          </svg>
        </div>

        {/* Hand Icon */}
        <div className="animate-fadeInUp delay-400 hover-grow" style={{ cursor: 'pointer' }}>
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45 90V45c0-5 3-8 8-8s8 3 8 8v20M61 50V30c0-5 3-8 8-8s8 3 8 8v35M77 50V35c0-5 3-8 8-8s8 3 8 8v30M93 55V45c0-5 3-8 8-8s8 3 8 8v25c0 15-12 27-27 27H65c-10 0-20-8-20-18V70" 
                  stroke="rgba(255, 255, 255, 0.8)" 
                  strokeWidth="2" 
                  fill="none"/>
            <path d="M50 35h6M66 25h6M82 30h6M98 40h6" 
                  stroke="rgba(255, 255, 255, 0.6)" 
                  strokeWidth="1.5"/>
            <circle cx="53" cy="25" r="2" fill="rgba(255, 255, 255, 0.4)"/>
            <circle cx="69" cy="20" r="2" fill="rgba(255, 255, 255, 0.4)"/>
            <circle cx="85" cy="25" r="2" fill="rgba(255, 255, 255, 0.4)"/>
            <circle cx="101" cy="35" r="2" fill="rgba(255, 255, 255, 0.4)"/>
          </svg>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '40px',
        padding: '60px 80px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        
        {/* Hero Introduction */}
        <div style={{
          gridColumn: '1 / -1',
          textAlign: 'center',
          marginBottom: '60px'
        }} className="animate-fadeInUp delay-200">
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #FFF 0%, rgba(255,255,255,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} className="animate-textGlow">
            Hi, I'm Evans
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            I'm a Creative Technologist specializing in web development and design
          </p>
        </div>

        {/* About Cards */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }} className="animate-slideLeftToRight delay-300 hover-grow">
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#FFF'
          }}>I love Digital</h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '20px'
          }}>
            I specialize in rich interactive experiences for web, mobile and desktop applications. 
            My passion lies in creating seamless digital experiences that bridge design and functionality.
          </p>
          <a href="#" style={{
            color: '#FFF',
            textDecoration: 'none',
            fontWeight: '500',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease'
          }} className="hover-slide">
            Learn more →
          </a>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }} className="animate-slideRightToLeft delay-400 hover-grow">
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#FFF'
          }}>Multi-Discipline</h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '20px'
          }}>
            Being multi-disciplined is a big part of my ethos. Whether it's design, development, 
            UX/UI, or motion graphics; I bring a holistic approach to every project.
          </p>
          <a href="#" style={{
            color: '#FFF',
            textDecoration: 'none',
            fontWeight: '500',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease'
          }} className="hover-slide">
            View skills →
          </a>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }} className="animate-slideLeftToRight delay-500 hover-grow">
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#FFF'
          }}>Creative Network</h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '20px'
          }}>
            I love to collaborate. I'm currently looking for other creative minds to work, 
            grow and network together. Let's create something amazing!
          </p>
          <a href="#" style={{
            color: '#FFF',
            textDecoration: 'none',
            fontWeight: '500',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease'
          }} className="hover-slide">
            Get in touch →
          </a>
        </div>

        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }} className="animate-slideRightToLeft delay-600 hover-grow">
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#FFF'
          }}>I love to Innovate</h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '20px'
          }}>
            Innovation drives everything I do. From experimenting with new technologies 
            to pushing creative boundaries, I'm always exploring what's next.
          </p>
          <a href="#" style={{
            color: '#FFF',
            textDecoration: 'none',
            fontWeight: '500',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s ease'
          }} className="hover-slide">
            View projects →
          </a>
        </div>

        {/* Philosophy Section */}
        <div style={{
          gridColumn: '1 / -1',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
          padding: '60px',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center',
          marginTop: '40px'
        }} className="animate-fadeInUp delay-700">
          <h2 style={{
            fontSize: '36px',
            fontWeight: '600',
            marginBottom: '30px',
            color: '#FFF'
          }}>Core Philosophy</h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: '40px'
          }}>
            I am passionate about interactive media, and in an age of digital transformation, 
            I believe bringing design to life with code is essential. I specialize in a 
            multi-disciplined approach to work, incorporating both design thinking and 
            technical implementation to create meaningful digital experiences.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '15px 25px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '500'
            }} className="animate-pulse-subtle">Design</div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '15px 25px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '500'
            }} className="animate-pulse-subtle">Development</div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '15px 25px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '500'
            }} className="animate-pulse-subtle">UX/UI</div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '15px 25px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '500'
            }} className="animate-pulse-subtle">Motion Graphics</div>
          </div>
        </div>

        {/* Interests Section */}
        <div style={{
          gridColumn: '1 / -1',
          marginTop: '60px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '600',
            marginBottom: '40px',
            textAlign: 'center',
            color: '#FFF'
          }} className="animate-fadeInUp delay-800">What I Love</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              'React', 'TypeScript', 'Node.js', 'Design Systems', 
              'Animation', 'Web Performance', 'User Experience', 'Innovation'
            ].map((interest, index) => (
              <div
                key={interest}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                className={`animate-fadeInUp delay-${900 + index * 100} hover-grow`}
              >
                <span style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        padding: '40px 80px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.6)',
          margin: '0'
        }}>
          © 2025 HeaVans. Crafted with passion and purpose.
        </p>
      </footer>
    </div>
  );
}