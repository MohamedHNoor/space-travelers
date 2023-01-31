import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/mission';

export default configureStore({
  reducer: {
    missionReducer,
  },
});
