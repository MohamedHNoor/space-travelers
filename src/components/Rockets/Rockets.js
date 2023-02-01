import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../../redux/rockets/rockets';
import Rocket from './Rocket';
import './Rockets.css';

let render = true;
const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="container">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
};

export default Rockets;
