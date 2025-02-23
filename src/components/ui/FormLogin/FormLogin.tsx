import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { inputErrors } from '../../../constants/constants';
import { useFormik } from 'formik';
import ValidationField from '../ValidationField/ValidationField';
import Input from '../../shared/input/input';
import Button from '../../shared/Button/Button';
import * as Yup from 'yup';
import { getFormikErrorMsg } from '../../../utils/getFormikErrorMsg';
import './FormLogin.scss';

type TFormLoginProps = ComponentProps<'form'>;

export const FORM_LOGIN = 'form-login';
export const FORM_LOGIN_LABEL = `${FORM_LOGIN}__label`;
export const FORM_LOGIN_INPUT = `${FORM_LOGIN}__input`;
export const FORM_LOGIN_BTN = `${FORM_LOGIN}__btn`;

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .matches(/^[A-Za-z0-9]+$/, inputErrors.lettersAndDigits)
    .min(5, inputErrors.minLength(5))
    .max(20, inputErrors.maxLength(20))
    .required(inputErrors.required),
  password: Yup.string()
    .matches(/^[A-Za-z0-9]+$/, inputErrors.lettersAndDigits)
    .min(5, inputErrors.minLength(5))
    .max(20, inputErrors.maxLength(20))
    .required(inputErrors.required),
});

const FormLogin: FC<TFormLoginProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames(FORM_LOGIN, className);
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const passwordErrorMsg = getFormikErrorMsg(formik, 'password');
  const loginErrorMsg = getFormikErrorMsg(formik, 'login');

  return (
    <form onSubmit={formik.handleSubmit} className={classes} {...restProps}>
      <label className={FORM_LOGIN_LABEL} htmlFor="login">
        Login
      </label>
      <ValidationField errorMsg={loginErrorMsg}>
        <Input
          invalid={!!loginErrorMsg}
          className={FORM_LOGIN_INPUT}
          theme="primary"
          view="primary"
          value={formik.values.login}
          name="login"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </ValidationField>
      <label className={FORM_LOGIN_LABEL} htmlFor="password">
        Password
      </label>
      <ValidationField errorMsg={passwordErrorMsg}>
        <Input
          invalid={!!passwordErrorMsg}
          className={FORM_LOGIN_INPUT}
          theme="primary"
          view="primary"
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </ValidationField>
      <Button className={FORM_LOGIN_BTN} theme="tertiary" view="primary" el="button">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
