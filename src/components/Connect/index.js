import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import './connect.scss';

const Connect = ({
  userName,
  password,
  changeFieldValue,
  handleSubmit,
}) => (
  <div className="connect">
    <form
      className="connect-form"
      onSubmit={(event) => {
        event.preventDefault();
        // console.log('soumission du formulaire');
        handleSubmit();
      }}
    >
      <Field
        identifier="userName"
        placeholder="User Name"
        label="Nom d'utilisateur"
        changeField={(identifier, newValue) => {
          console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
          changeFieldValue(identifier, newValue);
        }}
        value={userName}
      />
      <Field
        identifier="password"
        placeholder="Mot de passe"
        label="Mot de passe"
        type="password"
        changeField={(identifier, newValue) => {
          console.log(`changeField sur email : identifier=${identifier}, newValue=${newValue}`);
          changeFieldValue(identifier, newValue);
        }}
        value={password}
      />
      <button
        type="submit"
        className="connect-submit"
      >
        Valider
      </button>
    </form>
  </div>
);
Connect.propTypes = {
//  futur propTypes
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default Connect;
