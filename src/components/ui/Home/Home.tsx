import { FC } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import Categories from '../Categories/Categories';
import './Home.scss';

export const HOME = 'home';

const Home: FC = () => {
  return (
    <main className={HOME}>
      <HomeHero />
      <Categories />
    </main>
  );
};

export default Home;
