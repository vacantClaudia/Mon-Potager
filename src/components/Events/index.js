import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './events.scss';

const Events = ({ plants, getPlantsList, plantsSchedules }) => {
  useEffect(() => {
    getPlantsList();
  }, []);

  // ? selectedRegion => id de la région de visitorCalendar
  // Evenements à venir au potager
  const currentDate = new Date();
  console.log('date du jour: ', currentDate);

  const currentMonth = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    month: 'long',
  });

  return (
    <div className="events">
      <h2 className="events-title">Les évenements à venir du potager {currentMonth}</h2>

      <div className="sowing">
        <p className="sowing-title">Les semis à venir </p>
        <ul>
          <li>Carotte</li>
          <li>Tomate</li>
          <li>Salade</li>
        </ul>
        {plantsSchedules.map((plant) => (console.log('events:', plant)))}
      </div>

      <div className="planting">
        <p className="planting-title">Les plantations à venir</p>
        <ul>
          <li>Carotte</li>
          <li>Tomate</li>
          <li>Salade</li>
        </ul>
      </div>

      <div className="harvest">
        <p className="harvest-title">Les récoltes à venir</p>
        {/* <p>{ plantsSchedules }</p> */}
        <ul>
          <li>Carotte</li>
          <li>Tomate</li>
          <li>Salade</li>
        </ul>
      </div>
    </div>
  );
};

Events.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.object.isRequired,
      content: PropTypes.object.isRequired,
      _embedded: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
  getPlantsList: PropTypes.func.isRequired,
  plantsSchedules: PropTypes.array.isRequired,
};

export default Events;
