import { ComponentProps, FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  useAppearancesByCategoryQuery,
  useBestsellersByCategoryQuery,
  useDetailsByCategoryQuery,
  useProductsByCategoryQuery,
  useSizesByCategoryQuery,
} from '../../../store/api';
import { skipToken } from '@reduxjs/toolkit/query';
import { WRAPPER, SECTION } from '../../../constants/classNames';
import { useSearchParams } from 'react-router';
import { decode, encode } from 'ent';
import { productCategories } from '../../../routes';
import ParamTabs from '../ParamTabs/ParamTabs';
import LoaderBlock from '../../shared/LoaderBlock/LoaderBlock';
import SelectorsTab from '../SelectorsTab/SelectorsTab';
import './SectionBestsellers.scss';

export type TSectionBestsellersProps = ComponentProps<'section'>;

export const SECTION_BESTSELLERS = 'section-bestsellers';
export const SECTION_BESTSELLERS_TITLE = `${SECTION_BESTSELLERS}__title`;
export const SECTION_BESTSELLERS_TABS = `${SECTION_BESTSELLERS}__tabs`;

const SectionBestsellers: FC<TSectionBestsellersProps> = (props) => {
  const { className } = props;
  const classes = classNames(SECTION, SECTION_BESTSELLERS, className);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = decode(searchParams.get('category') || '');
  const [category, setCategory] = useState('');
  const sizesByCategoryQuery = useSizesByCategoryQuery(category || skipToken);
  const productsByCategoryQuery = useProductsByCategoryQuery(category || skipToken);
  const detailsByCategoryQuery = useDetailsByCategoryQuery(category || skipToken);
  const appearancesByCategoryQuery = useAppearancesByCategoryQuery(category || skipToken);
  const bestsellersByCategoryQuery = useBestsellersByCategoryQuery(category || skipToken);

  useEffect(() => {
    const isCorrectCategoryParam = productCategories.includes(categoryParam);

    if (isCorrectCategoryParam) {
      setCategory(categoryParam);
    } else {
      const categoryName = productCategories[0];
      setCategory(categoryName);
      setSearchParams(
        (prev) => {
          prev.set('category', encode(categoryName));
          return prev;
        },
        { replace: true }
      );
    }
  }, [categoryParam, setSearchParams]);

  const isLoading =
    !category ||
    sizesByCategoryQuery.isFetching ||
    sizesByCategoryQuery.isUninitialized ||
    productsByCategoryQuery.isFetching ||
    productsByCategoryQuery.isUninitialized ||
    detailsByCategoryQuery.isFetching ||
    detailsByCategoryQuery.isUninitialized ||
    appearancesByCategoryQuery.isFetching ||
    appearancesByCategoryQuery.isUninitialized ||
    bestsellersByCategoryQuery.isFetching ||
    bestsellersByCategoryQuery.isUninitialized;

  const isError =
    sizesByCategoryQuery.isError ||
    productsByCategoryQuery.isError ||
    detailsByCategoryQuery.isError ||
    appearancesByCategoryQuery.isError ||
    bestsellersByCategoryQuery.isError;

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <h1 className={SECTION_BESTSELLERS_TITLE}>Bestsellers</h1>
        {isError ? (
          <LoaderBlock />
        ) : isLoading ? (
          <LoaderBlock loading />
        ) : (
          <>
            <ParamTabs
              className={SECTION_BESTSELLERS_TABS}
              values={productCategories}
              currentValue={category}
              paramName="category"
            />
            <SelectorsTab
              sizesQueryData={sizesByCategoryQuery.data!}
              productsQueryData={productsByCategoryQuery.data!}
              detailsQueryData={detailsByCategoryQuery.data!}
              appearancesQueryData={appearancesByCategoryQuery.data!}
              bestsellersQueryData={bestsellersByCategoryQuery.data!}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default SectionBestsellers;
