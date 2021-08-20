import { connect } from 'react-redux';

import SelectRegion from 'src/components/SelectRegion';

import { changeInputValue } from '../../actions/selectRegion';

const mapStateToProps = (state) => ({
  value: state.selectRegion.data,
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => {
    const action = changeInputValue(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRegion);
