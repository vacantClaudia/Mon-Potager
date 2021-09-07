// import actions types
import {
  SAVE_PLANTS_EVENTS,
} from 'src/actions/events';

const initialState = {
  sowingEvents: [],
  plantingEvents: [],
  harvestEvents: [],
  region: {},
  period: {},

};

function eventsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SAVE_PLANTS_EVENTS:
      return {
        ...state,
        sowingEvents: action.sowing,
        plantingEvents: action.planting,
        harvestEvents: action.harvest,
        region: action.region,
        period: action.period,
      };
    default:
      return state;
  }
}

export default eventsReducer;
