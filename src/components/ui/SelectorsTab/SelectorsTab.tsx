import classNames from 'classnames';
import { ComponentProps, FC, useMemo } from 'react';
import { TAppearance, TDetails, TProduct, TSize } from '../../../types/types';
import SelectorCard from '../SelectorCard/SelectorCard';
import './SelectorsTab.scss';

export type TSelectorsTabProps = ComponentProps<'div'> & {
  sizesQueryData: TSize[];
  productsQueryData: TProduct[];
  detailsQueryData: TDetails[];
  appearancesQueryData: TAppearance[];
  bestsellersQueryData: TProduct[];
};

export const SELECTORS_TAB = 'selectors-tab';
export const SELECTORS_TAB_GRID = `${SELECTORS_TAB}__grid`;

const SelectorsTab: FC<TSelectorsTabProps> = (props) => {
  const {
    className,
    bestsellersQueryData,
    productsQueryData,
    detailsQueryData,
    sizesQueryData,
    appearancesQueryData,
    ...restProps
  } = props;
  const classes = classNames(SELECTORS_TAB, className);

  const cards = useMemo(() => {
    return bestsellersQueryData.map((bestseller) => {
      return (
        <SelectorCard
          initialProduct={bestseller}
          key={bestseller._id}
          sizesQueryData={sizesQueryData}
          appearancesQueryData={appearancesQueryData}
          detailsQueryData={detailsQueryData}
          productsQueryData={productsQueryData}
          withHoverEffect
        />
      );
    });
  }, [
    productsQueryData,
    detailsQueryData,
    appearancesQueryData,
    sizesQueryData,
    bestsellersQueryData,
  ]);

  return (
    <div className={classes} {...restProps}>
      <div className={SELECTORS_TAB_GRID}> {cards}</div>
    </div>
  );
};

export default SelectorsTab;
