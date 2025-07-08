import { Link } from 'wouter';

export default function Experience() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)',
      color: 'white',
      fontFamily: 'DM Sans, sans-serif'
    }} className="mobile-container">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(15, 15, 15, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <img 
              src="/logo.png" 
              alt="HeaVans Logo" 
              style={{
                height: '30px',
                width: 'auto',
                cursor: 'pointer'
              }}
            />
          </Link>

          {/* Navigation Menu */}
          <div className="nav-menu" style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Home</span>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>About</span>
            </Link>
            <Link href="/experience" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 1)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Experience</span>
            </Link>
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Portfolio</span>
            </Link>
            <Link href="/poetry" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Poetry</span>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <span className="menu-button" style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '16px',
                fontWeight: '400',
                cursor: 'pointer'
              }}>Contact</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button style={{
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              cursor: 'pointer'
            }}>☰</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="mobile-container" style={{
        paddingTop: '100px',
        paddingBottom: '80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h1 className="mobile-optimize animate-fadeInUp delay-200" style={{
            fontSize: '48px',
            fontWeight: '700',
            margin: '0 0 24px 0',
            letterSpacing: '2px',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.3), 0 0 35px rgba(255, 255, 255, 0.2)',
            animation: 'textGlow 3s ease-in-out infinite'
          }}>
            PROFESSIONAL EXPERIENCE
          </h1>
          
          <div style={{
            width: '100px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #fff, transparent)',
            margin: '0 auto 32px',
            borderRadius: '2px'
          }} className="animate-fadeInUp delay-400" />
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }} className="animate-fadeInUp delay-600">
            A journey through my professional experiences, showcasing growth, impact, and continuous learning across diverse roles and industries.
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '30px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
            zIndex: 1
          }} />

          {/* Experience Items */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '60px'
          }}>
            {/* KLM Royal Dutch Airlines */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '40px',
              position: 'relative'
            }} className="animate-fadeInLeft delay-800">
              {/* Timeline Dot */}
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                marginTop: '8px',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }} />
              
              {/* Content */}
              <div style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: '#fff'
                    }}>Research & Data Analyst</h3>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.8)',
                      margin: '0'
                    }}>KLM Royal Dutch Airlines</p>
                  </div>
                  <span style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '16px'
                  }}>2024 - Present</span>
                </div>
                
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Accra, Ghana
                </p>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Conducted in-depth research to gather and analyze passenger data, travel preferences, and pain points throughout the customer journey
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Utilized statistical tools and techniques to identify trends in booking behavior, flight satisfaction, and service feedback
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Developed comprehensive analytical reports and presented findings to management and cross-functional teams
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Led usability testing sessions for digital booking platforms and customer service tools
                  </li>
                </ul>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '20px'
                }}>
                  {['Data Analysis', 'Statistical Tools', 'Research', 'Usability Testing', 'Report Writing'].map((skill, index) => (
                    <span key={index} style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Student Help */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '40px',
              position: 'relative'
            }} className="animate-fadeInRight delay-1000">
              {/* Timeline Dot */}
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                marginTop: '8px',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }} />
              
              {/* Content */}
              <div style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: '#fff'
                    }}>Web Developer & Data Analyst</h3>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.8)',
                      margin: '0'
                    }}>Student Help (Freelance)</p>
                  </div>
                  <span style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '16px'
                  }}>2023 - Present</span>
                </div>
                
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Accra, Ghana
                </p>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Built and designed the official website from scratch using WordPress and custom code
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Integrated key features including contact forms, class scheduling, and lead capture
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Built a custom CRM system for employee management and tracking
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Conducted data analysis to track user engagement and improve site performance
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Maintained the site, updated content, and ensured mobile responsiveness and speed optimization
                  </li>
                </ul>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '20px'
                }}>
                  {['WordPress', 'HTML/CSS', 'JavaScript', 'Data Analysis', 'Mobile Responsive'].map((skill, index) => (
                    <span key={index} style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kava Media */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '40px',
              position: 'relative'
            }} className="animate-fadeInLeft delay-1200">
              {/* Timeline Dot */}
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                marginTop: '8px',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }} />
              
              {/* Content */}
              <div style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: '#fff'
                    }}>UX Researcher & Digital Analyst</h3>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.8)',
                      margin: '0'
                    }}>Kava Media</p>
                  </div>
                  <span style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '16px'
                  }}>2020 - 2021</span>
                </div>
                
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Accra, Ghana
                </p>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Conducted end-user research and behavioral studies
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Collaborated on UI/UX adjustments for digital media platforms
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Delivered reports and recommendations for client and internal product teams
                  </li>
                </ul>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '20px'
                }}>
                  {['UX Research', 'UI/UX Design', 'Digital Analytics', 'User Studies', 'Product Strategy'].map((skill, index) => (
                    <span key={index} style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Essydel Events */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '40px',
              position: 'relative'
            }} className="animate-fadeInRight delay-1400">
              {/* Timeline Dot */}
              <div style={{
                width: '16px',
                height: '16px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                marginTop: '8px',
                zIndex: 2,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }} />
              
              {/* Content */}
              <div style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '32px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: '#fff'
                    }}>Business Development Intern</h3>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: 'rgba(255, 255, 255, 0.8)',
                      margin: '0'
                    }}>Essydel Events</p>
                  </div>
                  <span style={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '4px 12px',
                    borderRadius: '16px'
                  }}>2019</span>
                </div>
                
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  Accra, Ghana
                </p>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Used Zoho CRM for client research and outreach
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Supported outreach strategy via email and LinkedIn
                  </li>
                  <li style={{
                    fontSize: '15px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6',
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: 'rgba(255, 255, 255, 0.5)'
                    }}>•</span>
                    Assisted with sales funnel improvement and lead tracking
                  </li>
                </ul>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: '20px'
                }}>
                  {['CRM Management', 'Lead Generation', 'Sales Strategy', 'LinkedIn Marketing', 'Business Development'].map((skill, index) => (
                    <span key={index} style={{
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '100px',
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }} className="animate-fadeInUp delay-1600">
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            margin: '0 0 16px 0',
            color: '#fff'
          }}>Available for New Opportunities</h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto 24px'
          }}>
            Have an exciting project or opportunity you'd like to discuss? Let's connect and explore how we can create something amazing together.
          </p>
          <a 
            href="mailto:evansarmah30@gmail.com"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            className="contact-button"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        padding: '40px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.6)',
          textAlign: 'center'
        }}>@2020 HeaVans. All rights reserved. | Designed & Developed by Evans</p>
      </div>

      <style>{`
        .menu-button:hover {
          color: rgba(255, 255, 255, 1) !important;
          transition: color 0.3s ease;
        }

        .contact-button:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.08)) !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1.0s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1400 { animation-delay: 1.4s; }
        .delay-1600 { animation-delay: 1.6s; }

        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}