import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllData } from '../redux/world/worldReducer';

const Details = () => {
  const { name } = useParams();
  const data = useSelector((state) => state.world);
  const dispatch = useDispatch();

  const continent = data.filter((country) => country.continent === name);

  useEffect(() => {
    if (!data.length) {
      dispatch(getAllData());
    }
  }, []);

  console.log(continent);

  return (
    <div>
      Details
      <h3>{name}</h3>
    </div>
  );
};

export default Details;
