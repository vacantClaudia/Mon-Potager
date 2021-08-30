import React from 'react';
import PropTypes from 'prop-types';

import './events.scss';

const Events = ({ plantsSchedules }) => {
  // Evenements à venir au potager
  const currentDate = new Date();
  const currentMonthAndYear = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: 'long',
  });
  return (
    <div className="events">
      <h2>Les évenements à venir du potager {currentMonthAndYear}</h2>
      <div className="sowing">
        <p>Les semis à venir</p>
      </div>
      <div className="planting">
        <p>Les plantations à venir</p>
      </div>
      <div className="harvest">
        <p>Les récoltes à venir</p>
        <p>{ plantsSchedules }</p>
      </div>
    </div>
  );
};

Events.propTypes = {
  plantsSchedules: PropTypes.array.isRequired,
};

export default Events;
