import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { WRAPPER, SECTION } from '../../../constants/classNames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import Button from '../../shared/Button/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { TDetails } from '../../../types/types';
import CardReason from '../CardReason/CardReason';
import './SectionReasons.scss';

export type TSectionReasonsProps = ComponentProps<'section'> & {
  details: TDetails;
};

export const SECTION_REASONS = 'section-reasons';
export const SECTION_REASONS_HEADER = `${SECTION_REASONS}__header`;
export const SECTION_REASONS_HEADER_COLUMN = `${SECTION_REASONS}__header-column`;
export const SECTION_REASONS_TITLE = `${SECTION_REASONS}__title`;
export const SECTION_REASONS_SWIPER = `${SECTION_REASONS}__swiper`;
export const SECTION_REASONS_CARD = `${SECTION_REASONS}__card`;
export const SECTION_REASONS_BUTTONS = `${SECTION_REASONS}__buttons`;
export const SECTION_REASONS_BTN_NEXT = `${SECTION_REASONS}__btn-next`;
export const SECTION_REASONS_BTN_PREV = `${SECTION_REASONS}__btn-prev`;

const SectionReasons: FC<TSectionReasonsProps> = (props) => {
  const { className, details } = props;
  const classes = classNames(SECTION, SECTION_REASONS, className);

  const slides = useMemo(
    () =>
      details.reasons.map(({ mediaURL, title, text }) => (
        <SwiperSlide key={title}>
          <CardReason
            className={SECTION_REASONS_CARD}
            mediaURL={mediaURL}
            title={title}
            text={text}
          />
        </SwiperSlide>
      )),
    [details]
  );

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <header className={SECTION_REASONS_HEADER}>
          <div className={SECTION_REASONS_HEADER_COLUMN}>
            <h2 className={SECTION_REASONS_TITLE}>Reasons to love the {details.name}</h2>
          </div>
          <div className={SECTION_REASONS_BUTTONS}>
            <Button el="button" theme="secondary" view="round" className={SECTION_REASONS_BTN_PREV}>
              <IoIosArrowBack />
            </Button>
            <Button el="button" theme="secondary" view="round" className={SECTION_REASONS_BTN_NEXT}>
              <IoIosArrowForward />
            </Button>
          </div>
        </header>

        <Swiper
          navigation={{
            nextEl: `.${SECTION_REASONS_BTN_NEXT}`,
            prevEl: `.${SECTION_REASONS_BTN_PREV}`,
          }}
          scrollbar={{
            hide: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            991.98: {
              slidesPerView: 3,
            },
          }}
          modules={[Scrollbar, Navigation]}
          className={classNames(SECTION_REASONS_SWIPER)}>
          {slides}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionReasons;
