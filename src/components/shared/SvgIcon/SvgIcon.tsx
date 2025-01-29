import './SvgIcon.scss';
import classNames from 'classnames';
import { ComponentProps, FC } from 'react';

export const SVG_ICON = 'svg-icon';

export type TSvgIcon = { iconId: string } & ComponentProps<'svg'>;

const SvgIcon: FC<TSvgIcon> = (props) => {
  const { className, iconId, ...restProps } = props;
  const classes = classNames(SVG_ICON, className);

  return (
    <svg className={classes} {...restProps}>
      <use xlinkHref={`#${iconId}`} />
    </svg>
  );
};

export default SvgIcon;
