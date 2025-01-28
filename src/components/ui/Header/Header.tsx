import { FC } from 'react';
import { WRAPPER } from '../../../constants/classNames';

const HEADER = 'header';

const Header: FC = () => {
  return (
    <header className={HEADER}>
      <div className={WRAPPER}>Header</div>
    </header>
  );
};

export default Header;
