import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import selectRegionReducer from './selectRegion';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  selectRegion: selectRegionReducer,
  auth: authReducer,
});

export default rootReducer;
