import { useRef } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Work from './components/Work';

import './App.scss';
import './media.scss'; // media query styles

const App = () => {
  const workRef = useRef<HTMLElement>(null);

  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Hero workRef={workRef} />
        <Tech />
        <Work ref={workRef} />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
