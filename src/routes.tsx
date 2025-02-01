import App from './App';
import Home from './components/ui/Home/Home';
import NotFound from './components/ui/NotFound/NotFound';
import { PUBLIC_PATH } from './constants/constants';
import { RouteObject } from 'react-router';

export const MATTRESSES = 'mattresses';
export const SOFA_BEDS = 'sofa-beds';
export const SOFAS = 'sofas';
export const WHY_COALA = 'why-coala';

export const productCategories = [MATTRESSES, SOFA_BEDS, SOFAS];

const routes: RouteObject[] = [
  {
    path: `${PUBLIC_PATH}`,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      ...productCategories.map((category) => ({
        path: category,
        element: <Home />,
      })),
      {
        path: WHY_COALA,
        element: <Home />,
      },
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
