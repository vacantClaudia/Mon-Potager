// === action types
// intention : modifier la valeur de l'un des champs de settings
export const UPDATE_CONNECT_FIELD = 'UPDATE_CONNECT_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

// === action creators

export const updateConnectField = (name, newValue) => ({
  type: UPDATE_CONNECT_FIELD,
  name: name,
  newValue: newValue,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
