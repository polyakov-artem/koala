import { FC } from 'react';
import { WRAPPER } from '../../../constants/classNames';

export const NOT_FOUND = 'not-found';

const NotFound: FC = () => {
  return (
    <div className={NOT_FOUND}>
      <div className={WRAPPER}>Not found page</div>
    </div>
  );
};

export default NotFound;
