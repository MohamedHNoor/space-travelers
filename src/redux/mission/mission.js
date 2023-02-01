import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const JOIN_MISSION = 'spaceTravelers/mission/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravelers/mission/REMOVE';
const FETCH_MISSION = 'spaceTravelers/mission/FETCH_MISSION';

// API
const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

// Reducer
export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: true };
      });

    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, joined: false };
      });

    case FETCH_MISSION:
      return action.payload;
    default:
      return [...state];
  }
}

// Actions creators

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

// Fetch Missions
export const getMissions = createAsyncThunk(
  FETCH_MISSION,
  async (_, { dispatch }) => {
    const response = await fetch(URL);
    const objectData = await response.json();
    const newObj = objectData.map((mission) => ({ ...mission, joined: false }));
    dispatch({
      type: FETCH_MISSION,
      payload: newObj,
    });
  },
);
