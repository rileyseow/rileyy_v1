import classNames from "classnames";
import { useState } from "react";

import MoonSvg from "../assets/moon.svg?react";
import SunSvg from "../assets/sun.svg?react";
import { useTheme } from "../ThemeContext";

import "./Navigation.scss";

const SECTIONS = ["About", "Tech", "Work", "Projects"] as const;

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  const [focusedSection, setFocusedSection] =
    useState<(typeof SECTIONS)[number]>("About");

  return (
    <nav className="Navigation">
      <ul>
        {SECTIONS.map((section) => (
          <li key={section} className="nav-item">
            <a
              className={classNames({ focused: section === focusedSection })}
              href={`#${section}`}
              onClick={() => setFocusedSection(section)}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
      <div className="light-dark-toggle">
        <button onClick={() => setTheme("light")}>
          <SunSvg
            className={classNames("theme-icon", { on: theme === "light" })}
          />
        </button>
        <span>/</span>
        <button onClick={() => setTheme("dark")}>
          <MoonSvg
            className={classNames("theme-icon", { on: theme === "dark" })}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
