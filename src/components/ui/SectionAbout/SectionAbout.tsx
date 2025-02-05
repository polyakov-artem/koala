import { ComponentProps, FC, useMemo } from 'react';
import { WRAPPER } from '../../../constants/classNames';
import CardConsiderate from '../CardConsiderate/CardConsiderate';
import { cardsData, bannerData } from './data';
import BannerAbout from '../BannerAbout/BannerAbout';
import Button from '../../shared/Button/Button';
import { getFullPath } from '../../../utils/getFullPath';
import { WHY_COALA } from '../../../routes';
import './SectionAbout.scss';

export type TSectionAboutProps = ComponentProps<'section'>;

export const SECTION_ABOUT = 'section-about';
export const SECTION_ABOUT_GRID = `${SECTION_ABOUT}__grid`;
export const SECTION_ABOUT_TITLE = `${SECTION_ABOUT}__title`;
export const SECTION_ABOUT_BANNER = `${SECTION_ABOUT}__banner`;
export const SECTION_ABOUT_HEADER = `${SECTION_ABOUT}__header`;

const SectionAbout: FC<TSectionAboutProps> = () => {
  const cards = useMemo(
    () => cardsData.map((data) => <CardConsiderate key={data.title} {...data} />),
    []
  );

  return (
    <section className={SECTION_ABOUT}>
      <div className={WRAPPER}>
        <div className={SECTION_ABOUT_HEADER}>
          <h2 className={SECTION_ABOUT_TITLE}>A little about us</h2>
          <Button
            to={getFullPath(WHY_COALA)}
            capital
            relative="path"
            el="link"
            theme="primary"
            view="primary">
            Learn More
          </Button>
        </div>
        <BannerAbout className={SECTION_ABOUT_BANNER} {...bannerData} />
        <div className={SECTION_ABOUT_GRID}>{cards}</div>
      </div>
    </section>
  );
};

export default SectionAbout;
