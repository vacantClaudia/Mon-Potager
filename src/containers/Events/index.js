import { connect } from 'react-redux';

import Events from 'src/components/Events';
// import actions creators
import { getPlantsEvents } from 'src/actions/events';
import { getPlantsList } from 'src/actions/plantsList';
// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  plants: state.plants.plants,
  selected: state.visitorCalendar.selected,
  selectedRegion: state.visitorCalendar.selectedRegion,
  plantsSchedules: state.visitorCalendar.plantsSchedules,
  sowingEvents: state.events.sowingEvents,
  plantingEvents: state.events.plantingEvents,
  harvestEvents: state.events.harvestEvents,
  region: state.events.region,
  period: state.events.period,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
// nom de la prop à remplir: fonction qui dispatch l'action
  getPlantsList: () => {
    const action = getPlantsList();
    dispatch(action);
  },

  getPlantsEvents: () => {
    const action = getPlantsEvents();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Events);
