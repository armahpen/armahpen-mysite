import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
  }
}

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
  },
  {
    id: 11,
    title: "SPARTA'S UTTER",
    lines: [
      "Disrupt, trash the mundane",
      "Some may say u're insane",
      "Make it known and plain",
      "Give away no more years",
      "Wipe your tears and starve your fears",
      "You've got nothing to loose",
      "You live only once",
      "Dont loose that chance",
      "If life plays a different tune",
      "still choose to dance",
      "Stand on your own two feet",
      "You have a feat to achieve",
      "Live as if it's your last day's eve",
      "Take your best shot",
      "Give it all you've got",
      "Even when you flop",
      "Do not stop!",
      "Dare not stop!",
      "Follow through to your goal",
      "with all the might in your soul."
    ],
    date: "18 July 2025"
  },
  {
    id: 12,
    title: "Rope-a-dope",
    lines: [
      "Back and forth",
      "Lean on hope",
      "The battle ought to be fought",
      "The ball has always been in our court",
      "Nothing can bore our core",
      "We're tougher than titanium",
      "Let's make our thoughts premium",
      "Facing each day as it unfolds",
      "The power in man's soul just can't be told",
      "Never look down",
      "Give not a frown",
      "When some take you for a clown",
      "Yes of course life may be coarse",
      "Let's have a purpose",
      "It won't make us pause",
      "May it be felt in our pulse",
      "From our Center, let's leave open the Gate of Greatness to emanate",
      "In your Very Own Thoughts is our own fate",
      "Thoughts we harbor are like writings on destiny's slate",
      "Let's meditate, and develop a healthy mental state"
    ],
    date: "8 November 2015"
  },
  {
    id: 13,
    title: "I'm not wrong. I'll stay strong even when I'm wrong",
    lines: [
      "I'll consider your advice while you speak",
      "Truth shouldn't make one weak",
      "Truth is part of love",
      "Love doesn't bring the recipient down",
      "Love builds the receiver up",
      "Allow nobody to bring you down on the pretext of truth",
      "Such a fellow makes you think it is for your own good",
      "His 'good' for you is bad",
      "Correction outside of love is not right",
      "The intended 'good' then turns the victim worst",
      "However, some do this out of ignorance",
      "Ignorantly or intentionally, it is up to you to stay strong,",
      "filter the advice and return love to the fellow"
    ],
    date: "18 July 2025"
  },
  {
    id: 14,
    title: "We never really die. We are spirits wearing a physical body",
    lines: [
      "The true you is the you in the body",
      "Let's live strongly and beautifully in the body while we are wearing it",
      "Outward cleanliness is necessary",
      "Cleanliness of our true selves is essential",
      "Cleanse yourself even as you clean your physical body",
      "Feed yourself with the finest thought and inspiration",
      "Even as you feed your stomach",
      "We never really die, there is nothing to fear",
      "We just transcend to our real realm...soo sure and surreal",
      "Isn't it wise we live fully and intensely in every passing moment",
      "while we live in this physical plane?",
      "Vow to live profoundly amidst all turns and twists",
      "",
      "The best part is that we have more than enough power within",
      "to be who we want to be.",
      "Man is never a weakling even in a lowly state...",
      "This is our real state; mini versions of God himself."
    ],
    date: "2 May 2018"
  }
];

export default function Poetry() {
  const [currentPoemIndex, setCurrentPoemIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);

  // Load Three.js and initialize 3D scene
  useEffect(() => {
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const init3D = async () => {
      try {
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        }

        const THREE = window.THREE;
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
          canvas: canvasRef.current, 
          alpha: true,
          antialias: true 
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        
        sceneRef.current = { scene, camera, renderer, clouds: [], specialObjects: [] };

        // Create 3D clouds
        const createCloud = (x: number, y: number, z: number) => {
          const cloudGroup = new THREE.Group();
          
          for (let i = 0; i < 8; i++) {
            const geometry = new THREE.SphereGeometry(0.3 + Math.random() * 0.2, 8, 6);
            const material = new THREE.MeshBasicMaterial({ 
              color: 0xffffff, 
              transparent: true, 
              opacity: 0.3 + Math.random() * 0.2 
            });
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 1,
              (Math.random() - 0.5) * 1
            );
            cloudGroup.add(sphere);
          }
          
          cloudGroup.position.set(x, y, z);
          return cloudGroup;
        };

        // Add multiple clouds
        for (let i = 0; i < 6; i++) {
          const cloud = createCloud(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10,
            -5 - Math.random() * 10
          );
          scene.add(cloud);
          sceneRef.current.clouds.push(cloud);
        }

        camera.position.z = 5;

        const animate = () => {
          requestAnimationFrame(animate);
          
          // Animate clouds
          sceneRef.current.clouds.forEach((cloud: any, index: number) => {
            cloud.rotation.y += 0.002;
            cloud.position.x += Math.sin(Date.now() * 0.0005 + index) * 0.001;
            cloud.position.y += Math.cos(Date.now() * 0.0003 + index) * 0.001;
          });

          // Animate special objects for Blood Saved poem
          if (currentPoemIndex === 8) { // Blood Saved poem
            sceneRef.current.specialObjects.forEach((obj: any) => {
              if (obj.userData.type === 'blood') {
                obj.position.y += Math.sin(Date.now() * 0.003) * 0.002;
              }
            });
          }
          
          renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };

      } catch (error) {
        console.error('Error loading 3D libraries:', error);
      }
    };

    init3D();
  }, []);

  // Update 3D scene based on current poem
  useEffect(() => {
    if (!sceneRef.current) return;

    const { scene, specialObjects } = sceneRef.current;

    // Clear previous special objects
    specialObjects.forEach((obj: any) => {
      scene.remove(obj);
    });
    specialObjects.length = 0;

    // Add special objects for Blood Saved poem
    if (currentPoemIndex === 8 && window.THREE) { // Blood Saved poem
      const THREE = window.THREE;

      // Create 3D Blood Drop
      const bloodGeometry = new THREE.SphereGeometry(0.15, 8, 6);
      bloodGeometry.scale(1, 1.5, 1); // Make it droplet shaped
      const bloodMaterial = new THREE.MeshBasicMaterial({ color: 0x8B0000, transparent: true, opacity: 0.7 });
      const bloodDrop = new THREE.Mesh(bloodGeometry, bloodMaterial);
      bloodDrop.position.set(3, 3, -2);
      bloodDrop.userData.type = 'blood';
      scene.add(bloodDrop);
      specialObjects.push(bloodDrop);

      sceneRef.current.specialObjects = specialObjects;
    }
  }, [currentPoemIndex]);

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

  const handleNextPoem = () => {
    const nextPoemIndex = (currentPoemIndex + 1) % poems.length;
    setCurrentPoemIndex(nextPoemIndex);
    setCurrentLineIndex(0);
    setDisplayedLines([]);
  };

  const handlePrevPoem = () => {
    const prevPoemIndex = (currentPoemIndex - 1 + poems.length) % poems.length;
    setCurrentPoemIndex(prevPoemIndex);
    setCurrentLineIndex(0);
    setDisplayedLines([]);
  };

  const selectPoem = (index: number) => {
    setCurrentPoemIndex(index);
    setCurrentLineIndex(0);
    setDisplayedLines([]);
  };

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const currentPoem = poems[currentPoemIndex];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(to bottom, #e0f2fe 0%, #bbf7d0 100%)'
    }}>
      {/* 3D Canvas for clouds and special effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30" style={{ zIndex: 2 }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 relative" style={{ zIndex: 3 }}>
        {/* Current poem display */}
        <div className="w-full max-w-4xl text-center">
          <div className="mb-16">
            <h1 
              className="text-5xl md:text-7xl mb-6 text-gray-700"
              style={{ 
                fontFamily: 'Dancing Script, cursive',
                fontWeight: 600
              }}
            >
              {currentPoem.title}
            </h1>
          </div>

          <div className="space-y-6 min-h-[300px] flex flex-col justify-center">
            {displayedLines.map((line, index) => (
              <div
                key={index}
                className={`text-lg md:text-xl text-gray-600 text-center transition-all duration-1000 transform ${
                  line === "" ? "h-6" : ""
                }`}
                style={{
                  fontFamily: 'Dancing Script, cursive',
                  fontWeight: 400,
                  opacity: 1,
                  transform: "translateY(0)",
                  animation: `fadeInUp 1s ease-out ${index * 0.2}s both`
                }}
              >
                {line}
              </div>
            ))}
          </div>

          {/* Date and category */}
          <div className="mt-12 text-center">
            <p 
              className="text-sm text-gray-500"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
              {currentPoem.date}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          <button
            onClick={handlePrevPoem}
            className="px-5 py-2 bg-white/70 backdrop-blur-sm text-gray-600 rounded-full hover:bg-white/85 transition-all duration-300 shadow-md text-sm"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Previous
          </button>
          <button
            onClick={handleNextPoem}
            className="px-5 py-2 bg-white/70 backdrop-blur-sm text-gray-600 rounded-full hover:bg-white/85 transition-all duration-300 shadow-md text-sm"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Next
          </button>
          <button
            onClick={toggleAnimation}
            className="px-5 py-2 bg-white/70 backdrop-blur-sm text-gray-600 rounded-full hover:bg-white/85 transition-all duration-300 shadow-md text-sm"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            {isAnimating ? "Pause" : "Play"}
          </button>
        </div>

        {/* Poem counter */}
        <div 
          className="fixed bottom-8 right-8 text-gray-500 text-sm"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          {currentPoemIndex + 1} / {poems.length}
        </div>

        {/* Poem List */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-3">
          {poems.map((poem, index) => (
            <div
              key={poem.id}
              className="relative cursor-pointer group"
              onClick={() => selectPoem(index)}
            >
              {/* Circular selection indicator */}
              <div
                className={`absolute -left-6 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPoemIndex
                    ? 'bg-blue-400 scale-125 shadow-lg shadow-blue-400/50'
                    : 'bg-white/30 group-hover:bg-white/50 group-hover:scale-110'
                }`}
                style={{
                  boxShadow: index === currentPoemIndex ? '0 0 20px rgba(59, 130, 246, 0.6)' : 'none'
                }}
              />
              
              {/* Poem title */}
              <div
                className={`text-sm transition-all duration-300 ${
                  index === currentPoemIndex
                    ? 'text-blue-600 font-semibold transform scale-105'
                    : 'text-gray-500 group-hover:text-gray-700'
                }`}
                style={{ 
                  fontFamily: 'Dancing Script, cursive',
                  textShadow: index === currentPoemIndex ? '0 0 10px rgba(59, 130, 246, 0.3)' : 'none'
                }}
              >
                {poem.title}
              </div>
            </div>
          ))}
        </div>

        {/* Creativity tag */}
        <div 
          className="fixed bottom-8 left-8 text-gray-400 text-xs"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          creativity
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap');
        
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
        
        .poem-list-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .poem-list-item:hover {
          transform: translateX(5px);
        }
        
        .selection-circle {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 100%);
        }
        
        .selection-circle.active {
          transform: scale(1.3);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1.3);
            opacity: 1;
          }
          50% { 
            transform: scale(1.5);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}