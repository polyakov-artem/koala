import classNames from 'classnames';
import { ComponentProps, FC, useMemo } from 'react';
import { TAppearance, TDetails, TProduct, TSize } from '../../../types/types';
import SelectorCard from '../SelectorCard/SelectorCard';
import './SelectorsTab.scss';

export type TSelectorsTabProps = ComponentProps<'div'> & {
  sizes: TSize[];
  products: TProduct[];
  details: TDetails[];
  appearances: TAppearance[];
};

export const SELECTORS_TAB = 'selectors-tab';
export const SELECTORS_TAB_GRID = `${SELECTORS_TAB}__grid`;

const SelectorsTab: FC<TSelectorsTabProps> = (props) => {
  const { className, products, details, sizes, appearances, ...restProps } = props;
  const classes = classNames(SELECTORS_TAB, className);

  const cards = useMemo(() => {
    return details.map((productDetails) => {
      const equalDetailsProducts = products.filter(
        (product) => product.detailsId === productDetails._id
      );
      const initialProduct = equalDetailsProducts[0];

      return (
        <SelectorCard
          initialProduct={initialProduct}
          key={productDetails._id}
          products={equalDetailsProducts}
          details={productDetails}
          sizes={sizes}
          appearances={appearances}
          withHoverEffect
        />
      );
    });
  }, [products, details, appearances, sizes]);

  return (
    <div className={classes} {...restProps}>
      <div className={SELECTORS_TAB_GRID}> {cards}</div>
    </div>
  );
};

export default SelectorsTab;
