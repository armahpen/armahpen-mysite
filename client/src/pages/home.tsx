export default function Home() {
  return (
    <div 
      className="relative w-full" 
      style={{backgroundColor: '#1E1E1E', width: '1600px', height: '1230px', transform: 'scale(0.9)', transformOrigin: 'top left'}}
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

      {/* Navigation Menu - Adjusted positioning to prevent overlap */}
      <div style={{position: 'absolute', left: '1101px', top: '57px', width: '400px', height: '18px', zIndex: 20}}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }} className="animate-slideInDown delay-100 menu-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '80px',
          top: '0px'
        }} className="animate-slideInDown delay-200 menu-button" onClick={() => window.location.href = '/about'}>About</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '150px',
          top: '0px'
        }} className="animate-slideInDown delay-300 menu-button" onClick={() => alert('Experience section coming soon!')}>Experience</div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.65)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '400',
          position: 'absolute',
          left: '250px',
          top: '0px'
        }} className="animate-slideInDown delay-400 menu-button" onClick={() => alert('Skills section coming soon!')}>Skills</div>
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
      {/* HeaDesign Work Collection Section - Properly Organized */}
      <div style={{
        width: '300px',
        height: '200px',
        position: 'absolute',
        left: '186px',
        top: '225px',
        zIndex: 20
      }} className="animate-slideLeftToRight delay-100">
        {/* Decorative Icon */}
        <img style={{
          width: '71px',
          height: '76px',
          transform: 'rotate(131.367deg)',
          position: 'absolute',
          left: '77px',
          top: '0px'
        }} src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdae1da462e182cde4834fff2e3bde1f5bbefa26?width=142" alt="" />
        
        {/* Section Title */}
        <div style={{
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '1.2',
          position: 'absolute',
          left: '0px',
          top: '50px',
          width: '120px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '20px', color: 'rgba(255,255,255,1)'}} className="animate-slideLeftToRight delay-200 hover-grow">HeaDesign</span>
        </div>
        
        {/* Divider Lines */}
        <svg style={{
          width: '259px',
          height: '4px',
          position: 'absolute',
          left: '0px',
          top: '77px'
        }} width="259" height="4" viewBox="0 0 259 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H258.583" stroke="#63767C" strokeWidth="3"/>
        </svg>
        <svg style={{
          width: '70px',
          height: '4px',
          position: 'absolute',
          left: '189px',
          top: '77px'
        }} width="71" height="4" viewBox="0 0 71 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 2L70.5833 2.00001" stroke="black" strokeOpacity="0.34" strokeWidth="3"/>
        </svg>
        
        {/* Main Title */}
        <div style={{
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '1.2',
          position: 'absolute',
          left: '0px',
          top: '96px',
          width: '180px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '700', fontSize: '20px', color: 'rgba(255,255,255,1)'}} className="animate-slideLeftToRight delay-300 hover-grow">Work Collection</span>
        </div>
        
        {/* Description Text */}
        <div style={{
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.4',
          position: 'absolute',
          left: '0px',
          top: '125px',
          width: '280px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,1)'}} className="animate-slideLeftToRight delay-400 hover-grow">Multidisciplinary designer in UX/UI, graphic design and motion graphics</span>
        </div>
        
        {/* Call to Action Link */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.45)',
          fontFamily: 'Public Sans',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.2',
          position: 'absolute',
          left: '0px',
          top: '175px',
          width: '150px',
          cursor: 'pointer'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,0.45)'}}>see collections →</span>
        </div>
      </div>
      {/* DevHea Work Collection - Developer Section */}
      <div style={{
        position: 'absolute',
        left: '186px',
        top: '538px',
        zIndex: 20,
        width: '320px',
        height: '140px'
      }} className="animate-slideRightToLeft delay-200">
        {/* Header with < DevHea> and Dev Icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '8px'
        }}>
          <div style={{
            color: '#FFF',
            fontFamily: 'Public Sans',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>
            <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '18px', color: 'rgba(255,255,255,1)'}} className="animate-slideRightToLeft delay-300 hover-grow">{'< DevHea>'}</span>
          </div>
          <img 
            src="/dev-icon.png"
            alt="Dev Icon"
            style={{
              height: '32px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
        
        {/* Divider Lines */}
        <div style={{
          width: '100%',
          height: '4px',
          marginBottom: '12px',
          position: 'relative'
        }}>
          <svg style={{width:'259px',height:'4px',position:'absolute',left:'0px',top:'0px'}} width="259" height="4" viewBox="0 0 259 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2H258.583" stroke="#63767C" strokeWidth="3"/>
          </svg>
          <svg style={{width:'70px',height:'4px',position:'absolute',left:'189px',top:'0px'}} width="71" height="4" viewBox="0 0 71 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 2L70.5833 2.00001" stroke="black" strokeOpacity="0.34" strokeWidth="3"/>
          </svg>
        </div>
        
        {/* Work Collection Title */}
        <div style={{
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '1.2',
          marginBottom: '8px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '700', fontSize: '20px', color: 'rgba(255,255,255,1)'}} className="animate-slideRightToLeft delay-400 hover-grow">Work Collection</span>
        </div>
        
        {/* Description */}
        <div style={{
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.4',
          marginBottom: '12px',
          width: '280px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,1)'}} className="animate-slideRightToLeft delay-500 hover-grow">Full-stack developer blending sleek design with solid back-end architectures</span>
        </div>
        
        {/* Call to Action */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.45)',
          fontFamily: 'Public Sans',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '1.2',
          cursor: 'pointer'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,0.45)'}}>see collections</span>
        </div>
      </div>
      {/* Frame 7 - Updated with latest Figma specifications */}
      <div style={{
        display: 'flex',
        width: '1434px',
        height: '989px',
        padding: '10px',
        alignItems: 'center',
        gap: '10px',
        position: 'absolute',
        left: '72px',
        top: '318px'
      }}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/386488a8fb187ecc516355c1418624730a7a47b9?width=2390"
          alt="ChatGPT Image"
          style={{
            width: '1195px',
            height: '957px',
            flexShrink: 0,
            aspectRatio: '1195/957',
            borderRadius: '62px',
            mixBlendMode: 'luminosity',
            position: 'relative'
          }}
        />
      </div>

      {/* Hero Section - Repositioned to match Figma */}
      <div style={{
        width: '357px',
        height: '227px',
        position: 'absolute',
        left: '1133px',
        top: '289px',
        zIndex: 10
      }}>

        {/* Subtitle */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'Public Sans',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '1.3',
          marginBottom: '12px'
        }}>
        </div>
        
        {/* Main Headline */}
        <div style={{
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '38px',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '20px'
        }}>
          <span
            style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '700', fontSize: '38px', color: 'rgba(255,255,255,1)'}}
            className="mt-[25px] mb-[25px] ml-[-2px] mr-[-2px] animate-fadeInUp delay-200 animate-textGlow hover-grow">Shape the Future with Heavans</span>
        </div>
        
        {/* Description */}
        <div style={{
          color: 'rgba(255, 255, 255, 0.75)',
          fontFamily: 'Public Sans',
          fontSize: '15px',
          fontWeight: '400',
          lineHeight: '1.6',
          maxWidth: '350px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '15px', color: 'rgba(255,255,255,0.75)'}} className="animate-fadeInLeft delay-300 hover-grow">I create standout web experiences—where design meets purpose and code brings it to life.</span>
        </div>
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
                <a href="#home" style={{
                  fontFamily: 'DM Sans',
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  textDecoration: 'none'
                }}>Home</a>
              </li>
              <li style={{marginBottom: '8px'}}>
                <a href="#about" style={{
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
      {/* Artist Description */}
      <div style={{
        width: '462px',
        color: 'rgba(255, 255, 255, 0.50)',
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        position: 'absolute',
        left: '1063px',
        top: '679px',
        height: '31px',
        zIndex: 10
      }}>
        <span style={{fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '16px', color: 'rgba(255,255,255,0.5)'}} className="animate-fadeInUp delay-300 animate-pulse-subtle hover-grow">Evans (Heavans) is your creative plug—designing slick interfaces, coding clean systems, and adding motion magic where it matters. Whether it's a brand, app, or full-blown idea, he makes it bold, fast, and unforgettable.</span>
      </div>
      {/* Final Line Separator */}
      <div style={{
        width: '1600px',
        height: '0px',
        background: '#FFF',
        position: 'absolute',
        left: '0px',
        top: '1060px'
      }}></div>
    </div>
  );
}