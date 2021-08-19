import { CHANGE_INPUT_VALUE, DISPLAY_PLANTS } from 'src/actions/selectRegion';

// import data from 'src/data';

// console.log(data);

const initialState = {
  data: [
    {
      id: 6,
      title: 'salade',
      regions: 'auvergne',
    },
    {
      id: 6,
      title: 'tomate',
      regions: 'auvergne',
    },
    {
      id: 6,
      title: 'oignon',
      regions: 'auvergne',
    },
  ],
};

function selectRegionReducer(state = initialState, action = {}) {
  switch (action.type) {
    // case CHANGE_INPUT_VALUE:
    //   return {
    //     ...state,
    //     value: action.value,
    //   };
    // case DISPLAY_PLANTS:
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
}

export default selectRegionReducer;
