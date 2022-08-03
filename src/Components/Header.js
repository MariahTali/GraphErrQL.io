import React from 'react';
import Headerpic from '../images/Headerpic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import './styles/Header.css';

function Header() {
  return (
    <>
      <div className='header_logo'>
        <img src={Headerpic} />
      </div>
      <div className='header_copy'>
        <h1>End-to-End Query Testing for GraphQl</h1>
      </div>
      <div className='button_container'>
        <a
          style={{ textDecoration: 'none' }}
          href='https://github.com/oslabs-beta/GraphErrQL'
          target='_blank'
          rel='noreferrer'
        >
          <button className='header_buttons'>
            <FaGithub className='headerButton_icon' />
            Github
          </button>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='https://npmjs.com/org/grapherrql'
          target='_blank'
          rel='noreferrer'
        >
          <button className='header_buttons'>
            <FaNpm className='headerButton_icon' />
            NPM Package
          </button>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='https://linkedin.com/company/grapherrql'
          target='_blank'
          rel='noreferrer'
        >
          <button className='header_buttons'>
            <FaLinkedin className='headerButton_icon' />
            LinkedIn
          </button>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='https://medium.com/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='header_buttons'>
            <BsMedium className='headerButton_icon' />
            Medium Article
          </button>
        </a>
      </div>
    </>
  );
}

export default Header;
