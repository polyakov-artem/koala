import { getClasses } from '../../../utils/getClasses';
import { ComponentProps, FC } from 'react';
import Button from '../../shared/Button/Button';
import { TAppearance, TDetails, TProduct } from '../../../types/types';
import { Link } from 'react-router';
import { getFullPath } from '../../../utils/getFullPath';
import './ProductCard.scss';

export type TProductCardProps = ComponentProps<'article'> & {
  appearance?: TAppearance;
  details?: TDetails;
  product: TProduct;
  withHoverEffect?: boolean;
  isLink?: boolean;
};

export const PRODUCT_CARD = 'product-card';
export const PRODUCT_CARD_LINK = `${PRODUCT_CARD}__link`;
export const PRODUCT_CARD_INNER = `${PRODUCT_CARD}__inner`;
export const PRODUCT_CARD_IMG_WRAP = `${PRODUCT_CARD}__img-wrap`;
export const PRODUCT_CARD_IMG = `${PRODUCT_CARD}__img`;
export const PRODUCT_CARD_TITLE = `${PRODUCT_CARD}__title`;
export const PRODUCT_CARD_DESC = `${PRODUCT_CARD}__desc`;
export const PRODUCT_CARD_PRICE = `${PRODUCT_CARD}__price`;
export const PRODUCT_CARD_BTN = `${PRODUCT_CARD}__btn`;

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const ProductCard: FC<TProductCardProps> = (props) => {
  const { className, appearance, details, product, isLink, withHoverEffect, ...restProps } = props;
  const classes = getClasses(PRODUCT_CARD, className, { withHoverEffect });
  const cardInner = (
    <div className={PRODUCT_CARD_INNER}>
      <div className={PRODUCT_CARD_IMG_WRAP}>
        <img className={PRODUCT_CARD_IMG} src={appearance?.mediaURL?.[0]} alt={details?.name} />
      </div>
      <h4 className={PRODUCT_CARD_TITLE}>{details?.name}</h4>
      <p className={PRODUCT_CARD_TITLE}>{details?.desc}</p>
      <p className={PRODUCT_CARD_PRICE}>{formatter.format(product.price)} </p>
      <Button fullWidth el="button" uppercase theme="tertiary" view="primary">
        Shop now
      </Button>
    </div>
  );

  return (
    <article className={classes} {...restProps}>
      {isLink ? (
        <Link
          className={PRODUCT_CARD_LINK}
          to={getFullPath(`${product.category}/${product._id}`)}
          relative="path">
          {cardInner}
        </Link>
      ) : (
        cardInner
      )}
    </article>
  );
};

export default ProductCard;
