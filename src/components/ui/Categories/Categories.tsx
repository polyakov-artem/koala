import { ComponentProps, FC, useMemo } from 'react';
import { Link } from 'react-router';
import { getFullPath } from '../../../utils/getFullPath';
import { MATTRESSES, productCategories, SOFA_BEDS, SOFAS } from '../../../routes';
import mattressSrc from './../../../assets/images/categories/mattress.webp';
import sofaBedSrc from './../../../assets/images/categories/sofaBed.webp';
import Card from '../Card/Card';
import sofaSrc from './../../../assets/images/categories/sofa.webp';
import { SECTION, WRAPPER } from '../../../constants/classNames';
import { kebabToString } from '../../../utils/kebabToString';
import './Categories.scss';
import classNames from 'classnames';

export type TCategoriesProps = ComponentProps<'section'>;

export const CATEGORIES = 'categories';
export const CATEGORIES_GRID = `${CATEGORIES}__grid`;
export const CATEGORIES_LINK = `${CATEGORIES}__link`;
export const CATEGORIES_TITLE = `${CATEGORIES}__title`;
export const CATEGORIES_CARD = `${CATEGORIES}__card`;

const Categories: FC<TCategoriesProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames(CATEGORIES, SECTION, className);

  const imgSources: Record<string, string> = {
    [MATTRESSES]: mattressSrc,
    [SOFA_BEDS]: sofaBedSrc,
    [SOFAS]: sofaSrc,
  };

  const links = useMemo(
    () =>
      productCategories.map((category) => {
        return (
          <Link
            key={category}
            className={CATEGORIES_LINK}
            to={getFullPath(category)}
            relative="path">
            <Card
              className={CATEGORIES_CARD}
              title={kebabToString(category)}
              imgSrc={imgSources[category]}
            />
          </Link>
        );
      }),
    []
  );

  return (
    <section className={classes} {...restProps}>
      <div className={WRAPPER}>
        <h2 className={CATEGORIES_TITLE}>Categories</h2>
        <div className={CATEGORIES_GRID}>{links}</div>
      </div>
    </section>
  );
};

export default Categories;
