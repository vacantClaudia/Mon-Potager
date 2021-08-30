import { connect } from 'react-redux';

// import component
import UserCalendar from 'src/components/UserCalendar';

import {
  addPlant
} from 'src/actions/userCalendar';

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
  // == get new state plantsSchedules
  addPlant: (plant) => {
    const action = addPlant(plant);
    dispatch(action);
  },
}
);

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(UserCalendar);
