import React from 'react';
import LandPageLogo from '../images/LandPageLogo.gif';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import {GiSpellBook} from 'react-icons/gi';

import './styles/Header.css';

function Header() {
  return (
    <>
      <div className='header_logo'>
        <img src={LandPageLogo} />
      </div>
      <div className='header_copy'>
        <h1>End-to-End Query Testing for GraphQL</h1>
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
          href='https://medium.com/@gkphillips/introducing-grapherrql-22d877a8f353'
          target='_blank'
          rel='noreferrer'
        >
          
          <button className='header_buttons'>
            <BsMedium className='headerButton_icon' />
            Medium Article
          </button>
        </a>
        <a
          style={{ textDecoration: 'none' }}
          href='https://thenewstack.io/author/jessica-wachtel/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='header_buttons'>
            <GiSpellBook className='headerButton_icon' />
            TheNewStack.io Article
          </button>
        </a>
      </div>
    </>
  );
}

export default Header;
