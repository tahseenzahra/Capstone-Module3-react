import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/configurestore';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Homepg';
import LandingPage from './pages/Landingpg';
import { Details } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'dashboard',
        element: <Home />,
      },
      {
        path: 'details',
        element: <Details />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
