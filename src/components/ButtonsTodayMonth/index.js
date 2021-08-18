import React from 'react';
import PropTypes from 'prop-types';

// == Import css
import './buttonsTodayMonth.scss';

// == Buttons Component to change months and come back today
const ButtonsTodayMonth = () => (
  <div className="buttonsTodayMonth">
    <button type="button" className="buttonsTodayMonth-button">Today</button>
    <button type="button" className="buttonsTodayMonth-button">Prev</button>
    <button type="button" className="buttonsTodayMonth-button">Next</button>
  </div>
);

ButtonsTodayMonth.propTypes = {
};

// == Export
export default ButtonsTodayMonth;
