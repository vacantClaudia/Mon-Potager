import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import './card.scss';

const Card = ({
  title,
  excerpt,
  _embedded,

}) => {
  function createMarkup(data) {
    return { __html: DOMPurify.sanitize(data) };
  }
  return (
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
          <p dangerouslySetInnerHTML={createMarkup(excerpt.rendered)} />
        </div>
      </div>
    </div>

  );
};

Card.propTypes = {
  title: PropTypes.object.isRequired,
  excerpt: PropTypes.object.isRequired,
  _embedded: PropTypes.object.isRequired,
};

export default Card;
