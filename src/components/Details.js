import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllData } from '../redux/world/worldReducer';
import africaImg from '../assets/africa.png';
import europeImg from '../assets/europe.png';
import northImg from '../assets/north-america.png';
import oceaniaImg from '../assets/australia.png';
import southImg from '../assets/south-america.png';
import asiaImg from '../assets/asia.png';

const Details = () => {
  const { name } = useParams();
  const data = useSelector((state) => state.world);
  const dispatch = useDispatch();

  const continent = data?.filter((country) => country.continent === name);
  const lastItem = continent[continent.length - 1];

  const selectImg = () => {
    let img;
    if (name === 'Africa') {
      img = africaImg;
    } else if (name === 'Europe') {
      img = europeImg;
    } else if (name === 'North-America') {
      img = northImg;
    } else if (name === 'Oceania') {
      img = oceaniaImg;
    } else if (name === 'Asia') {
      img = asiaImg;
    } else {
      img = southImg;
    }
    return img;
  };

  useEffect(() => {
    if (!data.length) {
      dispatch(getAllData());
    }
  }, []);

  return (
    <div className="details">
      <div className="continent-map">
        <img src={selectImg()} alt={`${name} Map`} />
      </div>
      <h3 className="detail-name">{name}</h3>
      <p className="detail-total">
        Total Cases
        <span> : </span>
        {lastItem && lastItem.cases.total}
      </p>
      <table className="detail-table">
        <tr>
          <th>Country</th>
          <th>Total Cases</th>
        </tr>
        {continent
          && continent.map((country) => (
            <tr key={country.country}>
              <td>{country.country}</td>
              <td>{country.cases.total}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Details;
