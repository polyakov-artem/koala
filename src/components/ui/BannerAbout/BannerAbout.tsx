import { getClasses } from '../../../utils/getClasses';
import { ComponentProps, FC } from 'react';
import './BannerAbout.scss';

export type TBannerAboutProps = ComponentProps<'article'> & {
  title: string;
  text: string;
};

export const BANNER_ABOUT = 'banner-about';
export const BANNER_ABOUT_COLUMN = `${BANNER_ABOUT}__column`;
export const BANNER_ABOUT_TITLE = `${BANNER_ABOUT}__title`;
export const BANNER_ABOUT_TEXT = `${BANNER_ABOUT}__text`;

const BannerAbout: FC<TBannerAboutProps> = (props) => {
  const { className, text, title, ...restProps } = props;
  const classes = getClasses(BANNER_ABOUT, className);

  return (
    <article className={classes} {...restProps}>
      <h4 className={BANNER_ABOUT_TITLE}>{title}</h4>
      <p className={BANNER_ABOUT_TEXT}>{text}</p>
    </article>
  );
};

export default BannerAbout;
