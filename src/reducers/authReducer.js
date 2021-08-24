import { UPDATE_CONNECT_FIELD, CONNECT_USER } from 'src/actions/auth';

const initialState = {
  userName: '',
  password: '',
  nickname: '',

};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_CONNECT_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case CONNECT_USER:
      return {
        ...state,
        nickname: action.nickname,
      };

    default:
      return state;
  }
}
export default authReducer;
