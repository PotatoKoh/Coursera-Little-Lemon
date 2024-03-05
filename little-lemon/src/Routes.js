import { Navigate, useRoutes } from 'react-router-dom';
// layouts
//

import BookingForm from './Components/Pages/BookingForm';
import HomePage from './Components/Pages/HomePage';
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
        path: '/',
        element: <HomePage/>,
        children: [
          { path: '/BookingForm', element: <BookingForm/> },
        ]
      }
  ]);
}
