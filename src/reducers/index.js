import { combineReducers } from 'redux';

// == Reducers
import visitorCalendarReducer from './visitorCalendarReducer';
import authReducer from './authReducer';
import plantsListReducer from './plantsListReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  visitorCalendar: visitorCalendarReducer,
  auth: authReducer,
  plants: plantsListReducer,
  register: registerReducer,
});

export default rootReducer;
