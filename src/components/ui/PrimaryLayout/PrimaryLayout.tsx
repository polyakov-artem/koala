import { FC } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const PAGE = 'page';
export const PAGE_MAIN = `${PAGE}__main`;

const PrimaryLayout: FC = () => {
  return (
    <div className={PAGE}>
      <Header />
      <div className={PAGE_MAIN}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
