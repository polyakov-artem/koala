import classNames from 'classnames';
import { getClasses } from '../../../../tests/utils/getClasses';
import { ComponentProps, FC } from 'react';
import './CardWhy.scss';

export type TCardWhy = ComponentProps<'article'> & {
  imgSrc: string;
  title: string;
  text: string;
};

export const CARD_WHY = 'card-why';
export const CARD_WHY_IMG_WRAP = `${CARD_WHY}__img-wrap`;
export const CARD_WHY_IMG = `${CARD_WHY}__img`;
export const CARD_WHY_TITLE = `${CARD_WHY}__title`;
export const CARD_WHY_TEXT = `${CARD_WHY}__text`;

const CardWhy: FC<TCardWhy> = (props) => {
  const { className, imgSrc, title = '', text, ...restProps } = props;
  const classes = getClasses(CARD_WHY, className);

  return (
    <article className={classes} {...restProps}>
      <div className={CARD_WHY_IMG_WRAP}>
        <img className={classNames(CARD_WHY_IMG)} src={imgSrc} alt={title} />
      </div>
      {!!title && <h4 className={CARD_WHY_TITLE}>{title}</h4>}
      {!!text && <p className={CARD_WHY_TEXT}>{text}</p>}
    </article>
  );
};

export default CardWhy;
