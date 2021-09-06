// === action types
// == to add user plant schedule in state
export const NEW_PLANT = 'NEW_PLANT';
export const ADD_PLANT = 'ADD_PLANT';
export const SAVE_NEW_PLANT = 'SAVE_NEW_PLANT';
export const SELECT_PLANT = 'SELECT_PLANT';
export const PLANT_TO_DELETE = 'PLANT_TO_DELETE';
export const DELETE_PLANT = 'DELETE_PLANT';
export const FETCH_USER_PLANTS = 'FETCH_USER_PLANTS';
export const SAVE_USER_PLANTS = 'SAVE_USER_PLANTS';

// === action creators
export const newPlant = (plant) => ({
  type: NEW_PLANT,
  plant,
});

export const addPlant = () => ({
  type: ADD_PLANT,
});

export const saveNewPlant = (plant) => ({
  type: SAVE_NEW_PLANT,
  plant,
});

export const selectPlant = (plant) => ({
  type: SELECT_PLANT,
  plant,
});

export const plantToDelete = (plant) => ({
  type: PLANT_TO_DELETE,
  plant,
});

export const deletePlant = (plant) => ({
  type: DELETE_PLANT,
  plant,
});

export const fetchUserPlants = () => ({
  type: FETCH_USER_PLANTS,
});

export const saveUserPlants = (userPlants) => ({
  type: SAVE_USER_PLANTS,
  userPlants,
});
