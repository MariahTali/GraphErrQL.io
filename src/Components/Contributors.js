import React from 'react';
import Avatar from './Avatar';
import './styles/Contributors.css';
import Gwen from '../images/gwen.png';
import Mariah from '../images/mariah.png';
import Jerald from '../images/jerald.png';
import Josh from '../images/josh.png';

function Contributors() {
  return (
    <>
    <div className='contributors_h1'>
      <h1>Meet The Team</h1>
    </div>
    <div className='contributor_container'>
    <Avatar
      image={Mariah}
      name='Mariah Talicuran'
      github='https://github.com/MariahTali'
      linkedin='https://www.linkedin.com/in/mariahtalicuran/'
    />
  </div>
  </>
  );
}

export default Contributors;
