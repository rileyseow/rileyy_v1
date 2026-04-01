import classNames from 'classnames';
import {
  useCallback,
  useEffect,
  useState,
  type RefObject,
} from 'react';

import MoonSvg from '../assets/moon.svg?react';
import SunSvg from '../assets/sun.svg?react';
import useIntersectedElem from '../hooks/useIntersectedElem';
import { useTheme } from '../ThemeContext';

import './Navigation.scss';

/**
 * @constant
 * List of page sections ordered from top to bottom.
 */
const SECTIONS = [
  'About',
  'Tech',
  'Work',
  'Projects',
] as const;

type Section = (typeof SECTIONS)[number];

const Navigation = ({
  sectionRefs,
}: {
  sectionRefs: Record<
    Section,
    RefObject<HTMLElement | null>
  >;
}) => {
  const { theme, setTheme } = useTheme();

  const [focusedSection, setFocusedSection] =
    useState<Section | null>(null);

  const { name: maxIntersectedSection } =
    useIntersectedElem({
      elemNameRefMap: sectionRefs,
    });

  useEffect(() => {
    // handles initial component mount
    if (maxIntersectedSection && focusedSection === null) {
      setFocusedSection(maxIntersectedSection as Section);
    }
  }, [
    maxIntersectedSection,
    focusedSection,
    setFocusedSection,
  ]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!maxIntersectedSection || !focusedSection) {
        return;
      }
      // prevent flicker when scrolling past multiple sections by checking
      // that `maxIntersectedSection` is in correct scroll direction
      const idx = SECTIONS.indexOf(focusedSection);
      const scrollDir = e.deltaY >= 0 ? 1 : -1;
      if (
        maxIntersectedSection === SECTIONS[idx + scrollDir]
      ) {
        setFocusedSection(maxIntersectedSection as Section);
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [maxIntersectedSection, focusedSection]);

  const handleClickNavItem = useCallback(
    (section: Section) => {
      setFocusedSection(section);

      const ref = sectionRefs[section];
      ref.current?.scrollIntoView();
    },
    [setFocusedSection, sectionRefs]
  );

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
