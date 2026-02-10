import { useState } from 'react';

import ArrowsCrossedSvg from '../assets/arrowsCrossed.svg?react';

import './Footer.scss';

const MOTTOS = [
  'Anything can be learned!',
  "And it's inside myself that I must create someone who will understand. -Clarice Lispector",
  'You’re strange because you are not yourself and that’s what keeps you hidden. -Unknown',
] as const;

const Footer = () => {
  const [mottoIdx, setMottoIdx] = useState<number>(0);

  return (
    <footer className='Footer'>
      <div className='text-attribution'>
        <span>&#169; 2026 Riley Seow</span>
        <span>
          Coded in VSCode with Typescript React. Deployed
          with Vercel. Typeface is Fira Sans and Fira Mono
          via Google Fonts.
        </span>
      </div>
      <div className='scrolling-motto'>
        <div className='motto-text-container'>
          <div
            key={`${MOTTOS[mottoIdx]}-one`}
            className='motto-text'
          >
            {MOTTOS[mottoIdx]}
          </div>
          {/* duplicate .motto-text with aria-hidden for infinite scroll effect */}
          <div
            key={`${MOTTOS[mottoIdx]}-two`}
            className='motto-text'
            aria-hidden
          >
            {MOTTOS[mottoIdx]}
          </div>
        </div>
        <button
          className='next-motto-button'
          onClick={() =>
            setMottoIdx(
              prevMottoIdx =>
                (prevMottoIdx + 1) % MOTTOS.length
            )
          }
        >
          <ArrowsCrossedSvg />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
