import { FC } from 'react';
import SectionTabs from '../SectionTabs/SectionTabs';
import { getFirstPathNamePart } from '../../../utils/getFirstPathNamePart';
import {
  useAppearancesByCategoryQuery,
  useDetailsByCategoryQuery,
  useProductsByCategoryQuery,
  useSizesByCategoryQuery,
} from '../../../store/api';
import './Mattresses.scss';

export const MATTRESSES = 'mattresses';

const Mattresses: FC = () => {
  const category = getFirstPathNamePart({ hasPublicPath: true }) || '';
  const sizesByCategoryQuery = useSizesByCategoryQuery(category);
  const productsByCategoryQuery = useProductsByCategoryQuery(category);
  const detailsByCategoryQuery = useDetailsByCategoryQuery(category);
  const appearancesByCategoryQuery = useAppearancesByCategoryQuery(category);

  const isLoading =
    sizesByCategoryQuery.isFetching ||
    sizesByCategoryQuery.isUninitialized ||
    productsByCategoryQuery.isFetching ||
    productsByCategoryQuery.isUninitialized ||
    detailsByCategoryQuery.isFetching ||
    detailsByCategoryQuery.isUninitialized ||
    appearancesByCategoryQuery.isFetching ||
    appearancesByCategoryQuery.isUninitialized;

  const isError =
    sizesByCategoryQuery.isError ||
    productsByCategoryQuery.isError ||
    detailsByCategoryQuery.isError ||
    appearancesByCategoryQuery.isError;

  const isSuccess = !isError && !isLoading;

  return (
    <main className={MATTRESSES}>
      <SectionTabs
        isSuccess={isSuccess}
        isError={isError}
        isLoading={isLoading}
        querySizes={sizesByCategoryQuery.data}
        queryProducts={productsByCategoryQuery.data}
        queryDetails={detailsByCategoryQuery.data}
        queryAppearances={appearancesByCategoryQuery.data}
      />
    </main>
  );
};

export default Mattresses;
