import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from 'src/assets/images/Logo2.jpg';

const Header = () => (
  <div className="header">
    <div className="header-picture">
      <img
        src={logo}
        alt="logo-MonPotager"
        className="header-logo"
      />
    </div>

    <div className="nav">
      <NavLink
        to="/"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        Accueil
      </NavLink>
      <NavLink
        to="/plantes"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        Plantes
      </NavLink>
      <NavLink
        to="/inscription"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        Inscription
      </NavLink>
      <NavLink
        to="/connexion"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        Connexion
      </NavLink>
    </div>

  </div>
);

export default Header;
