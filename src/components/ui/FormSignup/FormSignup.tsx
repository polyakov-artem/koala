import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { inputErrors } from '../../../constants/constants';
import { useFormik } from 'formik';
import ValidationField from '../ValidationField/ValidationField';
import Input from '../../shared/input/input';
import Button from '../../shared/Button/Button';
import * as Yup from 'yup';
import { getFormikErrorMsg } from '../../../utils/getFormikErrorMsg';
import './FormSignup.scss';

export type TFormSignupProps = ComponentProps<'form'>;

export const FORM_SIGNUP = 'form-signup';
export const FORM_SIGNUP_LABEL = `${FORM_SIGNUP}__label`;
export const FORM_SIGNUP_INPUT = `${FORM_SIGNUP}__input`;
export const FORM_SIGNUP_BTN = `${FORM_SIGNUP}__btn`;

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
  email: Yup.string().email(inputErrors.incorrectEmail).required(inputErrors.required),
});

const FormSignup: FC<TFormSignupProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames(FORM_SIGNUP, className);
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const loginErrorMsg = getFormikErrorMsg(formik, 'login');
  const passwordErrorMsg = getFormikErrorMsg(formik, 'password');
  const emailErrorMsg = getFormikErrorMsg(formik, 'email');

  return (
    <form onSubmit={formik.handleSubmit} className={classes} {...restProps}>
      <label className={FORM_SIGNUP_LABEL} htmlFor="login">
        Login
      </label>
      <ValidationField errorMsg={loginErrorMsg}>
        <Input
          invalid={!!loginErrorMsg}
          className={FORM_SIGNUP_INPUT}
          theme="primary"
          view="primary"
          value={formik.values.login}
          name="login"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </ValidationField>
      <label className={FORM_SIGNUP_LABEL} htmlFor="password">
        Password
      </label>
      <ValidationField errorMsg={passwordErrorMsg}>
        <Input
          invalid={!!passwordErrorMsg}
          className={FORM_SIGNUP_INPUT}
          theme="primary"
          view="primary"
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </ValidationField>
      <label className={FORM_SIGNUP_LABEL} htmlFor="email">
        Email
      </label>
      <ValidationField errorMsg={emailErrorMsg}>
        <Input
          invalid={!!emailErrorMsg}
          className={FORM_SIGNUP_INPUT}
          theme="primary"
          view="primary"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
        />
      </ValidationField>
      <Button className={FORM_SIGNUP_BTN} theme="tertiary" view="primary" el="button">
        Register
      </Button>
    </form>
  );
};

export default FormSignup;
