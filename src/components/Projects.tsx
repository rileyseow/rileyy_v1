import type { RefObject } from 'react';

import './Projects.scss';

const Projects = ({
  ref,
}: {
  ref: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className='Projects' id='Projects' ref={ref}>
      <h2>Projects</h2>
      <p className='coming-soon-text'>🚧 🔨</p>
    </section>
  );
};

export default Projects;
