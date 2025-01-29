import { ComponentProps, FC, useMemo } from 'react';
import { categories } from '../../../routes';
import { NavLink } from 'react-router';
import { kebabToString } from '../../../../tests/utils/kebabToString';
import classNames from 'classnames';
import './HeaderLinks.scss';

export const HEADER_LINKS = 'header-links';
export const HEADER_LINKS_ITEM = 'header-links__item';
export const HEADER_LINKS_LINK = `${HEADER_LINKS}__link`;
export const HEADER_LINKS_TEXT = `${HEADER_LINKS}__text`;
export const LINK_PENDING_CLASS_NAME = `${HEADER_LINKS_LINK}_pending`;
export const LINK_ACTIVE_CLASS_NAME = `${HEADER_LINKS_LINK}_active`;
export const LINK_TRANSITIONING_CLASS_NAME = `${HEADER_LINKS_LINK}_transitioning`;

const linkClassNameHandler = ({ isActive, isPending, isTransitioning }: Record<string, boolean>) =>
  classNames(HEADER_LINKS_LINK, {
    [LINK_PENDING_CLASS_NAME]: isPending,
    [LINK_ACTIVE_CLASS_NAME]: isActive,
    [LINK_TRANSITIONING_CLASS_NAME]: isTransitioning,
  });

export type THeaderLinksProps = ComponentProps<'ul'>;

const HeaderLinks: FC<THeaderLinksProps> = (props) => {
  const { className } = props;
  const classes = classNames(HEADER_LINKS, className);

  const links = useMemo(
    () =>
      categories.map((category) => (
        <li className={HEADER_LINKS_ITEM} key={category}>
          <NavLink to={category} className={linkClassNameHandler}>
            <span className={HEADER_LINKS_TEXT}>{kebabToString(category)}</span>
          </NavLink>
        </li>
      )),
    []
  );

  return <ul className={classes}>{links}</ul>;
};

export default HeaderLinks;
