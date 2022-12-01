import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../redux/world/worldReducer';

const Dashboard = () => {
  const title = 'Dashboard';
  const data = useSelector((state) => state.world);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(getAllData());
    }
  }, []);

  console.log(data);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Dashboard;
