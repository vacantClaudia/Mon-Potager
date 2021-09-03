// === action types
// == to add user plant schedule in state
export const ADD_PLANT = 'ADD_PLANT';
export const FETCH_USER_PLANTS = 'FETCH_USER_PLANTS';
export const SAVE_USER_PLANTS = 'SAVE_USER_PLANTS';

// === action creators
export const addPlant = (plant) => ({
  type: ADD_PLANT,
  plant,
});

export const fetchUserPlants = () => ({
  type: FETCH_USER_PLANTS,
});

export const saveUserPlants = (userPlants) => ({
  type: SAVE_USER_PLANTS,
  userPlants: userPlants,
});
