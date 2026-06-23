import { useCallback, type RefObject } from 'react';

import ArrowSvg from '../assets/arrow.svg?react';
import EclipseSvg from '../assets/eclipse.svg?react';
import FileSvg from '../assets/file.svg?react';
import { useTheme } from '../ThemeContext';

import './Hero.scss';

const Hero = ({
  experienceRef,
}: {
  experienceRef: RefObject<HTMLElement | null>;
}) => {
  const { theme, setTheme } = useTheme();

  const handleViewWorkClick = useCallback(() => {
    experienceRef.current?.scrollIntoView();
  }, [experienceRef]);

  return (
    <section className='Hero'>
      <h2>
        I write software with an eye for clarity,
        performance, and mission-driven impact.
        <button
          className='theme-toggle'
          onClick={() =>
            setTheme(theme === 'light' ? 'dark' : 'light')
          }
        >
          <EclipseSvg />
        </button>
      </h2>
      <p className='description'>
        Full stack software developer building real-time,
        data-intensive web and geospatial applications for
        government, research, and the public-sector.
      </p>
      <p className='previously-at'>
        Previously @ CATT Lab • Stanford Symbolic Systems
      </p>
      <div className='action-btns'>
        <a
          className='resume-btn'
          href='/resume.pdf'
          title='See my resume'
          target='_blank'
          rel='noreferrer'
        >
          <FileSvg />
          Resume
        </a>
        <button
          className='view-work-btn'
          onClick={handleViewWorkClick}
        >
          View Work
          <ArrowSvg />
        </button>
      </div>
    </section>
  );
};

export default Hero;
