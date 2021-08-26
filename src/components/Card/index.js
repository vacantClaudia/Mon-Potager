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
          className="card-picture"
          src={_embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
          alt="plant"
        />
        <div className="card-content">
          <h2>{title.rendered}</h2>
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
  _embedded: PropTypes.string.isRequired,
};

export default Card;
