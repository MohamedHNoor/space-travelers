import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from './Mission';
import './Missions.css';
import { getMissions } from '../../redux/mission/mission';

let render = true;

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>.</th>
            <td />
          </tr>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              joined={mission.joined}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Missions;
