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
      "Being you is different,",
      "No one is perfect",
      "Simply you, no effects",
      "Show dem you reflect",
      "",
      "Shun the crowd,",
      "Don't dim your light to shine theirs",
      "Be loud,",
      "Express yourself with no affairs",
      "",
      "Being you is the best gift you can give yourself",
      "Don't change for anybody else",
      "Because you are perfect just the way you are",
      "And that's your superstar"
    ]
  },
  {
    id: 2,
    title: "The Coder's Journey",
    excerpt: "Lines of code dance across the screen, Each function a story...",
    category: "Technology",
    content: [
      "Lines of code dance across the screen,",
      "Each function a story, each variable a dream",
      "In the silence of midnight debugging,",
      "We build tomorrow's digital scene",
      "",
      "Syntax errors teach us patience,",
      "Stack overflow guides our way",
      "From hello world to complex systems,",
      "We code through night and day",
      "",
      "In every bug lies a lesson,",
      "In every feature, growth",
      "We are the architects of the future,",
      "Bound by our creative oath"
    ]
  },
  {
    id: 3,
    title: "In the Air",
    excerpt: "There's something in the air tonight, A whisper of change...",
    category: "Inspiration",
    content: [
      "There's something in the air tonight,",
      "A whisper of change, a hint of light",
      "The universe conspires in mysterious ways,",
      "To bring magic to our ordinary days",
      "",
      "Feel the energy shifting around,",
      "Listen to that distant sound",
      "Of dreams taking flight,",
      "Of everything turning out right",
      "",
      "Trust the process, embrace the unknown,",
      "For in the air, new seeds are sown",
      "And what we cannot yet see,",
      "Will soon set our spirits free"
    ]
  },
  {
    id: 4,
    title: "I Live Again",
    excerpt: "From ashes of yesterday's doubt, I rise with renewed spirit...",
    category: "Resilience",
    content: [
      "From ashes of yesterday's doubt,",
      "I rise with renewed spirit",
      "The phoenix in my soul,",
      "Has learned to never limit",
      "",
      "Each sunrise brings new hope,",
      "Each breath, a chance to grow",
      "I've walked through valleys dark,",
      "But now my light can show",
      "",
      "I live again with purpose,",
      "I love again with truth",
      "The journey that once broke me,",
      "Has given me my proof",
      "",
      "That we are more resilient,",
      "Than we dare to believe",
      "And in our greatest falling,",
      "We learn how to achieve"
    ]
  },
  {
    id: 5,
    title: "The Bond",
    excerpt: "In silence, we understand, What words could never say...",
    category: "Connection",
    content: [
      "In silence, we understand,",
      "What words could never say",
      "A connection transcending language,",
      "Growing stronger every day",
      "",
      "Through laughter and through tears,",
      "We've weathered every storm",
      "The bond between two souls,",
      "Keeps our hearts forever warm",
      "",
      "Distance cannot break us,",
      "Time cannot erase",
      "The memories we've created,",
      "The love that time can't chase"
    ]
  },
  {
    id: 6,
    title: "Spoken Drive",
    excerpt: "Words have power to transform, To lift the fallen spirit high...",
    category: "Communication",
    content: [
      "Words have power to transform,",
      "To lift the fallen spirit high",
      "Each syllable carries intention,",
      "Each phrase can make souls fly",
      "",
      "Speak your truth with courage,",
      "Let your voice be heard",
      "For in your authentic expression,",
      "Lives the power of the word",
      "",
      "Drive forward with conviction,",
      "Let passion fuel your speech",
      "The world needs your unique message,",
      "Your story they must reach"
    ]
  },
  {
    id: 7,
    title: "Muse Adore",
    excerpt: "In quiet moments of reflection, Inspiration finds its way...",
    category: "Creativity",
    content: [
      "In quiet moments of reflection,",
      "Inspiration finds its way",
      "Through cracks in ordinary thinking,",
      "Creativity comes out to play",
      "",
      "The muse whispers softly,",
      "In colors, sounds, and dreams",
      "Transforming simple moments,",
      "Into artistic streams",
      "",
      "Adore the creative process,",
      "Embrace the unknown path",
      "For in the dance of creation,",
      "We discover our true craft"
    ]
  },
  {
    id: 8,
    title: "Zion's Call",
    excerpt: "From distant mountains calling, A voice both strong and clear...",
    category: "Purpose",
    content: [
      "From distant mountains calling,",
      "A voice both strong and clear",
      "Beckoning us to journey,",
      "Beyond our deepest fear",
      "",
      "Zion represents our promised land,",
      "The place we're meant to be",
      "Where purpose meets with passion,",
      "And souls are truly free",
      "",
      "Answer the call with courage,",
      "Step boldly toward your fate",
      "For Zion waits for no one,",
      "But never comes too late"
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
                fontFamily: 'inherit'
              }}
            >
              ← Back to poetry
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