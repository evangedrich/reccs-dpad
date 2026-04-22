'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function TexturedSphere({ id }: { id: string | undefined }) {
  // Load the texture
  const texture = useLoader(TextureLoader, `/globe/textures/globe-${id}.png`)

  return (
    <mesh>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

export default function Globe({ id }: { id: string | undefined }) {
  return (
    <div style={{ height: '40vw', width: '40vw', padding: '3vw' }}>
      <Canvas style={{ width: '100%', height: '100%' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          <directionalLight position={[10, 10, 5]} />
          <TexturedSphere id={id} />
          <OrbitControls enableZoom={false} /> {/* Allows rotatable interaction */}
        </Suspense>
      </Canvas>
    </div>
  )
}