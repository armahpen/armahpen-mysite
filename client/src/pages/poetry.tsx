import { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface Poem {
  id: number;
  title: string;
  content: string[];
  category: string;
  excerpt: string;
}

const poems: Poem[] = [
  {
    id: 1,
    title: "Being You",
    excerpt: "Being you is different, No one is perfect, Simply you, no effects...",
    category: "Self-Reflection",
    content: [
      "Being you is different",
      "No one is perfect",
      "Simply you, no effects",
      "Show dem you reflect",
      "Show dem respect but be no pet"
    ]
  },
  {
    id: 2,
    title: "The Coder's Journey",
    excerpt: "Coding can be quite demanding, Errors here and there are commanding...",
    category: "Technology",
    content: [
      "Coding can be quite demanding",
      "Errors here and there are commanding",
      "But once you debug and get it right",
      "The feeling is truly out of sight",
      "For coders, it's a constant delight"
    ]
  },
  {
    id: 3,
    title: "In the Air",
    excerpt: "In the air, a pulsating vibe, we ride, Harmonic waves, side by side...",
    category: "Music & Connection",
    content: [
      "In the air, a pulsating vibe, we ride,",
      "Harmonic waves, side by side.",
      "Through the rhythm, souls collide,",
      "A dance of energy, amplified.",
      "In this space, our hearts reside,",
      "United by the beat, we're sanctified"
    ]
  },
  {
    id: 4,
    title: "I Live Again",
    excerpt: "I live, I die, I live again, His loss became my gain...",
    category: "Spiritual",
    content: [
      "I live",
      "I die",
      "I live again",
      "His loss became my gain",
      "On the cross He endured my pain",
      "",
      "I live",
      "I die", 
      "I live again",
      "'Cause death He overcame"
    ]
  },
  {
    id: 5,
    title: "The Bond",
    excerpt: "Together we laugh, sometimes we stumble, A group of friends, a perfect jumble...",
    category: "Friendship",
    content: [
      "Together we laugh, sometimes we stumble,",
      "A group of friends, a perfect jumble.",
      "In silly moments, our words may fumble,",
      "But in our hearts, love's never humble.",
      "Through thick and thin, we stand as one,",
      "A friendship forged, never undone."
    ]
  },
  {
    id: 6,
    title: "Spoken Drive",
    excerpt: "dreams chase dare propel step, spirits swell together break chains quell...",
    category: "Motivation",
    content: [
      "dreams chase dare propel step",
      "spirits swell together break chains quell",
      "rising above heroes dwell",
      "empowerment fire excels",
      "motivation inspire courage strength",
      "unity freedom soar uplift",
      "triumph passion determination success",
      "elevate breakthrough liberate",
      "thrive ascend conquer ignite flourish"
    ]
  },
  {
    id: 7,
    title: "Greeting Energy",
    excerpt: "hey greeting notice standing smile, energy beyond compare awesome pair...",
    category: "Word Storm",
    content: [
      "hey greeting notice standing smile",
      "energy beyond compare awesome pair",
      "vibrant flood positive energy",
      "personality traits cascade",
      "joy presence human warmth",
      "expressive word collage flows",
      "energy ideal performance",
      "visual design creation"
    ]
  },
  {
    id: 8,
    title: "Muse Adore",
    excerpt: "realms boundless imagination roam, colors dance words find home...",
    category: "Creativity",
    content: [
      "realms boundless imagination roam",
      "colors dance words find home",
      "canvas page symphony embrace",
      "creativity fire eternal grace",
      "whispered dreams bold inventions",
      "weave thoughts daring intentions",
      "unleash ideas unchained free",
      "essence story unfolds melody",
      "composed masterpiece untold soar",
      "muse adore"
    ]
  },
  {
    id: 9,
    title: "Art is Everything",
    excerpt: "art gallery museum painting artwork, canvas exhibition creativity imagination...",
    category: "Visual Art",
    content: [
      "art gallery museum painting artwork",
      "canvas exhibition creativity imagination",
      "inspiration masterpiece brushstroke color hue",
      "aesthetic passion artistic life",
      "visual soul language",
      "creativity expansive piece",
      "explores aesthetics passion",
      "artistic vocabulary stream"
    ]
  },
  {
    id: 10,
    title: "Zion's Call", 
    excerpt: "blood save redemption embrace love, outwit race Caesar Jesus free...",
    category: "Spiritual",
    content: [
      "blood save redemption embrace love",
      "outwit race Caesar Jesus free",
      "betray Judas conquer lion light",
      "Zion poetry spoken word faith",
      "grace salvation hope mercy forgiveness",
      "strength victory illumination inspiration spiritual"
    ]
  }
];

export default function Poetry() {
  const [selectedPoem, setSelectedPoem] = useState<Poem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading animation like itssharl.ee
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (selectedPoem) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#fafafa',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
      }}>
        {/* Header */}
        <header style={{
          padding: '2rem',
          borderBottom: '1px solid #e5e5e5',
          background: 'white'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <button
              onClick={() => setSelectedPoem(null)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.9rem',
                color: '#666',
                cursor: 'pointer',
                fontFamily: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to poetry
            </button>
            <Link href="/" style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#000',
              textDecoration: 'none'
            }}>
              HeaVans
            </Link>
          </div>
        </header>

        {/* Poem Content */}
        <main style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '300',
              margin: '0 0 0.5rem 0',
              color: '#000'
            }}>
              {selectedPoem.title}
            </h1>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              margin: 0
            }}>
              {selectedPoem.category}
            </p>
          </div>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#333',
            fontFamily: 'Georgia, serif'
          }}>
            {selectedPoem.content.map((line, index) => (
              <div key={index} style={{ 
                marginBottom: line === '' ? '1.5rem' : '0.3rem' 
              }}>
                {line}
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fafafa',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      {/* Loading Animation */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#fafafa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            fontSize: '1rem',
            color: '#666',
            animation: 'fade 2s ease-in-out'
          }}>
            Materializing verses...
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{
        padding: '2rem',
        background: 'white',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link href="/" style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#000',
            textDecoration: 'none'
          }}>
            HeaVans
          </Link>
          
          <nav style={{
            display: 'flex',
            gap: '2rem'
          }}>
            <Link href="/portfolio" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>Portfolio</Link>
            <Link href="/about" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>About</Link>
            <Link href="/contact" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem'
            }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        {/* Footer Credit */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          fontSize: '0.85rem',
          color: '#999'
        }}>
          Designed and coded by HeaVans © 2025
        </div>

        {/* Poetry Section Header */}
        <div style={{
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '300',
            margin: '0 0 1rem 0',
            color: '#000'
          }}>
            Poetry
          </h1>
          <div style={{
            fontSize: '1.25rem',
            color: '#666',
            marginBottom: '2rem'
          }}>
            ##### {poems.length}
          </div>
          <hr style={{
            border: 'none',
            height: '1px',
            background: '#e5e5e5',
            margin: '2rem 0'
          }} />
        </div>

        {/* Poems List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0'
        }}>
          {poems.map((poem) => (
            <div
              key={poem.id}
              onClick={() => setSelectedPoem(poem)}
              style={{
                padding: '1.5rem 0',
                borderBottom: '1px solid #f0f0f0',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f8f8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{
                fontSize: '1rem',
                color: '#000',
                fontWeight: '600',
                flexShrink: 0
              }}>
                →
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#000',
                  marginBottom: '0.25rem'
                }}>
                  {poem.title}
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  marginBottom: '0.5rem'
                }}>
                  {poem.category}
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#999',
                  lineHeight: '1.4'
                }}>
                  {poem.excerpt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fade {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `
      }} />
    </div>
  );
}