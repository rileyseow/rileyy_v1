import layerCake from "../assets/layerCake.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <span className="text-banner">Anything can be learned!</span>
      <img className="layer-cake" src={layerCake} />
    </footer>
  );
};

export default Footer;
