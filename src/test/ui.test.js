import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from "../redux/configureStore";
import Dashboard from '../pages/Dashboard';

describe('UI Tests', () => {
  test('should render Dashboard', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );

    expect(tree).toMatchSnapshot();
  });
});
