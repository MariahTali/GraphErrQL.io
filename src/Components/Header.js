import React from 'react';
import headerPic from '../images/headerPic.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import './styles/Header.css';

function Header() {
  return (
    <>
      <div className='header_logo'>
        <img src={headerPic} />
      </div>
      <div className='header_copy'>
        <h2>End-to-End Query Testing for GraphQl</h2>
      </div>
      <div className='button_container'>
        {/* <FaGithub className='headerButton_icon'/> */}
        <button className='header_buttons'>Github</button>
        {/* <FaNpm className='headerButton_icon'/> */}
        <button className='header_buttons'>NPM Package</button>
        {/* <FaLinkedin className='headerButton_icon'/> */}
        <button className='header_buttons'>LinkedIn</button>
        {/* <BsMedium className='headerButton_icon'/> */}
        <button className='header_buttons'>Medium Article</button>
      </div>
    </>
  );
}

export default Header;
