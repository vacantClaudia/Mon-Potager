import React from 'react';
import PropTypes from 'prop-types';

import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

// == VisitorCalendar Component
const VisitorCalendar = ({ view }) => (
  <div className="app">
    <Calendar
      view={view}
    />
  </div>
);

// == Export
export default VisitorCalendar;

VisitorCalendar.propTypes = {
  view: PropTypes.string.isRequired,
}
