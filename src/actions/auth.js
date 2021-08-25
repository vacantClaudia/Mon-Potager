// === action types
// intention : modifier la valeur de l'un des champs de settings
export const UPDATE_CONNECT_FIELD = 'UPDATE_CONNECT_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
// authentification user
export const CONNECT_USER = 'CONNECT_USER';

// === action creators

export const updateConnectField = (name, newValue) => ({
  type: UPDATE_CONNECT_FIELD,
  name: name,
  newValue: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const connectUser = (nickname) => ({
  type: CONNECT_USER,
  nickname: nickname,
});
