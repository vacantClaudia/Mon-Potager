import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
});

export default rootReducer;
