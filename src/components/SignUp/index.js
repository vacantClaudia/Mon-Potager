import React from 'react';
import PropTypes from 'prop-types';

import Field from 'src/components/Field';
import UserCalendar from 'src/containers/UserCalendar';
import './signUp.scss';

const SignUp = ({
  username,
  password,
  confirmPassword,
  email,
  region,
  changeFieldValue,
  handleSubmit,
  isSigned,
}) => (
  <div className="signUp">
    {!isSigned
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
            label="Votre nom d'utilisateur"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={username}
          />
          <Field
            identifier="password"
            placeholder="Mot de passe"
            label="Votre mot de passe"
            type="password"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={password}
          />
          <Field
            identifier="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            label="Confirmez votre mot de passe"
            type="password"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={confirmPassword}
          />
          <Field
            identifier="email"
            placeholder="Votre email"
            label="Votre email"
            type="email"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={email}
          />
          <Field
            identifier="region"
            placeholder="Votre région"
            label="Votre région"
            type="region"
            changeField={(identifier, newValue) => {
              changeFieldValue(identifier, newValue);
            }}
            value={region}
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
  isSigned: PropTypes.bool.isRequired,
};

export default SignUp;
