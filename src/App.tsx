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
  const [scrollY, setScrollY] = useState<Window["scrollY"]>(window.scrollY);

  useEffect(() => {
    // generic 'scroll' event captures button click scrolls, e.g. in navbar, which
    // causes header overlapping content. 'wheel' event fires before 'scroll' and
    // only captures trackpad or mouse type scrolls.
    const handleWheel = (e: WheelEvent) => {
      setIsHeaderVisible(e.deltaY < 0);
      setScrollY(window.scrollY);
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  });

  // use sessionStorage to keep track of `window.scrollY` to keep navbar state in sync
  useEffect(() => {
    const storedScrollY = sessionStorage.getItem("scrollY");
    if (storedScrollY) {
      setScrollY(parseInt(storedScrollY));
      sessionStorage.removeItem("scrollY");
    }

    const saveScrollY = () => {
      sessionStorage.setItem("scrollY", window.scrollY.toString());
    };
    window.addEventListener("beforeunload", saveScrollY);
    return () => {
      window.removeEventListener("beforeunload", saveScrollY);
    };
  }, [setScrollY]);

  return (
    <div className="App">
      <Header isHeaderVisible={isHeaderVisible} />
      <div className="content">
        <div className="left">
          <Navigation
            isHeaderVisible={isHeaderVisible}
            setIsHeaderVisible={setIsHeaderVisible}
            scrollY={scrollY}
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
