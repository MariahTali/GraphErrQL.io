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
        <h2>End-to-End Query Testing for GraphQl</h2>
      </div>
      <div className='button_container'>
        
        <button className='header_buttons'><FaGithub className='headerButton_icon'/>Github</button>
        
        <button className='header_buttons'><FaNpm className='headerButton_icon'/>NPM Package</button>
        
        <button className='header_buttons'><FaLinkedin className='headerButton_icon'/>LinkedIn</button>
        
        <button className='header_buttons'><BsMedium className='headerButton_icon'/>Medium Article</button>
      </div>
    </>
  );
}

export default Header;
