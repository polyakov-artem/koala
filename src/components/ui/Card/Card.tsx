import classNames from 'classnames';
import { getClasses } from '../../../../tests/utils/getClasses';
import { ComponentProps, FC } from 'react';
import './Card.scss';

export type TCardProps = ComponentProps<'article'> & {
  imgSrc: string;
  title?: string;
};

export const CARD = 'card';
export const CARD_IMG_WRAP = `${CARD}__img-wrap`;
export const CARD_IMG = `${CARD}__img`;
export const CARD_TITLE = `${CARD}__title`;

const Card: FC<TCardProps> = (props) => {
  const { className, imgSrc, title = '', ...restProps } = props;
  const classes = getClasses(CARD, className);

  return (
    <article className={classes} {...restProps}>
      <div className={CARD_IMG_WRAP}>
        <img className={classNames(CARD_IMG)} src={imgSrc} alt={title} />
      </div>
      {!!title && <h4 className={CARD_TITLE}>{title}</h4>}
    </article>
  );
};

export default Card;
