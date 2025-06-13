// TechStack.tsx
import React, { JSX } from 'react';
// import RetroDisplay from '@/components/RetroDisplay';
import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiSpringboot,
  SiGo,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiPython,
  SiAngular,
  SiNestjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Hex = ({
  Icon,
  color,
  name,
}: {
  Icon: IconType;
  color: string;
  name: string;
}): JSX.Element => (
  <div
    title={name}
    className='relative flex h-[96px] w-[96px] transform items-center justify-center shadow-[0px_4px_10px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-97 hover:outline-2 hover:outline-white/20 hover:brightness-95'
    style={{
      backgroundColor: color,
      clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
    }}
  >
    <Icon className='h-12 w-auto opacity-80 transition-opacity duration-300 hover:opacity-100' />
  </div>
);

const TechStack = (): JSX.Element => (
  <section
    id='tech'
    className='flex flex-col items-center justify-start px-4 pt-16 text-left text-white'
  >
    <div className='w-full max-w-5xl space-y-8'>
      <h2 className='mb-4 text-3xl font-bold text-white'>Tech Stack</h2>

      {/* Hex grid */}
      <div className='flex origin-top scale-65 transform flex-col items-center sm:scale-100'>
        {/* Row 1 */}
        <div className='flex gap-[5px]'>
          <Hex Icon={SiNextdotjs} color='#d48d98' name='Next.js' />
          <Hex Icon={SiDocker} color='#a3c7a5' name='Docker' />
          <Hex Icon={SiGithubactions} color='#a3c7a5' name='GitHub Actions' />
          <Hex Icon={SiMysql} color='#e9d98a' name='MySQL' />
          <Hex Icon={SiPostgresql} color='#e9d98a' name='PostgreSQL' />
        </div>

        {/* Row 2 */}
        <div className='-mt-[19px] flex gap-[5px]'>
          <Hex Icon={SiAngular} color='#d48d98' name='Angular' />
          <Hex Icon={SiJavascript} color='#d48d98' name='JavaScript' />
          <Hex Icon={SiGit} color='#a3c7a5' name='Git' />
          <Hex Icon={SiNodedotjs} color='#ff7a70' name='Node.js' />
          <Hex Icon={SiSpringboot} color='#ff7a70' name='Spring Boot' />
          <Hex Icon={SiOracle} color='#e9d98a' name='Oracle' />
        </div>

        {/* Row 3 */}
        <div className='-mt-[19px] flex gap-[5px]'>
          <Hex Icon={SiTypescript} color='#d48d98' name='TypeScript' />
          <Hex Icon={SiPython} color='#a5b3ce' name='Python' />
          <Hex Icon={SiGo} color='#ff7a70' name='Go' />
          <Hex Icon={FaJava} color='#ff7a70' name='Java' />
          <Hex Icon={SiNestjs} color='#ff7a70' name='NestJS' />
        </div>
      </div>

      {/* Subtle, centered legend */}
      <div className='flex origin-top scale-65 transform justify-center space-x-6 sm:mb-4 sm:scale-100'>
        <div className='flex items-center space-x-1'>
          <div
            className='h-3 w-3 rounded-full'
            style={{ backgroundColor: '#d48d98', opacity: 0.7 }}
          />
          <span className='text-sm text-gray-400'>Front-End</span>
        </div>
        <div className='flex items-center space-x-1'>
          <div
            className='h-3 w-3 rounded-full'
            style={{ backgroundColor: '#a3c7a5', opacity: 0.7 }}
          />
          <span className='text-sm text-gray-400'>DevOps</span>
        </div>
        <div className='flex items-center space-x-1'>
          <div
            className='h-3 w-3 rounded-full'
            style={{ backgroundColor: '#e9d98a', opacity: 0.7 }}
          />
          <span className='text-sm text-gray-400'>Databases</span>
        </div>
        <div className='flex items-center space-x-1'>
          <div
            className='h-3 w-3 rounded-full'
            style={{ backgroundColor: '#ff7a70', opacity: 0.7 }}
          />
          <span className='text-sm text-gray-400'>Back-End</span>
        </div>
        <div className='flex items-center space-x-1'>
          <div
            className='h-3 w-3 rounded-full'
            style={{ backgroundColor: '#a5b3ce', opacity: 0.7 }}
          />
          <span className='text-sm text-gray-400'>AI/ML</span>
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
