import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './styles/Avatar.css';

function Avatar(props) {
  return (
    <div className='avatar_container'>
      <div className='footerContainer'>
        <img src={props.image} alt="avatar"/>
        <p>{props.name}</p>
        <div className='avatarIcons'>
          <a href={props.github}>
            {<FaGithub style={{ color: 'whitesmoke' }} />}
          </a>
          <a href={props.linkedin}>
            {<FaLinkedin style={{ color: 'whitesmoke' }} />}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
