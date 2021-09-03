import { connect } from 'react-redux';

import SignUp from 'src/components/SignUp';

import { updateSignUpField, submitRegister } from 'src/actions/auth';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  username: state.register.username,
  password: state.register.password,
  confirmPassword: state.register.confirmPassword,
  email: state.register.email,
  region: state.register.region,
  isSigned: state.register.signed,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
// nom de la prop à remplir: fonction qui dispatch l'action
  changeFieldValue: (identifier, newValue) => {
    const action = updateSignUpField(identifier, newValue);
    dispatch(action);
  },

  handleSubmit: () => {
    dispatch(submitRegister());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
