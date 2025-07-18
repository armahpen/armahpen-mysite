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
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            onClick={handleClick}
            className="px-6 py-2 bg-white/70 backdrop-blur-sm text-gray-600 rounded-full hover:bg-white/85 transition-all duration-300 shadow-md text-sm"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Next Poem
          </button>
          <button
            onClick={toggleAnimation}
            className="px-6 py-2 bg-white/70 backdrop-blur-sm text-gray-600 rounded-full hover:bg-white/85 transition-all duration-300 shadow-md text-sm"
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
      `}</style>
    </div>
  );
}