import React from 'react';

import './plantsList.scss';

const PlantsList = () => (
  <div className="accordion">
    <input type="radio" name="select" className="accordion-select" />
    <div className="accordion-title"><span>Salade</span></div>
    <div className="accordion-content">Elle n'est pas réservée qu'aux lapins!</div>
    <input type="radio" name="select" className="accordion-select" />
    <div className="accordion-title"><span>Tomate</span></div>
    <div className="accordion-content">Bien ronde!</div>
    <input type="radio" name="select" className="accordion-select" />
    <div className="accordion-title"><span>Oignon</span></div>
    <div className="accordion-content">Pense aux freedent...</div>
  </div>
);

export default PlantsList;
