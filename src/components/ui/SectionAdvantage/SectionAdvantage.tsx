import { ComponentProps, FC, useMemo } from 'react';
import { isVideoUrl } from '../../../utils/urlCheckers';
import classNames from 'classnames';
import { getClasses } from '../../../utils/getClasses';
import './SectionAdvantage.scss';

export type TSectionAdvantage = ComponentProps<'section'> & {
  mediaURL: string;
  title: string;
  text: string;
  horizontal?: boolean;
  reversed?: boolean;
};

export const SECTION_ADVANTAGE = 'section-advantage';
export const SECTION_ADVANTAGE_TITLE = `${SECTION_ADVANTAGE}__title`;
export const SECTION_ADVANTAGE_BODY = `${SECTION_ADVANTAGE}__body`;
export const SECTION_ADVANTAGE_TEXT = `${SECTION_ADVANTAGE}__text`;
export const SECTION_ADVANTAGE_MEDIA_WRAP = `${SECTION_ADVANTAGE}__media-wrap`;
export const SECTION_ADVANTAGE_MEDIA = `${SECTION_ADVANTAGE}__media`;

const SectionAdvantage: FC<TSectionAdvantage> = (props) => {
  const { className, mediaURL, title, text, horizontal, reversed, ...restProps } = props;
  const classes = getClasses(SECTION_ADVANTAGE, className, { horizontal, reversed });

  const mediaItem = useMemo(() => {
    let media = null;

    if (isVideoUrl(mediaURL)) {
      media = (
        <video className={SECTION_ADVANTAGE_MEDIA} playsInline loop autoPlay preload="none" muted>
          <source src={mediaURL} type="video/mp4" />
        </video>
      );
    } else {
      media = <img className={SECTION_ADVANTAGE_MEDIA} src={mediaURL} alt="" />;
    }

    return media;
  }, [mediaURL]);

  return (
    <section className={classes} {...restProps}>
      <div className={SECTION_ADVANTAGE_BODY}>
        <h2 className={classNames('h1', SECTION_ADVANTAGE_TITLE)}>{title}</h2>
        <p className={SECTION_ADVANTAGE_TEXT}>{text}</p>
      </div>
      <div className={SECTION_ADVANTAGE_MEDIA_WRAP}>{mediaItem}</div>
    </section>
  );
};

export default SectionAdvantage;
