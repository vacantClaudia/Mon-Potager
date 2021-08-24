import { connect } from 'react-redux';

// import component
import VisitorCalendar from 'src/components/VisitorCalendar';

// import actions creators
import {
  changeIsVisible,
  displayPlants,
  fetchPlants,
  changeCalendarMode,
} from 'src/actions/visitorCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.visitorCalendar.view,
  daynames: state.visitorCalendar.daynames,
  startDayOfWeek: state.visitorCalendar.startDayOfWeek,
  myTheme: state.visitorCalendar.myTheme,
  plantsSchedules: state.visitorCalendar.plantsSchedules,
  plantsCalendars: state.visitorCalendar.plantsCalendars,
  isReadOnly: state.visitorCalendar.isReadOnly,
  isVisible: state.visitorCalendar.plantsSchedules[0].isVisible,
  selected: state.visitorCalendar.selected,
  isCalendarMode: state.visitorCalendar.isCalendarMode,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // == get new state plantsSchedules.isVisible
  changeIsVisible: (newValue) => {
    const action = changeIsVisible(newValue);
    dispatch(action);
  },
  // display plants when region selected
  displayPlants: () => {
    const action = displayPlants();
    dispatch(action);
  },

  fetchPlants: () => {
    const action = fetchPlants();
    dispatch(action);
  },
  // toggle to change display on list
  changeCalendarMode: (newValue) => {
    const action = changeCalendarMode(newValue);
    console.log(`mise à jour de la valeur de changeCalendarMode, newValue=${newValue}`);
    dispatch(action);
  },
}
);

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(VisitorCalendar);
