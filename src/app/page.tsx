import Hero from '@/components/Hero';
import Education from '@/components/Education';
import ParticlesBackground from '@/components/ParticlesBackground';
import TechStack from '@/components/TechStack';

export default function Page() {
  return (
    <div className='relative min-h-screen overflow-scroll'>
      {/* this is client-only */}
      <ParticlesBackground />

      {/* your content sits on top */}
      <div className='relative z-10'>
        <Hero />
        <Education />
        <TechStack />
      </div>
    </div>
  );
}
