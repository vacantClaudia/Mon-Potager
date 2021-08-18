import React from 'react';
import PropTypes from 'prop-types';

import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

// == import sub-component buttons to changer month et come back today
import ButtonsTodayMonth from 'src/containers/VisitorCalendar/ButtonsTodayMonth';

// think to change css et put here the link to visitorCalendar.scss

// == VisitorCalendar Component
// == props from initial state visitorCalendarReducer
const VisitorCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
}) => (
  <div className="visiTorCalendar">
    <ButtonsTodayMonth />
    <Calendar
      view={view}
      month={{
        daynames: daynames,
        startDayOfWeek: startDayOfWeek,
      }}
      theme={myTheme}
    />
  </div>
);

VisitorCalendar.propTypes = {
  view: PropTypes.string.isRequired,
  daynames: PropTypes.array.isRequired,
  startDayOfWeek: PropTypes.number.isRequired,
  // myTheme: PropTypes.arrayOf(
  //   PropTypes.shape({
  //   }).isRequired,
  // ).isRequired,
};

// == Export
export default VisitorCalendar;
