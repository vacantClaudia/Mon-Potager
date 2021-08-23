// === action types
// == to change plantsSchedules.isVisible to true or false
export const CHANGE_IS_VISIBLE = 'CHANGE_IS_VISIBLE';
export const DISPLAY_PLANTS = 'DISPLAY_PLANTS';

// === action creators
export const changeIsVisible = (value) => ({
  type: CHANGE_IS_VISIBLE,
  value,
});

export const displayPlants = () => ({
  type: DISPLAY_PLANTS,
});
