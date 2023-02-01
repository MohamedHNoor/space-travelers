import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Navbar from '../components/Navigation/Navbar';

describe('Navbar test', () => {
  test('should render navigation', () => {
    const navbar = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(navbar).toMatchSnapshot();
  });
});
