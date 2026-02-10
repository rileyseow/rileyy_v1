import type { Dispatch, SetStateAction } from 'react';

import CogSvg from '../../assets/Work/cog.svg?react';
import MapSvg from '../../assets/Work/map.svg?react';
import ScatterplotSvg from '../../assets/Work/scatterplot.svg?react';
import type { Experience } from './EXPERIENCES';

import './Shortcuts.scss';

const Shortcuts = ({
  selectedExperienceId,
  setSelectedExperienceId,
}: {
  selectedExperienceId: Experience['id'];
  setSelectedExperienceId: Dispatch<
    SetStateAction<Experience['id']>
  >;
}) => {
  return (
    <div className='Shortcuts'>
      <button
        disabled={selectedExperienceId === 'CATT'}
        onClick={() => setSelectedExperienceId('CATT')}
      >
        <MapSvg />
        <span>Mapping software</span>
      </button>
      <button
        disabled={selectedExperienceId === 'CESTA'}
        onClick={() => setSelectedExperienceId('CESTA')}
      >
        <CogSvg />
        <span>Web scrapers</span>
      </button>
      <button
        disabled={selectedExperienceId === 'BLAIR'}
        onClick={() => setSelectedExperienceId('BLAIR')}
      >
        <ScatterplotSvg />
        <span>Lab GUIs</span>
      </button>
    </div>
  );
};

export default Shortcuts;
