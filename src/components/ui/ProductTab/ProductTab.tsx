import classNames from 'classnames';
import { ComponentProps, FC, useMemo } from 'react';
import { TAppearance, TDetails, TProduct, TSize } from '../../../types/types';
import { Link } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import './ProductTab.scss';
import { getFullPath } from '../../../utils/getFullPath';

export type TProductTabProps = ComponentProps<'div'> & {
  sizes: TSize[];
  products: TProduct[];
  details: TDetails[];
  appearances: TAppearance[];
};

export const PRODUCT_TAB = 'product-tab';
export const PRODUCT_TAB_GRID = `${PRODUCT_TAB}__grid`;
export const PRODUCT_TAB_LINK = `${PRODUCT_TAB}__link`;

const ProductTab: FC<TProductTabProps> = (props) => {
  const { className, products, details, appearances, ...restProps } = props;
  const classes = classNames(PRODUCT_TAB, className);

  const cards = useMemo(() => {
    return products.map((product) => {
      const productDetails = details.find((item) => item._id === product.detailsId);
      const productAppearance = appearances.find((item) => item._id === product.appearanceId);
      return (
        <Link
          key={product._id}
          to={getFullPath(`${product.category}/${product._id}`)}
          relative="path"
          className={PRODUCT_TAB_LINK}>
          <ProductCard
            product={product}
            details={productDetails}
            appearance={productAppearance}
            withHover
          />
        </Link>
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
