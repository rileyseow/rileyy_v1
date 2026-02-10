import classNames from "classnames";
import { useState, type Dispatch, type SetStateAction } from "react";

import MoonSvg from "../assets/moon.svg?react";
import SunSvg from "../assets/sun.svg?react";
import { useTheme } from "../ThemeContext";

import "./Navigation.scss";

const SECTIONS = ["About", "Tech", "Work", "Projects"] as const;

const Navigation = ({
  isHeaderVisible,
  setIsHeaderVisible,
}: {
  isHeaderVisible: boolean;
  setIsHeaderVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const { theme, setTheme } = useTheme();

  const [focusedSection, setFocusedSection] =
    useState<(typeof SECTIONS)[number]>("About");

  const handleClickNavItem = (section: (typeof SECTIONS)[number]) => {
    setFocusedSection(section);
    if (isHeaderVisible) {
      setIsHeaderVisible(false);
    }
  };

  return (
    <nav className="Navigation">
      <ul>
        {SECTIONS.map((section) => (
          <li key={section} className="nav-item">
            <a
              className={classNames({ focused: section === focusedSection })}
              href={`#${section}`}
              onClick={() => handleClickNavItem(section)}
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
