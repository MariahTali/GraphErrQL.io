import React from 'react';
import spaceLogo from '../spaceLogo.png';

function Header() {
  return (
    <>
      <div>
        <img src={spaceLogo} />
      </div>
      <button>LinkedIn</button>
      <button>Github</button>
      <button>Medium Article</button>
    </>
  );
}

export default Header;
