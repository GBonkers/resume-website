// src/components/Projects.tsx
import React from 'react';
import Image from 'next/image';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiSpringboot,
  SiGo,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiPython,
  SiReact,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

interface ProjectButton {
  label: string;
  link?: string;
  locked?: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  buttons: ProjectButton[];
}

const techIconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  'Node.js': SiNodedotjs,
  'Spring Boot': SiSpringboot,
  Go: SiGo,
  'C++': SiCplusplus,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Oracle: SiOracle,
  Docker: SiDocker,
  'GitHub Actions': SiGithubactions,
  Git: SiGit,
  Python: SiPython,
  Java: FaJava,
  React: SiReact,
};

const projects: Project[] = [
  {
    title: 'Nexa',
    description:
      'Personal productivity dashboard with drag-and-drop widgets and a secure custom API.',
    image: '/assets/nexa.png',
    tech: ['React', 'Tailwind CSS', 'Go', 'JWT', 'PostgreSQL'],
    buttons: [
      {
        label: 'View Front End',
        link: 'https://github.com/your-nexa-frontend-repo',
      },
      {
        label: 'View Back End',
        link: 'https://github.com/your-nexa-backend-repo',
      },
    ],
  },
  {
    title: 'Husband 4 Hire',
    description:
      'Designed a secure platform connecting employers and job seekers in an Agile group project.',
    image: '/assets/husband4hire.png',
    tech: ['Java', 'Spring Boot', 'React', 'MySQL'],
    buttons: [{ label: 'Private Source Code', locked: true }],
  },
  {
    title: 'AI Workshop',
    description:
      'Ongoing collection of AI projects built during my studies. Continuously expanding.',
    image: '/assets/aiworkshop.png',
    tech: ['Python'],
    buttons: [
      { label: 'Discover', link: 'https://github.com/GBonkers/AI-Workshop' },
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built to showcase full-stack projects and technical skills.',
    image: '/assets/portfolio.png',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    buttons: [
      { label: 'Discover', link: 'https://github.com/GBonkers/resume-website' },
    ],
  },
];

const Projects: React.FC = () => (
  <section
    id='projects'
    className='flex flex-col items-center justify-start px-4 pt-16 text-left text-white'
  >
    <div className='w-full max-w-5xl space-y-4'>
      <h2 className='mb-12 text-3xl font-bold text-white'>Projects</h2>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        {projects.map((p) => (
          <div
            key={p.title}
            className='transform rounded-2xl border border-white/20 bg-black/20 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
          >
            {/* → aspect-ratio container: choose square or video */}
            <div className='relative mb-4 aspect-square w-full overflow-hidden rounded-md'>
              <Image
                src={p.image}
                alt={p.title}
                fill
                className='object-cover object-center'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>

            <h3 className='mb-2 text-xl font-semibold text-white'>{p.title}</h3>
            <p className='mb-4 text-sm leading-snug text-gray-300'>
              {p.description}
            </p>

            {/* tech icons */}
            <div className='mb-4 flex flex-wrap gap-3'>
              {p.tech.map((name) => {
                const Icon = techIconMap[name];
                return Icon ? (
                  <Icon key={name} className='text-2xl text-white opacity-80' />
                ) : null;
              })}
            </div>

            <div className='flex gap-3'>
              {p.buttons.map((btn, idx) =>
                btn.locked ? (
                  <button
                    key={idx}
                    disabled
                    className='inline-block cursor-not-allowed rounded-lg bg-gray-500/50 px-4 py-2 text-sm font-semibold text-white'
                  >
                    {btn.label}
                  </button>
                ) : (
                  <a
                    key={idx}
                    href={btn.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700'
                  >
                    {btn.label}
                  </a>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
