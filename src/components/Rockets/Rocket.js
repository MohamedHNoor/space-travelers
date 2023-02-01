import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rockets';

const Rocket = ({ rocket }) => {
  const {
    name, description, imgs, id,
  } = rocket;

  const dispatch = useDispatch();

  return (
    <div className="rocket-list">
      <div className="image-frame">
        <img src={imgs[0]} alt="rockets" className="rocket-image" />
      </div>
      <div className="rocket-info">
        <h3>{name}</h3>
        <div>
          <p>
            {rocket.reserved && (
              <span className="reserved-rocket">Reserved</span>
            )}
            {description}
          </p>
        </div>
        {!rocket.reserved && (
          <button
            className="reserveBtn"
            type="button"
            onClick={() => dispatch(reserveRocket(id))}
          >
            Reserve Rocket
          </button>
        )}
        {rocket.reserved && (
          <button
            className="cancelBtn"
            type="button"
            onClick={() => dispatch(cancelRocket(id))}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    imgs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Rocket;
