'use client';
import { useState } from 'react';

export default function Education() {
  const [selected, setSelected] = useState<'college' | 'other'>('college');

  return (
    <section
      id='education'
      className='flex flex-col items-center justify-start px-4 pt-16 text-left text-white'
    >
      <div className='w-full max-w-5xl space-y-8'>
        <h2 className='text-3xl font-bold'>Education & Certifications</h2>

        {/* Floating Content */}
        <div className='rounded-2xl bg-black/20 p-8 shadow-[0px_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10 backdrop-blur-sm'>
          {/* Slider Toggle */}
          <div className='mb-8 flex justify-center'>
            <div className='relative h-12 w-full overflow-hidden rounded-full bg-white/20 p-1 backdrop-blur-sm select-none'>
              {/* Sliding Indicator */}
              <div
                style={{
                  transform: `translateX(${selected === 'other' ? '100%' : '0%'})`,
                }}
                className='absolute top-0 left-0 h-full w-1/2 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 transition-transform duration-300 ease-in-out'
              ></div>

              {/* Labels */}
              <div className='relative z-10 flex h-full items-center justify-between'>
                <span
                  onClick={() => setSelected('college')}
                  className={`w-1/2 cursor-pointer text-center font-semibold transition-colors duration-300 ${
                    selected === 'college' ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  Algonquin College
                </span>
                <span
                  onClick={() => setSelected('other')}
                  className={`w-1/2 cursor-pointer text-center font-semibold transition-colors duration-300 ${
                    selected === 'other' ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  Other Studies
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='mb-8 h-px w-full bg-gray-600'></div>

          {/* Content based on selection */}
          <div className='relative flex flex-col space-y-12'>
            {/* Vertical Line */}
            <div className='absolute top-0 left-8 h-full w-0.5 bg-gray-600' />

            {/* Timeline Items */}
            {selected === 'college' && (
              <div className='relative flex flex-col gap-6 rounded-lg bg-neutral-900/80 p-6 shadow-lg ring-1 ring-white/5 backdrop-blur-sm'>
                {/* Diploma Subtitle */}
                <div>
                  <h3 className='text-2xl font-bold text-white'>
                    Diploma in Computer Programming
                  </h3>
                  <p className='mt-1 text-sm text-gray-400'>
                    January 2024 – April 2025
                  </p>
                  <div className='mt-3 h-0.5 w-16 rounded-full bg-green-500'></div>
                </div>

                {/* Skills List */}
                <ul className='list-inside list-disc space-y-4 text-[15px] leading-relaxed text-gray-300 marker:text-green-400'>
                  <li>
                    Web development using{' '}
                    <span className='font-semibold text-white'>React.js</span>,{' '}
                    <span className='font-semibold text-white'>Go</span>, and{' '}
                    <span className='font-semibold text-white'>
                      Tailwind CSS
                    </span>
                  </li>
                  <li>
                    API design and development with{' '}
                    <span className='font-semibold text-white'>
                      Spring Boot
                    </span>
                    , <span className='font-semibold text-white'>Gradle</span>,
                    and <span className='font-semibold text-white'>Maven</span>
                  </li>
                  <li>
                    Database management with{' '}
                    <span className='font-semibold text-white'>MySQL</span>,{' '}
                    <span className='font-semibold text-white'>PostgreSQL</span>
                    , and{' '}
                    <span className='font-semibold text-white'>Oracle</span>
                  </li>
                  <li>
                    Agile project management using{' '}
                    <span className='font-semibold text-white'>
                      Scrum methodologies
                    </span>
                  </li>
                  <li>
                    Understanding and applying{' '}
                    <span className='font-semibold text-white'>
                      HTTP concepts
                    </span>
                    ,{' '}
                    <span className='font-semibold text-white'>REST APIs</span>,{' '}
                    <span className='font-semibold text-white'>cookies</span>,
                    and{' '}
                    <span className='font-semibold text-white'>sessions</span>
                  </li>
                  <li>
                    Implementing cybersecurity best practices (e.g.,{' '}
                    <span className='font-semibold text-white'>
                      SQL Injection
                    </span>
                    , <span className='font-semibold text-white'>XSS</span>,{' '}
                    <span className='font-semibold text-white'>
                      CSRF protection
                    </span>
                    )
                  </li>
                </ul>
              </div>
            )}

            {selected === 'other' && (
              <div className='relative flex flex-col gap-10 rounded-lg bg-neutral-900/80 p-6 shadow-lg ring-1 ring-white/5 backdrop-blur-sm'>
                {/* HarvardX – CS50 AI */}
                <div className='flex flex-col gap-4'>
                  <div>
                    <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                      <span className='inline-block h-2.5 w-2.5 rounded-full bg-[#FF2D2D]'></span>
                      HarvardX – CS50’s Introduction to Artificial Intelligence
                      with Python
                    </h3>
                    <p className='mt-1 text-sm text-gray-400'>
                      April 2025 – Ongoing
                    </p>
                    <div className='mt-2 h-0.5 w-16 rounded-full bg-[#FF2D2D]'></div>
                  </div>
                  <ul className='list-inside list-disc space-y-3 text-[15px] leading-relaxed text-gray-300'>
                    <li>
                      Problem-solving with{' '}
                      <span className='font-semibold text-white'>
                        A* Search
                      </span>{' '}
                      and{' '}
                      <span className='font-semibold text-white'>
                        Alpha-Beta Pruning
                      </span>
                    </li>
                    <li>
                      Logical reasoning using{' '}
                      <span className='font-semibold text-white'>
                        logical operators
                      </span>{' '}
                      and{' '}
                      <span className='font-semibold text-white'>
                        knowledge-based inferences
                      </span>
                    </li>
                    <li>
                      Uncertainty modeling with{' '}
                      <span className='font-semibold text-white'>
                        Bayesian Networks
                      </span>{' '}
                      and{' '}
                      <span className='font-semibold text-white'>
                        Markov Chains
                      </span>
                    </li>
                    <li>
                      Fundamentals of{' '}
                      <span className='font-semibold text-white'>
                        Optimization
                      </span>{' '}
                      and{' '}
                      <span className='font-semibold text-white'>
                        Machine Learning
                      </span>
                    </li>
                    <li>
                      Building basic{' '}
                      <span className='font-semibold text-white'>
                        Neural Networks
                      </span>{' '}
                      for supervised learning tasks
                    </li>
                    <li>
                      Introduction to{' '}
                      <span className='font-semibold text-white'>
                        Natural Language Processing (NLP)
                      </span>{' '}
                      techniques
                    </li>
                  </ul>
                </div>
                {/* University of Ottawa */}
                <div className='flex flex-col gap-4'>
                  <div>
                    <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                      <span className='inline-block h-2.5 w-2.5 rounded-full bg-[#800020]'></span>
                      University of Ottawa
                    </h3>
                    <p className='mt-1 text-sm text-gray-400'>
                      September 2022 – September 2023
                    </p>
                    <div className='mt-2 h-0.5 w-16 rounded-full bg-[#800020]'></div>
                  </div>
                  <ul className='list-inside list-disc space-y-3 text-[15px] leading-relaxed text-gray-300'>
                    <li>
                      <span className='font-semibold text-white'>
                        Python and Java programming
                      </span>
                    </li>
                    <li>
                      <span className='font-semibold text-white'>
                        Algorithms and Data Structures
                      </span>
                    </li>
                    <li>
                      <span className='font-semibold text-white'>
                        Calculus I & II
                      </span>
                    </li>
                    <li>
                      <span className='font-semibold text-white'>
                        Linear Algebra
                      </span>
                    </li>
                    <li>
                      <span className='font-semibold text-white'>
                        Discrete Mathematics
                      </span>
                    </li>
                  </ul>
                </div>
                {/* CÉGEP de Sherbrooke */}
                <div className='flex flex-col gap-4'>
                  <div>
                    <h3 className='flex items-center gap-2 text-xl font-bold text-white'>
                      <span className='inline-block h-2.5 w-2.5 rounded-full bg-[#105c54]'></span>
                      CÉGEP de Sherbrooke
                    </h3>
                    <p className='mt-1 text-sm text-gray-400'>
                      August 2021 – May 2022
                    </p>
                    <div className='mt-2 h-0.5 w-16 rounded-full bg-[#105c54]'></div>
                  </div>
                  <p className='text-[15px] leading-relaxed text-gray-300'>
                    Focus on{' '}
                    <span className='font-semibold text-white'>
                      C++ programming fundamentals
                    </span>{' '}
                    and{' '}
                    <span className='font-semibold text-white'>
                      object-oriented design principles
                    </span>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
