import { type RefObject } from 'react';

import { EXPERIENCES } from './EXPERIENCES';
import ExperienceCard from './ExperienceCard';

import './Experience.scss';

const Experience = ({
  ref,
}: {
  ref: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className='Experience' ref={ref}>
      <h3 className='section-title'>Experience</h3>
      {EXPERIENCES.map(({ id, ...rest }) => (
        <ExperienceCard key={id} {...rest} />
      ))}
    </section>
  );
};

export default Experience;
