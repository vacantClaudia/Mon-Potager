import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './home.scss';

import VisitorCalendar from 'src/containers/VisitorCalendar';
import Card from 'src/containers/Card';

const Home = ({ plants, getPlantsList, selected }) => {
  useEffect(() => {
    getPlantsList();
  }, []);

  return (
    <div className="home">
      <div className="selectRegion">
        <VisitorCalendar />
      </div>
      {!selected && (
      <div className="plantsList">
        {plants.map((plant) => (
          <Card
            {...plant}
            key={plant.id}
          />
        ))}
      </div>
      )}
    </div>
  );
};

Home.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  getPlantsList: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Home;
