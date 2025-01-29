import './button.scss';
import { ComponentProps, FC } from 'react';
import { getClasses } from '../../../../tests/utils/getClasses';

export const BTN = 'btn';
export const BTN_INNER = `${BTN}__inner`;
export const BTN_VIEW_PRIMARY = `${BTN}_view_primary`;
export const BTN_THEME_PRIMARY = `${BTN}_theme_primary`;
export const BTN_FULL_WIDTH = `${BTN}_full-width`;

export type TButtonProps = ComponentProps<'button'> & {
  theme?: 'primary';
  view?: 'primary';
  fullWidth?: boolean;
};

const Button: FC<TButtonProps> = (props) => {
  const { children, className, theme, view, fullWidth, ...restProps } = props;
  const classes = getClasses(BTN, className, { theme, view, fullWidth });

  return (
    <button className={classes} {...restProps}>
      <span className={BTN_INNER}>
        <span className={BTN_INNER}>{children}</span>
      </span>
    </button>
  );
};

export default Button;
