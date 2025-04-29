// src/components/Footer.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-16 border-t border-white/10 px-4 py-8 text-center text-sm text-gray-400'>
      <div className='flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8'>
        {/* nav links */}
        <div className='flex space-x-4'>
          <a href='#top' className='hover:text-white'>
            Home
          </a>
          <a href='#education' className='hover:text-white'>
            Eduction
          </a>
          <a href='#tech' className='hover:text-white'>
            Tech Stack
          </a>
          <a href='#projects' className='hover:text-white'>
            Projects
          </a>
        </div>

        {/* social icons */}
        <div className='flex space-x-3'>
          <a
            href='https://github.com/GBonkers'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <FaGithub className='inline h-5 w-5 transition-colors hover:text-white' />
          </a>
          <a
            href='https://www.linkedin.com/in/guillaume-bouchard-a0a705304/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FaLinkedin className='inline h-5 w-5 transition-colors hover:text-white' />
          </a>
        </div>

        {/* copyright */}
        <p>© {year} Guillaume Bouchard. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
