import { ComponentProps, FC, useMemo } from 'react';
import { getClasses } from '../../../../tests/utils/getClasses';
import { Link, LinkProps } from 'react-router';
import './button.scss';

export const BTN = 'btn';
export const BTN_INNER = `${BTN}__inner`;
export const BTN_VIEW_PRIMARY = `${BTN}_view_primary`;
export const BTN_THEME_PRIMARY = `${BTN}_theme_primary`;
export const BTN_FULL_WIDTH = `${BTN}_full-width`;

export type TButtonCustomProps = {
  theme?: 'primary';
  view?: 'primary';
  fullWidth?: boolean;
  capital?: boolean;
};

export type TButtonProps = (
  | (ComponentProps<'button'> & { el?: 'button' })
  | (LinkProps & { el?: 'link' })
) &
  TButtonCustomProps;

const Button: FC<TButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    view,
    fullWidth,
    capital,
    el = 'button',
    ...restProps
  } = props;
  const classes = getClasses(BTN, className, { theme, view, fullWidth, capital });

  const inner = useMemo(
    () => (
      <span className={BTN_INNER}>
        <span className={BTN_INNER}>{children}</span>
      </span>
    ),
    [children]
  );

  const elProps = { className: classes, children: inner, ...restProps };

  if (el === 'button') {
    return <button {...(elProps as ComponentProps<'button'>)} />;
  }

  if (el === 'link') {
    return <Link {...(elProps as LinkProps)} />;
  }
};

export default Button;
