import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
