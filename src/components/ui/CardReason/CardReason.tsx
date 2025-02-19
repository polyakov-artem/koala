import { ComponentProps, FC, useMemo } from 'react';
import { isVideoUrl } from '../../../utils/urlCheckers';
import classNames from 'classnames';
import './CardReason.scss';

export type TCardReason = ComponentProps<'article'> & {
  mediaURL: string;
  title: string;
  text: string;
};

export const CARD_REASON = 'card-reason';
export const CARD_REASON_MEDIA_WRAP = `${CARD_REASON}__media-wrap`;
export const CARD_REASON_MEDIA = `${CARD_REASON}__media`;
export const CARD_REASON_TITLE = `${CARD_REASON}__title`;
export const CARD_REASON_TEXT = `${CARD_REASON}__text`;

const CardReason: FC<TCardReason> = (props) => {
  const { className, mediaURL, title = '', text, ...restProps } = props;
  const classes = classNames(CARD_REASON, className);

  const mediaItem = useMemo(() => {
    let media = null;

    if (isVideoUrl(mediaURL)) {
      media = (
        <video className={CARD_REASON_MEDIA} playsInline loop autoPlay preload="none" muted>
          <source src={mediaURL} type="video/mp4" />
        </video>
      );
    } else {
      media = <img className={CARD_REASON_MEDIA} src={mediaURL} alt="Visual media" />;
    }

    return media;
  }, [mediaURL]);

  return (
    <article className={classes} {...restProps}>
      <div className={CARD_REASON_MEDIA_WRAP}>{mediaItem}</div>
      <h4 className={CARD_REASON_TITLE}>{title}</h4>
      <p className={CARD_REASON_TEXT}>{text}</p>
    </article>
  );
};

export default CardReason;
