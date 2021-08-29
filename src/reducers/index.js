import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import authReducer from './authReducer';
import plantsListReducer from './plantsListReducer';
import userCalendarReducer from './userCalendarReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  auth: authReducer,
  plants: plantsListReducer,
  userCalendar: userCalendarReducer,
});

export default rootReducer;
