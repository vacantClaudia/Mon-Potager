import { connect } from 'react-redux';

// import component
import VisitorCalendar from 'src/components/VisitorCalendar';

// import actions creators
import { changeIsVisible, displayPlants, fetchPlants } from 'src/actions/visitorCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.visitorCalendar.view,
  daynames: state.visitorCalendar.daynames,
  startDayOfWeek: state.visitorCalendar.startDayOfWeek,
  myTheme: state.visitorCalendar.myTheme,
  plantsSchedules: state.visitorCalendar.plantsSchedules,
  plantsCalendars: state.visitorCalendar.plantsCalendars,
  isReadOnly: state.visitorCalendar.isReadOnly,
  selected: state.visitorCalendar.selected,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // == get new state plantsSchedules.isVisible
  changeIsVisible: (newValue) => {
    const action = changeIsVisible(newValue);
    dispatch(action);
  },

  displayPlants: () => {
    const action = displayPlants();
    dispatch(action);
  },

  fetchPlants: () => {
    const action = fetchPlants();
    dispatch(action);
  },
}
);

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(VisitorCalendar);
