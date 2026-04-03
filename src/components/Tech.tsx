import { type ReactNode } from 'react';

import D3Svg from '../assets/Tech/d3.svg?react';
import ExpressSvg from '../assets/Tech/express.svg?react';
import MapboxSvg from '../assets/Tech/mapbox.svg?react';
import NodeSvg from '../assets/Tech/node.svg?react';
import PostgreSqlSvg from '../assets/Tech/postgresql.svg?react';
import ReactSvg from '../assets/Tech/react.svg?react';
import ReduxSvg from '../assets/Tech/redux.svg?react';
import ScssSvg from '../assets/Tech/scss.svg?react';
import TypescriptSvg from '../assets/Tech/typescript.svg?react';

import './Tech.scss';

/** @todo Implement toggle dev tool icon versus text on hover */

interface DevTool {
  name: string;
  img?: ReactNode;
}

const DEV_TOOLS: Record<string, DevTool[]> = {
  'Front end': [
    { name: 'TypeScript', img: <TypescriptSvg /> },
    { name: 'React', img: <ReactSvg /> },
    { name: 'Redux', img: <ReduxSvg /> },
    { name: 'SCSS', img: <ScssSvg /> },
    { name: 'D3', img: <D3Svg /> },
    { name: 'Mapbox', img: <MapboxSvg /> },
  ],
  'Back end': [
    { name: 'Node', img: <NodeSvg /> },
    { name: 'Express', img: <ExpressSvg /> },
    { name: 'PostgreSQL', img: <PostgreSqlSvg /> },
  ],
  Focus: [
    { name: 'Real-time systems' },
    { name: 'Data visualization' },
    { name: 'Performance' },
  ],
};

const Tech = () => {
  return (
    <section className='Tech'>
      <h3>Skills</h3>
      {(
        Object.entries(DEV_TOOLS) as [string, DevTool[]][]
      ).map(([name, devTools]) => (
        <div key={name} className='tech-category'>
          <span className='category-name'>{name}:</span>
          <ul className='category-list'>
            {devTools.map(devTool => (
              <li key={devTool.name}>{devTool.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Tech;
