import { FC } from 'react';
import { WRAPPER } from '../../../constants/classNames';

export const HOME = 'home';

const Home: FC = () => {
  return (
    <div className={HOME}>
      <div className={WRAPPER}>Home page</div>
    </div>
  );
};

export default Home;
