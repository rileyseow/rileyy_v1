import type { ReactNode } from 'react';

import ArrowSvg from '../../assets/arrow.svg?react';
import {
  type Experience,
  CHIP_BREAK_TAG,
} from './EXPERIENCES';

import './ExperienceCard.scss';

const CHIP_REGEX = new RegExp(
  `(${CHIP_BREAK_TAG}.*?${CHIP_BREAK_TAG})`
);

const addChips = (s: string): ReactNode =>
  s.split(CHIP_REGEX).map(f =>
    CHIP_REGEX.test(f) ?
      <span key={f} className='chip'>
        {f.replaceAll(CHIP_BREAK_TAG, '')}
      </span>
    : f
  );

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
      <span className='core-impact'>
        {addChips(coreImpact)}
      </span>
      {achievements && (
        <ul className='achievements-list'>
          {achievements.map((achievement, i) => (
            <li key={i}>• {addChips(achievement)}</li>
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
