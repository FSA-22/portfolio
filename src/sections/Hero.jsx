import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import { calculateSizes } from "../constants";

import HackerRoom from "../component/HackerRoom";
import CanvasLoader from "../component/CanvasLoader";
import Target from "../component/Target";
import ReactLogo from "../component/ReactLogo";
import Cube from "../component/Cube";
import Rings from "../component/Ring";
import HeroCamera from "../component/HeroCamera";
import Button from "../component/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const sizes = calculateSizes(isMobile, isTablet, isSmall);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-8 mt-10  sm:px-10 px-5 gap-3">
        <p className="flex items-center justify-center sm:text-3xl text-2xl font-medium text-white text-center">
          Hi, I am FSA <span>🤸</span>
        </p>
        <p className="text-center xl:text-6xl md:text-5xl md:align-text-top sm:text-4xl text-3xl font-black leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.2, -279.4, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-4 right-0 left-0 w-full z-10 sm:px-10 px-5">
        <a href="#contact" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit sm:min-w-36"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
