import { ComponentProps, FC } from 'react';
import { SECTION, WRAPPER } from '../../../constants/classNames';
import classNames from 'classnames';
import CardContact from '../CardContact/CardContact';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import { IoChatboxOutline } from 'react-icons/io5';
import './SectionContacts.scss';

export type TSectionContactsProps = ComponentProps<'section'>;

export const SECTION_CONTACTS = 'section-contacts';
export const SECTION_CONTACTS_GRID = `${SECTION_CONTACTS}__grid`;

const SectionContacts: FC<TSectionContactsProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames(SECTION_CONTACTS, SECTION, className);

  return (
    <section className={classes} {...restProps}>
      <div className={WRAPPER}>
        <div className={SECTION_CONTACTS_GRID}>
          <CardContact
            title="Send an enquiry"
            icon={<FaRegEnvelope />}
            linkText="Contact us"
            href="mailto:mail@google.com"
          />
          <CardContact
            title="Call us"
            icon={<FaPhone />}
            text={
              <>
                Mon-Fri 9am-6pm
                <br />
                Sat-Sun 9am-5pm
                <br />
                <br />
                1800 KSLEEP (1800 575 337)
              </>
            }
            linkText="Call now"
            href="tel:1800575337"
          />
          <CardContact
            title="Chat with us"
            icon={<IoChatboxOutline />}
            text={
              <>
                Live Chat <br />
                support available!
              </>
            }
            linkText="Personal Shopping Video Appointment"
            href="google.com"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
