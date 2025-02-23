import { FC, useMemo } from 'react';
import { WRAPPER } from '../../../constants/classNames';
import LogoLink from '../LogoLink/LogoLink';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import footerImgSrc from '../../../assets/images/footer/img.webp';
import classNames from 'classnames';
import { linkBlocksData, mainText } from './data';
import { PUBLIC_PATH } from '../../../constants/constants';
import './Footer.scss';

export const FOOTER = 'footer';
export const FOOTER_GRID = `${FOOTER}__grid`;
export const FOOTER_MAIN = `${FOOTER}__main`;
export const FOOTER_LOGO = `${FOOTER}__logo`;
export const FOOTER_MAIN_TEXT = `${FOOTER}__main-text`;
export const FOOTER_SOCIALS = `${FOOTER}__socials`;
export const FOOTER_SOCIALS_ITEM = `${FOOTER}__socials-item`;
export const FOOTER_SOCIALS_LINK = `${FOOTER}__socials-link`;
export const FOOTER_MAIN_IMG = `${FOOTER}__main-img`;
export const FOOTER_LINKS_GRID = `${FOOTER}__links-grid`;
export const FOOTER_LINKS = `${FOOTER}__links`;
export const FOOTER_LINKS_TITLE = `${FOOTER}__links-title`;
export const FOOTER_LINKS_LIST = `${FOOTER}__links-list`;
export const FOOTER_LINKS_ITEM = `${FOOTER}__links-item`;
export const FOOTER_LINKS_LINK = `${FOOTER}__links-link`;
export const FOOTER_PANEL = `${FOOTER}__panel`;
export const FOOTER_LINK = `${FOOTER}__link`;

const Footer: FC = () => {
  const linkBlocks = useMemo(
    () =>
      linkBlocksData.map((blockData) => {
        const { title, links } = blockData;

        return (
          <div key={blockData.title} className={FOOTER_LINKS}>
            <h4 className={FOOTER_LINKS_TITLE}>{title}</h4>
            <ul className={FOOTER_LINKS_LIST}>
              {links.map((linkData, i) => {
                return (
                  <li key={i} className={FOOTER_LINKS_ITEM}>
                    <a className={classNames(FOOTER_LINK, FOOTER_LINKS_LINK)} href={linkData.href}>
                      {linkData.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }),
    []
  );

  return (
    <footer className={FOOTER}>
      <div className={WRAPPER}>
        <div className={FOOTER_GRID}>
          <div className={FOOTER_MAIN}>
            <LogoLink className={FOOTER_LOGO} />
            <p className={FOOTER_MAIN_TEXT}>{mainText}</p>
            <ul className={FOOTER_SOCIALS}>
              <li className={FOOTER_SOCIALS_ITEM}>
                <a className={classNames(FOOTER_SOCIALS_LINK, FOOTER_LINK)}>
                  <FaInstagram />
                </a>
              </li>
              <li className={FOOTER_SOCIALS_ITEM}>
                <a className={classNames(FOOTER_SOCIALS_LINK, FOOTER_LINK)}>
                  <FaFacebookF />
                </a>
              </li>
            </ul>
            <img className={FOOTER_MAIN_IMG} src={footerImgSrc} alt=""></img>
          </div>
          <div className={FOOTER_LINKS_GRID}>{linkBlocks}</div>
        </div>
        <div className={FOOTER_PANEL}>
          <span>© 2025 Koala</span>
          <a className={FOOTER_LINK} href={`${PUBLIC_PATH}`}>
            Privacy
          </a>
          <a className={FOOTER_LINK} href={`${PUBLIC_PATH}`}>
            Policy
          </a>
          <a className={FOOTER_LINK} href={`${PUBLIC_PATH}`}>
            Website
          </a>
          <a className={FOOTER_LINK} href={`${PUBLIC_PATH}`}>
            Terms
          </a>
          <a className={FOOTER_LINK} href={`${PUBLIC_PATH}`}>
            Terms of Service
          </a>
          <a className={FOOTER_LINK} href={`${PUBLIC_PATH}`}>
            Promotion Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
