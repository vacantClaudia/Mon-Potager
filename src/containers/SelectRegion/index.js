import { connect } from 'react-redux';

import SelectRegion from 'src/components/SelectRegion';

import { changeInputValue } from '../../actions/selectRegion';

const mapStateToProps = (state) => ({
  value: state.selectedValue,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (newValue) => {
    const action = changeInputValue(newValue);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegion);
