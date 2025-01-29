import { FC, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { PUBLIC_PATH } from '../../../constants/constants';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
import SvgIcon from '../../shared/SvgIcon/SvgIcon';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { ICON_MD, LOGO_ICON, WRAPPER } from '../../../constants/classNames';
import classNames from 'classnames';
import Burger from '../../shared/Burger/Burger';
import { Dropdown, Collapse } from 'react-bootstrap';
import './Header.scss';

export const HEADER = 'header';
export const HEADER_NAV = `${HEADER}__nav`;
export const HEADER_LOGO = `${HEADER}__logo`;
export const HEADER_BTN = `${HEADER}__btn`;
export const HEADER_MENU_WRAP = `${HEADER}__menu-wrap`;
export const HEADER_BUTTONS = `${HEADER}__buttons`;
export const HEADER_BURGER = `${HEADER}__burger`;
export const HEADER_PROFILE_BTN = `${HEADER}__profile-btn`;
export const HEADER_PROFILE_ITEM = `${HEADER}__profile-item`;

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!(event.target instanceof Node) || !burgerRef.current) {
        return;
      }

      if (burgerRef.current.contains(event.target)) {
        setIsMenuOpen((prevState) => !prevState);
      } else {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isMenuOpen]);

  return (
    <header className={HEADER}>
      <nav className={classNames(WRAPPER, HEADER_NAV)}>
        <Link className={HEADER_LOGO} to={PUBLIC_PATH}>
          <SvgIcon className={LOGO_ICON} iconId="logo" />
        </Link>
        <Collapse in={isMenuOpen}>
          <div className={HEADER_MENU_WRAP}>
            <HeaderLinks />
          </div>
        </Collapse>
        <div className={HEADER_BUTTONS}>
          <Dropdown>
            <Dropdown.Toggle
              as={'button'}
              id="profile-dropdown"
              className={classNames(HEADER_BTN, HEADER_PROFILE_BTN)}>
              <FaRegUserCircle className={classNames(ICON_MD)} />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item as={Link} to={`${PUBLIC_PATH}profile`} className={HEADER_PROFILE_ITEM}>
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={`${PUBLIC_PATH}logout`} className={HEADER_PROFILE_ITEM}>
                Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link className={classNames(HEADER_BTN)} to={`${PUBLIC_PATH}cart`}>
            <FaShoppingCart className={classNames(ICON_MD)} />
          </Link>
          <Burger className={HEADER_BURGER} ref={burgerRef} active={isMenuOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
