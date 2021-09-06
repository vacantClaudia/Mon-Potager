import { connect } from 'react-redux';

// import component
import PlantsListByRegion from 'src/components/PlantsListByRegion';

// import actions creators
import { fetchPlants } from 'src/actions/visitorCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  plantsSchedules: state.visitorCalendar.plantsSchedules,
  selectedRegion: state.visitorCalendar.selectedRegion,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  fetchPlants: () => {
    const action = fetchPlants();
    dispatch(action);
  },
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(PlantsListByRegion);
