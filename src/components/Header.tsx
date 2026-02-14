import classNames from 'classnames';

import EmailSvg from '../assets/email.svg?react';
import FaviconSvg from '../assets/favicon.svg?react';
import GithubSvg from '../assets/github.svg?react';
import LinkedinSvg from '../assets/linkedin.svg?react';

import './Header.scss';

const Header = ({
  isHeaderVisible,
}: {
  isHeaderVisible: boolean;
}) => {
  return (
    <header
      className={classNames('Header', {
        visible: isHeaderVisible,
      })}
    >
      <div className='logo'>
        <FaviconSvg />
        <h1>RILEY SEOW</h1>
      </div>
      <div className='buttons'>
        <a
          href='https://github.com/rileyseow'
          title='GitHub'
          target='_blank'
          rel='noreferrer'
        >
          <GithubSvg />
        </a>
        <a
          href='https://linkedin.com/in/rileyseow'
          title='LinkedIn'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedinSvg />
        </a>
        <a
          href='mailto:rileyy@alumni.stanford.edu'
          title='Email'
          target='_blank'
          rel='noreferrer'
        >
          <EmailSvg />
        </a>
        <a
          className='resume'
          href='/resume.pdf'
          title='See my resume'
          target='_blank'
          rel='noreferrer'
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
