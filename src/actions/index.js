// === action types
// == for ButttonsTodayMonth sub-component from VisitorCalendar
export const CHANGE_TO_TODAY = 'CHANGE_TO_TODAY';
export const CHANGE_TO_PREV_MONTH = 'CHANGE_TO_PREV_MONTH';
export const CHANGE_TO_NEXT_MONTH = 'CHANGE_TO_NEXT_MONTH';

// === action creators
export const changeToToday = () => ({
  type: CHANGE_TO_TODAY,
});

export const changeToPrevMonth = () => ({
  type: CHANGE_TO_PREV_MONTH,
});

export const changeToNextMonth = () => ({
  type: CHANGE_TO_NEXT_MONTH,
});
