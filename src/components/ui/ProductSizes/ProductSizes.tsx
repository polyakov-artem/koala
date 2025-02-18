import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import { TProduct, TSize } from '../../../types/types';
import { getFullPath } from '../../../utils/getFullPath';
import './ProductSizes.scss';

export type TProductSizesProps = ComponentProps<'div'> & {
  currentSizeId: string;
  sizeVariants: Record<string, { size: TSize; product: TProduct }>;
};

export const PRODUCT_SIZES = 'product-sizes';
export const PRODUCT_SIZES_GRID = `${PRODUCT_SIZES}__grid`;
export const PRODUCT_SIZES_ITEM = `${PRODUCT_SIZES}__item`;
export const PRODUCT_SIZES_ITEM_SELECTED = `${PRODUCT_SIZES_ITEM}_selected`;

const ProductSizes: FC<TProductSizesProps> = (props) => {
  const { className, currentSizeId, sizeVariants } = props;

  const classes = classNames(PRODUCT_SIZES, className);

  const sizeLinks = useMemo(() => {
    return Object.values(sizeVariants).map((variant) => {
      const { size, product } = variant;
      const { _id: productId, category } = product;

      const classes =
        size._id === currentSizeId
          ? classNames(PRODUCT_SIZES_ITEM, PRODUCT_SIZES_ITEM_SELECTED)
          : PRODUCT_SIZES_ITEM;

      return (
        <Link
          className={classes}
          key={productId}
          to={getFullPath(category, productId)}
          relative="path">
          {size.name}
        </Link>
      );
    });
  }, [currentSizeId, sizeVariants]);

  return (
    <div className={classes}>
      <div className={PRODUCT_SIZES_GRID}>{sizeLinks}</div>
    </div>
  );
};

export default ProductSizes;
