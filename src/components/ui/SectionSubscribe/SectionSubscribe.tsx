import { ComponentProps, FC } from 'react';
import { WRAPPER } from '../../../constants/classNames';
import './SectionSubscribe.scss';

export type TSectionSubscribeProps = ComponentProps<'section'>;

export const SECTION_SUBSCRIBE = 'section-subscribe';
export const SECTION_SUBSCRIBE_INNER = `${SECTION_SUBSCRIBE}__inner`;
export const SECTION_SUBSCRIBE_TITLE = `${SECTION_SUBSCRIBE}__title`;
export const SECTION_SUBSCRIBE_TEXT = `${SECTION_SUBSCRIBE}__text`;

const SectionSubscribe: FC<TSectionSubscribeProps> = () => {
  return (
    <section className={SECTION_SUBSCRIBE}>
      <div className={WRAPPER}>
        <div className={SECTION_SUBSCRIBE_INNER}>
          <h2 className={SECTION_SUBSCRIBE_TITLE}>Subscribe to our emails</h2>
          <p className={SECTION_SUBSCRIBE_TEXT}>
            Be the first to know about new collections and exclusive offers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSubscribe;
