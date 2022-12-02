/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinentCard from '../components/ContinentCard';
import { getAllData } from '../redux/world/worldReducer';
import africaImg from '../assets/africa.png';
import europeImg from '../assets/europe.png';
import northImg from '../assets/north-america.png';
import oceaniaImg from '../assets/australia.png';
import southImg from '../assets/south-america.png';
import asiaImg from '../assets/asia.png';

const Dashboard = () => {
  const data = useSelector((state) => state.world);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(getAllData());
    }
  }, []);

  return (
    <div className="dashboard">
      <ContinentCard continents={data} name="Africa" map={africaImg} />
      <ContinentCard continents={data} name="Europe" map={europeImg} />
      <ContinentCard continents={data} name="North-America" map={northImg} />
      <ContinentCard continents={data} name="Oceania" map={oceaniaImg} />
      <ContinentCard continents={data} name="Asia" map={asiaImg} />
      <ContinentCard continents={data} name="South-America" map={southImg} />
    </div>
  );
};

export default Dashboard;
