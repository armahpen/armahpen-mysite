import { Link } from 'wouter';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('My Rabbai');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: 'My Rabbai',
      description: 'AI-powered platform that reads the Bible in the voice of your favorite man of God, making daily devotion more engaging and spiritually enriching.',
      category: 'My Rabbai',
      image: '/rabbai-preview.png',
      technologies: ['AI', 'React / HTML + Tailwind CSS', 'Python (FastAPI)']
    },
    {
      title: 'Student Help CRM',
      description: 'An intelligent recruitment and learning system that connects students, parents, and teachers—with online testing, AI teacher matching, and performance tracking.',
      category: 'CRMs',
      image: '/student-help-crm-preview.png',
      technologies: ['Next.js / Tailwind CSS', 'Python (FastAPI)', 'Firebase', 'AI Matching / Vector Search']
    },
    {
      title: 'DEMS CRM Systems',
      description: 'Custom CRM systems for data entry, analysis, and AI-enhanced decision-making, tailored for SMEs and handled by real human operators.',
      category: 'CRMs',
      image: '/dems-crm-preview.png',
      technologies: ['HTML / CSS / JavaScript', 'PHP / MySQL', 'Prompt Engineering Modules', 'Firebase']
    },
    {
      title: 'School CRM System',
      description: 'CRM system for schools with automated school fee reminders, birthday messages, bulk updates, and AI-driven campaign planning.',
      category: 'CRMs',
      image: '/dems-crm-preview.png',
      technologies: ['React / Tailwind CSS', 'Node.js / Firebase Functions', 'MongoDB', 'AI API']
    },
    {
      title: 'Ceding - My Saving & CRM App',
      description: 'A savings and CRM platform built with Drupal (PHP), designed to help individuals and financial groups save smarter, stay accountable, and manage member data effectively.',
      category: 'CRMs',
      image: '/dems-crm-preview.png',
      technologies: ['Figma (UI/UX Design)', 'Drupal (PHP Backend)', 'HTML / Tailwind CSS', 'CRM Dashboard / Smart Reminders']
    },
    {
      title: 'LeadGen CRM',
      description: 'B2B lead generation platform with contact status tracking, analytics, and export tools to help businesses convert leads more efficiently.',
      category: 'CRMs',
      image: '/dems-crm-preview.png',
      technologies: ['React / Tailwind CSS', 'Node.js / Express', 'MongoDB', 'Chart.js / REST API']
    },
    {
      title: 'Church CRM System',
      description: 'A communication and engagement platform for churches with bulk messaging, attendance analytics, and AI-powered reminder features.',
      category: 'CRMs',
      image: '/dems-crm-preview.png',
      technologies: ['Vue.js / Tailwind', 'Firebase / Cloud Firestore', 'Twilio SMS API / WhatsApp Cloud API', 'Python (FastAPI)']
    },

    {
      title: 'UI/UX Design Portfolio',
      description: 'A collection of purpose-driven, responsive, and user-friendly interfaces built to improve usability, enhance workflows, and drive engagement across platforms.',
      category: 'UI/UX',
      image: '/uiux-designs-preview.png',
      technologies: ['Figma / Adobe XD', 'HTML + Tailwind CSS', 'React / Next.js', 'Framer / Prototyping', 'User Research / Wireframing']
    },

    {
      title: 'Brand Identity & Visual Design',
      description: 'Complete visual identity systems, marketing materials, and brand communications designed to create memorable and impactful brand experiences across all touchpoints.',
      category: 'Graphic Design',
      image: '/graphic-design-preview.png',
      technologies: ['Adobe Creative Suite', 'Figma', 'Illustrator', 'InDesign', 'Brand Strategy', 'Typography']
    },
    {
      title: 'Poetry',
      description: 'My poetry goes beyond the page—it\'s shaped into visual art, spoken word, and digital expression. From intimate performances to design-integrated poems, I use poetry to tell stories, challenge ideas, and connect with others on a deeper level.',
      category: 'Poetry',
      image: '/poetry-preview.png',
      technologies: ['Spoken Word Performances', 'Poetry-Art Hybrids', 'Social Media Poems', 'Zines & Digital Chapbooks']
    }
  ];

  const categories = [
    'My Rabbai',
    'CRMs',
    'UI/UX',
    'Graphic Design',
    'Poetry'
  ];

  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)',
      color: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
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

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            ☰
          </button>
          
          <div className="nav-menu" style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <Link href="/" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '0.5px'
            }}>Home</Link>
            <Link href="/about" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '0.5px'
            }}>About</Link>
            <Link href="/experience" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '0.5px'
            }}>Experience</Link>
            <Link href="/portfolio" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              letterSpacing: '0.5px'
            }}>Portfolio</Link>

            <Link href="/contact" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '0.5px'
            }}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Backdrop */}
      <div 
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-nav-close"
          onClick={() => setMobileMenuOpen(false)}
        >
          ×
        </button>
        
        <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '400',
          padding: '0.75rem 0'
        }}>Home</Link>
        
        <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '400',
          padding: '0.75rem 0'
        }}>About</Link>
        
        <Link href="/experience" onClick={() => setMobileMenuOpen(false)} style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '400',
          padding: '0.75rem 0'
        }}>Experience</Link>
        
        <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '500',
          padding: '0.75rem 0'
        }}>Portfolio</Link>
        
        <Link href="/contact" onClick={() => setMobileMenuOpen(false)} style={{
          color: 'rgba(255, 255, 255, 0.9)',
          textDecoration: 'none',
          fontSize: '1.2rem',
          fontWeight: '400',
          padding: '0.75rem 0'
        }}>Contact</Link>
      </div>

      <div style={{
        display: 'flex',
        minHeight: '100vh',
        paddingTop: '80px'
      }}>
        {/* Left Content Area */}
        <div style={{
          flex: '1',
          padding: '2rem 1rem',
          maxWidth: '100%'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '60px' }}>
            <h1 style={{
              fontSize: selectedCategory === 'CRMs' 
                ? 'clamp(32px, 4vw, 48px)' 
                : 'clamp(40px, 5vw, 64px)',
              fontWeight: '300',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              {selectedCategory === 'My Rabbai' ? 'My Rabbai' : selectedCategory === 'CRMs' ? 'Custom Platforms & CRM Systems I\'ve Built' : selectedCategory === 'UI/UX' ? 'UI/UX Designs' : selectedCategory === 'Graphic Design' ? 'Graphic Design Projects' : 'Heavans Haven'}
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              fontWeight: '300'
            }}>
              {selectedCategory === 'My Rabbai' 
                ? 'Rabbai is an AI-powered platform I co-created with my brother, inspired by his idea to make scripture more personal and relatable. Motivated by our shared passion for faith and technology, we built Rabbai to read the Bible in the voice of your favorite man of God—making daily devotion more engaging, comforting, and spiritually enriching.'
                : selectedCategory === 'CRMs'
                ? 'I\'ve built comprehensive CRM solutions for diverse industries—from lead generation platforms for B2B companies to specialized systems for churches, schools, and educational services. Each system is tailored to unique business needs with AI integration, automated communication, and smart analytics.'
                : selectedCategory === 'UI/UX'
                ? 'As a UI/UX designer, I focus on creating clean, intuitive, and user-centered interfaces. From research to wireframes to polished visuals, my work is grounded in solving real user problems while delivering a seamless digital experience. I\'ve designed for web apps, dashboards, mobile-first platforms, and AI tools—always balancing function with form.'
                : selectedCategory === 'Graphic Design'
                ? 'My graphic design work spans brand identity, marketing materials, and visual communications. I create cohesive visual systems that tell compelling stories and communicate brand values effectively. From logo design to complete brand guidelines, I focus on creating memorable and impactful visual experiences that resonate with target audiences.'
                : ''
              }
            </p>
          </div>

          {/* Project Grid */}
          <div style={{
            display: 'grid',
            gap: selectedCategory === 'CRMs' ? '32px' : '40px',
            gridTemplateColumns: selectedCategory === 'CRMs' && filteredProjects.length > 2 
              ? 'repeat(auto-fit, minmax(320px, 1fr))' 
              : '1fr'
          }}>
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '40px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                className="project-item"
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '40px'
                }}>
                  <div style={{ flex: '1' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '400',
                      marginBottom: '12px',
                      letterSpacing: '-0.01em'
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.5',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginBottom: '16px'
                    }}>
                      {project.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          style={{
                            fontSize: '12px',
                            padding: '4px 8px',
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '12px',
                            color: 'rgba(255, 255, 255, 0.7)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {(project.title === 'My Rabbai' || project.title === 'Student Help CRM' || project.title === 'DEMS CRM Systems' || project.title === 'School CRM System' || project.title === 'Ceding - My Saving & CRM App' || project.category === 'UI/UX' || project.category === 'Graphic Design' || project.category === 'Poetry') && (
                    <div 
                      style={{
                        width: '120px',
                        height: '80px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'all 0.3s ease'
                      }}
                      className="preview-card"
                      onClick={() => {
                        if (project.title === 'My Rabbai') {
                          window.open('https://myrabbai.pages.dev/rabbai', '_blank');
                        } else if (project.title === 'Student Help CRM') {
                          window.open('https://studenthelp-teacher.netlify.app/', '_blank');
                        } else if (project.title === 'School CRM System') {
                          window.open('https://www.behance.net/gallery/183081607/School-database-site', '_blank');
                        } else if (project.title === 'Ceding - My Saving & CRM App') {
                          window.open('https://www.behance.net/gallery/183088961/Ceding-My-Saving-CRM-App', '_blank');
                        } else if (project.category === 'Poetry') {
                          window.location.href = '/poetry';
                        } else if (project.category === 'UI/UX' || project.category === 'Graphic Design') {
                          window.open('https://www.behance.net/evansarmah/projects', '_blank');
                        }
                      }}
                    >
                      {project.title === 'My Rabbai' ? (
                      <>
                        <img 
                          src="/rabbai-preview.png"
                          alt="My Rabbai Preview"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          fontWeight: '500'
                        }} className="preview-overlay">
                          Visit Site
                        </div>
                      </>
                    ) : project.title === 'Student Help CRM' ? (
                      <>
                        <img 
                          src="/student-help-crm-preview.png"
                          alt="Student Help CRM Preview"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          fontWeight: '500'
                        }} className="preview-overlay">
                          Visit Site
                        </div>
                      </>
                    ) : project.title === 'DEMS CRM Systems' ? (
                      <img 
                        src="/dems-crm-preview.png"
                        alt="DEMS CRM Preview"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    ) : project.title === 'School CRM System' ? (
                      <>
                        <div style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '10px',
                          color: 'white',
                          fontWeight: '500',
                          textAlign: 'center',
                          padding: '8px'
                        }}>
                          School Database Site
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          fontWeight: '500'
                        }} className="preview-overlay">
                          View Design
                        </div>
                      </>
                    ) : project.title === 'Ceding - My Saving & CRM App' ? (
                      <>
                        <div style={{
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '10px',
                          color: 'white',
                          fontWeight: '500',
                          textAlign: 'center',
                          padding: '8px'
                        }}>
                          Ceding Savings App
                        </div>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          fontWeight: '500'
                        }} className="preview-overlay">
                          View App Design
                        </div>
                      </>
                    ) : project.category === 'UI/UX' ? (
                      <>
                        <img 
                          src="/uiux-designs-preview.png"
                          alt="UI/UX Designs Preview"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          fontWeight: '500'
                        }} className="preview-overlay">
                          View Portfolio
                        </div>
                      </>
                    ) : project.category === 'Graphic Design' ? (
                      <>
                        <img 
                          src="/graphic-design-preview.png"
                          alt="Graphic Design Preview"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          fontWeight: '500'
                        }} className="preview-overlay">
                          View Portfolio
                        </div>
                      </>
                    ) : project.category === 'Poetry' ? (
                      <>
                        <img 
                          src="/poetry-preview.png"
                          alt="Poetry Preview"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(0, 0, 0, 0.7)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          color: 'white',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          fontWeight: '500'
                        }} className="preview-overlay">
                          View Poetry
                        </div>
                      </>
                      ) : null}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div style={{
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h4 style={{
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Availability
            </h4>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '24px'
            }}>
              Available for freelance work — Remotely, Global
            </p>
            
            <h4 style={{
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '8px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              Contact
            </h4>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              evansarmah30@gmail.com
            </p>
          </div>
        </div>

        {/* Right Sidebar - 3D Project Categories */}
        <div style={{
          width: '300px',
          padding: '80px 40px',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'sticky',
          top: '80px',
          height: 'fit-content',
          perspective: '1000px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '500',
            marginBottom: '32px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            Categories
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            transformStyle: 'preserve-3d'
          }}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                style={{
                  background: selectedCategory === category 
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)' 
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  border: selectedCategory === category 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  color: selectedCategory === category ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)',
                  fontSize: '14px',
                  fontWeight: selectedCategory === category ? '500' : '400',
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: '16px 20px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontFamily: 'inherit',
                  backdropFilter: 'blur(10px)',
                  transform: selectedCategory === category 
                    ? 'translateZ(20px) rotateX(5deg) rotateY(-5deg)' 
                    : 'translateZ(0px) rotateX(0deg) rotateY(0deg)',
                  boxShadow: selectedCategory === category 
                    ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1)' 
                    : '0 8px 16px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="category-button-3d"
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.transform = 'translateZ(8px) rotateX(2deg) rotateY(-2deg)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.25), 0 0 20px rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: selectedCategory === category 
                    ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)'
                    : 'transparent',
                  opacity: 0.5,
                  pointerEvents: 'none'
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}