import { connect } from 'react-redux';

// import component
import ButtonsTodayMonth from 'src/components/VisitorCalendar/ButtonsTodayMonth';

// == import action creators // == for ButttonsTodayMonth sub-component from VisitorCalendar
import { changeToToday, changeToPrevMonth, changeToNextMonth } from 'src/actions';

// === mapStateToProps
const mapStateToProps = (state) => ({
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  // fonctions
  clickChangeToToday: () => {
    dispatch(changeToToday());
    console.log('click sur today');
  },
  clickChangeToPrevMonth: () => {
    dispatch(changeToPrevMonth());
    console.log('click sur prev');
  },
  clickChangeToNextMonth: () => {
    dispatch(changeToNextMonth());
    console.log('click sur next');
  },
});

// === export to component
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsTodayMonth);
