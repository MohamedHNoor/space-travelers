import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/mission/mission';

function Mission({
  id, name, description, joined,
}) {
  const dispatch = useDispatch();

  const handelJoin = (event) => {
    if (event.target.textContent === 'Join Mission') {
      dispatch(joinMission(event.target.id));
    }
    if (event.target.textContent === 'Leave Mission') {
      dispatch(leaveMission(event.target.id));
    }
  };

  return (
    <>
      <tr key={id} className="row">
        <th>{name}</th>
        <td>{description}</td>
        <td>
          <span className={`status ${!joined ? '' : 'active'}`}>
            {!joined ? 'Not a member' : 'Active member'}
          </span>
        </td>

        <td>
          {' '}
          <button
            id={id}
            type="button"
            onClick={handelJoin}
            className={`joined-btn ${!joined ? '' : 'leave-btn'}`}
          >
            {!joined ? 'Join Mission' : 'Leave Mission'}
          </button>
          {' '}
        </td>
      </tr>
    </>
  );
}

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};
export default Mission;
