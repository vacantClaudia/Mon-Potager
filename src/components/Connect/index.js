import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './connect.scss';

const Connect = ({ isOpen, toggleOpen }) => (
  <div className="connect">
    <button
      type="button"
      className="connect-toggle"
      onClick={() => {
        console.log({ isOpen });
        toggleOpen();
      }}
    >
      👤
    </button>
    {isOpen && (
    <form className="connect-form">
      <Field
        identifier="username"
        placeholder="User Name"
        label="Nom d'utilisateur"
        changeField={(identifier, newValue) => {
          console.log(`changeField sur username : identifier=${identifier}, newValue=${newValue}`);
        }}
      />
      <Field
        identifier="password"
        placeholder="Mot de passe"
        label="Mot de passe"
        type="password"
        changeField={(identifier, newValue) => {
          console.log(`changeField sur password : identifier=${identifier}, newValue=${newValue}`);
        }}
      />
      <button
        type="submit"
        className="connect-submit"
      >
        Valider
      </button>
    </form>
    )}
  </div>
);
Connect.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};
export default Connect;
