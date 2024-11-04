import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cabaña1 from './pages/Cabaña1';
import Cabaña2 from './pages/Cabaña2';
import Cabaña3 from './pages/Cabaña3';
import Cabaña4 from './pages/Cabaña4';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Error />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
      path: '/cabana-1',
      element: <Cabaña1 />
  },
  {
    path: '/cabana-2',
    element: <Cabaña2 />,
  },
  {
    path: '/cabana-3',
    element: <Cabaña3 />
  },
  {
    path: '/cabana-4',
    element: <Cabaña4 />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,)