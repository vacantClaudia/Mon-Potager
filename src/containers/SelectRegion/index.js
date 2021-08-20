import { connect } from 'react-redux';

import SelectRegion from 'src/components/SelectRegion';

import { changeInputValue, displayPlants } from '../../actions/selectRegion';

const mapStateToProps = (state) => ({
  value: state.selectRegion.data,
  isSelected: state.selectRegion.isSelected,
  // isDisplay: state.selectRegion.isDisplay,
});

const mapDispatchToProps = (dispatch) => ({

  setValue: (value) => {
    const action = changeInputValue(value);
    dispatch(action);
  },

  displayPlants: (value) => {
    const action = displayPlants(value);
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegion);
