import { ComponentProps, FC, useMemo } from 'react';
import { SECTION, WRAPPER } from '../../../constants/classNames';
import CardWhy from '../CardWhy/CardWhy';
import cardsData from './cardsData';
import classNames from 'classnames';
import './SectionWhy.scss';

export type TSectionWhyProps = ComponentProps<'section'>;

export const SECTION_WHY = 'section-why';
export const SECTION_WHY_GRID = `${SECTION_WHY}__grid`;
export const SECTION_WHY_TITLE = `${SECTION_WHY}__title`;
export const SECTION_WHY_PRE_TITLE = `${SECTION_WHY}__pre-title`;
export const SECTION_WHY_CARD = `${SECTION_WHY}__card`;

const SectionWhy: FC<TSectionWhyProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames(SECTION_WHY, SECTION, className);

  const cards = useMemo(
    () =>
      cardsData.map((data) => <CardWhy className={SECTION_WHY_CARD} key={data.title} {...data} />),
    []
  );

  return (
    <section className={classes} {...restProps}>
      <div className={WRAPPER}>
        <p className={SECTION_WHY_PRE_TITLE}>Why Koala?</p>
        <h2 className={SECTION_WHY_TITLE}>We’re in the business of making things good</h2>
        <div className={SECTION_WHY_GRID}>{cards}</div>
      </div>
    </section>
  );
};

export default SectionWhy;
