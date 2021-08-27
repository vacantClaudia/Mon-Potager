import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import UserCalendar from 'src/components/UserCalendar';
import './signUp.scss';

const SignUp = ({
  username,
  password,
  confirmPassword,
  email,
  region,
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
            identifier="username"
            placeholder="Nom d'utilisateur"
            label="username"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={username}
            required
          />
          <Field
            identifier="password"
            placeholder="Mot de passe"
            label="password"
            type="password"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={password}
            isRequired
          />
          <Field
            identifier="confirm password"
            placeholder="Confirmez votre mot de passe"
            label="confirm password"
            type="password"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={confirmPassword}
            isRequired
          />
          <Field
            identifier="email"
            placeholder="Email"
            label="email"
            type="email"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={email}
            isRequired
          />
          <Field
            identifier="region"
            placeholder="Région"
            label="region"
            type="region"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={region}
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default SignUp;
