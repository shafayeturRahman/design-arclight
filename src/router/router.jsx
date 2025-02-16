import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PublicLayout from '../layouts/PrivateLayout';
import PublicRoute from './PublicRoute';
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

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <MainLayout />,
  //   children: [],
  // },
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
]);

export default router;
