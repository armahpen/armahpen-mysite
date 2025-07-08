import { Link } from 'wouter';
import { useState, useEffect } from 'react';

export default function Poetry() {
  const [currentPoem, setCurrentPoem] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const poems = [
    {
      id: 1,
      title: "Being You",
      content: `Being you is different
No one is perfect
Simply you, no effects
Show dem you reflect
Show dem respect but be no pet`,
      description: "A bold affirmation of self-worth and confidence. This piece reminds us that authenticity outshines perfection—and respect begins with self.",
      theme: "nature"
    },
    {
      id: 2,
      title: "The Coder's Journey", 
      content: `Coding can be quite demanding
Errors here and there are commanding
But once you debug and get it right
The feeling is truly out of sight
For coders, it's a constant delight`,
      description: "A light-hearted tribute to developers and the joy of solving problems. It celebrates the thrill of coding through the chaos of errors and the bliss of breakthroughs.",
      theme: "space"
    },
    {
      id: 3,
      title: "In the Air",
      content: `In the air, a pulsating vibe, we ride,
Harmonic waves, side by side.
Through the rhythm, souls collide,
A dance of energy, amplified.
In this space, our hearts reside,
United by the beat, we're sanctified`,
      description: "A rhythmic celebration of connection through music and movement. It captures the soul of shared energy and the sanctity of rhythm that binds us.",
      theme: "nature"
    },
    {
      id: 4,
      title: "I Live Again",
      content: `I live
I die
I live again
His loss became my gain
On the cross He endured my pain

I live
I die
I live again
'Cause death He overcame`,
      description: "A spiritual reflection on resurrection, sacrifice, and grace. Inspired by the cross, it speaks of redemption, new life, and divine love.",
      theme: "space"
    },
    {
      id: 5,
      title: "The Bond",
      content: `Together we laugh, sometimes we stumble,
A group of friends, a perfect jumble.
In silly moments, our words may fumble,
But in our hearts, love's never humble.
Through thick and thin, we stand as one,
A friendship forged, never undone.`,
      description: "A heartfelt ode to friendship and unbreakable connection. Dedicated to those who stand with us through laughter, stumbles, and growth.",
      theme: "nature"
    },
    {
      id: 6,
      title: "Spoken Drive",
      content: `dreams chase dare propel step
spirits swell together break chains quell
rising above heroes dwell
empowerment fire excels
motivation inspire courage strength
unity freedom soar uplift
triumph passion determination success
elevate breakthrough liberate
thrive ascend conquer ignite flourish`,
      description: "A motivational storm of words filled with empowerment and triumph. Each phrase fuels courage, unity, and determination to break limits and rise.",
      theme: "space"
    },
    {
      id: 7,
      title: "Muse Adore",
      content: `realms boundless imagination roam
colors dance words find home
canvas page symphony embrace
creativity fire eternal grace
whispered dreams bold inventions
weave thoughts daring intentions
unleash ideas unchained free
essence story unfolds melody
composed masterpiece untold soar
muse adore`,
      description: "A soft, flowing tribute to creativity and imagination. It honors the journey of making, dreaming, and unleashing one's artistic essence.",
      theme: "nature"
    },
    {
      id: 8,
      title: "Zion's Call",
      content: `blood save redemption embrace love
outwit race Caesar Jesus free
betray Judas conquer lion light
Zion poetry spoken word faith
grace salvation hope mercy forgiveness
strength victory illumination inspiration spiritual`,
      description: "A spiritually charged spoken-word burst of faith and redemption. It blends scriptural themes with poetic urgency—calling hearts to grace and light.",
      theme: "space"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoem((prev) => (prev + 1) % poems.length);
    }, 15000); // Auto-advance every 15 seconds

    return () => clearInterval(interval);
  }, [poems.length]);

  const currentPoemData = poems[currentPoem];
  const isNatureTheme = currentPoemData.theme === "nature";

  return (
    <div style={{
      minHeight: '100vh',
      background: isNatureTheme 
        ? 'linear-gradient(135deg, #0f766e 0%, #065f46 30%, #1e40af 70%, #312e81 100%)'
        : 'linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #1e40af 70%, #0f172a 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      
      {/* Animated Background Effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: isNatureTheme ? '4px' : '2px',
              height: isNatureTheme ? '4px' : '2px',
              background: isNatureTheme 
                ? `radial-gradient(circle, #10b981, #065f46)`
                : `radial-gradient(circle, #fbbf24, #f59e0b)`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-${i % 3} ${3 + (i % 3)}s ease-in-out infinite`,
              opacity: 0.6 + (i % 4) * 0.1
            }}
          />
        ))}
        
        {/* Mouse-following gradient */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: isNatureTheme
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: 'all 0.3s ease',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Navigation */}
      <nav style={{
        position: 'relative',
        zIndex: 10,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontSize: '24px',
          fontWeight: '600',
          color: 'white',
          textDecoration: 'none',
          letterSpacing: '0.5px'
        }}>
          HeaVans
        </Link>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link href="/portfolio" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            fontSize: '16px'
          }}>
            Portfolio
          </Link>
          <Link href="/about" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            fontSize: '16px'
          }}>
            About
          </Link>
          <Link href="/contact" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            fontSize: '16px'
          }}>
            Contact
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        padding: '80px 48px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        
        {/* Page Title */}
        <div style={{
          marginBottom: '80px',
          position: 'relative'
        }}>
          <h1 style={{
            fontSize: '72px',
            fontWeight: '300',
            marginBottom: '24px',
            letterSpacing: '2px',
            background: isNatureTheme
              ? 'linear-gradient(135deg, #10b981, #34d399, #6ee7b7)'
              : 'linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: isNatureTheme 
              ? '0 0 30px rgba(16, 185, 129, 0.3)'
              : '0 0 30px rgba(139, 92, 246, 0.3)'
          }}>
            Heavans Haven
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.7)',
            letterSpacing: '1px',
            fontWeight: '300'
          }}>
            Where Words Meet Wonder
          </p>
        </div>

        {/* Poem Display */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '64px',
          marginBottom: '48px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Poem Content */}
          <div style={{
            position: 'relative',
            zIndex: 2
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '500',
              marginBottom: '32px',
              color: isNatureTheme ? '#34d399' : '#a78bfa',
              letterSpacing: '1px'
            }}>
              {currentPoemData.title}
            </h2>
            
            <div style={{
              fontSize: '24px',
              lineHeight: '1.8',
              marginBottom: '40px',
              whiteSpace: 'pre-line',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              {currentPoemData.content}
            </div>
            
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.6',
              fontStyle: 'normal',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              {currentPoemData.description}
            </p>
          </div>

          {/* Background decoration */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '400px',
            height: '400px',
            background: isNatureTheme
              ? 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />
        </div>

        {/* Poem Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '48px'
        }}>
          <button
            onClick={() => setCurrentPoem(currentPoem > 0 ? currentPoem - 1 : poems.length - 1)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            Previous
          </button>
          
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            {poems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPoem(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: index === currentPoem 
                    ? (isNatureTheme ? '#10b981' : '#8b5cf6')
                    : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPoem((currentPoem + 1) % poems.length)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
          >
            Next
          </button>
        </div>

        {/* Poem Counter */}
        <p style={{
          fontSize: '14px',
          color: 'rgba(255, 255, 255, 0.5)',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          {currentPoem + 1} of {poems.length}
        </p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(90deg); }
        }
        
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
        
        nav a:hover {
          color: white !important;
        }
      `}</style>
    </div>
  );
}