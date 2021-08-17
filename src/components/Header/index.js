import React from 'react';
// import logo from 'src/assets/pictures/Logo2-monPotager.jpg';
import './header.scss';

const Header = () => (
  <div className="header">
    <img
      // src=
      alt="logo"
      className="header-logo"
    />
    <div className="nav">
      <a className="nav_item">Accueil</a>
      <a className="nav_item">Compte</a>
      <a className="nav_item">Plantes</a>
    </div>
  </div>
);

export default Header;
