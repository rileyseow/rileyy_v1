import classNames from 'classnames';
import {
  useCallback,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';

import MoonSvg from '../assets/moon.svg?react';
import SunSvg from '../assets/sun.svg?react';
import { useTheme } from '../ThemeContext';

import './Navigation.scss';

const SECTIONS = [
  'About',
  'Tech',
  'Work',
  'Projects',
] as const;

type Section = (typeof SECTIONS)[number];

/**
 * @constant
 * @description Map from page sections to their top-edge `scrollY` values.
 * @note Ordered by top-to-bottom appearance on the page.
 */
const SCROLL_Y_SECTION_BREAKPOINTS: Record<
  Section,
  number
> = {
  About: 160,
  Tech: 670,
  Work: 990,
  Projects: 1400, // TODO: may need adjustment after section is implemented
};

/**
 * @constant
 * Padding buffer value to detect page section change
 *
 * @description
 * Value in `scrollY` pixels that can exist between the top
 * of the user's screen and the top of the next page section
 * while still detecting a change in navbar state.
 */
const SCROLL_PADDING_BUFFER = 300;

const Navigation = ({
  isHeaderVisible,
  setIsHeaderVisible,
  scrollY,
}: {
  isHeaderVisible: boolean;
  setIsHeaderVisible: Dispatch<SetStateAction<boolean>>;
  scrollY: Window['scrollY'];
}) => {
  const { theme, setTheme } = useTheme();

  const [focusedSection, setFocusedSection] =
    useState<Section>('About');

  // use scroll position kept track of in App.tsx to detect
  // which page section is currently in-focus
  const handleDetectFocusedSection = useCallback(
    (y: Window['scrollY']) => {
      const breakpoints = Object.entries(
        SCROLL_Y_SECTION_BREAKPOINTS
      ) as [Section, number][];

      let i = 0;
      while (
        i + 1 < breakpoints.length
        && y > breakpoints[i + 1][1] - SCROLL_PADDING_BUFFER
      ) {
        i += 1;
      }
      setFocusedSection(breakpoints[i][0]);
    },
    [setFocusedSection, scrollY]
  );

  useEffect(() => {
    handleDetectFocusedSection(scrollY);
  }, [scrollY]);

  const handleClickNavItem = (section: Section) => {
    setFocusedSection(section);
    window.scrollTo({
      top: SCROLL_Y_SECTION_BREAKPOINTS[section],
      behavior: 'smooth',
    });
    if (isHeaderVisible) {
      setIsHeaderVisible(false);
    }
  };

  return (
    <nav className='Navigation'>
      <ul>
        {SECTIONS.map(section => (
          <li key={section} className='nav-item'>
            <button
              className={classNames({
                focused: section === focusedSection,
              })}
              onClick={() => handleClickNavItem(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
      <div className='light-dark-toggle'>
        <button onClick={() => setTheme('light')}>
          <SunSvg
            className={classNames('theme-icon', {
              on: theme === 'light',
            })}
          />
        </button>
        <span>/</span>
        <button onClick={() => setTheme('dark')}>
          <MoonSvg
            className={classNames('theme-icon', {
              on: theme === 'dark',
            })}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
