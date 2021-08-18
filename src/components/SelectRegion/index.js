import React from 'react';
import PropTypes from 'prop-types';

import './selectRegion.scss';

const SelectRegion = ({ setValue, displayPlants, auvergne }) => (
  <form>
    <select
      name="select-group"
      id="select-group"
      onChange={(event) => {
        setValue({ auvergne: event.target.value });
        console.log(`${auvergne}: event.target.value`);
        displayPlants();
      }}
    >
      <option value="">Choisis ta région!</option>
      <option value="auvergne-rhône-alpes">Auvergne-Rhône-Alpes</option>
      <option value="bourgogne-franche-comte">Bourgogne-Franche-Comté</option>
      <option value="Bretagne">Bretagne</option>
      <option value="centre-val-de-loire">Centre-Val de Loire</option>
      <option value="corse">Corse</option>
      <option value="grand-est">Grand Est</option>
      <option value="hauts-de-france">Hauts-de-France</option>
      <option value="ile-de-france">Île-de-France</option>
      <option value="normandie">Normandie</option>
      <option value="nouvelle-aquitaine">Nouvelle-Aquitaine</option>
      <option value="occitanie">Occitanie</option>
      <option value="pays-de-la-loire">Pays de la Loire</option>
      <option value="Provence-Alpes-Côte d'Azur">Provence-Alpes-Côte d'Azur</option>
    </select>
  </form>
);

SelectRegion.propTypes = {
  // value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  displayPlants: PropTypes.func.isRequired,
  auvergne: PropTypes.string.isRequired,
};
export default SelectRegion;
