import { FC } from 'react';
import './scss/index.scss';
import PrimaryLayout from './components/ui/PrimaryLayout/PrimaryLayout';
import SvgSprite from './components/shared/SvgSprite/SvgSprite';

const App: FC = () => {
  return (
    <>
      <SvgSprite />
      <PrimaryLayout />
    </>
  );
};

export default App;
