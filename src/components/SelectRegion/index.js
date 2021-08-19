import React from 'react';
import PropTypes from 'prop-types';

import './selectRegion.scss';

const SelectRegion = ({
  id,
  title,
  region,
}) => (
  <>
    <form
    // onSubmit={(event) => {
    //   event.preventDefault();
    // }}
    >
      <select
        // name="select-group"
        id="select-group"
      // value={auvergne.name}
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

      <div className="list">
        <div>L'id: {id}</div>
        <div>Nom: {title}</div>
        <div>L'id de la région: {region}</div>
      </div>

    </form>
  </>
);

SelectRegion.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  region: PropTypes.array.isRequired,
};

export default SelectRegion;
