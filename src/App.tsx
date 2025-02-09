import { FC } from 'react';
import './scss/index.scss';
import Page from './components/ui/Page/Page';
import SvgSprite from './components/shared/SvgSprite/SvgSprite';

const App: FC = () => {
  return (
    <>
      <SvgSprite />
      <Page />
    </>
  );
};

export default App;
