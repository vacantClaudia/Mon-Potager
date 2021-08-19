import { connect } from 'react-redux';

import SelectRegion from 'src/components/SelectRegion';

import { changeInputValue, displayPlants } from '../../actions/selectRegion';

const mapStateToProps = (state) => ({
  auvergne: state.auvergne,
  bourgogne: state.bourgogne,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (newValue) => {
    const action = changeInputValue(newValue);
    dispatch(action);
  },
  displayPlants: (value) => {
    const action = displayPlants(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegion);
