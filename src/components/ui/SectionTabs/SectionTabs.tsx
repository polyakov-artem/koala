import { ComponentProps, FC, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import {
  useAppearancesByCategoryQuery,
  useDetailsByCategoryQuery,
  useProductsByCategoryQuery,
  useSizesByCategoryQuery,
} from '../../../store/api';
import { getFirstPathNamePart } from '../../../utils/getFirstPathNamePart';
import { skipToken } from '@reduxjs/toolkit/query';
import { WRAPPER, SECTION } from '../../../constants/classNames';
import LoaderBlock from '../../shared/LoaderBlock/LoaderBlock';
import { useSearchParams } from 'react-router';
import { decode, encode } from 'ent';
import ProductTab from '../ProductTab/ProductTab';
import './SectionTabs.scss';
import ParamTabs from '../ParamTabs/ParamTabs';

export type TSectionTabsProps = ComponentProps<'section'>;

export const SECTION_TABS = 'section-tabs';
export const SECTION_TABS_PRE_TITLE = `${SECTION_TABS}__pre-title`;
export const SECTION_TABS_TITLE = `${SECTION_TABS}__title`;
export const SECTION_TABS_TABS = `${SECTION_TABS}__tabs`;

const SectionTabs: FC<TSectionTabsProps> = (props) => {
  const { className } = props;
  const classes = classNames(SECTION, SECTION_TABS, className);
  const category = getFirstPathNamePart({ hasPublicPath: true });
  const sizesByCategoryQuery = useSizesByCategoryQuery(category ?? skipToken);
  const productsByCategoryQuery = useProductsByCategoryQuery(category ?? skipToken);
  const detailsByCategoryQuery = useDetailsByCategoryQuery(category ?? skipToken);
  const appearancesByCategoryQuery = useAppearancesByCategoryQuery(category ?? skipToken);
  const [searchParams, setSearchParams] = useSearchParams();
  const sizeParamValue = decode(searchParams.get('size') || '');
  const [currentSizeName, setCurrentSizeName] = useState('');

  const sizeNames = useMemo(() => {
    return sizesByCategoryQuery.data?.length
      ? [...new Set(sizesByCategoryQuery.data?.map((size) => size.name))]
      : [];
  }, [sizesByCategoryQuery]);

  const products = useMemo(() => {
    const products = productsByCategoryQuery.data;
    const sizes = sizesByCategoryQuery.data;

    if (!products || !sizes || !currentSizeName) {
      return [];
    }
    const tabSizes = sizes.filter((size) => size.name === currentSizeName);

    return products.filter((product) => tabSizes.some((size) => product.sizeId === size._id));
  }, [productsByCategoryQuery, sizesByCategoryQuery, currentSizeName]);

  useEffect(() => {
    if (!sizesByCategoryQuery.data) return;

    const sizeData = sizesByCategoryQuery.data.find((sizeData) => sizeData.name === sizeParamValue);

    if (sizeData) {
      setCurrentSizeName(sizeParamValue);
    } else {
      const sizeName = sizesByCategoryQuery.data[0].name;
      setCurrentSizeName(sizeName);
      setSearchParams(
        (prev) => {
          prev.set('size', encode(sizeName));
          return prev;
        },
        { replace: true }
      );
    }
  }, [sizeParamValue, sizesByCategoryQuery, setSearchParams]);

  const isError =
    !category ||
    sizesByCategoryQuery.isError ||
    productsByCategoryQuery.isError ||
    detailsByCategoryQuery.isError ||
    appearancesByCategoryQuery.isError;

  const isLoading =
    !currentSizeName ||
    sizesByCategoryQuery.isFetching ||
    sizesByCategoryQuery.isUninitialized ||
    productsByCategoryQuery.isFetching ||
    productsByCategoryQuery.isUninitialized ||
    detailsByCategoryQuery.isFetching ||
    detailsByCategoryQuery.isUninitialized ||
    appearancesByCategoryQuery.isFetching ||
    appearancesByCategoryQuery.isUninitialized;

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <p className={SECTION_TABS_PRE_TITLE}>★★★★★ 500,000+ happy customers</p>
        <h1 className={SECTION_TABS_TITLE}>{`Australia's most awarded mattress brand`}</h1>
        {isLoading ? (
          <LoaderBlock loading />
        ) : isError ? (
          <LoaderBlock />
        ) : (
          <>
            <ParamTabs
              className={SECTION_TABS_TABS}
              values={sizeNames}
              currentValue={currentSizeName}
              paramName="size"
            />
            <ProductTab
              sizes={sizesByCategoryQuery.data!}
              products={products}
              details={detailsByCategoryQuery.data!}
              appearances={appearancesByCategoryQuery.data!}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default SectionTabs;
