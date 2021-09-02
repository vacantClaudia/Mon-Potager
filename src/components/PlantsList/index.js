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
            <React.Fragment key={plant.id}>
              <input type="radio" name="select" className="accordion-select" />
              <div className="accordion-title"><span>{plant.title.rendered}</span></div>
              <div className="accordion-content">
                <p className="container-image">
                  <img
                    // eslint-disable-next-line no-underscore-dangle
                    src={plant._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
                    alt="plante"
                    className="accordion-image"
                  />
                </p>
                <p>Semi: {plant.periode_regions['debut_semi-month_aquitaine']} à {plant.periode_regions['fin_semi-month_aquitaine']}</p>
                <p>Plantation: {plant.periode_regions['debut_plant-month_aquitaine']} à {plant.periode_regions['fin_plant-month_aquitaine']}</p>
                <p>Récolte: {plant.periode_regions['debut_recolte-month_aquitaine']} à {plant.periode_regions['fin_recolte-month_aquitaine']}</p>
                <p dangerouslySetInnerHTML={createMarkup(plant.content.rendered)} />
              </div>
            </React.Fragment>
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
      periode_regions: PropTypes.object,
    }).isRequired,
  ).isRequired,
  getPlantsList: PropTypes.func.isRequired,
};

export default PlantsList;
