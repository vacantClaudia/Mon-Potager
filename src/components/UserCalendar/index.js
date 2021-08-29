import React, { createRef } from 'react';
import PropTypes from 'prop-types';

// == import externals libraries
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

import { ChevronLeft, ChevronRight } from 'react-feather';

// == Import css
import './userCalendar.scss';

// == UserCalendar Component
// == props from initial state userCalendarReducer
const UserCalendar = ({
  view,
  daynames,
  startDayOfWeek,
  myTheme,
  plantsSchedules,
  isReadOnly,
  plantsCalendars,
}) => {
  // == ref to calendar to get instance
  const calendarRef = createRef();

  // == get current date to display on the top of calendar
  // == today's date
  const currentDate = new Date();
  // == Format the date to see just month and year, and change timezone to Paris
  const currentMonthAndYear = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'long',
  });

  // == functions to dynamise buttons today prev and next month
  // == and display date on the top of calendar
  const handleClickTodayButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;
    calendarInstance.today();
    const getDate = document.querySelector('.userCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickPrevButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;
    calendarInstance.prev();
    const getDate = document.querySelector('.userCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  const handleClickNextButton = () => {
    const calendarInstance = calendarRef.current.calendarInst;
    calendarInstance.next();
    const getDate = document.querySelector('.userCalendar-currentMonth');
    // eslint-disable-next-line no-underscore-dangle
    getDate.textContent = calendarInstance._renderDate._date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
    });
  };

  return (
    <div className="userCalendar">
      <div className="userCalendar-buttonsTodayMonth">
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickTodayButton}>Today</button>
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickPrevButton}>
          <ChevronLeft size={12} />
        </button>
        <button type="button" className="userCalendar-buttonsTodayMonth-button" onClick={handleClickNextButton}>
          <ChevronRight size={12} />
        </button>
        <p className="userCalendar-currentMonth">{currentMonthAndYear}</p>
      </div>
      <Calendar
        // == I put key here for new render
        // == ref to current calendar ?
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
        // == plants calendars data
        calendars={plantsCalendars}
        // == possible or not to click on calendar or schedules (boolean)
        isReadOnly={isReadOnly}
      />
    </div>
  );
};

UserCalendar.propTypes = {
  // view: PropTypes.string.isRequired,
  // daynames: PropTypes.array.isRequired,
  // startDayOfWeek: PropTypes.number.isRequired,
  // isReadOnly: PropTypes.bool.isRequired,
};

// == Export
export default UserCalendar;
