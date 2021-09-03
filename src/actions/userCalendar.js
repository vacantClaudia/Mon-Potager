// === action types
// == to add user plant schedule in state
export const ADD_PLANT = 'ADD_PLANT';

// === action creators
export const addPlant = (plant) => ({
  type: ADD_PLANT,
  plant,
});
