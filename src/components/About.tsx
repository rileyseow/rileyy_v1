import type { RefObject } from 'react';

import ArrowSvg from '../assets/arrow.svg?react';
import FileSvg from '../assets/file.svg?react';

import './About.scss';

const About = ({
  ref,
}: {
  ref: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className='About' id='About' ref={ref}>
      <h2>
        I write software with an eye for clarity,
        performance, and mission-driven impact.
      </h2>
      <p className='description'>
        Full stack web developer with experience building
        real-time, data-intensive platforms for universities
        and government
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
        <button className='view-work-btn'>
          View Work
          <ArrowSvg />
        </button>
      </div>
    </section>
  );
};

export default About;
