import { ComponentProps, FC } from 'react';
import { getClasses } from '../../../utils/getClasses';
import './ValidationField.scss';

export const VALIDATION_FIELD = 'validation-field';
export const VALIDATION_FIELD_MSG = `${VALIDATION_FIELD}__message`;

export interface TValidationFieldProps extends ComponentProps<'div'> {
  msg?: string;
  errorMsg?: string;
}

const ValidationField: FC<TValidationFieldProps> = (props) => {
  const { className, children, msg = '', errorMsg = '', ...restProps } = props;
  const classes = getClasses(VALIDATION_FIELD, className, { invalid: !!errorMsg });
  const msgText = errorMsg ? errorMsg : msg;

  return (
    <div className={classes} {...restProps}>
      {children}
      <p className={VALIDATION_FIELD_MSG}>{msgText}&nbsp;</p>
    </div>
  );
};

export default ValidationField;
