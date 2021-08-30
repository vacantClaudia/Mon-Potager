import { connect } from 'react-redux';

// import component
import FruitsList from 'src/components/FruitsList';

// import actions creators
import { getPlantsList } from 'src/actions/plantsList';

// === mapStateToProps
const mapStateToProps = (state) => ({
  plants: state.plants.plants,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

  getPlantsList: () => {
    const action = getPlantsList();
    dispatch(action);
  },
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(FruitsList);
