import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import authReducer from './authReducer';
import plantsListReducer from './plantsListReducer';
import userCalendarReducer from './userCalendarReducer';
import registerReducer from './registerReducer';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  auth: authReducer,
  plants: plantsListReducer,
  userCalendar: userCalendarReducer,
  register: registerReducer,
  events: eventsReducer,
});

export default rootReducer;
