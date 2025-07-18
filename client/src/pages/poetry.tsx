import { useState, useEffect } from "react";

const poems = [
  {
    id: 1,
    title: "Being You",
    lines: [
      "Being you is different",
      "No one is perfect", 
      "Simply you No effects",
      "Show dem you reflect",
      "Show dem respect but be no pet"
    ],
    date: "20 March 2023"
  },
  {
    id: 2,
    title: "I Live Again", 
    lines: [
      "I live",
      "I die",
      "I live again",
      "His lost became my gain",
      "On the cross He endured my pain",
      "",
      "I live",
      "I die",
      "I live again", 
      "Cos death He over came"
    ],
    date: "20 March 2023"
  },
  {
    id: 3,
    title: "Canvas Whispers",
    lines: [
      "In strokes and hues, the passions start,",
      "A canvas whispers from the heart,",
      "A symphony of colors, transformed through masterful art."
    ],
    date: "4 June 2023"
  },
  {
    id: 4,
    title: "Hey There",
    lines: [
      "Hey there, I couldn't help but notice you standing there.",
      "Hey there, your smile and energy are beyond compare.",
      "Hey there, I think we could make an awesome pair.",
      "Hey there, I'd love to get to know you and your flair.",
      "Hey there, maybe we could grab a drink or a bite to share.",
      "Hey there, let's start a friendship that's rare and so sincere."
    ],
    date: "20 March 2023"
  },
  {
    id: 5,
    title: "Perfect Jumble",
    lines: [
      "Together we laugh, sometimes we stumble,",
      "A group of friends, a perfect jumble.",
      "In silly moments, our words may fumble,", 
      "But in our hearts, love's never humble.",
      "Through thick and thin, we stand as one,",
      "A friendship forged, never undone."
    ],
    date: "20 March 2023"
  },
  {
    id: 6,
    title: "Empowerment's Fire",
    lines: [
      "With dreams to chase, we dare to propel,",
      "In every step, our spirits swell.",
      "Together, we break the chains that quell,",
      "Rising above, where heroes dwell.",
      "Empowerment's fire, in us, excels."
    ],
    date: "20 March 2023"
  },
  {
    id: 7,
    title: "In the Air",
    lines: [
      "In the air, a pulsing vibe, we ride,",
      "Harmonic waves, side by side.",
      "Through the rhythm, souls collide,",
      "A dance of energy, amplified.",
      "In this space, our hearts reside,",
      "United by the beat, we're sanctified"
    ],
    date: "7 April 2023"
  },
  {
    id: 8,
    title: "Boundless Imagination",
    lines: [
      "In realms of boundless imagination, I roam,",
      "Where colors dance and words find their home.",
      "A canvas, a page, a symphony's embrace,",
      "Creativity's fire, an eternal grace.",
      "From whispered dreams to bold inventions,",
      "I weave my thoughts with daring intentions.",
      "Unleashing ideas, unchained and free,",
      "Creativity, the essence of me.",
      "With every stroke, a story unfolds,",
      "A melody composed, a masterpiece untold.",
      "In realms of boundless imagination, I soar,",
      "Creativity's muse, forever I adore."
    ],
    date: "20 March 2023"
  },
  {
    id: 9,
    title: "Blood Saved",
    lines: [
      "Blood Saved",
      "Blood Saved even when we run from your embrace",
      "Your love outwit us in the race",
      "Give to Caesar what is Caesar's",
      "But thank God for Jesus",
      "Cos his love freed us",
      "Even when we betrayed like Judas.",
      "Judah's conquering Lion",
      "The only light brightening Zoin",
      "He heals, He's Gilead's balm, He save see the nails in his palm,",
      "If he is in the boat the storm will be calm,",
      "As you are Christ bids you to come",
      "O you should see in Heaven",
      "Angels clapping, they wings flapping,",
      "singing Hallelujah Amen"
    ],
    date: "20 March 2023"
  },
  {
    id: 10,
    title: "The Coder's Journey",
    lines: [
      "Coding can be quite demanding",
      "Errors here and there are commanding",
      "But once you debug and get it right",
      "The feeling is truly out of sight",
      "For coders, it's a constant delight"
    ],
    date: "20 March 2023"
  }
];

export default function Poetry() {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const currentPoem = poems[currentPoemIndex];
    const currentLine = currentPoem.lines[currentLineIndex];

    if (currentLineIndex < currentPoem.lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentLine]);
        setCurrentLineIndex(prev => prev + 1);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      // Poem finished, wait a bit then move to next poem
      const timer = setTimeout(() => {
        const nextPoemIndex = (currentPoemIndex + 1) % poems.length;
        setCurrentPoemIndex(nextPoemIndex);
        setCurrentLineIndex(0);
        setDisplayedLines([]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [currentPoemIndex, currentLineIndex, isAnimating]);

  const handleClick = () => {
    const nextPoemIndex = (currentPoemIndex + 1) % poems.length;
    setCurrentPoemIndex(nextPoemIndex);
    setCurrentLineIndex(0);
    setDisplayedLines([]);
  };

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const currentPoem = poems[currentPoemIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-200/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header floating words */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-blue-400/60 text-4xl md:text-6xl font-light tracking-wider animate-pulse">
          words
        </div>
        <div className="text-blue-500/40 text-2xl md:text-3xl font-light mt-2 animate-bounce">
          dance
        </div>
        <div className="text-blue-300/50 text-xl md:text-2xl font-light mt-1">
          across
        </div>
        <div className="text-blue-600/30 text-lg md:text-xl font-light mt-1">
          the sky
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-light text-slate-700 mb-4">
            Poetry in Motion
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light">
            a collection of verses that flow like clouds
          </p>
        </div>

        {/* Current poem display */}
        <div className="w-full max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-slate-600 mb-2">
              {currentPoem.title}
            </h2>
            <p className="text-sm text-slate-400">{currentPoem.date}</p>
          </div>

          <div className="space-y-4 min-h-[400px] flex flex-col justify-center">
            {displayedLines.map((line, index) => (
              <div
                key={index}
                className={`text-xl md:text-2xl font-light text-slate-600 text-center transition-all duration-1000 transform ${
                  line === "" ? "h-6" : ""
                }`}
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={handleClick}
            className="px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-600 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            Next Poem
          </button>
          <button
            onClick={toggleAnimation}
            className="px-6 py-3 bg-white/80 backdrop-blur-sm text-slate-600 rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
          >
            {isAnimating ? "Pause" : "Play"}
          </button>
        </div>

        {/* Poem counter */}
        <div className="fixed top-8 right-8 text-slate-400 text-sm">
          {currentPoemIndex + 1} / {poems.length}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}