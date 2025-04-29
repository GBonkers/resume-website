import {
  FaMapMarkerAlt,
  FaFilePdf,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='flex flex-col items-center justify-start px-4 pt-16 text-left text-white'>
      {/* constrain width so you aren’t full-bleed left */}
      <div className='w-full max-w-5xl space-y-4'>
        {/* User icon */}
        {/*<FaRegUserCircle className='text-6xl' />*/}

        {/* Name */}
        <h1 className='text-5xl font-bold'>Guillaume Bouchard</h1>

        {/* Subtitles */}
        <div className='space-y-1 text-xl text-gray-200'>
          <p>Software Engineer</p>
          <p>AI & Microservices Enthusiast</p>
        </div>

        {/* Location */}
        <div className='flex items-center text-gray-300'>
          <FaMapMarkerAlt className='mr-2' />
          <span>Ottawa, Canada</span>
        </div>

        {/* Actions */}
        <div className='flex flex-wrap items-center gap-4'>
          <a
            href='/resume.pdf'
            className='flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-gray-900 transition hover:bg-gray-100'
          >
            <FaFilePdf /> Resume
          </a>
          <div className='flex items-center gap-4 text-2xl'>
            <a
              href='https://www.linkedin.com/in/guillaume-bouchard-a0a705304/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://github.com/GBonkers'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
