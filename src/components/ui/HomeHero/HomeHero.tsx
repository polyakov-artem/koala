import { ComponentProps, FC, useEffect, useState } from 'react';
import Button from '../../shared/Button/Button';
import classNames from 'classnames';
import { BG_OBJECT, SECTION } from '../../../constants/classNames';
import posterUrl from './../../../assets/images/hero-poster.png';
import desktopVideoUrl from './../../../assets/video/hero_desktop.mp4';
import mobileVideoUrl from './../../../assets/video/hero_mobile.mp4';
import './HomeHero.scss';

export const HOME_HERO = 'home-hero';
export const HOME_HERO_WRAPPER = `${HOME_HERO}__wrapper`;
export const HOME_HERO_BLOCK = `${HOME_HERO}__block`;
export const HOME_HERO_BLOCK_TITLE = `${HOME_HERO}__block-title`;
export const HOME_HERO_BLOCK_TEXT = `${HOME_HERO}__block-text`;
export const HOME_HERO_BLOCK_BUTTON = `${HOME_HERO}__block-button`;
export const HOME_HERO_VIDEO = `${HOME_HERO}__video`;

export type THomeHeroProps = ComponentProps<'section'>;

const HomeHero: FC<THomeHeroProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames(HOME_HERO, SECTION, className);
  const [videoUrl, setVideUrl] = useState('');

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(min-width: 768px)');
    const setUrl = (matches: boolean) => setVideUrl(matches ? desktopVideoUrl : mobileVideoUrl);
    setUrl(mediaQueryList.matches);

    const handleWidthChange = (e: MediaQueryListEvent) => {
      setUrl(e.matches);
    };

    mediaQueryList.addEventListener('change', handleWidthChange);

    return () => mediaQueryList.removeEventListener('change', handleWidthChange);
  }, []);

  return (
    <section className={classes} {...restProps}>
      <div className={classNames(HOME_HERO_WRAPPER)}>
        <div className={HOME_HERO_BLOCK}>
          <h1 className={HOME_HERO_BLOCK_TITLE}>The cool change has arrived</h1>
          <p className={HOME_HERO_BLOCK_TEXT}>
            Koala Polar+ Mattress. Keep your cool all year long.
          </p>
          <Button el="button" className={HOME_HERO_BLOCK_BUTTON} view="primary" theme="primary">
            SHOP NOW
          </Button>
        </div>
        <video
          key={videoUrl}
          className={BG_OBJECT}
          playsInline
          loop
          autoPlay
          preload="none"
          muted
          poster={posterUrl}>
          {!!videoUrl && <source src={videoUrl} type="video/mp4" />}
          <img src={posterUrl} alt="" />
        </video>
      </div>
    </section>
  );
};

export default HomeHero;
