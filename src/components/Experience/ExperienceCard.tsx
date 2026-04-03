import ArrowSvg from '../../assets/arrow.svg?react';
import {
  type Experience,
  CHIP_BREAK_TAG,
} from './EXPERIENCES';

import './ExperienceCard.scss';

const CardContent = ({
  organization,
  role,
  link,
  durationDesc,
  coreImpact,
  achievements,
}: Omit<Experience, 'id'>) => {
  return (
    <div className='CardContent'>
      <div className='header'>
        <span>{role}</span>
        {link && <ArrowSvg className='arrow-icon' />}
        <span className='duration'>{durationDesc}</span>
      </div>
      <span className='organization'>{organization}</span>
      <span className='core-impact'>{coreImpact}</span>
      {achievements && (
        <ul className='achievements-list'>
          {achievements.map((achievement, i) => (
            <li key={i}>• {achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const ExperienceCard = (
  properties: Omit<Experience, 'id'>
) => {
  return (
    <div className='ExperienceCard'>
      {properties.link ?
        <a
          href={properties.link}
          target='_blank'
          rel='noreferrer'
        >
          <CardContent {...properties} />
        </a>
      : <CardContent {...properties} />}
    </div>
  );
};

export default ExperienceCard;
