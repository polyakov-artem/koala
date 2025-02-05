import classNames from 'classnames';
import { getClasses } from '../../../utils/getClasses';
import { ComponentProps, FC } from 'react';
import './CardConsiderate.scss';

export type TCardConsiderate = ComponentProps<'article'> & {
  imgSrc: string;
  title: string;
  text: string;
};

export const CARD_CONSIDERATE = 'card-considerate';
export const CARD_CONSIDERATE_IMG_WRAP = `${CARD_CONSIDERATE}__img-wrap`;
export const CARD_CONSIDERATE_IMG = `${CARD_CONSIDERATE}__img`;
export const CARD_CONSIDERATE_TITLE = `${CARD_CONSIDERATE}__title`;
export const CARD_CONSIDERATE_TEXT = `${CARD_CONSIDERATE}__text`;

const CardConsiderate: FC<TCardConsiderate> = (props) => {
  const { className, imgSrc, title = '', text, ...restProps } = props;
  const classes = getClasses(CARD_CONSIDERATE, className);

  return (
    <article className={classes} {...restProps}>
      <div className={CARD_CONSIDERATE_IMG_WRAP}>
        <img className={classNames(CARD_CONSIDERATE_IMG)} src={imgSrc} alt={title} />
      </div>
      <h5 className={CARD_CONSIDERATE_TITLE}>{title}</h5>
      <p className={CARD_CONSIDERATE_TEXT}>{text}</p>
    </article>
  );
};

export default CardConsiderate;
