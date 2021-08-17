import { connect } from 'react-redux';

// import component
import VisitorCalendar from 'src/components/VisitorCalendar';

// === mapStateToProps
const mapStateToProps = (state) => ({
  view: state.visitorCalendar.view,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(VisitorCalendar);
