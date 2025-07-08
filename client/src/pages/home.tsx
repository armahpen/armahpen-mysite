import { Link } from 'wouter';
import { useEffect, useState } from 'react';
import grainTexture from '@assets/grain_1751928350011.webp';
import blurTexture from '@assets/blur_1751928350012.webp';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const animateTime = () => {
      setTime(prev => prev + 0.01);
      requestAnimationFrame(animateTime);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateTime();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="relative w-full min-h-screen overflow-hidden" 
      style={{width: '100vw', minHeight: '100vh'}}
    >
      {/* Animated Background Canvas */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)',
          mixBlendMode: 'normal'
        }}
      >
        {/* Grain Layer */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${grainTexture})`,
            backgroundSize: '512px 512px',
            backgroundRepeat: 'repeat',
            animation: 'grainMove 20s linear infinite',
            mixBlendMode: 'overlay'
          }}
        />
        
        {/* Blur Gradient Layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${blurTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translate(${mousePos.x * 20 - 10}px, ${mousePos.y * 20 - 10}px) scale(1.1)`,
            transition: 'transform 0.3s ease-out',
            mixBlendMode: 'screen'
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, 
                rgba(255, 255, 255, 0.03) 0%, 
                transparent 50%
              ),
              linear-gradient(
                ${time * 10}deg, 
                rgba(255, 255, 255, 0.01) 0%, 
                rgba(255, 255, 255, 0.02) 50%, 
                rgba(255, 255, 255, 0.01) 100%
              )
            `,
            animation: 'backgroundShift 30s ease-in-out infinite'
          }}
        />
        
        {/* Noise Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.005) 2px,
                rgba(255, 255, 255, 0.005) 4px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255, 255, 255, 0.005) 2px,
                rgba(255, 255, 255, 0.005) 4px
              )
            `
          }}
        />
      </div>

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

          {/* Navigation Menu - Mobile Responsive */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textDecoration: 'none',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '0.85rem',
              fontWeight: '500',
              letterSpacing: '0.5px',
              cursor: 'pointer'
            }}>Home</Link>
            <Link href="/about" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '0.85rem',
              fontWeight: '400',
              letterSpacing: '0.5px',
              cursor: 'pointer'
            }}>About</Link>
            <Link href="/experience" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '0.85rem',
              fontWeight: '400',
              letterSpacing: '0.5px',
              cursor: 'pointer'
            }}>Experience</Link>
            <Link href="/contact" className="nav-link" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
              fontSize: '0.85rem',
              fontWeight: '400',
              letterSpacing: '0.5px',
              cursor: 'pointer'
            }}>Contact</Link>
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

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen" style={{
        padding: '2rem 1rem'
      }}>
        
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto" style={{
          marginTop: '2rem'
        }}>
          <h1 style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 0.95)',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-0.02em',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)'
          }}>Evans</h1>
          
          <p style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: 'clamp(18px, 3vw, 24px)',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '1.6',
            marginBottom: '48px',
            letterSpacing: '0.5px'
          }}>
            Designer & Developer
          </p>
          
          <div style={{
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '1rem',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto 64px auto',
            letterSpacing: '0.3px'
          }}>
            I'm Evans but you can call me Heavans, I'm a versatile Web Developer, web designer & Data Analyst with a strong foundation in UI/UX, research, and data-driven development. I build responsive, user-focused platforms that solve real problems and support meaningful impact.
          </div>
          
          {/* CTA Button */}
          <Link href="/portfolio" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            color: 'rgba(255, 255, 255, 0.9)',
            textDecoration: 'none',
            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
            fontSize: '14px',
            fontWeight: '500',
            letterSpacing: '0.5px',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }} 
          className="cta-button"
          >
            View My Work
          </Link>
        </div>
        
      </div>
      
      {/* Floating Elements */}
      <div className="hidden md:block absolute top-1/2 left-10 transform -translate-y-1/2 z-10">
        <div style={{
          width: '2px',
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), transparent)',
          animation: 'floatingParticles 6s ease-in-out infinite'
        }} />
      </div>
      
      <div className="hidden md:block absolute top-1/3 right-16 z-10">
        <div style={{
          width: '4px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '50%',
          animation: 'floatingParticles 8s ease-in-out infinite 2s'
        }} />
      </div>
    </div>
  );
}