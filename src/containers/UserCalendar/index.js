import { connect } from 'react-redux';

// import component
import UserCalendar from 'src/components/UserCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.userCalendar.view,
  daynames: state.userCalendar.daynames,
  startDayOfWeek: state.userCalendar.startDayOfWeek,
  myTheme: state.userCalendar.myTheme,
  plantsSchedules: state.userCalendar.plantsSchedules,
  plantsCalendars: state.userCalendar.plantsCalendars,
  isReadOnly: state.userCalendar.isReadOnly,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({

}
);

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(UserCalendar);
