import classNames from 'classnames';
import type { Dispatch, SetStateAction } from 'react';

import {
  EXPERIENCES,
  type Experience,
} from './EXPERIENCES';

import './Timeline.scss';

const Timeline = ({
  selectedExperienceId,
  setSelectedExperienceId,
}: {
  selectedExperienceId: Experience['id'];
  setSelectedExperienceId: Dispatch<
    SetStateAction<typeof selectedExperienceId>
  >;
}) => {
  return (
    <div className='Timeline'>
      <hr className='timeline-ruler' />
      <div className='experiences'>
        {EXPERIENCES.map(({ id, shortName, longName }) => (
          <button
            key={id}
            className={classNames('experience', {
              focused: id === selectedExperienceId,
            })}
            onClick={() => setSelectedExperienceId(id)}
          >
            <div className='marker' />
            <span>{shortName ?? longName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
