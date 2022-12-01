/* eslint-disable no-param-reassign */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ContinentCard = ({ continents, name, map }) => {
  const TotalCases = () => {
    if (continents.length) {
      const continent = continents.filter((country) => country.continent === name);
      const lastItem = continent.find((country) => country.country === name);
      return lastItem.cases.total;
    }
    return 0;
  };

  return (
    <div className="continent-card">
      <div className="continent-img">
        <img src={map} alt="Africa Map" />
      </div>
      <h2 className="continent-name">{name}</h2>
      <p className="continent-p">
        <span>Total Cases</span>
        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{ TotalCases() }</span>
      </p>
      <Link to={`/continent/${name}`} className="continent-btn">
        View Details
      </Link>
    </div>
  );
};

ContinentCard.propTypes = {
  continents: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
};

export default ContinentCard;
