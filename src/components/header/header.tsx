import React from 'react';
import logo from '../../res/spacexlogo.png'

function Header() {
  return (
    <div className="header">
      <img src={logo} height={80} width={320}/>
    </div>
  );
}

export default Header;
