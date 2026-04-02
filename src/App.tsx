import { useRef } from 'react';

import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
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
        <Featured />
        <Tech />
        <Work ref={workRef} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
