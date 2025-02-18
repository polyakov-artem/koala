import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { TProduct, TDetails, TSize } from '../../../types/types';
import ProductSizes from '../ProductSizes/ProductSizes';
import Button from '../../shared/Button/Button';
import { FaShoppingCart } from 'react-icons/fa';
import ProductAccordion from '../ProductAccordion/ProductAccordion';
import './ProductInfo.scss';

export type TProductInfoProps = ComponentProps<'div'> & {
  product: TProduct;
  details: TDetails;
  productsData: TProduct[];
  sizesData: TSize[];
};

export const PRODUCT_INFO = 'product-info';
export const PRODUCT_INFO_STATISTICS = `${PRODUCT_INFO}__statistics`;
export const PRODUCT_INFO_REVIEWS_LINK = `${PRODUCT_INFO}__reviews-link`;
export const PRODUCT_INFO_TITLE = `${PRODUCT_INFO}__title`;
export const PRODUCT_INFO_AWARDS = `${PRODUCT_INFO}__awards`;
export const PRODUCT_INFO_AWARD_IMG = `${PRODUCT_INFO}__award-img`;
export const PRODUCT_INFO_PRICE = `${PRODUCT_INFO}__price`;
export const PRODUCT_INFO_SELECTED_SIZE = `${PRODUCT_INFO}__selected-size`;
export const PRODUCT_INFO_CURRENT_SIZE = `${PRODUCT_INFO}__current-size`;
export const PRODUCT_INFO_SIZES = `${PRODUCT_INFO}__sizes`;
export const PRODUCT_INFO_ADD_BTN = `${PRODUCT_INFO}__add-btn`;

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

const ProductInfo: FC<TProductInfoProps> = (props) => {
  const { className, product, details, productsData, sizesData } = props;
  const classes = classNames(PRODUCT_INFO, className);

  const awards = useMemo(() => {
    return details.awardsURL.map((url) => (
      <img className={PRODUCT_INFO_AWARD_IMG} key={url} src={url} alt="Award" />
    ));
  }, [details]);

  const sizeVariants = useMemo(() => {
    return details.sizeVariants.reduce(
      (result, sizeId) => {
        const size = sizesData.find((size) => size._id === sizeId);

        if (size && sizeId === product.sizeId) {
          result[sizeId] = { size, product };
          return result;
        }

        const foundProduct = productsData.find((product) => product.sizeId === sizeId);

        if (size && foundProduct && !result[sizeId]) {
          result[sizeId] = { size, product: foundProduct };
        }

        return result;
      },
      {} as Record<string, { size: TSize; product: TProduct }>
    );
  }, [details.sizeVariants, sizesData, productsData, product]);

  const currentSize = sizeVariants[product.sizeId].size;
  const rating = details.rating || 0;

  return (
    <div className={classes}>
      <p className={PRODUCT_INFO_STATISTICS}>
        {'★'.repeat(Math.round(rating))} {rating} stars{' '}
        <span className={PRODUCT_INFO_REVIEWS_LINK}>({details?.reviews} reviews)</span>
      </p>
      <h1 className={PRODUCT_INFO_TITLE}>{details.name}</h1>
      <p className={PRODUCT_INFO_TITLE}>{details.desc}</p>
      {!!awards.length && <div className={PRODUCT_INFO_AWARDS}>{awards}</div>}
      <p className={PRODUCT_INFO_PRICE}>{formatter.format(product.price)}</p>
      <p className={PRODUCT_INFO_SELECTED_SIZE}>
        Selected size: <span className={PRODUCT_INFO_CURRENT_SIZE}>{currentSize.name}</span>
      </p>
      <ProductSizes
        className={PRODUCT_INFO_SIZES}
        currentSizeId={currentSize._id}
        sizeVariants={sizeVariants}
      />
      <ProductAccordion details={details} size={currentSize} />
      <Button
        className={PRODUCT_INFO_ADD_BTN}
        el="button"
        fullWidth
        uppercase
        theme="tertiary"
        view="secondary">
        Add to cart <FaShoppingCart />
      </Button>
    </div>
  );
};

export default ProductInfo;
