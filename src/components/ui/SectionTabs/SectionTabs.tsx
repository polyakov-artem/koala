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
import { WRAPPER } from '../../../constants/classNames';
import LoaderBlock from '../../shared/LoaderBlock/LoaderBlock';
import { useSearchParams } from 'react-router';
import { decode, encode } from 'ent';
import SizeTabs from '../../shared/SizeTabs/SizeTabs';
import ProductTab from '../ProductTab/ProductTab';
import './SectionTabs.scss';

export type TSectionTabsProps = ComponentProps<'section'>;

export const SECTION_TABS = 'section-tabs';
export const SECTION_TABS_PRE_TITLE = `${SECTION_TABS}__pre-title`;
export const SECTION_TABS_TITLE = `${SECTION_TABS}__title`;
export const SECTION_TABS_TABS = `${SECTION_TABS}__tabs`;

const SectionTabs: FC<TSectionTabsProps> = (props) => {
  const { className } = props;
  const classes = classNames(SECTION_TABS, className);
  const category = getFirstPathNamePart({ hasPublicPath: true });
  const sizesByCategoryQuery = useSizesByCategoryQuery(category ?? skipToken);
  const productsByCategoryQuery = useProductsByCategoryQuery(category ?? skipToken);
  const detailsByCategoryQuery = useDetailsByCategoryQuery(category ?? skipToken);
  const appearancesByCategoryQuery = useAppearancesByCategoryQuery(category ?? skipToken);
  const [searchParams, setSearchParams] = useSearchParams();
  const sizeParamValue = decode(searchParams.get('size') || '');
  const [currentSizeName, setCurrentSizeName] = useState('');

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

  const loadingBlock = useMemo(
    () => (
      <section className={classes}>
        <div className={WRAPPER}>
          <LoaderBlock loading />
        </div>
      </section>
    ),
    [classes]
  );

  const errorBlock = useMemo(
    () => (
      <section className={classes}>
        <div className={WRAPPER}>
          <LoaderBlock />
        </div>
      </section>
    ),
    [classes]
  );

  if (
    !category ||
    sizesByCategoryQuery.isError ||
    productsByCategoryQuery.isError ||
    detailsByCategoryQuery.isError ||
    appearancesByCategoryQuery.isError
  ) {
    return errorBlock;
  }

  if (
    !currentSizeName ||
    sizesByCategoryQuery.isFetching ||
    sizesByCategoryQuery.isUninitialized ||
    productsByCategoryQuery.isFetching ||
    productsByCategoryQuery.isUninitialized ||
    detailsByCategoryQuery.isFetching ||
    detailsByCategoryQuery.isUninitialized ||
    appearancesByCategoryQuery.isFetching ||
    appearancesByCategoryQuery.isUninitialized
  ) {
    return loadingBlock;
  }

  if (
    !sizesByCategoryQuery.data ||
    !productsByCategoryQuery.data ||
    !detailsByCategoryQuery.data ||
    !appearancesByCategoryQuery.data
  ) {
    return errorBlock;
  }

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <p className={SECTION_TABS_PRE_TITLE}>★★★★★ 500,000+ happy customers</p>
        <h1 className={SECTION_TABS_TITLE}>{`Australia's most awarded mattress brand`}</h1>
        <SizeTabs
          className={SECTION_TABS_TABS}
          sizes={sizesByCategoryQuery.data}
          currentSizeName={currentSizeName}
        />
        <ProductTab
          sizes={sizesByCategoryQuery.data}
          products={productsByCategoryQuery.data}
          details={detailsByCategoryQuery.data}
          appearances={appearancesByCategoryQuery.data}
          currentSizeName={currentSizeName}
        />
      </div>
    </section>
  );
};

export default SectionTabs;
