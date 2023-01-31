import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/mission/mission';
import './Profile.css';

let render = true;

const Profile = () => {
  const missions = useSelector((state) => state.missionReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!render) {
      return;
    }
    render = false;
    dispatch(getMissions());
  }, [dispatch]);

  const newArray = missions.filter((mission) => mission.joined === true);

  const myProfile = (array) => {
    let output = '';
    if (array.length === 0) {
      output = <div className="no-mission">No mission</div>;
    } else {
      output = array.map((mission) => (
        <li key={mission.mission_id} className="mission-item">
          {mission.mission_name}
        </li>
      ));
    }

    return output;
  };

  return (
    <div className="profile-container">
      <div className="mission-container">
        <h2>My Missions</h2>
        <ul>{myProfile(newArray)}</ul>
      </div>
    </div>
  );
};

export default Profile;
