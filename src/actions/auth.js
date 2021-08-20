// === action types
// intention : modifier la valeur de l'un des champs de settings
export const UPDATE_CONNECT_FIELD = 'UPDATE_CONNECT_FIELD';
// === action creators

export const updateConnectField = (name, newValue) => ({
  type: UPDATE_CONNECT_FIELD,
  name: name,
  newValue: newValue,
});
