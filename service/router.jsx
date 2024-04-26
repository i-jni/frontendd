import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../src/pages/Error.jsx';
import RootLayout from '../src/layout/RootLayout.jsx';
import Homepage from '../src/pages/Homepage.jsx';
import FormPage from '../src/pages/Form.jsx';
import Home from '../src/pages/Home.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
      
      //
      // {
      //   path: "/test",
      //   element: <Homepage />,
      // },

      // {
      //   path: "/form",
      //   element: <FormPage />,
      // },
    ],
  },
]);

export default router;