import EmailSvg from "../assets/email.svg?react";
import FaviconSvg from "../assets/favicon.svg?react";
import GithubSvg from "../assets/github.svg?react";
import LinkedinSvg from "../assets/linkedin.svg?react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <div className="logo">
        <FaviconSvg />
        <h1>RILEY SEOW</h1>
      </div>
      <div className="buttons">
        <a
          href="https://github.com/rileyseow"
          aria-label="GitHub"
          target="_blank"
          rel="noreferrer"
        >
          <GithubSvg />
        </a>
        <a
          href="https://linkedin.com/in/rileyseow"
          aria-label="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedinSvg />
        </a>
        <a
          href="mailto:rileyy@alumni.stanford.edu"
          aria-label="Email"
          target="_blank"
          rel="noreferrer"
        >
          <EmailSvg />
        </a>
        <a
          className="resume"
          href="https://google.com"
          title="See my resume"
          aria-label="Resume"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
