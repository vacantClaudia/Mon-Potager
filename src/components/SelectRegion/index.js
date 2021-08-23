import React from 'react';
import PropTypes from 'prop-types';

import VisitorCalendar from 'src/components/VisitorCalendar';
import './selectRegion.scss';

const SelectRegion = ({
  value,
  setValue,
  selected,
  displayPlants,
}) => (
  <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <select
        name="select-group"
        id="select-group"
        value={value[0]}
        onChange={(event) => {
          setValue(event.currentTarget.value);
          // display a calendar
          displayPlants();
        }}
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
    </form>
    {selected && (<VisitorCalendar />)}
  </>
);

SelectRegion.propTypes = {
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  displayPlants: PropTypes.func.isRequired,
};

export default SelectRegion;
