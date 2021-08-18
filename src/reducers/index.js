import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import selectRegionReducer from './selectRegion';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  selectRegion: selectRegionReducer,
});

export default rootReducer;
