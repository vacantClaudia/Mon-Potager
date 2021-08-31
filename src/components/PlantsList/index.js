/* eslint-disable react/no-danger */
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
        if (!plant.isVisible) {
          return (
            <>
              <input type="radio" name="select" className="accordion-select" />
              <div className="accordion-title"><span>{plant.title.rendered}</span></div>
              <div className="accordion-content">
                <img
                  // eslint-disable-next-line no-underscore-dangle
                  src={plant._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url}
                  alt="plante"
                  className="accordion-image"
                />
                <p dangerouslySetInnerHTML={createMarkup(plant.content.rendered)} />
              </div>
            </>
          );
        }
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
      _embedded: PropTypes.object.isRequired,
      // media_details: PropTypes.objectOf({
      //   sizes: PropTypes.objectOf({
      //     thumbnail: PropTypes.object.isRequired,
      //   }).isRequired,
      // }).isRequired,
    }).isRequired,
  ).isRequired,
  getPlantsList: PropTypes.func.isRequired,
};

export default PlantsList;
