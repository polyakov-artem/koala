import { FC } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import Categories from '../Categories/Categories';
import SectionWhy from '../SectionWhy/SectionWhy';
import SectionAbout from '../SectionAbout/SectionAbout';
import SectionSubscribe from '../SectionSubscribe/SectionSubscribe';
import SectionBrands from '../SectionBrands/SectionBrands';
import SectionBestsellers from '../SectionBestsellers/SectionBestsellers';
import SectionBuyers from '../SectionBuyers/SectionBuyers';
import './Home.scss';

export const HOME = 'home';

const Home: FC = () => {
  return (
    <main className={HOME}>
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

export default Home;
