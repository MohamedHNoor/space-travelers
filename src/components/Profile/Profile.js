import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved);

  const reservedRocketsstyling = {
    border: rocketsReserved.length === 0 ? 'none' : '1px solid #e3e3e3',
    marginTop: '10px',
  };

  return (
    <div className="profile-container">
      <div className="rockets-container">
        <h2>My Rockets</h2>
        {rocketsReserved.length === 0 && (
          <p className="no-rockets">No Rockets reserved...</p>
        )}
        <ul className="rockets-list" style={reservedRocketsstyling}>
          {rocketsReserved.map((rocket) => (
            <li key={rocket.id} className="rocket-item">
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mission-container">
        <h2>My Missions</h2>
      </div>
    </div>
  );
};

export default Profile;
