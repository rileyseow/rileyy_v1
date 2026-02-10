import type { ReactNode } from 'react';

import ArrowUpRightSvg from '../../assets/arrowUpRight.svg?react';
import {
  type Experience,
  ACHIEVEMENTS_LINKS,
  EXPERIENCES,
} from './EXPERIENCES';

import './ExperienceCard.scss';

const ExperienceCard = ({
  id,
}: {
  id: Experience['id'];
}) => {
  const {
    longName,
    role,
    link,
    durationDesc,
    achievements: rawAchievements,
  } = EXPERIENCES.find(experience => experience.id === id)!;

  // replace text with link tags as specified by the `ACHIEVEMENTS_LINKS` array
  let processedAchievements: ReactNode[] = rawAchievements;

  const linksToAdd = ACHIEVEMENTS_LINKS.filter(
    f => f.id === id
  );

  if (linksToAdd.length) {
    processedAchievements = rawAchievements.map(
      achievement => {
        for (const f of linksToAdd) {
          if (achievement.includes(f.text)) {
            // split raw achievement text into array of max 2 items using
            // `f.text` as the delimiter. This should result in an array
            // of exactly 2 items
            const split = achievement.split(f.text, 2);

            // return the array with a replacement link for `f.text` spliced
            // into the middle index
            return [
              split[0],
              <a
                key={f.link}
                href={f.link}
                target='_blank'
                rel='noreferrer'
              >
                {f.text}
              </a>,
              split[1],
            ];
          }
        }
        return achievement; // no links to replace text with were found
      }
    );
  }

  return (
    <div key={id} className='ExperienceCard'>
      <div className='metadata'>
        <span className='title'>
          <span>{`${role} @ `}</span>
          {link ?
            <a
              className='link'
              href={link}
              target='_blank'
              rel='noreferrer'
            >
              {longName}
              <ArrowUpRightSvg />
            </a>
          : <span>{longName}</span>}
        </span>
        <span className='duration'>{durationDesc}</span>
      </div>
      <ul className='achievements-desc'>
        {processedAchievements.map((achievement, idx) => (
          <li key={idx}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
