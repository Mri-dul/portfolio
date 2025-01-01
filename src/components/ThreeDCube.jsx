import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

const EarthHologram = () => {
  const earthRef = useRef();
  const earthTexture = useTexture('https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg'); // Corrected

  // Rotate the Earth for a dynamic holographic effect
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005; // Slow rotation for hologram effect
    }
  });

  return (
    <mesh ref={earthRef}>
      {/* Sphere geometry to represent the Earth */}
      <sphereGeometry args={[2, 64, 64]} />

      {/* Apply texture, semi-transparent material with glowing effect */}
      <meshStandardMaterial
        map={earthTexture}
        emissive="#00ccff"
        emissiveIntensity={1.5}
        color="#000000"
        opacity={0.4}
        transparent={true}
        roughness={0.1}
        metalness={0.5}
      />
    </mesh>
  );
};

const EarthHologramScene = () => {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100vh',
        background: 'radial-gradient(circle, #000000, #1e3c72)',
      }}
    >
      {/* Ambient light to illuminate the scene */}
      <ambientLight intensity={0.3} />

      {/* Point light for highlights on the Earth */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#ff00ff" />

      {/* Earth hologram */}
      <EarthHologram />

      {/* OrbitControls for interactive view */}
      <OrbitControls />
    </Canvas>
  );
};

export default EarthHologramScene;
