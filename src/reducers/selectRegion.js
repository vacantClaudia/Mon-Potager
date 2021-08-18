import { CHANGE_INPUT_VALUE } from 'src/actions/selectRegion';

const initialState = {
  regions: [
    {
      value: 'auvergne-rhône-alpes',
    },
    {
      value: 'bourgogne-franche-comte',
    },
    {
      value: 'Bretagne',
    },
    {
      value: 'centre-val-de-loire',
    },
  ],
};

function selectRegionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        value: action.value,
      };

    default:
      return state;
  }
}

export default selectRegionReducer;
