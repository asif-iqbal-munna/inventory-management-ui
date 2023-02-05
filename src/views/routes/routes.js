import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Main = lazy(() => import('../layout/Main'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/other',
        element: <h3>I am other page</h3>,
      },
      {
        path: '/another',
        element: <h3>I am another page</h3>,
      },
    ]
  },
  {
    path: '/sign-in',
    element: <h3>sign in</h3>
  },
  {
    path: '/sign-up',
    element: <h3>sign up</h3>
  },
  {
    path: '*',
    element: <h3>404</h3>
  }
]);

export default router;
