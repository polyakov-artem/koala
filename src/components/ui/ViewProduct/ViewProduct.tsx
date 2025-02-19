import { FC, useEffect } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import { useNavigate, useParams } from 'react-router';
import {
  useProductByIdQuery,
  useDetailsByIdQuery,
  useProductsByDetailsQuery,
  useAppearancesByDetailsQuery,
  useSizesByDetailsQuery,
} from '../../../store/api';
import { NOT_FOUND } from '../../../routes';
import { getFullPath } from '../../../utils/getFullPath';
import LoaderBlock from '../../shared/LoaderBlock/LoaderBlock';
import { skipToken } from '@reduxjs/toolkit/query';
import { isNotFoundError } from '../../../utils/isNotFoundError';
import SectionReasons from '../SectionReasons/SectionReasons';
import Advantages from '../Advantages/Advantages';
import './ViewProduct.scss';

export const VIEW_PRODUCT = 'view-product';
export const VIEW_PRODUCT_DETAILS = `${VIEW_PRODUCT}__details`;
export const VIEW_PRODUCT_LOADER_BLOCK = `${VIEW_PRODUCT}__loader-block`;

const ViewProduct: FC = () => {
  const params = useParams();
  const productIdParam = params.id;

  const productByIdQuery = useProductByIdQuery(productIdParam || skipToken);
  const detailsByIdQueryQuery = useDetailsByIdQuery(productByIdQuery.data?.detailsId || skipToken);
  const productsByDetailsQuery = useProductsByDetailsQuery(
    productByIdQuery.data?.detailsId || skipToken
  );
  const appearancesByDetailsQuery = useAppearancesByDetailsQuery(
    productByIdQuery.data?.detailsId || skipToken
  );
  const sizesByDetailsQuery = useSizesByDetailsQuery(productByIdQuery.data?.detailsId || skipToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!productIdParam || isNotFoundError(productByIdQuery?.error)) {
      void navigate(getFullPath(NOT_FOUND), { relative: 'path', replace: true });
    }
  }, [productIdParam, productByIdQuery, navigate]);

  const isLoading =
    productByIdQuery.isFetching ||
    productByIdQuery.isUninitialized ||
    detailsByIdQueryQuery.isFetching ||
    detailsByIdQueryQuery.isUninitialized ||
    productsByDetailsQuery.isFetching ||
    productsByDetailsQuery.isUninitialized ||
    appearancesByDetailsQuery.isFetching ||
    appearancesByDetailsQuery.isUninitialized ||
    sizesByDetailsQuery.isFetching ||
    sizesByDetailsQuery.isUninitialized;

  const isError =
    productByIdQuery.isError ||
    detailsByIdQueryQuery.isError ||
    productsByDetailsQuery.isError ||
    appearancesByDetailsQuery.isError ||
    sizesByDetailsQuery.isError;

  return (
    <main className={VIEW_PRODUCT}>
      {isLoading || !productIdParam ? (
        <LoaderBlock className={VIEW_PRODUCT_LOADER_BLOCK} loading />
      ) : isError ? (
        <LoaderBlock className={VIEW_PRODUCT_LOADER_BLOCK} />
      ) : (
        <>
          <ProductDetails
            className={VIEW_PRODUCT_DETAILS}
            product={productByIdQuery.data!}
            details={detailsByIdQueryQuery.data!}
            productsData={productsByDetailsQuery.data!}
            appearancesData={appearancesByDetailsQuery.data!}
            sizesData={sizesByDetailsQuery.data!}
          />
          <SectionReasons details={detailsByIdQueryQuery.data!} />
          <Advantages details={detailsByIdQueryQuery.data!} />
        </>
      )}
    </main>
  );
};

export default ViewProduct;
