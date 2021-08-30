/* eslint-disable no-undef */
/* eslint-disable react/no-danger */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import PlantsList from 'src/containers/PlantsList';

// import './plantsList.scss';

const FruitsList = ({ plants, getPlantsList }) => {
  useEffect(() => {
    getPlantsList();
  }, []);

  return (

    <div className="accordion">
      {plants.filter((plant) => plant.plante_type[0] === 19).map((filteredplant) => (
        <PlantsList
          {...filteredplant}
          key={filteredplant.id}
        />
      ))}
    </div>
  );
};

FruitsList.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  getPlantsList: PropTypes.func.isRequired,
};

export default FruitsList;
