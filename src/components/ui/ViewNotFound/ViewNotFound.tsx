import { FC } from 'react';
import Button from '../../shared/Button/Button';
import { PUBLIC_PATH } from '../../../constants/constants';
import './ViewNotFound.scss';

export const NOT_FOUND = 'view-not-found';
export const NOT_FOUND_WRAPPER = `${NOT_FOUND}__wrapper`;
export const NOT_FOUND_TEXT = `${NOT_FOUND}__text`;
export const NOT_FOUND_BANNER = `${NOT_FOUND}__banner`;
export const NOT_FOUND_BTN = `${NOT_FOUND}__btn`;

const ViewNotFound: FC = () => {
  return (
    <main className={NOT_FOUND}>
      <div className={NOT_FOUND_BANNER}>
        <h1 className={NOT_FOUND_TEXT}>Page was not found</h1>
        <Button
          uppercase
          className={NOT_FOUND_BTN}
          el="a"
          theme="tertiary"
          view="primary"
          href={`${PUBLIC_PATH}`}>
          Go to home page
        </Button>
      </div>
    </main>
  );
};

export default ViewNotFound;
