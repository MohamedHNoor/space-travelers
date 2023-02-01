import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Profile from '../components/profile/Profile';
import '@testing-library/jest-dom';

describe('Check diplay of missions and rockets on profile', () => {
  test('Check if rockets are rended', () => {
    const myRockets = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    expect(myRockets).toMatchSnapshot();
  });

  test('Check if Missions are rended', () => {
    const myMissions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    expect(myMissions).toMatchSnapshot();
  });
});
