import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './events.scss';

const Events = ({ getPlantsList, plantsSchedules }) => {
  useEffect(() => {
    getPlantsList();
  }, []);

  // ? les plants par action
  // Je filtre la liste des semis :
  const sowing = plantsSchedules.filter((plant) => plant.period === 'semi');
  // console.log(sowing);

  const planting = plantsSchedules.filter((plant) => plant.period === 'plantation');
  const harvest = plantsSchedules.filter((plant) => plant.period === 'récolte');

  // ? les plants par date début
  // Je converti la date du semis en mois
  const sowingMonth = sowing
    .map((plant) => plant.start)
    .map((plant) => Date.parse(plant))
    .map((date) => new Date(date))
    .map((date) => (date.toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })));

  // console.log(sowingMonth);
  // const sowingFiltered = Object.assign(sowing, sowingMonth);
  // console.log('Object.assign', sowingFiltered);

  const plantingStart = planting.map((plant) => plant.start);
  const harvestStart = harvest.map((plant) => plant.start);

  // Le mois en cours
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  // console.log('date du jour: ', currentMonth);

  // je filtre les semis pour avoir les semis du mois en cours
  const sowingFilterMonth = sowing.filter((plant) => (plant.start) === currentMonth);
  // console.log(sowingFilterMonth);

  return (
    <div className="events">
      <h2 className="events-title">Les évenements à venir du potager {currentMonth}</h2>

      <div className="sowing">
        <h3 className="sowing-title">Les semis à venir </h3>
        <ul className="plantList">

          {sowing.map((plant) => (
            <li>{plant.title} {plant.start} </li>
          ))}
        </ul>
      </div>

      <div className="planting">
        <h3 className="planting-title">Les plantations à venir</h3>
        <ul className="plantList">

          {planting.map((plant) => (
            <li>{plant.title} {plant.start} </li>
          ))}
        </ul>
      </div>

      <div className="harvest">
        <h3 className="harvest-title">Les récoltes à venir</h3>
        <ul className="plantList">
          {harvest.map((plant) => (
            <li>{plant.title} {plant.start}</li>
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

/**
 *   <ul>
          {sowing.map((plant) => (
            <li>{plant.title} {plant.start}</li>
          ))}
          {sowing.filter((plant) => plant.start)
            .map((plant) => Date.parse(plant.start))
            .map((date) => new Date(date))
            .map((date) => (date.toLocaleString('fr-FR', {
                  timeZone: 'Europe/Paris',
                  month: 'long',})
            ))}
        </ul>
 */
