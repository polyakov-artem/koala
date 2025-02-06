import { ComponentProps, FC, useMemo } from 'react';
import { getClasses } from '../../../utils/getClasses';
import { Link, LinkProps } from 'react-router';
import './button.scss';

export const BTN = 'btn';
export const BTN_INNER = `${BTN}__inner`;
export const BTN_VIEW_PRIMARY = `${BTN}_view_primary`;
export const BTN_THEME_PRIMARY = `${BTN}_theme_primary`;
export const BTN_FULL_WIDTH = `${BTN}_full-width`;

export type TButtonCustomProps = {
  theme?: 'primary' | 'secondary' | 'tertiary';
  view?: 'primary';
  fullWidth?: boolean;
  capitalized?: boolean;
  uppercase?: boolean;
  selected?: boolean;
  bold?: boolean;
  disabled?: boolean;
};

export type TButtonProps = (
  | (ComponentProps<'button'> & { el: 'button' })
  | (LinkProps & { el: 'link' })
  | (ComponentProps<'a'> & { el: 'a' })
) &
  TButtonCustomProps;

const Button: FC<TButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    view,
    fullWidth,
    capitalized,
    uppercase,
    selected,
    bold,
    el = 'button',
    ...restProps
  } = props;
  const classes = getClasses(BTN, className, {
    theme,
    view,
    fullWidth,
    capitalized,
    uppercase,
    bold,
    selected,
    disabled: props.disabled,
  });

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

  if (el === 'a') {
    return <a {...(elProps as ComponentProps<'a'>)} />;
  }
};

export default Button;
