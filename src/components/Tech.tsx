import type { ReactNode } from "react";
import CssSvg from "../assets/css.svg?react";
import D3Svg from "../assets/d3.svg?react";
import ExpressSvg from "../assets/express.svg?react";
import HtmlSvg from "../assets/html.svg?react";
import JavascriptSvg from "../assets/javascript.svg?react";
import MapboxSvg from "../assets/mapbox.svg?react";
import NodeSvg from "../assets/node.svg?react";
import PostgreSqlSvg from "../assets/postgresql.svg?react";
import ReactSvg from "../assets/react.svg?react";
import ReduxSvg from "../assets/redux.svg?react";
import ScssSvg from "../assets/scss.svg?react";
import TypescriptSvg from "../assets/typescript.svg?react";

import "./Tech.scss";

interface DevTool {
  name: string;
  img?: ReactNode;
}

const DEV_TOOLS: DevTool[] = [
  { name: "Javascript (ES6+)", img: <JavascriptSvg /> },
  { name: "TypeScript", img: <TypescriptSvg /> },
  { name: "React", img: <ReactSvg /> },
  { name: "Redux", img: <ReduxSvg /> },
  { name: "HTML", img: <HtmlSvg /> },
  { name: "CSS/SCSS", img: [<CssSvg />, <ScssSvg />] },
  { name: "D3.js", img: <D3Svg /> },
  { name: "Mapbox", img: <MapboxSvg /> },
  { name: "Node.js", img: <NodeSvg /> },
  { name: "Express", img: <ExpressSvg /> },
  { name: "PostgreSQL", img: <PostgreSqlSvg /> },
];

const Tech = () => {
  return (
    <section className="Tech" id="Tech">
      <h2>Lately I've been working in:</h2>
      <div className="tileset">
        {DEV_TOOLS.map(({ name, img }) => (
          <div className="tile" key={name}>
            {img}
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
