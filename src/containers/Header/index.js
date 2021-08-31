import { connect } from 'react-redux';

import Header from 'src/components/Header';

import { logOut } from 'src/actions/auth';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  nickname: state.auth.nickname,
  isLogged: state.auth.logged,
  isSigned: state.register.signed,
  selected: state.visitorCalendar.selected,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
// nom de la prop à remplir: fonction qui dispatch l'action
  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
