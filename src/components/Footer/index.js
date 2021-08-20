import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

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
      {/* <NavLink
        to="/inscription"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        Inscription
      </NavLink> */}
      <NavLink
        to="/connection"
        className="nav-item"
        activeClassName="nav-item--active"
        exact
      >
        Connection
      </NavLink>
    </div>
  </>
);

export default Footer;
