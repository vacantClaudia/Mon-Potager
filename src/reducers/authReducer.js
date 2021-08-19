import { TOGGLE_CONNECT_OPEN } from '../actions/auth';

const initialState = {
  isConnectOpen: true,
};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_CONNECT_OPEN:
      return {
        ...state,
        // on inverse la valeur
        isConnectOpen: !state.isConnectOpen,
      };

    default:
      return state;
  }
}

export default authReducer;
