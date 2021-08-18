import React from 'react';
import PropTypes from 'prop-types';

// == Import css
import './buttonsTodayMonth.scss';

// == Buttons Component to change months and come back today
const ButtonsTodayMonth = ({
  clickChangeToToday,
  clickChangeToPrevMonth,
  clickChangeToNextMonth
}) => (
  <div className="buttonsTodayMonth">
    {/* When i click on one of these button, i have access to next or prev month or today */}
    <button type="button" className="buttonsTodayMonth-button" onClick={clickChangeToToday}>Today</button>
    <button type="button" className="buttonsTodayMonth-button" onClick={clickChangeToPrevMonth}>Prev</button>
    <button type="button" className="buttonsTodayMonth-button" onClick={clickChangeToNextMonth}>Next</button>
  </div>
);

ButtonsTodayMonth.propTypes = {
  clickChangeToToday: PropTypes.func.isRequired,
  clickChangeToPrevMonth: PropTypes.func.isRequired,
  clickChangeToNextMonth: PropTypes.func.isRequired,
};

// == Export
export default ButtonsTodayMonth;
