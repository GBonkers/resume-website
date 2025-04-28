// src/components/RetroDisplay.tsx

import React from 'react';

interface RetroDisplayProps {
  /** Text to display inside the retro screen */
  text: string;
  /** Optional extra Tailwind classes for outer container */
  className?: string;
}

// embedded SVG noise tile (no external file needed)
const noiseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2"/></filter><rect width="100%" height="100%" filter="url(%23n)"/></svg>`;

const RetroDisplay: React.FC<RetroDisplayProps> = ({
  text,
  className = '',
}) => (
  <div
    className={`relative inline-block overflow-hidden rounded-md border px-6 py-2 ${className}`}
    style={{
      backgroundColor: '#000',
      border: '1px solid #333',

      /* stack: 1) darker radial “glass”  2) SVG noise tile */
      backgroundImage: [
        'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
        `url("data:image/svg+xml;utf8,${noiseSvg}")`,
      ].join(','),
      backgroundRepeat: 'no-repeat, repeat',
    }}
  >
    <span
      className='relative z-10 flex items-center justify-center leading-tight tracking-tight'
      style={{
        fontFamily: "'VT323', monospace",
        fontSize: '1.25rem', // ~text-xl
        color: '#66FF66', // soft retro green
      }}
    >
      {`> ${text}`}
    </span>
  </div>
);

export default RetroDisplay;
