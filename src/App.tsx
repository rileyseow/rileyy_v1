import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Work from "./components/Work";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="left">
          <Navigation />
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
