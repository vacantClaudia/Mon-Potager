import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './events.scss';

const Events = ({
  getPlantsList,
  plants,
  selectedRegion,
  plantsSchedules,
  selected
}) => {
  // useEffect(() => {
  //   getPlantsList();
  // }, []);
  // console.log('plantsSchedules:', plantsSchedules);

  const sowing = plantsSchedules.filter((plant) => plant.period === 'semi' && plant.calendarId == selectedRegion).filter((plant) => plant.month == 'Septembre');
  console.log(sowing);
  const planting = plantsSchedules.filter((plant) => plant.period === 'plantation').filter((plant) => plant.month == 'Septembre');
  // console.log(planting);
  const harvest = plantsSchedules.filter((plant) => plant.period === 'recolte').filter((plant) => plant.month == 'Septembre');
  // console.log(harvest);

  // Le mois en cours
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
    month: 'long',
  });

  return (
    <div className="events">
      <h2 className="events-title">Les évenements à venir du potager {currentMonth}</h2>

      <div className="sowing">
        <h3 className="sowing-title">Les semis à venir </h3>
        <ul className="plantList">
          {/* {sowing.map((plant) => (
            <li key={plant.id}>{plant.title} : {plant.month}</li>
          ))} */}
        </ul>
      </div>

      <div className="planting">
        <h3 className="planting-title">Les plantations à venir</h3>
        <ul className="plantList">
          {/* {planting.map((plant) => (
            <li key={plant.id}>{plant.title} : {plant.month}</li>
          ))} */}
        </ul>
      </div>

      <div className="harvest">
        <h3 className="harvest-title">Les récoltes à venir</h3>
        <ul className="plantList">
          {/* {harvest.map((plant) => (
            <li key={plant.id}>{plant.title} : {plant.month}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
};

Events.propTypes = {
  getPlantsList: PropTypes.func.isRequired,
  selectedRegion: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  plantsSchedules: PropTypes.array.isRequired,
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.object.isRequired,
      content: PropTypes.object.isRequired,
      _embedded: PropTypes.object.isRequired,
      // media_details: PropTypes.objectOf({
      //   sizes: PropTypes.objectOf({
      //     thumbnail: PropTypes.object.isRequired,
      //   }).isRequired,
      // }).isRequired,
    }).isRequired,
  ).isRequired,
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
