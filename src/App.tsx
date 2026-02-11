import { useEffect, useRef, useState } from 'react';

import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Work from './components/Work';

import './App.scss';
import './media.scss'; // media query styles

const App = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const [isHeaderVisible, setIsHeaderVisible] =
    useState<boolean>(true);

  // set whether header is visible and scroll position on scroll
  useEffect(() => {
    // listen for 'wheel' over 'scroll'. 'scroll' event is generic and will
    // captures button click scrolls (e.g. in navbar) which can make header
    // overlap content. 'wheel' event fires before 'scroll' and only captures
    // trackpad or mouse scrolls.
    const handleWheel = (e: WheelEvent) => {
      setIsHeaderVisible(e.deltaY < 0);
    };
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  });

  return (
    <div className='App'>
      <Header isHeaderVisible={isHeaderVisible} />
      <div className='content'>
        <div className='left'>
          <Navigation
            isHeaderVisible={isHeaderVisible}
            setIsHeaderVisible={setIsHeaderVisible}
            sectionRefs={{
              About: aboutRef,
              Tech: techRef,
              Work: workRef,
              Projects: projectsRef,
            }}
          />
        </div>
        <About ref={aboutRef} />
        <Tech ref={techRef} />
        <Work ref={workRef} />
        <Projects ref={projectsRef} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
