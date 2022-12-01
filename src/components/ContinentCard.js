import React from 'react';
import { Link } from 'react-router-dom';
import africaImg from '../assets/africa.png';

const ContinentCard = () => (
  <div className="continent-card">
    <div className="continent-img">
      <img src={africaImg} alt="Africa Map" />
    </div>
    <h2 className="continent-name">Africa</h2>
    <p>
      <span>Total Cases: </span>
      <span>323686</span>
    </p>
    <Link to="/" className="continent-btn">View Details</Link>
  </div>
);

export default ContinentCard;
