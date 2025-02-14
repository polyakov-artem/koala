import { getClasses } from '../../../utils/getClasses';
import { ComponentProps, FC, useState } from 'react';
import { TAppearance, TDetails, TProduct, TSize } from '../../../types/types';
import { Link } from 'react-router';
import { getFullPath } from '../../../utils/getFullPath';
import './SelectorCard.scss';

export type TSelectorCardProps = ComponentProps<'article'> & {
  appearances: TAppearance[];
  details: TDetails;
  sizes: TSize[];
  products: TProduct[];
  withHoverEffect?: boolean;
  initialProduct: TProduct;
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
    appearances,
    details,
    sizes,
    products,
    initialProduct,
    withHoverEffect,
    ...restProps
  } = props;
  const [product] = useState(initialProduct);
  const appearance = appearances.find((appearance) => appearance._id === product.appearanceId);
  const size = sizes.find((size) => size._id === product.sizeId);
  const sizesCount = sizes.filter((size) => size.detailsId === product.detailsId).length;
  const fromPrice = products.map((product) => product.price).sort((a, b) => a - b)[0];

  const classes = getClasses(SELECTOR_CARD, className, { withHoverEffect });
  const cardInner = (
    <div className={SELECTOR_CARD_INNER}>
      <div className={SELECTOR_CARD_IMG_WRAP}>
        <img className={SELECTOR_CARD_IMG} src={appearance?.mediaURL?.[0]} alt={details?.name} />
      </div>
      <p className={SELECTOR_CARD_STATISTICS}>★★★★★ 5 (650)</p>
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
