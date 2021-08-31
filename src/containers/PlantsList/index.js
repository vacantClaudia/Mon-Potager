import { connect } from 'react-redux';

// import component
import PlantsList from 'src/components/PlantsList';

// import actions creators
import { getPlantsList, displayFruits } from 'src/actions/plantsList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  plants: state.plants.plants,
  isFruits: state.plants.isFruits,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  getPlantsList: () => {
    const action = getPlantsList();
    dispatch(action);
  },

  displayFruits: (value) => {
    const action = displayFruits(value);
    dispatch(action);
  },
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(PlantsList);
