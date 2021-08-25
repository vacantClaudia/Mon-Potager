import { UPDATE_CONNECT_FIELD, CONNECT_USER, SAVE_USER_DATA } from 'src/actions/auth';

const initialState = {
  userName: '',
  password: '',
  logged: false,
  nickname: null,
  token: null,

};

function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_CONNECT_FIELD:
      return {
        ...state,
        [action.name]: action.newValue,
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        logged: true,
        token: action.token,
        nickname: action.nickname,
      };

    default:
      return state;
  }
}
export default authReducer;
