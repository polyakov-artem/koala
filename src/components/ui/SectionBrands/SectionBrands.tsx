import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { SECTION, WRAPPER } from '../../../constants/classNames';
import imgSrc1 from '../../../assets/images/SectionBrands/GQ.svg';
import imgSrc2 from '../../../assets/images/SectionBrands/bazaar.svg';
import imgSrc3 from '../../../assets/images/SectionBrands/refinary.svg';
import imgSrc4 from '../../../assets/images/SectionBrands/urban.svg';
import imgSrc5 from '../../../assets/images/SectionBrands/vogue.svg';
import './SectionBrands.scss';

export type TSectionBrandsProps = ComponentProps<'section'>;

export const SECTION_BRANDS = 'section-brands';
export const SECTION_BRANDS_GRID = `${SECTION_BRANDS}__grid`;
export const SECTION_BRANDS_TITLE = `${SECTION_BRANDS}__title`;
export const SECTION_BRANDS_SLIDER = `${SECTION_BRANDS}__slider`;
export const SECTION_BRANDS_SLIDE = `${SECTION_BRANDS}__slide`;
export const SECTION_BRANDS_SLIDE_ITEM = `${SECTION_BRANDS}__slide-item`;
export const SECTION_BRANDS_IMG = `${SECTION_BRANDS}__img`;

const SectionBrands: FC<TSectionBrandsProps> = (props) => {
  const { className } = props;
  const classes = classNames(SECTION, SECTION_BRANDS, className);

  const slide = useMemo(
    () => (
      <div className={SECTION_BRANDS_SLIDE}>
        <div className={SECTION_BRANDS_SLIDE_ITEM}>
          <img className={SECTION_BRANDS_IMG} src={imgSrc1} alt="" />
        </div>
        <div className={SECTION_BRANDS_SLIDE_ITEM}>
          <img className={SECTION_BRANDS_IMG} src={imgSrc2} alt="" />
        </div>
        <div className={SECTION_BRANDS_SLIDE_ITEM}>
          <img className={SECTION_BRANDS_IMG} src={imgSrc3} alt="" />
        </div>
        <div className={SECTION_BRANDS_SLIDE_ITEM}>
          <img className={SECTION_BRANDS_IMG} src={imgSrc4} alt="" />
        </div>
        <div className={SECTION_BRANDS_SLIDE_ITEM}>
          <img className={SECTION_BRANDS_IMG} src={imgSrc5} alt="" />
        </div>
      </div>
    ),
    []
  );

  return (
    <section className={classes}>
      <div className={WRAPPER}>
        <div className={SECTION_BRANDS_GRID}>
          <h2 className={SECTION_BRANDS_TITLE}>As seen in</h2>
          <div className={SECTION_BRANDS_SLIDER}>
            {slide}
            {slide}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBrands;
