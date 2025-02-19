import { ComponentProps, FC, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { TAppearance, TProduct } from '../../../types/types';
import Button from '../../shared/Button/Button';
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './ProductGallery.scss';

export type TProductGalleryProps = ComponentProps<'div'> & {
  product: TProduct;
  appearance: TAppearance;
};

export const PRODUCT_GALLERY = 'product-gallery';
export const PRODUCT_GALLERY_GRID = `${PRODUCT_GALLERY}__grid`;
export const PRODUCT_GALLERY_MEDIA_ITEM = `${PRODUCT_GALLERY}__media-item`;
export const PRODUCT_GALLERY_MEDIA = `${PRODUCT_GALLERY}__media`;
export const PRODUCT_GALLERY_LOAD_BTN = `${PRODUCT_GALLERY}__load-btn`;
export const PRODUCT_GALLERY_SWIPER = `${PRODUCT_GALLERY}__swiper`;
export const PRODUCT_GALLERY_BTN_PREV = `${PRODUCT_GALLERY}__btn-previous`;
export const PRODUCT_GALLERY_BTN_NEXT = `${PRODUCT_GALLERY}__btn-next`;

const isImgUrl = (path: string): boolean => /\.(jpeg|jpg|gif|png|webp)$/i.test(path);
const isVideoUrl = (path: string): boolean => /\.mp4$/i.test(path);
const MEDIA_BATCH_SIZE = 6;

const ProductGallery: FC<TProductGalleryProps> = (props) => {
  const { className, appearance } = props;
  const classes = classNames(PRODUCT_GALLERY, className);
  const [maxMediaCount, setMaxMediaCount] = useState(MEDIA_BATCH_SIZE);

  const handleLoadBtnClick = useCallback(() => {
    setMaxMediaCount((prevCount) => prevCount + MEDIA_BATCH_SIZE);
  }, []);

  const mediaItems = useMemo(
    () =>
      appearance.mediaURL
        .map((url) => {
          const key = JSON.stringify(url);

          let media = null;

          if (isImgUrl(url)) {
            media = <img className={PRODUCT_GALLERY_MEDIA} src={url} alt="" />;
          } else if (isVideoUrl(url)) {
            media = (
              <video
                className={PRODUCT_GALLERY_MEDIA}
                playsInline
                loop
                autoPlay
                preload="none"
                muted>
                <source src={url} type="video/mp4" />
              </video>
            );
          }

          return (
            <div className={PRODUCT_GALLERY_MEDIA_ITEM} key={key}>
              {media}
            </div>
          );
        })
        .filter((item) => !!item),
    [appearance]
  );

  const slides = useMemo(
    () => mediaItems.map((item) => <SwiperSlide key={item.key}>{item}</SwiperSlide>),
    [mediaItems]
  );

  const showMedia = useMemo(() => mediaItems.slice(0, maxMediaCount), [mediaItems, maxMediaCount]);

  return (
    <div className={classes}>
      <div className={PRODUCT_GALLERY_SWIPER}>
        <Button el="button" theme="transparent" view="round" className={PRODUCT_GALLERY_BTN_PREV}>
          <IoIosArrowBack />
        </Button>
        <Button
          disabled
          el="button"
          theme="transparent"
          view="round"
          className={PRODUCT_GALLERY_BTN_NEXT}>
          <IoIosArrowForward />
        </Button>
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: `.${PRODUCT_GALLERY_BTN_NEXT}`,
            prevEl: `.${PRODUCT_GALLERY_BTN_PREV}`,
          }}
          modules={[Navigation]}>
          {slides}
        </Swiper>
      </div>
      <div className={PRODUCT_GALLERY_GRID}>{showMedia}</div>
      {maxMediaCount < appearance.mediaURL.length && (
        <Button
          el="button"
          className={PRODUCT_GALLERY_LOAD_BTN}
          uppercase
          view="secondary"
          theme="primary"
          onClick={handleLoadBtnClick}>
          Load more <IoIosArrowDown />
        </Button>
      )}
    </div>
  );
};

export default ProductGallery;
