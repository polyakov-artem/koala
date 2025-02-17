import { getClasses } from '../../../utils/getClasses';
import { ComponentProps, FC, useState } from 'react';
import { TAppearance, TDetails, TProduct, TSize } from '../../../types/types';
import { Link } from 'react-router';
import { getFullPath } from '../../../utils/getFullPath';
import './SelectorCard.scss';

export type TSelectorCardProps = ComponentProps<'article'> & {
  initialProduct: TProduct;
  sizesQueryData: TSize[];
  productsQueryData: TProduct[];
  appearancesQueryData: TAppearance[];
  detailsQueryData: TDetails[];
  withHoverEffect: boolean;
};

export const SELECTOR_CARD = 'selector-card';
export const SELECTOR_CARD_LINK = `${SELECTOR_CARD}__link`;
export const SELECTOR_CARD_INNER = `${SELECTOR_CARD}__inner`;
export const SELECTOR_CARD_IMG_WRAP = `${SELECTOR_CARD}__img-wrap`;
export const SELECTOR_CARD_IMG = `${SELECTOR_CARD}__img`;
export const SELECTOR_CARD_TITLE = `${SELECTOR_CARD}__title`;
export const SELECTOR_CARD_SIZES = `${SELECTOR_CARD}__sizes`;
export const SELECTOR_CARD_SIZE_NAME = `${SELECTOR_CARD}__size-name`;
export const SELECTOR_CARD_PRICE = `${SELECTOR_CARD}__price`;
export const SELECTOR_CARD_STATISTICS = `${SELECTOR_CARD}__statistics`;

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const SelectorCard: FC<TSelectorCardProps> = (props) => {
  const {
    className,
    initialProduct,
    sizesQueryData,
    productsQueryData,
    appearancesQueryData,
    detailsQueryData,
    withHoverEffect,
    ...restProps
  } = props;
  const [product] = useState(initialProduct);
  const appearance = appearancesQueryData.find(
    (appearance) => appearance._id === product.appearanceId
  );
  const details = detailsQueryData.find((details) => product.detailsId === details._id);
  const size = sizesQueryData.find((size) => product.sizeId === size._id);

  const sizesCount = (details?.sizeVariants.length || 1) - 1;

  const equalDetailsProducts = productsQueryData.filter(
    (productData) => productData.detailsId === product.detailsId
  );

  const fromPrice = equalDetailsProducts.map((product) => product.price).sort((a, b) => a - b)[0];
  const rating = details?.rating || 0;

  const classes = getClasses(SELECTOR_CARD, className, { withHoverEffect });
  const cardInner = (
    <div className={SELECTOR_CARD_INNER}>
      <div className={SELECTOR_CARD_IMG_WRAP}>
        <img className={SELECTOR_CARD_IMG} src={appearance?.mediaURL?.[0]} alt={details?.name} />
      </div>
      <p className={SELECTOR_CARD_STATISTICS}>
        {'★'.repeat(Math.round(rating))} {rating} ({details?.reviews})
      </p>
      <h4 className={SELECTOR_CARD_TITLE}>{details?.name}</h4>
      <p className={SELECTOR_CARD_SIZES}>
        <span className={SELECTOR_CARD_SIZE_NAME}>{size?.name}</span>
        {sizesCount > 1 ? ` and ${sizesCount - 1} more` : ''}
      </p>
      <p className={SELECTOR_CARD_PRICE}>From {formatter.format(fromPrice)} </p>
    </div>
  );

  return (
    <article className={classes} {...restProps}>
      <Link
        className={SELECTOR_CARD_LINK}
        to={getFullPath(`${product.category}/${product._id}`)}
        relative="path">
        {cardInner}
      </Link>
    </article>
  );
};

export default SelectorCard;
