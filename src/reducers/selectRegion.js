import { CHANGE_INPUT_VALUE } from 'src/actions/selectRegion';

// import data from 'src/data';

// console.log(data);

const initialState = {
  value: [
    {
      id: 6,
      title: 'salade',
      regions: 'auvergne',
    },
    {
      id: 7,
      title: 'tomate',
      regions: 'auvergne',
    },
    {
      id: 8,
      title: 'oignon',
      regions: 'auvergne',
    },
  ],
};

function selectRegionReducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default selectRegionReducer;
