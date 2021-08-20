import { UPDATE_CONNECT_FIELD } from 'src/actions/auth';

const initialState = {
  userName: '',
  password: '',

};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_CONNECT_FIELD:
      if (action.name === 'userName') {
        return {
          ...state,
          username: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
      };

    default:
      return state;
  }
}
export default authReducer;
