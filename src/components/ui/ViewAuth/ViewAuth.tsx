import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import AuthWindow from '../AuthWindow/AuthWindow';
import { WRAPPER } from '../../../constants/classNames';
import classNames from 'classnames';
import './ViewAuth.scss';

export const VIEW_AUTH = 'view-auth';
export const VIEW_AUTH_WRAPPER = `${VIEW_AUTH}__wrapper`;
export const VIEW_AUTH_WINDOW = `${VIEW_AUTH}__window`;

export const LOGIN = 'login';
export const REGISTER = 'register';
export const PARAM_NAME = 'type';

const ViewAuth: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get(PARAM_NAME);
  const [type, setType] = useState(typeParam || '');

  useEffect(() => {
    const fixedType = typeParam && [LOGIN, REGISTER].includes(typeParam) ? typeParam : LOGIN;
    setType(fixedType);

    setSearchParams((prev) => {
      prev.set(PARAM_NAME, fixedType);
      return prev;
    });
  }, [typeParam, setSearchParams]);

  if (!type) return null;

  return (
    <main className={VIEW_AUTH}>
      <div className={classNames(WRAPPER, VIEW_AUTH_WRAPPER)}>
        <AuthWindow className={VIEW_AUTH_WINDOW} type={type} />
      </div>
    </main>
  );
};

export default ViewAuth;
