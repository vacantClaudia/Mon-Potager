import React from 'react';
// import logo from 'src/assets/pictures/Logo2-monPotager.jpg';
import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header-picture">
      <img
        // src=
        alt="logo-MonPotager"
        className="header-logo"
      />
    </div>

    <div className="nav">
      <a className="nav-item" href="#">Accueil</a>
      <a className="nav-item" href="#">Plantes</a>
      <a className="nav-item" href="#">Inscription</a>
    </div>

  </div>
);

export default Header;
