import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  auth: authReducer,
});

export default rootReducer;
