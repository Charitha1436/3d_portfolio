import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const Computers = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFloating, setIsFloating] = useState(false);
  const [size, setSize] = useState([1, 1]);
  const lastTapRef = useRef(0);

  const images = ["/you3.jpg", "/you1.jpg"];
  const texture = useLoader(THREE.TextureLoader, images[currentImage]);

  useEffect(() => {
    const img = new Image();
    img.src = images[currentImage];

    img.onload = () => {
      const scaleFactor = 600; // Try 1000 for smaller image
      const width = img.naturalWidth / scaleFactor;
      const height = img.naturalHeight / scaleFactor;
      setSize([width, height]);
    };

    img.onerror = () => {
      console.error(`❌ Failed to load image: ${images[currentImage]}`);
    };
  }, [currentImage]);

  const handleCanvasClick = () => {
    const now = Date.now();
    const isDoubleClick = now - lastTapRef.current < 300;
    lastTapRef.current = now;

    if (isDoubleClick) {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
      setIsFloating(true);
    } else {
      setIsFloating(true);
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Canvas
        onClick={handleCanvasClick}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Float
            speed={isFloating ? 1.5 : 0.8}
            rotationIntensity={isFloating ? 1 : 0.5}
            floatIntensity={isFloating ? 1.5 : 0.8}
            floatingRange={[0.1, 0.3]}
          >
            {/* Shifted right and upward */}
            <mesh position={[4.5, 2, 0]}>
              <planeGeometry args={size} />
              <meshBasicMaterial map={texture} transparent />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Computers;
