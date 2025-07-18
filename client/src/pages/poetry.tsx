import { useEffect, useRef } from "react";

declare global {
  interface Window {
    THREE: any;
    TWEEN: any;
  }
}

export default function Poetry() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create info div
    const infoDiv = document.createElement('div');
    infoDiv.id = 'info';
    infoDiv.textContent = 'Click to start the journey';
    infoDiv.style.cssText = `
      position: absolute;
      top: 10px;
      left: 10px;
      color: #333;
      font-size: 1.2em;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: transform 0.3s ease, background 0.3s ease;
      z-index: 1000;
      font-family: Arial, sans-serif;
    `;

    infoDiv.addEventListener('mouseenter', () => {
      infoDiv.style.transform = 'scale(1.05)';
      infoDiv.style.background = 'rgba(255, 255, 255, 0.95)';
    });

    infoDiv.addEventListener('mouseleave', () => {
      infoDiv.style.transform = 'scale(1)';
      infoDiv.style.background = 'rgba(255, 255, 255, 0.8)';
    });

    containerRef.current.appendChild(infoDiv);

    // Load Three.js and TWEEN libraries
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const init3D = async () => {
      try {
        // Load libraries if not already loaded
        if (!window.THREE) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
        }
        if (!window.TWEEN) {
          await loadScript('https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.min.js');
        }

        const THREE = window.THREE;
        const TWEEN = window.TWEEN;

        let scene, camera, renderer, planes: any[] = [], charMeshes: any[][] = [], currentIndex = -1;
        let activeTweens: any[] = [];

        const poems = [
          { text: "Being you is different\nNo one is perfect\nSimply you No effects\nShow dem you reflect\nShow dem respect but be no pet", date: "20 March 2023" },
          { text: "I live\nI die\nI live again\nHis lost became my gain\nOn the cross He endured my pain\n\nI live\nI die\nI live again\nCos death He over came", date: "20 March 2023" },
          { text: "In strokes and hues, the passions start,\nA canvas whispers from the heart,\nA symphony of colors, transformed through masterful art.", date: "4 June 2023" },
          { text: "Hey there, I couldn't help but notice you standing there.\nHey there, your smile and energy are beyond compare.\nHey there, I think we could make an awesome pair.\nHey there, I'd love to get to know you and your flair.\nHey there, maybe we could grab a drink or a bite to share.\nHey there, let's start a friendship that's rare and so sincere.", date: "20 March 2023" },
          { text: "Together we laugh, sometimes we stumble,\nA group of friends, a perfect jumble.\nIn silly moments, our words may fumble,\nBut in our hearts, love's never humble.\nThrough thick and thin, we stand as one,\nA friendship forged, never undone.", date: "20 March 2023" },
          { text: "With dreams to chase, we dare to propel,\nIn every step, our spirits swell.\nTogether, we break the chains that quell,\nRising above, where heroes dwell.\nEmpowerment's fire, in us, excels.", date: "20 March 2023" },
          { text: "In the air, a pulsing vibe, we ride,\nHarmonic waves, side by side.\nThrough the rhythm, souls collide,\nA dance of energy, amplified.\nIn this space, our hearts reside,\nUnited by the beat, we're sanctified", date: "7 April 2023" },
          { text: "In realms of boundless imagination, I roam,\nWhere colors dance and words find their home.\nA canvas, a page, a symphony's embrace,\nCreativity's fire, an eternal grace.\nFrom whispered dreams to bold inventions,\nI weave my thoughts with daring intentions.\nUnleashing ideas, unchained and free,\nCreativity, the essence of me.\nWith every stroke, a story unfolds,\nA melody composed, a masterpiece untold.\nIn realms of boundless imagination, I soar,\nCreativity's muse, forever I adore.", date: "20 March 2023" },
          { text: "Blood Saved\nBlood Saved even when we run from your embrace\nYour love outwit us in the race\nGive to Caesar what is Caesar's\nBut thank God for Jesus\nCos his love freed us\nEven when we betrayed like Judas.\nJudah's conquering Lion\nThe only light brightening Zoin\nHe heals, He's Gilead's balm, He save see the nails in his palm,\nIf he is in the boat the storm will be calm,\nAs you are Christ bids you to come\nO you should see in Heaven\nAngels clapping, they wings flapping,\nsinging Hallelujah Amen", date: "20 March 2023" },
          { text: "Coding can be quite demanding\nErrors here and there are commanding\nBut once you debug and get it right\nThe feeling is truly out of sight\nFor coders, it's a constant delight", date: "20 March 2023" }
        ];

        function initScene() {
          scene = new THREE.Scene();
          camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
          renderer = new THREE.WebGLRenderer({ antialias: true });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setClearColor(0xffffff);
          
          if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
          }

          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
          scene.add(ambientLight);
          const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
          directionalLight.position.set(0, 1, 0);
          scene.add(directionalLight);

          camera.position.z = 5;

          poems.forEach((poem, index) => {
            const geometry = new THREE.PlaneGeometry(4, 3);
            const material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
            const plane = new THREE.Mesh(geometry, material);
            plane.position.x = (index - poems.length / 2) * 5;
            plane.position.z = -10;
            scene.add(plane);
            planes.push(plane);

            const loader = new THREE.FontLoader();
            loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
              charMeshes[index] = [];
              const lines = poem.text.split('\n');
              let yOffset = 0.5;
              lines.forEach(line => {
                for (let i = 0; i < line.length; i++) {
                  const charGeo = new THREE.TextGeometry(line[i], { font: font, size: 0.1, height: 0.01, curveSegments: 12 });
                  const charMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
                  const charMesh = new THREE.Mesh(charGeo, charMaterial);
                  charMesh.position.set(-1.8 + i * 0.1, yOffset, 0.01);
                  plane.add(charMesh);
                  charMeshes[index].push(charMesh);
                }
                yOffset -= 0.3;
              });

              const dateGeo = new THREE.TextGeometry(poem.date, { font: font, size: 0.05, height: 0.01, curveSegments: 12 });
              const dateMesh = new THREE.Mesh(dateGeo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
              dateMesh.position.set(-1.8, -1.2, 0.01);
              plane.add(dateMesh);
            });
          });

          infoDiv.addEventListener('click', nextPoem);
          animate();
        }

        function nextPoem() {
          if (currentIndex >= 0) {
            planes[currentIndex].position.z = -10;
            activeTweens.forEach(t => t.stop());
            activeTweens = [];
            if (charMeshes[currentIndex]) {
              charMeshes[currentIndex].forEach(mesh => {
                mesh.material.opacity = 0;
              });
            }
          }
          currentIndex = (currentIndex + 1) % poems.length;
          planes[currentIndex].position.z = 0;
          startWritingAnimation();
        }

        function startWritingAnimation() {
          const chars = charMeshes[currentIndex];
          if (chars) {
            chars.forEach((char, i) => {
              const delay = i * 100;
              const tween = new TWEEN.Tween({ opacity: 0, z: 0.01 })
                .to({ opacity: 1, z: 0.02 }, 300)
                .delay(delay)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(({ opacity, z }) => {
                  char.material.opacity = opacity;
                  char.position.z = z;
                })
                .onComplete(() => {
                  char.position.z = 0.01;
                })
                .start();
              activeTweens.push(tween);
            });
          }
        }

        function animate(time?: number) {
          requestAnimationFrame(animate);
          TWEEN.update(time);
          planes.forEach((plane, index) => {
            if (index !== currentIndex) plane.rotation.y += 0.01;
          });
          renderer.render(scene, camera);
        }

        const handleResize = () => {
          if (renderer && camera) {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
          }
        };

        window.addEventListener('resize', handleResize);

        initScene();

        return () => {
          window.removeEventListener('resize', handleResize);
        };

      } catch (error) {
        console.error('Error loading 3D libraries:', error);
        // Fallback to simple text display
        if (containerRef.current) {
          containerRef.current.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #333;">
              <h2>3D Poetry Journey</h2>
              <p>Loading 3D environment...</p>
            </div>
          `;
        }
      }
    };

    init3D();

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen overflow-hidden bg-white"
      style={{ margin: 0, padding: 0, position: 'relative' }}
    />
  );
}