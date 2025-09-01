import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <Canvas
      gl={{
        powerPreference: 'high-performance',
        antialias: true,
        alpha: true,
        // Removed forceWebGL1 for better compatibility
      }}
    >
      <ambientLight intensity={0.2} color="#1a1a40" />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Add a simple mesh to ensure WebGL has something to render */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
};

export default HeroExperience;
