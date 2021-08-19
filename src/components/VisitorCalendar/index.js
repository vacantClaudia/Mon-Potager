import React from 'react';
import { createRef } from 'react';
import PropTypes from 'prop-types';

import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

// == Import css
import './visitorCalendar.scss';

// == VisitorCalendar Component
// == props from initial state visitorCalendarReducer
const VisitorCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
  plantsSchedules,
  isReadOnly,
}) => {
  const calendarRef = createRef();

  const handleClickNextButton = () => {
    const calendarInstance = calendarRef.current.getInstance();

    calendarInstance.next();
  };

  const handleClickPrevButton = () => {
    const calendarInstance = calendarRef.current.getInstance();

    calendarInstance.prev();
  };

  const handleClickTodayButton = () => {
    const calendarInstance = calendarRef.current.getInstance();

    calendarInstance.today();
  };
  return (
    <div className="visiTorCalendar">
      <div className="visiTorCalendar-buttonsTodayMonth">
        {/* click to access to next or prev month or today */}
        <button type="button" className="visiTorCalendar-buttonsTodayMonth-button" onClick={handleClickTodayButton}>Today</button>
        <button type="button" className="visiTorCalendar-buttonsTodayMonth-button" onClick={handleClickPrevButton}>Prev</button>
        <button type="button" className="visiTorCalendar-buttonsTodayMonth-button" onClick={handleClickNextButton}>Next</button>
        <p>Month</p>
      </div>
      <Calendar
      // == i have to understand better this calendarRef
        ref={calendarRef}
      // == view monthly
        view={view}
      // == calendar options
        month={{
          daynames: daynames,
          startDayOfWeek: startDayOfWeek,
        }}
        // == layout calendar and schedules
        theme={myTheme}
        // == plants schedules data
        schedules={plantsSchedules}
        // == possible or not to click on calendar or schedules (boolean)
        isReadOnly={isReadOnly}
      />
    </div>
  );
};

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
