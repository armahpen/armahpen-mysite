export default function Home() {
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
      {/* Logo HeaVans - Updated positioning from Figma, maintaining existing colors */}
      <div style={{
        width: '300px',
        height: '41px',
        color: '#FFF',
        fontFamily: 'Poppins',
        fontSize: '50px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        position: 'absolute',
        left: '47px',
        top: '75px',
        zIndex: 20
      }}>
        <span style={{fontFamily: 'Porter Sans Block, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '50px', color: 'rgba(99,118,124,1)'}}>H</span>
        <span style={{fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '50px', color: 'rgba(99,118,124,1)'}}>ea</span>
        <span style={{fontFamily: 'Porter Sans Block, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '50px', color: 'rgba(243,252,255,1)'}}>V</span>
        <span style={{fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '50px', color: 'rgba(243,252,255,1)'}}>ans</span>
        <span style={{fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '50px', color: 'rgba(255,255,255,1)'}}>.</span>
      </div>
      {/* Vector 4 - Decorative line */}
      <svg style={{
        width: '48px',
        height: '4px',
        strokeWidth: '3px',
        stroke: '#63767C',
        position: 'absolute',
        left: '617px',
        top: '91px',
        zIndex: 20
      }} width="48" height="4" viewBox="0 0 48 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 2H48" stroke="#63767C" strokeWidth="3"/>
      </svg>
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
          top: '120px',
          height: '20px'
        }} 
        width="29" height="23" viewBox="0 0 29 23" fill="none"
      >
        <path d="M28.5 1.5H0.500001" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
        <path d="M28.5 11.5H10.5" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
        <path d="M28.5 21.5H18.5" stroke="white" strokeOpacity="0.7" strokeWidth="2"/>
      </svg>
      {/* Navigation Menu - Adjusted positioning to prevent overlap */}
      <div style={{position: 'absolute', left: '1101px', top: '57px', width: '548px', height: '18px', zIndex: 20}}>
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
      {/* Work Collection - Designer Section */}
      <div style={{
        width: '259px',
        height: '178px',
        position: 'absolute',
        left: '186px',
        top: '225px',
        zIndex: 20
      }}>
        <div style={{color:'#FFF',fontFamily:'Public Sans',fontSize:'20px',fontStyle:'normal',fontWeight:'400',lineHeight:'normal',position:'absolute',left:'0px',top:'50px',width:'102px',height:'14px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '20px', color: 'rgba(255,255,255,1)'}}>HeaDesign</span>
        </div>
        <svg style={{width:'259px',height:'4px',position:'absolute',left:'0px',top:'77px'}} width="259" height="4" viewBox="0 0 259 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H258.583" stroke="#63767C" strokeWidth="3"/>
        </svg>
        <svg style={{width:'70px',height:'4px',position:'absolute',left:'189px',top:'77px'}} width="71" height="4" viewBox="0 0 71 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 2L70.5833 2.00001" stroke="black" strokeOpacity="0.34" strokeWidth="3"/>
        </svg>
        <div style={{width:'150px',color:'#FFF',fontFamily:'Public Sans',fontSize:'20px',fontStyle:'normal',fontWeight:'600',lineHeight:'normal',position:'absolute',left:'0px',top:'96px',height:'14px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '700', fontSize: '20px', color: 'rgba(255,255,255,1)'}}>Work Collection</span>
        </div>
        <div style={{width:'243px',color:'#FFF',fontFamily:'Public Sans',fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'normal',position:'absolute',left:'0px',top:'123px',height:'26px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,1)'}}>Multidisciplinary designer in ux/ui, grphic design and motion graphics</span>
        </div>
        <div style={{width:'150px',color:'rgba(255, 255, 255, 0.45)',fontFamily:'Public Sans',fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'normal',position:'absolute',left:'2px',top:'168px',height:'10px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,0.44999998807907104)'}}>see collections</span>
        </div>
        <img style={{width:'71px',height:'76px',transform:'rotate(131.367deg)',position:'absolute',left:'77px',top:'0px'}} src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdae1da462e182cde4834fff2e3bde1f5bbefa26?width=142" alt="" />
      </div>

      {/* Work Collection - Developer Section */}
      <div style={{
        position: 'absolute',
        left: '186px',
        top: '538px',
        zIndex: 20
      }}>
        <div style={{color:'#FFF',fontFamily:'Public Sans',fontSize:'20px',fontStyle:'normal',fontWeight:'400',lineHeight:'normal',position:'absolute',left:'0px',top:'0px',width:'100px',height:'14px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '20px', color: 'rgba(255,255,255,1)'}}>{'< DevHea>'}</span>
        </div>
        <svg style={{width:'259px',height:'4px',position:'absolute',left:'0px',top:'27px'}} width="259" height="4" viewBox="0 0 259 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2H258.583" stroke="#63767C" strokeWidth="3"/>
        </svg>
        <svg style={{width:'70px',height:'4px',position:'absolute',left:'189px',top:'27px'}} width="71" height="4" viewBox="0 0 71 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 2L70.5833 2.00001" stroke="black" strokeOpacity="0.34" strokeWidth="3"/>
        </svg>
        <div style={{width:'150px',color:'#FFF',fontFamily:'Public Sans',fontSize:'20px',fontStyle:'normal',fontWeight:'600',lineHeight:'normal',position:'absolute',left:'0px',top:'46px',height:'14px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '700', fontSize: '20px', color: 'rgba(255,255,255,1)'}}>Work Collection</span>
        </div>
        <div style={{width:'271px',color:'#FFF',fontFamily:'Public Sans',fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'normal',position:'absolute',left:'0px',top:'73px',height:'26px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,1)'}}>Full-stack developer blending sleek design with solid back-end architecture</span>
        </div>
        <div style={{width:'150px',color:'rgba(255, 255, 255, 0.45)',fontFamily:'Public Sans',fontSize:'14px',fontStyle:'normal',fontWeight:'400',lineHeight:'normal',position:'absolute',left:'2px',top:'118px',height:'10px'}}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '14px', color: 'rgba(255,255,255,0.44999998807907104)'}}>see collections</span>
        </div>
        <div style={{width:'142px',color:'#FFF',fontFamily:'Rubik Doodle Triangles',fontSize:'28px',fontStyle:'normal',fontWeight:'400',lineHeight:'normal',position:'absolute',left:'109px',top:'-3px',height:'20px'}}>
          <span style={{fontFamily: 'Rubik Doodle Triangles, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '28px', color: 'rgba(255,255,255,1)'}}>{'< Dev>'}</span>
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
        left: '0px',
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
      
      {/* Semi-transparent overlay covering from shoulders - Rectangle 8 */}
      <svg style={{
        width: '1613px',
        height: '159px',
        fill: '#1E1E1E',
        position: 'absolute',
        left: '0px',
        top: '0px',
        zIndex: 15
      }} width="1613" height="159" viewBox="0 0 1613 159" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H806.5H1613V159H0V0Z" fill="#1E1E1E"/>
      </svg>
      {/* Hero Section - Repositioned to match Figma */}
      <div style={{
        width: '357px',
        height: '227px',
        position: 'absolute',
        left: '1229px',
        top: '289px',
        zIndex: 10
      }}>
        {/* Human Icon */}
        <svg style={{
          width: '24px',
          height: '24px',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.9 15L9.27498 22.2C9.22498 22.4333 9.10414 22.625 8.91248 22.775C8.72081 22.925 8.49998 23 8.24998 23C7.91664 23 7.64998 22.875 7.44998 22.625C7.24998 22.375 7.18331 22.0917 7.24998 21.775L10.075 7.45C10.175 6.96667 10.4 6.60417 10.75 6.3625C11.1 6.12083 11.4666 6 11.85 6C12.2333 6 12.5875 6.08333 12.9125 6.25C13.2375 6.41667 13.5 6.66667 13.7 7L14.7 8.6C15 9.08333 15.3875 9.52083 15.8625 9.9125C16.3375 10.3042 16.8833 10.5917 17.5 10.775V9.75C17.5 9.53333 17.5708 9.35417 17.7125 9.2125C17.8541 9.07083 18.0333 9 18.25 9C18.4666 9 18.6458 9.07083 18.7875 9.2125C18.9291 9.35417 19 9.53333 19 9.75V22.25C19 22.4667 18.9291 22.6458 18.7875 22.7875C18.6458 22.9292 18.4666 23 18.25 23C18.0333 23 17.8541 22.9292 17.7125 22.7875C17.5708 22.6458 17.5 22.4667 17.5 22.25V12.85C16.7 12.6667 15.9583 12.375 15.275 11.975C14.5916 11.575 14 11.0833 13.5 10.5L12.9 13.5L14.7 15.2C14.8 15.3 14.875 15.4125 14.925 15.5375C14.975 15.6625 15 15.7917 15 15.925V22C15 22.2833 14.9041 22.5208 14.7125 22.7125C14.5208 22.9042 14.2833 23 14 23C13.7166 23 13.4791 22.9042 13.2875 22.7125C13.0958 22.5208 13 22.2833 13 22V17L10.9 15ZM6.44998 12.95L5.29998 12.725C5.03331 12.675 4.82498 12.5375 4.67498 12.3125C4.52498 12.0875 4.47498 11.8333 4.52498 11.55L5.27498 7.625C5.37498 7.05833 5.67498 6.62917 6.17498 6.3375C6.67498 6.04583 7.21664 5.95833 7.79998 6.075C8.08331 6.125 8.29581 6.2625 8.43748 6.4875C8.57914 6.7125 8.62498 6.96667 8.57498 7.25L7.62498 12.15C7.57498 12.4333 7.43748 12.65 7.21248 12.8C6.98748 12.95 6.73331 13 6.44998 12.95ZM13.5 5.5C12.95 5.5 12.4791 5.30417 12.0875 4.9125C11.6958 4.52083 11.5 4.05 11.5 3.5C11.5 2.95 11.6958 2.47917 12.0875 2.0875C12.4791 1.69583 12.95 1.5 13.5 1.5C14.05 1.5 14.5208 1.69583 14.9125 2.0875C15.3041 2.47917 15.5 2.95 15.5 3.5C15.5 4.05 15.3041 4.52083 14.9125 4.9125C14.5208 5.30417 14.05 5.5 13.5 5.5Z" fill="#E3E3E3"/>
        </svg>
        
        <div style={{
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: 'normal',
          position: 'absolute',
          left: '34px',
          top: '6px',
          width: '210px',
          height: '13px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '18px', color: 'rgba(255,255,255,1)'}}>Explore 3D Art Creations</span>
        </div>
        
        <div style={{
          width: '345px',
          color: '#FFF',
          fontFamily: 'Public Sans',
          fontSize: '42px',
          fontWeight: '600',
          lineHeight: '42px',
          position: 'absolute',
          left: '12px',
          top: '60px',
          height: '72px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '700', fontSize: '42px', color: 'rgba(255,255,255,1)'}}>Shape the Future with Heavan</span>
        </div>
        
        <div style={{
          width: '345px',
          color: 'rgba(255, 255, 255, 0.75)',
          fontFamily: 'Public Sans',
          fontSize: '15px',
          fontWeight: '400',
          lineHeight: '24px',
          position: 'absolute',
          left: '0px',
          top: '168px',
          height: '59px'
        }}>
          <span style={{fontFamily: 'Public Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '15px', color: 'rgba(255,255,255,0.75)'}}>Evans (Heavans) is a creative web developer blending design, code, and motion to build modern, impactful digital experiences.</span>
        </div>
      </div>
      {/* Start Work Button - Updated with latest Figma positioning */}
      <div style={{
        display: 'flex',
        width: '152px',
        height: '64px',
        padding: '25px 32px',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        background: 'rgba(255, 255, 255, 0.12)',
        position: 'absolute',
        left: '1142px',
        top: '545px',
        zIndex: 10
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, 0.80)',
          fontFamily: 'DM Sans',
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: 'normal',
          position: 'relative'
        }}>
          <span style={{fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '18px', color: 'rgba(255,255,255,0.800000011920929)'}}>Start work</span>
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
            }}>HeaVans.</div>
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

      
      {/* News Image */}
      <img style={{
        width: '280px',
        height: '140px',
        aspectRatio: '2/1',
        position: 'absolute',
        left: '848px',
        top: '897px',
        zIndex: 10
      }} src="https://cdn.builder.io/api/v1/image/assets/TEMP/273588439d530460f2dff5d525da04780e3288e8?width=560" alt="" />
      
      {/* Artist of the Month */}
      <div style={{
        color: 'rgba(255, 255, 255, 0.85)',
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '0px',
        position: 'absolute',
        left: '1123px',
        top: '746px',
        width: '285px',
        height: '11px',
        zIndex: 10
      }}>
        <span style={{fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '16px', color: 'rgba(255,255,255,0.8500000238418579)'}}>Meet Artist of the Month: @Alex Chen</span>
      </div>
      
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
        <span style={{fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '16px', color: 'rgba(255,255,255,0.5)'}}>Discover Alex's stunning 3D worlds created with Artoo. Read More for an exclusive interview.</span>
      </div>
      
      {/* Read More Link */}
      <div style={{
        color: 'rgba(255, 255, 255, 0.75)',
        fontFamily: 'DM Sans',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        position: 'absolute',
        left: '1147px',
        top: '1013px',
        width: '89px',
        height: '11px',
        zIndex: 10
      }}>
        <span style={{fontFamily: 'DM Sans, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: '400', fontSize: '16px', color: 'rgba(255,255,255,0.75)'}}>Read More...</span>
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