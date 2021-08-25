import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import selectRegionReducer from './selectRegion';
import authReducer from './authReducer';
import plantsListReducer from './plantsListReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  selectRegion: selectRegionReducer,
  auth: authReducer,
  plants: plantsListReducer,
});

export default rootReducer;
