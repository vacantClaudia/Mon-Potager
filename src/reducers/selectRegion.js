import { CHANGE_INPUT_VALUE, DISPLAY_PLANTS } from 'src/actions/selectRegion';

const initialState = {
  auvergne: {
    name: 'fraises',
  },
  bourgogne: {
    name: 'pommes',
  },
};

function selectRegionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        value: action.value,
      };
    case DISPLAY_PLANTS:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default selectRegionReducer;
