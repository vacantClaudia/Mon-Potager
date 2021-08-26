import { connect } from 'react-redux';

import Home from 'src/components/Home';

import { getPlantsList } from 'src/actions/plantsList';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  plants: state.plants.plants,
  selected: state.visitorCalendar.selected,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
// nom de la prop à remplir: fonction qui dispatch l'action
  getPlantsList: () => {
    const action = getPlantsList();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
