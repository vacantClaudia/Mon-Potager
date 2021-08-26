import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({
  title,
  content,
  _embedded,

}) => (

  <div className="card">
    <div className="card-inner">
      <div className="card-front">
        <img
          className="image"
          src={_embedded['wp:featuredmedia'][0].source_url}
          alt="plant"
        />
        <div className="card-content">
          <h2>{title.rendered}</h2>
          <p>facile</p>
        </div>
      </div>
      <div className="card-back">
        <p> {content.rendered} </p>
      </div>
    </div>
  </div>

);

Card.propTypes = {
  title: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  _embedded: PropTypes.object.isRequired,
};

export default Card;
