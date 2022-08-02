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
    <div className="contributor_container">
      <div className='contributors_h1'>
        <h1>Meet The Team</h1>
      </div>
      <div className='avatar_container'>
        <Avatar
          image={Mariah}
          name='Mariah Talicuran'
          github='https://github.com/MariahTali'
          linkedin='https://www.linkedin.com/in/mariahtalicuran/'
        />
        <Avatar
          image={Jerald}
          name='Jerald Stephenson'
          github='https://github.com/MariahTali'
          linkedin='https://www.linkedin.com/in/mariahtalicuran/'
        />
        <Avatar
          image={Gwen}
          name='Gwen Phillips'
          github='https://github.com/MariahTali'
          linkedin='https://www.linkedin.com/in/mariahtalicuran/'
        />
        <Avatar
          image={Josh}
          name='Josh Merrell'
          github='https://github.com/MariahTali'
          linkedin='https://www.linkedin.com/in/mariahtalicuran/'
        />
      </div>
      
      </div>
    </>
  );
}

export default Contributors;
