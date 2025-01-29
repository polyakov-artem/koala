import { FC } from 'react';
import HomeHero from '../HomeHero/HomeHero';
import './Home.scss';

export const HOME = 'home';

const Home: FC = () => {
  return (
    <main className={HOME}>
      <HomeHero />
    </main>
  );
};

export default Home;
