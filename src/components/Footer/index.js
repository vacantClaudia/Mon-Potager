import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
import { User, Home } from 'react-feather';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
  <>
    <nav className="nav-footer">
      <ul>
        <li className="nav-item">
          <a href="#">Mentions légales</a>
        </li>
        <li className="nav-item">
          <a href="#">CGU</a>
        </li>
        <li className="nav-item">
          <a href="#">Qui sommes-nous?</a>
        </li>
      </ul>
    </nav>

    <div className="nav-mobile">
      <NavLink
        to="/"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        <Icon name="home" size="large" className="nav-icon" />
        Accueil
      </NavLink>
      <NavLink
        to="/connection"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        <Icon name="user circle outline" size="big" className="nav-icon" />
        Compte
      </NavLink>
      <NavLink
        to="/plantes"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        <Icon name="leaf" size="large" className="nav-icon" />
        Plantes
      </NavLink>
    </div>
  </>
);

export default Footer;
