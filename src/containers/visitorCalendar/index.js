import { connect } from 'react-redux';

// import component
import VisitorCalendar from 'src/components/VisitorCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.visitorCalendar.view,
  daynames: state.visitorCalendar.daynames,
  startDayOfWeek: state.visitorCalendar.startDayOfWeek,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(VisitorCalendar);
