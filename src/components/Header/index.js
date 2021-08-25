import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from 'src/assets/images/Logo2.jpg';

const Header = ({ nickname, isAuthentified }) => (
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

        {!isAuthentified
          ? (
            <NavLink
              to="/connexion"
              className="nav-item"
              activeClassName="nav-item--active"
              exact
            > Connexion
            </NavLink>
          )

          : (
            <NavLink
              to="/connexion"
              className="nav-item-connect"
              activeClassName="nav-item--active"
              exact
            > Bonjour {nickname}
            </NavLink>
          )}
      </div>
    </div>
  </>
);

Header.propTypes = {
  nickname: PropTypes.string,
  isAuthentified: PropTypes.bool.isRequired,
};
Header.defaultProps = {
  nickname: null,
};

export default Header;
