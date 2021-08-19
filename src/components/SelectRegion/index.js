import React from 'react';
import PropTypes from 'prop-types';

import './selectRegion.scss';

const SelectRegion = ({ data }) => (
  <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <select
        name="select-group"
        id="select-group"
        value={data.region}
      // onChange={(event) => {
      //   setValue(event.target.auvergne);
      //   console.log(event.target.auvergne);
      // }}
      >
        <option value="">Choisis ta région!</option>
        <option value="1">Auvergne-Rhône-Alpes</option>
        <option value="2">Bourgogne-Franche-Comté</option>
        <option value="3">Bretagne</option>
        <option value="4">Centre-Val de Loire</option>
        <option value="5">Corse</option>
        <option value="6">Grand Est</option>
        <option value="7">Hauts-de-France</option>
        <option value="8">Île-de-France</option>
        <option value="9">Normandie</option>
        <option value="10">Nouvelle-Aquitaine</option>
        <option value="11">Occitanie</option>
        <option value="12">Pays de la Loire</option>
        <option value="13">Provence-Alpes-Côte d'Azur</option>
      </select>
      <ul>
        {data.map((item) => (
          <li
            className="list-item"
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </form>
  </>
);

SelectRegion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      region: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SelectRegion;
