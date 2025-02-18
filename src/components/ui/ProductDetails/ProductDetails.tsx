import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { SECTION, WRAPPER } from '../../../constants/classNames';
import { TProduct, TDetails, TAppearance, TSize } from '../../../types/types';
import ProductGallery from '../ProductGallery/ProductGallery';
import ProductInfo from '../ProductInfo/ProductInfo';
import LoaderBlock from '../../shared/LoaderBlock/LoaderBlock';
import './ProductDetails.scss';

export type TProductDetailsProps = ComponentProps<'section'> & {
  product: TProduct;
  details: TDetails;
  productsData: TProduct[];
  appearancesData: TAppearance[];
  sizesData: TSize[];
};

export const PRODUCT_DETAILS = 'product-details';
export const PRODUCT_DETAILS_GRID = `${PRODUCT_DETAILS}__grid`;

const ProductDetails: FC<TProductDetailsProps> = (props) => {
  const { className, product, details, productsData, appearancesData, sizesData } = props;
  const classes = classNames(SECTION, PRODUCT_DETAILS, className);

  const appearance = useMemo(
    () => appearancesData?.find((appearance) => appearance._id === product.appearanceId),
    [appearancesData, product]
  );

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <div className={PRODUCT_DETAILS_GRID}>
          {appearance ? (
            <ProductGallery product={product} appearance={appearance} />
          ) : (
            <LoaderBlock />
          )}
          <ProductInfo
            product={product}
            details={details}
            productsData={productsData}
            sizesData={sizesData}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
