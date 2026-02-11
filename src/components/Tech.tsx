import type { ReactNode, RefObject } from 'react';
import CssSvg from '../assets/Tech/css.svg?react';
import D3Svg from '../assets/Tech/d3.svg?react';
import ExpressSvg from '../assets/Tech/express.svg?react';
import HtmlSvg from '../assets/Tech/html.svg?react';
import JavascriptSvg from '../assets/Tech/javascript.svg?react';
import MapboxSvg from '../assets/Tech/mapbox.svg?react';
import NodeSvg from '../assets/Tech/node.svg?react';
import PostgreSqlSvg from '../assets/Tech/postgresql.svg?react';
import ReactSvg from '../assets/Tech/react.svg?react';
import ReduxSvg from '../assets/Tech/redux.svg?react';
import ScssSvg from '../assets/Tech/scss.svg?react';
import TypescriptSvg from '../assets/Tech/typescript.svg?react';

import './Tech.scss';

interface DevTool {
  name: string;
  img?: ReactNode;
}

const DEV_TOOLS: DevTool[] = [
  { name: 'Javascript (ES6+)', img: <JavascriptSvg /> },
  { name: 'TypeScript', img: <TypescriptSvg /> },
  { name: 'React', img: <ReactSvg /> },
  { name: 'Redux', img: <ReduxSvg /> },
  { name: 'HTML', img: <HtmlSvg /> },
  {
    name: 'CSS/SCSS',
    img: [<CssSvg key='css' />, <ScssSvg key='scss' />],
  },
  { name: 'D3.js', img: <D3Svg /> },
  { name: 'Mapbox', img: <MapboxSvg /> },
  { name: 'Node.js', img: <NodeSvg /> },
  { name: 'Express', img: <ExpressSvg /> },
  { name: 'PostgreSQL', img: <PostgreSqlSvg /> },
];

const Tech = ({
  ref,
}: {
  ref: RefObject<HTMLElement | null>;
}) => {
  return (
    <section className='Tech' id='Tech' ref={ref}>
      <h2>Lately I've been working in</h2>
      <div className='tileset'>
        {DEV_TOOLS.map(({ name, img }) => (
          <div className='tile' key={name}>
            {img}
            <span className='name'>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
