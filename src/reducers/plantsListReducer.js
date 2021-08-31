// import actions types
import {
  SAVE_PLANTS_LIST,
  DISPLAY_FRUITS,
} from 'src/actions/plantsList';

const initialState = {
  plants: [],
  isFruits: false,
};

function plantsListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_PLANTS_LIST:
      return {
        ...state,
        plants: action.plants,
      };

    case DISPLAY_FRUITS:
      return {
        ...state,
        isFruits: action.value,
      };

    default:
      return state;
  }
}

export default plantsListReducer;
