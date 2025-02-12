import classNames from 'classnames';
import { ComponentProps, FC, useMemo } from 'react';
import { TAppearance, TDetails, TProduct, TSize } from '../../../types/types';
import { Link } from 'react-router';
import ProductCard from '../ProductCard/ProductCard';
import './ProductTab.scss';

export type TProductTabProps = ComponentProps<'div'> & {
  sizes: TSize[];
  products: TProduct[];
  details: TDetails[];
  appearances: TAppearance[];
  currentSizeName: string;
};

export const PRODUCT_TAB = 'product-tab';
export const PRODUCT_TAB_GRID = `${PRODUCT_TAB}__grid`;
export const PRODUCT_TAB_LINK = `${PRODUCT_TAB}__link`;

const ProductTab: FC<TProductTabProps> = (props) => {
  const { className, sizes, products, details, appearances, currentSizeName, ...restProps } = props;
  const classes = classNames(PRODUCT_TAB, className);

  const cards = useMemo(() => {
    const tabSizes = sizes.filter((size) => size.name === currentSizeName);
    const tabProducts = products.filter((product) =>
      tabSizes.some((size) => product.sizeId === size._id)
    );
    return tabProducts.map((product) => {
      const productDetails = details.find((item) => item._id === product.detailsId);
      const productAppearance = appearances.find((item) => item._id === product.appearanceId);
      return (
        <Link key={product._id} to={product._id} className={PRODUCT_TAB_LINK}>
          <ProductCard
            product={product}
            details={productDetails}
            appearance={productAppearance}
            withHover
          />
        </Link>
      );
    });
  }, [sizes, products, details, appearances, currentSizeName]);

  return (
    <div className={classes} {...restProps}>
      <div className={PRODUCT_TAB_GRID}> {cards}</div>
    </div>
  );
};

export default ProductTab;
