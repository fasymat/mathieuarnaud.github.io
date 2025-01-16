'use client'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const commonOptions: ISourceOptions = {
    fullScreen: false,
    background: {
      opacity: 0,
    },
    fpsLimit: 120,
    interactivity: {
      events: {
       
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none" as const,
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 100,  // Augmenté de 40 à 80 pour chaque zone
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.3,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {/* Particules en haut */}
      <Particles
        id="tsparticles-top"
        init={particlesInit}
        loaded={particlesLoaded}
        options={commonOptions}
        className="absolute top-0 left-0 w-full h-1/4 z-0"
      />
      
      {/* Particules en bas */}
      <Particles
        id="tsparticles-bottom"
        init={particlesInit}
        loaded={particlesLoaded}
        options={commonOptions}
        className="absolute bottom-0 left-0 w-full h-1/4 z-0"
      />

      {/* Particules à gauche */}
      <Particles
        id="tsparticles-left"
        init={particlesInit}
        loaded={particlesLoaded}
        options={commonOptions}
        className="absolute top-1/4 bottom-1/4 left-0 w-1/3 z-0"
      />
      
      {/* Particules à droite */}
      <Particles
        id="tsparticles-right"
        init={particlesInit}
        loaded={particlesLoaded}
        options={commonOptions}
        className="absolute top-1/4 bottom-1/4 right-0 w-1/3 z-0"
      />
    </>
  );
}