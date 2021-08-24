// import actions types
import {
  SAVE_PLANTS_LIST,
} from 'src/actions/plantsList';

const initialState = {
  plants: [],
};

function plantsListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_PLANTS_LIST:
      return {
        ...state,
        plants: action.plants,
      };
    default:
      return state;
  }
}

export default plantsListReducer;
