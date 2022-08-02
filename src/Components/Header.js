import React from 'react';
import spaceLogo from '../spaceLogo.png';

function Header() {
  return (
    <>
      <div>
        <img src={spaceLogo} />
      </div>
      <button>Github</button>
      <button>NPM</button>
      <button>LinkedIn</button>
      <button>Article</button>
    </>
  );
}

export default Header;
