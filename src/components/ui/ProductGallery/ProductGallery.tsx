import { ComponentProps, FC, useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { TAppearance, TProduct } from '../../../types/types';
import Button from '../../shared/Button/Button';
import './ProductGallery.scss';
import { IoIosArrowDown } from 'react-icons/io';

export type TProductGalleryProps = ComponentProps<'div'> & {
  product: TProduct;
  appearance: TAppearance;
};

export const PRODUCT_GALLERY = 'product-gallery';
export const PRODUCT_GALLERY_GRID = `${PRODUCT_GALLERY}__grid`;
export const PRODUCT_GALLERY_ITEM = `${PRODUCT_GALLERY}__item`;
export const PRODUCT_GALLERY_LOAD_BTN = `${PRODUCT_GALLERY}__load-btn`;
export const PRODUCT_GALLERY_CONTAINER = `${PRODUCT_GALLERY}__container`;
export const PRODUCT_GALLERY_ERROR_MSG = `${PRODUCT_GALLERY}__error-message`;

const isImgUrl = (path: string): boolean => /\.(jpeg|jpg|gif|png|webp)$/i.test(path);
const isVideoUrl = (path: string): boolean => /\.mp4$/i.test(path);
const IMG_BATCH_SIZE = 6;

const ProductGallery: FC<TProductGalleryProps> = (props) => {
  const { className, appearance } = props;
  const classes = classNames(PRODUCT_GALLERY, className);
  const [maxImgCount, setMaxImgCount] = useState(IMG_BATCH_SIZE);

  const handleLoadBtnClick = useCallback(() => {
    setMaxImgCount((prevCount) => prevCount + IMG_BATCH_SIZE);
  }, []);

  const images = useMemo(
    () =>
      appearance.mediaURL.slice(0, maxImgCount).map((url) => {
        const key = JSON.stringify(url);

        if (isImgUrl(url)) {
          return <img key={key} className={PRODUCT_GALLERY_ITEM} src={url} alt="" />;
        }

        if (isVideoUrl(url)) {
          return (
            <video
              className={PRODUCT_GALLERY_ITEM}
              key={key}
              playsInline
              loop
              autoPlay
              preload="none"
              muted>
              <source src={url} type="video/mp4" />
            </video>
          );
        }
      }),
    [appearance, maxImgCount]
  );

  return (
    <div className={classes}>
      <div className={PRODUCT_GALLERY_GRID}>{images}</div>
      {maxImgCount < appearance.mediaURL.length && (
        <Button
          el="button"
          className={PRODUCT_GALLERY_LOAD_BTN}
          uppercase
          view="primary"
          theme="primary"
          onClick={handleLoadBtnClick}>
          Load more <IoIosArrowDown />
        </Button>
      )}
    </div>
  );
};

export default ProductGallery;
