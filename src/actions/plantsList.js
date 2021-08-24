// === action types
// == to get plantsList from API
export const GET_PLANTS_LIST = 'GET_PLANTS_LIST';
export const SAVE_PLANTS_LIST = 'SAVE_PLANTS_LIST';

// === action creators
export const getPlantsList = () => ({
  type: GET_PLANTS_LIST,
});

export const savePlantsList = (plants) => ({
  type: SAVE_PLANTS_LIST,
  plants,
});
