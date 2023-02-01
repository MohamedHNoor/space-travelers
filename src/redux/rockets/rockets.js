import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/rockets';

const FETCH_ROCKETS = 'store/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'store/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'store/rockets/CANCEL_ROCKET';

// initial state

const initialState = [];

// calling the API

const fetchRocketsFromAPI = async () => {
  const response = await fetch(URL);
  const rocketsData = await response.json();
  const rockets = rocketsData.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    description: rocket.description,
    imgs: rocket.flickr_images,
  }));
  return rockets;
};

// action creators

export const getRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  try {
    return await fetchRocketsFromAPI();
  } catch (error) {
    return error;
  }
});

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelRocket = (payload) => ({
  type: CANCEL_ROCKET,
  payload,
});

// reducer

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ROCKETS}/fulfilled`:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }
        return rocket;
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketsReducer;
