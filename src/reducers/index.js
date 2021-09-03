import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import authReducer from './authReducer';
import plantsListReducer from './plantsListReducer';
import userCalendarReducer from './userCalendarReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  auth: authReducer,
  plants: plantsListReducer,
  userCalendar: userCalendarReducer,
  register: registerReducer,
});

export default rootReducer;
