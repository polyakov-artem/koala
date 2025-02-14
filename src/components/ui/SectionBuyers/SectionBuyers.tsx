import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { WRAPPER, SECTION } from '../../../constants/classNames';
import { reviews } from './data';
import ReviewCard from '../ReviewCard/ReviewCard';
import { getFullPath } from '../../../utils/getFullPath';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules';
import Button from '../../shared/Button/Button';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './SectionBuyers.scss';

export type TSectionBuyersProps = ComponentProps<'section'>;

export const SECTION_BUYERS = 'section-buyers';
export const SECTION_BUYERS_HEADER = `${SECTION_BUYERS}__header`;
export const SECTION_BUYERS_HEADER_COLUMN = `${SECTION_BUYERS}__header-column`;
export const SECTION_BUYERS_PRE_TITLE = `${SECTION_BUYERS}__pre-title`;
export const SECTION_BUYERS_TITLE = `${SECTION_BUYERS}__title`;
export const SECTION_BUYERS_ACCENTED_TEXT = `${SECTION_BUYERS}__accented-text`;
export const SECTION_BUYERS_REVIEWS = `${SECTION_BUYERS}__reviews`;
export const SECTION_BUYERS_LINK = `${SECTION_BUYERS}__link`;
export const SECTION_BUYERS_CARD = `${SECTION_BUYERS}__card`;
export const SECTION_BUYERS_BUTTONS = `${SECTION_BUYERS}__buttons`;
export const SECTION_BUYERS_BTN_NEXT = `${SECTION_BUYERS}__btn-next`;
export const SECTION_BUYERS_BTN_PREV = `${SECTION_BUYERS}__btn-prev`;

const SectionBuyers: FC<TSectionBuyersProps> = (props) => {
  const { className } = props;
  const classes = classNames(SECTION, SECTION_BUYERS, className);

  const slides = useMemo(
    () =>
      reviews.map((review) => (
        <SwiperSlide key={review.imgURL}>
          <Link
            className={SECTION_BUYERS_LINK}
            to={getFullPath(`${review.category}/${review.productId}`)}>
            <ReviewCard className={SECTION_BUYERS_CARD} review={review} />
          </Link>
        </SwiperSlide>
      )),
    []
  );

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <header className={SECTION_BUYERS_HEADER}>
          <div className={SECTION_BUYERS_HEADER_COLUMN}>
            <p className={classNames(SECTION_BUYERS_PRE_TITLE, 'h1')}>★★★★★</p>
            <h1 className={SECTION_BUYERS_TITLE}>
              Over <span className={SECTION_BUYERS_ACCENTED_TEXT}>500,000</span> happy customers and
              more than <span className={SECTION_BUYERS_ACCENTED_TEXT}>100,000</span> five-star
              reviews
            </h1>
          </div>
          <div className={SECTION_BUYERS_BUTTONS}>
            <Button el="button" theme="secondary" view="round" className={SECTION_BUYERS_BTN_PREV}>
              <IoIosArrowBack />
            </Button>
            <Button el="button" theme="secondary" view="round" className={SECTION_BUYERS_BTN_NEXT}>
              <IoIosArrowForward />
            </Button>
          </div>
        </header>

        <Swiper
          navigation={{
            nextEl: `.${SECTION_BUYERS_BTN_NEXT}`,
            prevEl: `.${SECTION_BUYERS_BTN_PREV}`,
          }}
          scrollbar={{
            hide: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          modules={[Scrollbar, Navigation]}
          className={classNames(SECTION_BUYERS_REVIEWS, 'swiper-equal-slides')}>
          {slides}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionBuyers;
