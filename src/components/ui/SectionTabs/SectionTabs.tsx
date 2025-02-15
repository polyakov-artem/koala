import { ComponentProps, FC, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import { WRAPPER, SECTION } from '../../../constants/classNames';
import LoaderBlock from '../../shared/LoaderBlock/LoaderBlock';
import { useSearchParams } from 'react-router';
import { decode, encode } from 'ent';
import ProductTab from '../ProductTab/ProductTab';
import ParamTabs from '../ParamTabs/ParamTabs';
import { TAppearance, TDetails, TProduct, TSize } from '../../../types/types';
import './SectionTabs.scss';

export type TSectionTabsProps = ComponentProps<'section'> & {
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
  querySizes?: TSize[];
  queryProducts?: TProduct[];
  queryDetails?: TDetails[];
  queryAppearances?: TAppearance[];
};

export const SIZE_PARAMETER_KEY = 'size';

export const SECTION_TABS = 'section-tabs';
export const SECTION_TABS_PRE_TITLE = `${SECTION_TABS}__pre-title`;
export const SECTION_TABS_TITLE = `${SECTION_TABS}__title`;
export const SECTION_TABS_TABS = `${SECTION_TABS}__tabs`;

const SectionTabs: FC<TSectionTabsProps> = (props) => {
  const {
    className,
    isError,
    isLoading,
    isSuccess,
    querySizes,
    queryProducts,
    queryDetails,
    queryAppearances,
  } = props;
  const classes = classNames(SECTION, SECTION_TABS, className);
  const [searchParams, setSearchParams] = useSearchParams();
  const sizeParamValue = decode(searchParams.get(SIZE_PARAMETER_KEY) || '');
  const [currentSizeName, setCurrentSizeName] = useState('');

  const sizeNames = useMemo(() => {
    if (!isSuccess) return;

    return [...new Set(querySizes!.map((size) => size.name))];
  }, [isSuccess, querySizes]);

  const products = useMemo(() => {
    if (!isSuccess || !currentSizeName) return;

    const sizesWithCurrentSizeName = querySizes!.filter((size) => size.name === currentSizeName);

    return queryProducts!.filter((product) =>
      sizesWithCurrentSizeName.some((size) => product.sizeId === size._id)
    );
  }, [isSuccess, queryProducts, querySizes, currentSizeName]);

  useEffect(() => {
    if (!isSuccess) return;

    const currentSize = querySizes!.find((sizeData) => sizeData.name === sizeParamValue);

    if (currentSize) {
      setCurrentSizeName(sizeParamValue);
    } else {
      const sizeName = querySizes![0].name;
      setCurrentSizeName(sizeName);
      setSearchParams(
        (prev) => {
          prev.set(SIZE_PARAMETER_KEY, encode(sizeName));
          return prev;
        },
        { replace: true }
      );
    }
  }, [sizeParamValue, isSuccess, querySizes, setSearchParams]);

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <p className={SECTION_TABS_PRE_TITLE}>★★★★★ 500,000+ happy customers</p>
        <h1 className={SECTION_TABS_TITLE}>{`Australia's most awarded mattress brand`}</h1>
        {isError ? (
          <LoaderBlock />
        ) : isLoading || !currentSizeName || !sizeNames || !products ? (
          <LoaderBlock loading />
        ) : (
          <>
            <ParamTabs
              className={SECTION_TABS_TABS}
              values={sizeNames}
              currentValue={currentSizeName}
              paramName="size"
            />
            <ProductTab
              products={products}
              details={queryDetails!}
              appearances={queryAppearances!}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default SectionTabs;
