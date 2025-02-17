import { FC } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import Categories from '../Categories/Categories';
import SectionWhy from '../SectionWhy/SectionWhy';
import SectionAbout from '../SectionAbout/SectionAbout';
import SectionSubscribe from '../SectionSubscribe/SectionSubscribe';
import SectionBrands from '../SectionBrands/SectionBrands';
import SectionBestsellers from '../SectionBestsellers/SectionBestsellers';
import SectionBuyers from '../SectionBuyers/SectionBuyers';
import './ViewHome.scss';

export const VIEW_HOME = 'view-home';

const ViewHome: FC = () => {
  return (
    <main className={VIEW_HOME}>
      <HomeHero />
      <Categories />
      <SectionBestsellers />
      <SectionBrands />
      <SectionBuyers />
      <SectionWhy />
      <SectionAbout />
      <SectionSubscribe />
    </main>
  );
};

export default ViewHome;
