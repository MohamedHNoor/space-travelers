import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/mission/mission';
import './Profile.css';

let render = true;

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.missionReducer);
  const newArray = missions.filter((mission) => mission.joined === true);

  const reservedRocketsStyling = {
    border: rocketsReserved.length === 0 ? 'none' : '1px solid #e3e3e3',
    marginTop: '10px',
  };

  const joinedMissionsStyling = {
    border: newArray.length === 0 ? 'none' : '1px solid #e3e3e3',
    marginTop: '10px',
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getMissions());
  }, [dispatch]);

  const myProfile = (array) => {
    let output = '';
    if (array.length === 0) {
      output = <p className="no-mission">No Mission joined...</p>;
    } else {
      output = array.map((mission) => (
        <li key={mission.mission_id} className="item">
          {mission.mission_name}
        </li>
      ));
    }
    return output;
  };

  return (
    <div className="profile-container">
      <div className="rockets-container">
        <h2>My Rockets</h2>
        {rocketsReserved.length === 0 && (
          <p className="no-rockets">No Rockets reserved...</p>
        )}
        <ul style={reservedRocketsStyling}>
          {rocketsReserved.map((rocket) => (
            <li key={rocket.id} className="item">
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mission-container">
        <h2>My Missions</h2>
        <ul style={joinedMissionsStyling}>{myProfile(newArray)}</ul>
      </div>
    </div>
  );
};

export default Profile;
