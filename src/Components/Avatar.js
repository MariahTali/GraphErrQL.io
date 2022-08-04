import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './styles/Avatar.css';

function Avatar(props) {
  return (
    <div className='avatarContainer'>
      <img src={props.image} alt='avatar' />
      <p>{props.name}</p>

      <a
        style={{ textDecoration: 'none' }}
        href={props.github}
        target='_blank'
        rel='noreferrer'
      >
        <button className='avatarButtons'>
          <FaGithub className = "avatarButtonIcon"/>
          Github
        </button>
      </a>
      <a
        style={{ textDecoration: 'none' }}
        href={props.linkedin}
        target='_blank'
        rel='noreferrer'
      >
        <button className='avatarButtons'>
          <FaLinkedin className = "avatarButtonIcon"/>
          LinkedIn
        </button>
      </a>
    </div>
  );
}

export default Avatar;
