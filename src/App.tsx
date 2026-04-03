import { useRef } from 'react';

import Experience from './components/Experience';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Tech from './components/Tech';

import './App.scss';
import './media.scss'; // media query styles

const App = () => {
  const experienceRef = useRef<HTMLElement>(null);

  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Hero experienceRef={experienceRef} />
        <Featured />
        <Tech />
        <Experience ref={experienceRef} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
