import { FC } from 'react';
import SectionTabs from '../SectionTabs/SectionTabs';
import './Mattresses.scss';

export const MATTRESSES = 'mattresses';

const Mattresses: FC = () => {
  return (
    <main className={MATTRESSES}>
      <SectionTabs />
    </main>
  );
};

export default Mattresses;
