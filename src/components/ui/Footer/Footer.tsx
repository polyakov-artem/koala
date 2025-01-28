import { FC } from 'react';
import { WRAPPER } from '../../../constants/classNames';

export const FOOTER = 'footer';

const Footer: FC = () => {
  return (
    <footer className={FOOTER}>
      <div className={WRAPPER}>Footer</div>
    </footer>
  );
};

export default Footer;
