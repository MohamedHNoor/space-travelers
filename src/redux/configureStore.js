import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionReducer from './mission/mission';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missionReducer,
});

const store = configureStore({
  reducer,
  missionReducer,
  middleware: [thunk],
});

export default store;
