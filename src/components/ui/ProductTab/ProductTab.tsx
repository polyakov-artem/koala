import classNames from 'classnames';
import { ComponentProps, FC, useMemo } from 'react';
import { TAppearance, TDetails, TProduct } from '../../../types/types';
import ProductCard from '../ProductCard/ProductCard';
import './ProductTab.scss';

export type TProductTabProps = ComponentProps<'div'> & {
  products: TProduct[];
  details: TDetails[];
  appearances: TAppearance[];
};

export const PRODUCT_TAB = 'product-tab';
export const PRODUCT_TAB_GRID = `${PRODUCT_TAB}__grid`;

const ProductTab: FC<TProductTabProps> = (props) => {
  const { className, products, details, appearances, ...restProps } = props;
  const classes = classNames(PRODUCT_TAB, className);

  const cards = useMemo(() => {
    return products.map((product) => {
      const productDetails = details.find((item) => item._id === product.detailsId);
      const productAppearance = appearances.find((item) => item._id === product.appearanceId);
      return (
        <ProductCard
          key={product._id}
          product={product}
          details={productDetails}
          appearance={productAppearance}
          withHoverEffect
          isLink
        />
      );
    });
  }, [products, details, appearances]);

  return (
    <div className={classes} {...restProps}>
      <div className={PRODUCT_TAB_GRID}> {cards}</div>
    </div>
  );
};

export default ProductTab;
