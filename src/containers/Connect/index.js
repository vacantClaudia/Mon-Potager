import { connect } from 'react-redux';

import Connect from 'src/components/Connect';

import { updateConnectField, submitLogin } from 'src/actions/auth';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  userName: state.auth.userName,
  password: state.auth.password,
  isLogged: state.auth.logged,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
// nom de la prop à remplir: fonction qui dispatch l'action
  changeFieldValue: (identifier, newValue) => {
    const action = updateConnectField(identifier, newValue);
    dispatch(action);
  },

  handleSubmit: () => {
    dispatch(submitLogin());
  },

});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Connect);
