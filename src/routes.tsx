import App from './App';
import Home from './components/ui/Home/Home';
import Mattresses from './components/ui/Mattresses/Mattresses';
import NotFound from './components/ui/NotFound/NotFound';
import { PUBLIC_PATH } from './constants/constants';
import { RouteObject } from 'react-router';

export const MATTRESSES = 'mattresses';
export const SOFA_BEDS = 'sofa-beds';
export const SOFAS = 'sofas';
export const WHY_COALA = 'why-coala';
export const NOT_FOUND = 'not-found';

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
      {
        path: MATTRESSES,
        element: <Mattresses />,
      },
      {
        path: WHY_COALA,
        element: <Home />,
      },
      {
        path: `*`,
        element: <NotFound />,
      },
      {
        path: NOT_FOUND,
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
