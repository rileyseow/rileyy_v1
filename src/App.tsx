import { useRef } from 'react';

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

  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <div className='left'>
          <Navigation
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
