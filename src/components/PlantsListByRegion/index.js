/* eslint-disable react/no-danger */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import './plantsListByRegion.scss';

function createMarkup(data) {
  return { __html: DOMPurify.sanitize(data) };
}

const PlantsListByRegion = ({ plantsSchedules, selectedRegion, fetchPlants }) => {
  // TODO inutile ? recharge la requête au passage du calendrier à la liste
  // useEffect(() => {
  //   fetchPlants();
  // }, []);
  return (
    <div className="accordion">
      {plantsSchedules.map((plant) => {
        let semis = plant.periode_regions['debut_semi-month_aquitaine']?.[0];
        let planting = plant.periode_regions['debut_plant-month_aquitaine']?.[0];
        let harvest = plant.periode_regions['debut_recolte-month_aquitaine']?.[0];

        if (plant.periode_regions['debut_semi-month_aquitaine']?.[0] !== plant.periode_regions['fin_semi-month_aquitaine']?.[0]) {
          semis = `${plant.periode_regions['debut_semi-month_aquitaine']?.[0]} à ${plant.periode_regions['fin_semi-month_aquitaine']?.[0]}`;
        }
        if (plant.periode_regions['debut_plant-month_aquitaine']?.[0] !== plant.periode_regions['fin_plant-month_aquitaine']?.[0]) {
          planting = `${plant.periode_regions['debut_plant-month_aquitaine']?.[0]} à ${plant.periode_regions['fin_plant-month_aquitaine']?.[0]}`;
        }
        if (plant.periode_regions['debut_recolte-month_aquitaine']?.[0] !== plant.periode_regions['fin_recolte-month_aquitaine']?.[0]) {
          harvest = `${plant.periode_regions['debut_recolte-month_aquitaine']?.[0]} à ${plant.periode_regions['fin_recolte-month_aquitaine']?.[0]}`;
        }

        if (plant.calendarId === selectedRegion && plant.period === 'semi') {
          return (
            <React.Fragment key={plant.id}>
              <input type="radio" name="select" className="accordion-select" />
              <div className="accordion-title"><span>{plant.title}</span></div>
              <div className="accordion-content">

                <p className="container-image">
                  <img
                    // eslint-disable-next-line no-underscore-dangle
                    src={plant._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
                    alt="plante"
                    className="accordion-image"
                  />
                </p>

                {semis && (
                  <p className="period-list">
                    Semis: {semis}
                  </p>
                )}

                {planting && (
                  <p className="period-list">
                    Plantation: {planting}
                  </p>
                )}

                {harvest && (
                  <p className="period-list">
                    Récolte: {harvest}
                  </p>
                )}

                <p dangerouslySetInnerHTML={createMarkup(plant.content.rendered)} />

              </div>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

PlantsListByRegion.propTypes = {
  plantsSchedules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.object.isRequired,
      _embedded: PropTypes.object.isRequired,
      periode_regions: PropTypes.object,
    }).isRequired,
  ).isRequired,
  selectedRegion: PropTypes.string.isRequired,
  fetchPlants: PropTypes.func.isRequired,
};

export default PlantsListByRegion;
