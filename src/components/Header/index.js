import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './header.scss';
import logo from 'src/assets/images/Logo2.png';

const Header = ({ nickname, isLogged, handleLogout, selected }) => (
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

      {!isLogged
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
      { selected && (
        <NavLink
          to="/evenements"
          className="nav-item"
          activeClassName="nav-item--active"
          exact
        >
          <Icon name="bell outline" size="large" className="nav-icon" />
        </NavLink>
      )}
    </div>
  </div>

);

Header.propTypes = {
  nickname: PropTypes.string,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
Header.defaultProps = {
  nickname: '',
};
export default Header;
