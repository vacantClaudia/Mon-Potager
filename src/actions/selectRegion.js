// === action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

// === action creators
export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value,
});
