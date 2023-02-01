import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Missions from '../components/Missions/Missions';

describe('Missions test', () => {
  test('should render all missions', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>
    );
    expect(missions).toMatchSnapshot();
  });
});
