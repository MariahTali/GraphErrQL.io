import React from 'react';
import headerPic from '../images/headerPic.png';

function Header() {
  return (
    <>
      <div>
        <img src={headerPic} />
      </div>
      <button>Github</button>
      <button>NPM</button>
      <button>LinkedIn</button>
      <button>Article</button>
    </>
  );
}

export default Header;
