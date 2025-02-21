import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import PrivateRoute from './PrivateRoute';

// Import all pages from pages directory
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import PortfolioDetails from '../pages/PortfolioDetails';
import Contact from '../pages/Contact';
import WebInADay from '../pages/WebInADay';
import AddProject from '../pages/dashboard/AddProject';
import Dashboard from '../pages/dashboard/Dashboard';
import EditProject from '../pages/dashboard/EditProject';

const router = createBrowserRouter([
  // public routes
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/portfolio/:id',
        element: <PortfolioDetails />,
      },
      {
        path: '/website-in-a-day',
        element: <WebInADay />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },

  //private routes
  {
    path: '/',
    element: <PrivateLayout />,
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-project',
        element: (
          <PrivateRoute>
            <AddProject />
          </PrivateRoute>
        ),
      },
      {
        path: '/edit-project/:id',
        element: (
          <PrivateRoute>
            <EditProject />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
