import { ComponentProps, FC } from 'react';
import SvgIcon from '../../shared/SvgIcon/SvgIcon';
import classNames from 'classnames';
import './LogoLink.scss';

export type TLogoLinkProps = Omit<ComponentProps<'a'>, 'href'>;

export const LOGO_LINK = 'logo-link';
export const LOGO_LINK_ICON = `${LOGO_LINK}__icon`;

const LogoLink: FC<TLogoLinkProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames(LOGO_LINK, className);

  return (
    <a {...restProps} className={classes} href="/">
      <SvgIcon className={LOGO_LINK_ICON} iconId="logo" />
    </a>
  );
};

export default LogoLink;
