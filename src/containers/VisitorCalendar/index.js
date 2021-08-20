import { connect } from 'react-redux';

// import component
import VisitorCalendar from 'src/components/VisitorCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.visitorCalendar.view,
  daynames: state.visitorCalendar.daynames,
  startDayOfWeek: state.visitorCalendar.startDayOfWeek,
  myTheme: state.visitorCalendar.myTheme,
  plantsSchedules: state.visitorCalendar.plantsSchedules,
  plantsCalendars: state.visitorCalendar.plantsCalendars,
  isReadOnly: state.visitorCalendar.isReadOnly,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(VisitorCalendar);
