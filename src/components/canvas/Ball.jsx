import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';

const Ball = React.memo(({ imgUrl }) => {
  const meshRef = useRef();
  const decalRef = useRef();
  const [decal] = useTexture([imgUrl]);

  // Proper resource cleanup
  useEffect(() => {
    return () => {
      if (decalRef.current) {
        decalRef.current.map = null;
      }
      if (decal) {
        decal.dispose();
      }
    };
  }, [decal]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          ref={decalRef}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
});

const BallCanvas = ({ icon }) => {
  const canvasRef = useRef();
  const controlsRef = useRef();

  // Handle context preservation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn('Context lost, will restore');
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="w-full h-full" style={{ position: 'relative' }}>
      <Canvas
        ref={canvasRef}
        frameloop="demand"
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          powerPreference: "high-performance",
          context: WebGL2RenderingContext // Force WebGL2
        }}
        camera={{ 
          position: [0, 0, 5], 
          fov: 25,
          near: 0.1,
          far: 100
        }}
        onCreated={({ gl }) => {
          gl.domElement.style.touchAction = 'none';
          gl.localClippingEnabled = true;
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls 
            ref={controlsRef}
            enableZoom={false}
            autoRotate={false}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default React.memo(BallCanvas);