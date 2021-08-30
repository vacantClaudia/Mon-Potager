import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './events.scss';

const Events = ({ getPlantsList, plantsSchedules }) => {
  useEffect(() => {
    getPlantsList();
  }, []);
  // ? les plants par action
  const sowing = plantsSchedules.filter((plant) => plant.period === 'semi');
  const planting = plantsSchedules.filter((plant) => plant.period === 'plantation');
  const harvest = plantsSchedules.filter((plant) => plant.period === 'récolte');

  // ? les plants par date début
  const sowingStart = sowing.map((plant) => Date.parse(plant.start));
  const sowingStartMonth = sowingStart.map((date) => new Date(date));
  const sowingMonth = sowingStartMonth.map((date) => date.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    month: 'long',
  }));
  console.log(sowingMonth);
  const plantingStart = planting.map((plant) => plant.start);
  const harvestStart = harvest.map((plant) => plant.start);

  // Evenements à venir au potager
  const currentDate = new Date();

  const currentMonth = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    month: 'long',
  });
 console.log('date du jour: ', currentMonth);
  return (
    <div className="events">
      <h2 className="events-title">Les évenements à venir du potager {currentMonth}</h2>

      <div className="sowing">
        <h3 className="sowing-title">Les semis à venir </h3>
        <ul>
          {sowing.filter((plant) => plant.start === currentMonth + 1)
            .map((plant) => (
              <li key={plant.id}>{plant.title}</li>
            ))}
        </ul>
      </div>

      <div className="planting">
        <h3 className="planting-title">Les plantations à venir</h3>
        <ul>
          {planting.map((plant) => (
            <li>{plant.title}</li>
          ))}
        </ul>
      </div>

      <div className="harvest">
        <h3 className="harvest-title">Les récoltes à venir</h3>
        {/* <p>{ plantsSchedules }</p> */}
        <ul>
          {harvest.map((plant) => (
            <li>{plant.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Events.propTypes = {
  getPlantsList: PropTypes.func.isRequired,
  plantsSchedules: PropTypes.array.isRequired,
};

export default Events;
