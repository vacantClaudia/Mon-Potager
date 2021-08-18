// === action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const DISPLAY_PLANTS = 'DISPLAY_PLANTS';

// === action creators
export const changeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value,
});

export const displayPlants = (auvergne) => ({
  type: DISPLAY_PLANTS,
  auvergne,
});
