import { useEffect, useState } from "react";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Work from "./components/Work";

import "./App.scss";

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);

  useEffect(() => {
    // generic 'scroll' event captures button click scrolls, e.g. in navbar, which
    // causes header overlapping content. 'wheel' event fires before 'scroll' and
    // only captures trackpad or mouse type scrolls.
    const handleWheel = (e: WheelEvent) => {
      setIsHeaderVisible(e.deltaY < 0);
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  return (
    <div className="App">
      <Header isHeaderVisible={isHeaderVisible} />
      <div className="content">
        <div className="left">
          <Navigation
            isHeaderVisible={isHeaderVisible}
            setIsHeaderVisible={setIsHeaderVisible}
          />
        </div>
        <About />
        <Tech />
        <Work />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
