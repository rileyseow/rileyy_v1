import EmailSvg from '../assets/email.svg?react';
import GithubSvg from '../assets/github.svg?react';
import LinkedinSvg from '../assets/linkedin.svg?react';

import './Header.scss';

const Header = () => {
  return (
    <header className='Header'>
      <h1 className='site-title'>Riley Seow</h1>
      <div className='contact-btns'>
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
      </div>
    </header>
  );
};

export default Header;
