// src/components/ParticlesWrapper.client.tsx
'use client';

import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

export default function ParticlesWrapper() {
  const [ready, setReady] = useState(false);

  // 1) run this ONCE to load the engine + plugins
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine); // load all features
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options = {
    background: { color: '#222' },
    fpsLimit: 30,
    particles: {
      number: { value: 111, density: { enable: true, area: 800 } },
      color: { value: '#808080' },
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: 3, random: true },
      links: {
        enable: true,
        distance: 150,
        color: '#808080',
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.15,
        straight: false,
        outModes: { default: 'out' },
      },
    },
    detectRetina: true,
  };

  if (!ready) {
    return <div style={{ color: 'white' }}>Loading Particles Engine…</div>;
  }

  return (
    <div>
      <Particles id='tsparticles' options={options} />
    </div>
  );
}
