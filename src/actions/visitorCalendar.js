// === action types
// == to change plantsSchedules.isVisible to true or false
export const CHANGE_IS_VISIBLE = 'CHANGE_IS_VISIBLE';
// == to load and save plants from api
export const FETCH_PLANTS = 'FETCH_PLANTS';
export const SAVE_PLANTS = 'SAVE_PLANTS';

// === action creators
export const changeIsVisible = (value) => ({
  type: CHANGE_IS_VISIBLE,
  value,
});

export const fetchPlants = () => ({
  type: FETCH_PLANTS,
});

export const savePlants = (plantsSchedules) => ({
  type: SAVE_PLANTS,
  plantsSchedules: plantsSchedules,
});
