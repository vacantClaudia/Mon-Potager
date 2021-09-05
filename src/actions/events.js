export const GET_PLANTS_EVENTS = 'GET_PLANTS_EVENTS';
export const SAVE_PLANTS_EVENTS = 'SAVE_PLANTS_EVENTS';
// === action creators

export const getPlantsEvents = () => ({
  type: GET_PLANTS_EVENTS,
});

export const savePlantsEvents = (sowing, planting, harvest, region, period) => ({
  type: SAVE_PLANTS_EVENTS,
  sowing,
  planting,
  harvest,
  region,
  period,
});
