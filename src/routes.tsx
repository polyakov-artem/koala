import App from './App';
import ViewHome from './components/ui/ViewHome/ViewHome';
import ViewNotFound from './components/ui/ViewNotFound/ViewNotFound';
import ViewMattresses from './components/ui/ViewMattresses/ViewMattresses';
import { PUBLIC_PATH } from './constants/constants';
import { RouteObject } from 'react-router';
import ViewProduct from './components/ui/ViewProduct/ViewProduct';

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
        element: <ViewHome />,
      },
      {
        path: MATTRESSES,
        element: <ViewMattresses />,
      },
      {
        path: `${MATTRESSES}/:id`,
        element: <ViewProduct />,
      },
      {
        path: WHY_COALA,
        element: <ViewHome />,
      },
      {
        path: `*`,
        element: <ViewNotFound />,
      },
      {
        path: NOT_FOUND,
        element: <ViewNotFound />,
      },
    ],
  },
];

export default routes;
