// == Visitor Calendar initialState : just calendar display, not data schedules
const initialState = {
  // == calendar view monthly
  view: 'month',
  // == day names on the top of the calendar
  daynames: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  // == first day of the week : Lundi
  startDayOfWeek: 1,
};

function visitorCalendarReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default visitorCalendarReducer;
