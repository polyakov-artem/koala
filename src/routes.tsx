import App from './App';
import Home from './components/ui/Home/Home';
import NotFound from './components/ui/NotFound/NotFound';
import { PUBLIC_PATH } from './constants/constants';
import { RouteObject } from 'react-router';

export const categories = ['mattresses', 'sofa-beds', 'sofas'];

const routes: RouteObject[] = [
  {
    path: `${PUBLIC_PATH}`,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...categories.map((category) => ({
        path: category,
        element: <Home />,
      })),
      {
        path: `*`,
        element: <NotFound />,
      },
      {
        path: `not-found`,
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
