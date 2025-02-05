import './Burger.scss';
import { ComponentProps, FC } from 'react';
import { getClasses } from '../../../utils/getClasses';

export type TBurgerProps = {
  active?: boolean;
} & ComponentProps<'button'>;

export const BURGER = 'burger';
export const BURGER_ACTIVE = `${BURGER}_is-active`;
export const BURGER_ICON = 'burger-icon';

const Burger: FC<TBurgerProps> = (props) => {
  const { className, active, ...restProps } = props;
  const classes = getClasses(BURGER, className, { active });

  return (
    <button className={classes} {...restProps}>
      <span className={BURGER_ICON} />
    </button>
  );
};

export default Burger;
