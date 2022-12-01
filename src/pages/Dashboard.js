import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContinentCard from '../components/ContinentCard';
import { getAllData } from '../redux/world/worldReducer';

const Dashboard = () => {
  const data = useSelector((state) => state.world);
  const dispatch = useDispatch();

  // const Africa = data.filter((country) => country.continent === 'Africa');

  useEffect(() => {
    if (!data.length) {
      dispatch(getAllData());
    }
  }, []);

  console.log(data);

  return (
    <div className="dashboard">
      <ContinentCard />
      <ContinentCard />
      <ContinentCard />
      <ContinentCard />
      <ContinentCard />
      <ContinentCard />
    </div>
  );
};

export default Dashboard;
