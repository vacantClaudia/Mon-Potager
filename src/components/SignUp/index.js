import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import UserCalendar from 'src/components/UserCalendar';
import './signUp.scss';

const SignUp = ({
  userName,
  password,
  changeFieldValue,
  handleSubmit,
  isLogged,
}) => (
  <div className="signUp">
    {!isLogged
      ? (
        <form
          className="signUp-form"
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
              changeFieldValue(identifier, newValue);
            }}
            value={userName}
            required
          />
          <Field
            identifier="password"
            placeholder="Mot de passe"
            label="Mot de passe"
            type="password"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={password}
            isRequired
          />
          <button
            type="submit"
            className="signUp-submit"
          >
            Valider
          </button>
        </form>
      )
      : <UserCalendar />}

  </div>
);
SignUp.propTypes = {
//  futur propTypes
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default SignUp;
