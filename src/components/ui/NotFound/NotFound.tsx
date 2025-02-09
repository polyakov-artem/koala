import { FC } from 'react';
import Button from '../../shared/Button/Button';
import './NotFound.scss';

export const NOT_FOUND = 'not-found';
export const NOT_FOUND_WRAPPER = `${NOT_FOUND}__wrapper`;
export const NOT_FOUND_TEXT = `${NOT_FOUND}__text`;
export const NOT_FOUND_BANNER = `${NOT_FOUND}__banner`;
export const NOT_FOUND_BTN = `${NOT_FOUND}__btn`;

const NotFound: FC = () => {
  return (
    <main className={NOT_FOUND}>
      <div className={NOT_FOUND_BANNER}>
        <h1 className={NOT_FOUND_TEXT}>Page was not found</h1>
        <Button capital className={NOT_FOUND_BTN} el="a" theme="tertiary" view="primary" href="/">
          Go to home page
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
