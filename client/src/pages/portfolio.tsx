import { Link } from 'wouter';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('My Rabbai');

  const projects = [
    {
      title: 'My Rabbai',
      description: 'AI-powered platform that reads the Bible in the voice of your favorite man of God, making daily devotion more engaging and spiritually enriching.',
      category: 'My Rabbai',
      image: '/project-ai-bible.jpg',
      technologies: ['React', 'OpenAI', 'Node.js', 'MongoDB']
    },
    {
      title: 'Enterprise CRM Dashboard',
      description: 'Comprehensive customer relationship management platform with advanced analytics and automation.',
      category: 'CRMs',
      image: '/project-crm.jpg',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Express']
    },
    {
      title: 'SaaS Landing Platform',
      description: 'High-converting landing page for B2B software solutions with interactive demonstrations.',
      category: 'Landing Pages',
      image: '/project-landing.jpg',
      technologies: ['Next.js', 'Tailwind', 'Framer Motion', 'Vercel']
    },
    {
      title: 'Mobile Banking Interface',
      description: 'Intuitive mobile banking app design focused on accessibility and user experience.',
      category: 'UI/UX',
      image: '/project-banking.jpg',
      technologies: ['Figma', 'Principle', 'Sketch', 'InVision']
    },
    {
      title: '3D Product Showcase',
      description: 'Interactive 3D product visualization with smooth animations and realistic lighting.',
      category: '3D and Motion Design',
      image: '/project-3d.jpg',
      technologies: ['Three.js', 'Blender', 'WebGL', 'GSAP']
    },
    {
      title: 'Brand Identity System',
      description: 'Complete visual identity design for modern tech startup including logo, typography, and guidelines.',
      category: 'Graphic Design',
      image: '/project-branding.jpg',
      technologies: ['Adobe CC', 'Figma', 'Illustrator', 'InDesign']
    },
    {
      title: 'Digital Poetry Collection',
      description: 'Interactive digital poetry platform with typography animations and ambient soundscapes.',
      category: 'Poetry',
      image: '/project-poetry.jpg',
      technologies: ['React', 'CSS Animations', 'Web Audio API', 'GSAP']
    }
  ];

  const categories = [
    'My Rabbai',
    'CRMs',
    'Landing Pages',
    'UI/UX',
    '3D and Motion Design',
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
          padding: '20px 40px',
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
          
          <div className="hidden md:flex" style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
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

      <div style={{
        display: 'flex',
        minHeight: '100vh',
        paddingTop: '80px'
      }}>
        {/* Left Content Area */}
        <div style={{
          flex: '1',
          padding: '80px 60px',
          maxWidth: '60%'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '60px' }}>
            <h1 style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: '300',
              lineHeight: '1.1',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              {selectedCategory === 'My Rabbai' ? 'My Rabbai' : 'Selected Work'}
            </h1>
            <p style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              fontWeight: '300'
            }}>
              Rabbai is an AI-powered platform I co-created with my brother, inspired by his idea to make scripture more personal and relatable. Motivated by our shared passion for faith and technology, we built Rabbai to read the Bible in the voice of your favorite man of God—making daily devotion more engaging, comforting, and spiritually enriching.
            </p>
          </div>

          {/* Project Grid */}
          <div style={{
            display: 'grid',
            gap: '40px'
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
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.4)'
                      }}>
                        Preview
                      </div>
                    )}
                  </div>
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