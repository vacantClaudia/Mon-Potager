import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';
import logo from 'src/assets/images/Logo2.jpg';

const Header = ({ nickname, isLogged, handleLogout, isSigned }) => (
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

      {!isLogged && !isSigned
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
          <>
            <NavLink
              to="/connexion"
              className="nav-item-connect"
              activeClassName="nav-item--active"
              exact
            > Bonjour {nickname}
              <button
                type="submit"
                className="logout-form"
                onClick={handleLogout}
              >
                x
              </button>
            </NavLink>

          </>
        )}
    </div>
  </div>
  // </div>
);

Header.propTypes = {
  nickname: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
  isSigned: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
Header.defaultProps = {
  nickname: '',
};
export default Header;
