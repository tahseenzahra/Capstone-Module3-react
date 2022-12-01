import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Dashboard from '../pages/Dashboard';
import ContinentCard from '../components/ContinentCard';
import africaImg from '../assets/africa.png';
import Details from '../components/Details';

describe('UI Tests', () => {
  test('should render Dashboard', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });

  test('should render Continent Card', () => {
    const continents = {
      continent: 'North-America',
      country: 'Barbados',
      population: 288023,
      cases: {
        new: '+410',
        active: 956,
        critical: null,
        recovered: 102435,
        '1M_pop': '360926',
        total: 103955,
      },
    };

    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <ContinentCard
            continents={continents}
            name="Africa"
            map={africaImg}
          />
        </BrowserRouter>
      </Provider>,
    );

    const img = screen.getByRole('img');
    expect(img).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });

  test('should render Details Page', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );

    const img = screen.getByRole('img');
    expect(img).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
