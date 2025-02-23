import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { LOGIN, PARAM_NAME, REGISTER } from '../ViewAuth/ViewAuth';
import SvgIcon from '../../shared/SvgIcon/SvgIcon';
import { Link } from 'react-router';
import FormLogin from '../FormLogin/FormLogin';
import FormSignup from '../FormSignup/FormSignup';
import './AuthWindow.scss';

export type TAuthWindow = ComponentProps<'div'> & {
  type: string;
};

export const AUTH_WINDOW = 'auth-window';
export const AUTH_WINDOW_LOGO = `${AUTH_WINDOW}__logo`;
export const AUTH_WINDOW_LINK = `${AUTH_WINDOW}__link`;
export const AUTH_WINDOW_QUESTION = `${AUTH_WINDOW}__question`;

const AuthWindow: FC<TAuthWindow> = (props) => {
  const { className, type, ...restProps } = props;
  const classes = classNames(AUTH_WINDOW, className);

  return (
    <div className={classes} {...restProps}>
      <SvgIcon className={AUTH_WINDOW_LOGO} iconId="logo" />
      {type === LOGIN ? (
        <>
          <FormLogin />
          <p className={AUTH_WINDOW_QUESTION}>
            {`Don't have an account yet? `}
            <Link relative="path" className={AUTH_WINDOW_LINK} to={`?${PARAM_NAME}=${REGISTER}`}>
              Register
            </Link>
          </p>
        </>
      ) : (
        <>
          <FormSignup />
          <p className={AUTH_WINDOW_QUESTION}>
            {`Already have an account? `}
            <Link relative="path" className={AUTH_WINDOW_LINK} to={`?${PARAM_NAME}=${LOGIN}`}>
              Log in
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthWindow;
