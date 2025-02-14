import { getClasses } from '../../../utils/getClasses';
import { ComponentProps, FC } from 'react';
import { TReview } from '../../../types/types';
import { FaCheckCircle } from 'react-icons/fa';
import classNames from 'classnames';
import './ReviewCard.scss';

export type TReviewCardProps = ComponentProps<'article'> & { review: TReview };

export const REVIEW_CARD = 'review-card';
export const REVIEW_CARD_STARS = `${REVIEW_CARD}__stars`;
export const REVIEW_CARD_BODY = `${REVIEW_CARD}__body`;
export const REVIEW_CARD_IMG_WRAP = `${REVIEW_CARD}__img-wrap`;
export const REVIEW_CARD_IMG = `${REVIEW_CARD}__img`;
export const REVIEW_CARD_TITLE = `${REVIEW_CARD}__title`;
export const REVIEW_CARD_TEXT = `${REVIEW_CARD}__text`;
export const REVIEW_CARD_NAME = `${REVIEW_CARD}__name`;
export const REVIEW_CARD_VERIFIED = `${REVIEW_CARD}__verified`;
export const REVIEW_CARD_VERIFIED_ICON = `${REVIEW_CARD}__verified-icon`;

const ReviewCard: FC<TReviewCardProps> = (props) => {
  const { className, review, ...restProps } = props;
  const { stars, title, text, name, imgURL } = review;
  const classes = getClasses(REVIEW_CARD, className);

  return (
    <article className={classes} {...restProps}>
      <div className={REVIEW_CARD_IMG_WRAP}>
        <img className={REVIEW_CARD_IMG} src={imgURL} alt="" />
      </div>
      <div className={REVIEW_CARD_BODY}>
        <p className={classNames(REVIEW_CARD_STARS, 'h4')}>{stars}</p>
        <h4 className={REVIEW_CARD_TITLE}>{title}</h4>
        <p className={REVIEW_CARD_TEXT}>{text}</p>
        <p className={REVIEW_CARD_NAME}>{name}</p>
        <p className={REVIEW_CARD_VERIFIED}>
          <span className={REVIEW_CARD_VERIFIED_ICON}>
            <FaCheckCircle />
          </span>{' '}
          Verified buyer
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
