// === action types
// intention : modifier la valeur de l'un des champs de settings
export const UPDATE_CONNECT_FIELD = 'UPDATE_CONNECT_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const USER_PLANTS = 'USER_PLANTS';
export const LOG_OUT = 'LOG_OUT';

// === action creators

export const updateConnectField = (name, newValue) => ({
  type: UPDATE_CONNECT_FIELD,
  name: name,
  newValue: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveUserData = (token, nickname, isLogged) => ({
  type: SAVE_USER_DATA,
  token: token,
  nickname: nickname,
  logged: isLogged,
});

export const userPlants = () => ({
  type: USER_PLANTS,
});

export const logOut = () => ({
  type: LOG_OUT,
});
