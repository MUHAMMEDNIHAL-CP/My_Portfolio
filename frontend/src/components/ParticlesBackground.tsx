import React, { useMemo } from 'react'
import Particles from '@tsparticles/react'

export default function ParticlesBackground() {
  const particlesOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false
      },
      background: {
        color: {
          value: 'transparent'
        }
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 50
        },
        color: {
          value: '#6366f1'
        },
        links: {
          enable: true,
          color: '#6366f1',
          distance: 150,
          opacity: 0.3
        },
        move: {
          enable: true,
          speed: 1
        },
        opacity: {
          value: 0.5
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse'
          }
        },
        modes: {
          repulse: {
            distance: 100
          }
        }
      }
    }),
    []
  )

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        options={particlesOptions}
      />
    </div>
  )
}

