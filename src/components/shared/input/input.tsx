import { ComponentProps, FC } from 'react';
import { getClasses } from '../../../utils/getClasses';
import './input.scss';

export const INPUT = 'input';

export interface TInputProps extends ComponentProps<'input'> {
  view?: 'primary';
  theme?: 'primary';
  invalid?: boolean;
}

const Input: FC<TInputProps> = (props) => {
  const { className, view, theme, invalid, ...restProps } = props;
  const classes = getClasses(INPUT, className, { view, theme, invalid });

  return <input className={classes} {...restProps} data-testid="input" />;
};

export default Input;
