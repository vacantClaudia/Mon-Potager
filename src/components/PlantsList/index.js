/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './plantsList.scss';

const PlantsList = ({ plants, getPlantsList }) => {
  useEffect(() => {
    getPlantsList();
  }, []);
  return (
    <div className="accordion">
      {plants.map((plant) => {
        return (
          <>
            <input key={plant.id} type="radio" name="select" className="accordion-select" />
            <div className="accordion-title"><span>{plant.title.rendered}</span></div>
            <div className="accordion-content">{plant.content.rendered}</div>
          </>
        );
      })}
    </div>
  );
};

PlantsList.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.object.isRequired,
      content: PropTypes.object.isRequired,
    }).isRequired,
  ).isRequired,
  getPlantsList: PropTypes.func.isRequired,
};

export default PlantsList;
