/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import './plantsList.scss';

function createMarkup(data) {
  return { __html: DOMPurify.sanitize(data) };
}

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
            <p className="accordion-content" dangerouslySetInnerHTML={createMarkup(plant.content.rendered)} />
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
