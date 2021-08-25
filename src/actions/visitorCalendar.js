// === action types
// == to change plantsSchedules.isVisible to true or false
export const CHANGE_IS_VISIBLE = 'CHANGE_IS_VISIBLE';
export const DISPLAY_PLANTS = 'DISPLAY_PLANTS';
// == to load and save plants from api
export const FETCH_PLANTS = 'FETCH_PLANTS';
export const SAVE_PLANTS = 'SAVE_PLANTS';

// == toggle to change display
export const CHANGE_CALENDAR_MODE = 'CHANGE_CALENDAR_MODE';

// === action creators
export const changeIsVisible = (value) => ({
  type: CHANGE_IS_VISIBLE,
  value,
});

export const displayPlants = () => ({
  type: DISPLAY_PLANTS,
});

export const fetchPlants = () => ({
  type: FETCH_PLANTS,
});

export const savePlants = (plantsSchedules) => ({
  type: SAVE_PLANTS,
  plantsSchedules: plantsSchedules,
});

export const changeCalendarMode = (value) => ({
  type: CHANGE_CALENDAR_MODE,
  value,
});
