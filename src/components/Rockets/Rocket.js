import React from 'react';

const Rocket = () => (
  <div className="rocket-list">
    <div className="image-frame">Image</div>
    <div className="rocket-info">
      <h3>Rocket Name</h3>
      <div>
        <span className="reserved-rocket">Reserved</span>
        <span className="rocket-description">Rocket Description</span>
      </div>
      <button type="button" className="reserveBtn">
        Reserve Rocket
      </button>
      <button type="button" className="cancelBtn">
        Cancel Reservation
      </button>
    </div>
  </div>
);

export default Rocket;
