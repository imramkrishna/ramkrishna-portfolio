import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#C778DD"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingRing = ({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <torusGeometry args={[1.2, 0.05, 16, 100]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
    </mesh>
  );
};

const FloatingCubes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.5;
        return (
          <Float key={i} speed={1.5 + i * 0.2} floatIntensity={0.5}>
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * 0.5,
                Math.sin(angle) * radius,
              ]}
              scale={0.15}
            >
              <boxGeometry />
              <meshStandardMaterial
                color="#C778DD"
                metalness={0.8}
                roughness={0.2}
                opacity={0.8}
                transparent
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

const Developer3D = () => {
  return (
    <div className="w-64 h-80 md:w-72 md:h-96">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#C778DD" />
        
        <AnimatedSphere />
        <FloatingRing position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]} color="#C778DD" />
        <FloatingRing position={[0, 0, 0]} rotation={[0, Math.PI / 4, Math.PI / 2]} color="#ABB2BF" />
        <FloatingCubes />
      </Canvas>
    </div>
  );
};

export default Developer3D;
