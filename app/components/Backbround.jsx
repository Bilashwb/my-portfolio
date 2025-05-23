import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 

export function PortfolioBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      responsive: [
        {
          maxWidth: 784,
          options: {
            background: {
              color: {
                value: "rgba(255,255,255)",
              },
            },
          },
        },
      ],
      background: {
        color: {
          value: "rgba(0, 0, 0, 0.7)",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#0000FF",
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 1, max: 10 },
        },
      },
      detectRetina: true,

    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }
}
