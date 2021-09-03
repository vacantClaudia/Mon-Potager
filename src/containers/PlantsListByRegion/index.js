import { connect } from 'react-redux';

// import component
import PlantsListByRegion from 'src/components/PlantsListByRegion';

// import actions creators
import { getPlantsList } from 'src/actions/plantsList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  plantsSchedules: state.plants.plantsSchedules,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  getPlantsList: () => {
    const action = getPlantsList();
    dispatch(action);
  },
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(PlantsListByRegion);
