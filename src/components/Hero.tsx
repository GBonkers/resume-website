import {
  FaRegUserCircle,
  FaMapMarkerAlt,
  FaFilePdf,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      className="
        min-h-screen          /* full viewport height */
        flex
        flex-col
        items-center           /* center horizontally */
        justify-start          /* align to top vertically */
        pt-16                  /* push down a bit from very top */
        px-4
        text-left              /* left-align text */
        text-white
      "
    >
      {/* constrain width so you aren’t full-bleed left */}
      <div className="w-full max-w-2xl space-y-4">
        {/* User icon */}
        <FaRegUserCircle className="text-6xl" />

        {/* Name */}
        <h1 className="text-5xl font-bold">Guillaume Bouchard</h1>

        {/* Subtitles */}
        <div className="space-y-1 text-xl text-gray-200">
          <p>Software Engineer</p>
          <p>AI & Microservices Enthusiast</p>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-300">
          <FaMapMarkerAlt className="mr-2" />
          <span>Ottawa, Canada</span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/resume.pdf"
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition"
          >
            <FaFilePdf /> Resume
          </a>
          <div className="flex items-center gap-4 text-2xl">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
