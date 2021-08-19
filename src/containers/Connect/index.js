import { connect } from 'react-redux';

import { toggleConnectOpen } from 'src/actions/auth';

import Connect from 'src/components/Connect';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isOpen: state.auth.isConnectOpen,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
// nom de la prop à remplir: fonction qui dispatch l'action
  toggleOpen: () => {
    dispatch(toggleConnectOpen());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Connect);
