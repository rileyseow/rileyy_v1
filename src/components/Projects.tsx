import type { RefObject } from 'react';

import './Projects.scss';

const Projects = ({
  ref,
}: {
  ref: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className='Projects' id='Projects' ref={ref}>
      <h3>Projects</h3>
      <p className='coming-soon-text'>🚧 🔨</p>
    </section>
  );
};

export default Projects;
