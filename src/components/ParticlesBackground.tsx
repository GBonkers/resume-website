// src/components/ParticlesWrapper.client.tsx
'use client';

import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Engine, RecursivePartial, IOptions } from '@tsparticles/engine';
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

  const options: RecursivePartial<IOptions> = {
    background: { color: '#222' },
    fpsLimit: 30,
    particles: {
      number: { value: 111, density: { enable: true } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.3 },
      size: { value: 3 },
      links: {
        enable: true,
        distance: 150,
        color: '#c5c5c5',
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.2,
        straight: false,
        outModes: 'out',
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
