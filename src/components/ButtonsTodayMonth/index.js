import React from 'react';
import PropTypes from 'prop-types';

// == Import css
import './buttonsTodayMonth.scss';

// == Buttons Component to change months and come back today
const ButtonsTodayMonth = () => (
  <div className="buttonsTodayMonth">
    <button>Today</button>
    <button>Prev</button>
    <button>Next</button>
  </div>
);

ButtonsTodayMonth.propTypes = {
};

// == Export
export default ButtonsTodayMonth;
