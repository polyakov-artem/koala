import { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import './CardContact.scss';

export type TCardContact = ComponentProps<'article'> & {
  icon: ReactNode;
  title: string;
  text?: ReactNode;
  linkText: string;
  href: string;
};

export const CARD_CONTACT = 'card-contact';
export const CARD_CONTACT_ICON_WRAP = `${CARD_CONTACT}__icon-wrap`;
export const CARD_CONTACT_TITLE = `${CARD_CONTACT}__title`;
export const CARD_CONTACT_LINK = `${CARD_CONTACT}__link`;
export const CARD_CONTACT_TEXT = `${CARD_CONTACT}__text`;

const CardContact: FC<TCardContact> = (props) => {
  const { className, icon, title, text, href, linkText, ...restProps } = props;
  const classes = classNames(CARD_CONTACT, className);

  return (
    <article className={classes} {...restProps}>
      <div className={CARD_CONTACT_ICON_WRAP}>{icon}</div>
      <h4 className={CARD_CONTACT_TITLE}>{title}</h4>
      {!!text && <div className={CARD_CONTACT_TEXT}>{text}</div>}
      <a className={CARD_CONTACT_LINK} href={href} target="_blank" rel=" noopener noreferrer">
        {linkText}
      </a>
    </article>
  );
};

export default CardContact;
