import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';
import { Icon } from 'semantic-ui-react';

const Footer = () => (
  <>
    <div className="nav">
      <NavLink
        className="nav-item"
        to="/mentions-legales"
        activeClassName="nav-item--active"
        exact
      >
        Mentions légales
      </NavLink>
      <NavLink
        className="nav-item"
        to="/CGU"
        activeClassName="nav-item--active"
        exact
      >
        CGU
      </NavLink>
      <NavLink
        className="nav-item"
        to="/qui-sommes-nous"
        activeClassName="nav-item--active"
        exact
      >
        Qui sommes-nous?
      </NavLink>
    </div>

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
        to="/connexion"
        className="nav-item "
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
