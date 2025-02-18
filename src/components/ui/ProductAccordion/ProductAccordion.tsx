import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { TDetails, TSize } from '../../../types/types';
import { Accordion } from 'react-bootstrap';
import './ProductAccordion.scss';

export type TProductAccordionProps = ComponentProps<typeof Accordion> & {
  details: TDetails;
  size: TSize;
};

export const PRODUCT_ACCORDION = 'product-accordion';
export const PRODUCT_ACCORDION_ITEM = `${PRODUCT_ACCORDION}__item`;
export const PRODUCT_ACCORDION_ITEM_HEADER = `${PRODUCT_ACCORDION}__item-header`;
export const PRODUCT_ACCORDION_SIZE = `${PRODUCT_ACCORDION}__size`;
export const PRODUCT_ACCORDION_SIZE_UNIT = `${PRODUCT_ACCORDION}__size-unit`;
export const PRODUCT_ACCORDION_SIZE_IMG = `${PRODUCT_ACCORDION}__size-img`;
export const PRODUCT_ACCORDION_MATERIAL = `${PRODUCT_ACCORDION}__material`;
export const PRODUCT_ACCORDION_MATERIAL_TITLE = `${PRODUCT_ACCORDION}__material-title`;
export const PRODUCT_ACCORDION_MATERIAL_DESC = `${PRODUCT_ACCORDION}__material-description`;

const ProductAccordion: FC<TProductAccordionProps> = (props) => {
  const { className, size, details } = props;
  const classes = classNames(PRODUCT_ACCORDION, className);

  const accordionContent = useMemo(() => {
    return [
      {
        title: 'Product description',
        content: details.fullDesc,
      },
      {
        title: 'Dimensions',
        content: (
          <>
            <img className={PRODUCT_ACCORDION_SIZE_IMG} src={size.mediaURL} alt="Product sizes" />
            <p className={PRODUCT_ACCORDION_SIZE}>
              <span className={PRODUCT_ACCORDION_SIZE_UNIT}>Height:</span> {size.height} cm
            </p>
            <p className={PRODUCT_ACCORDION_SIZE}>
              <span className={PRODUCT_ACCORDION_SIZE_UNIT}>Width: </span>
              {size.width} cm
            </p>
            <p className={PRODUCT_ACCORDION_SIZE}>
              <span className={PRODUCT_ACCORDION_SIZE_UNIT}>Length:</span> {size.length} cm
            </p>
            <p className={PRODUCT_ACCORDION_SIZE}>
              <span className={PRODUCT_ACCORDION_SIZE_UNIT}>Weight:</span> {size.weight} kg
            </p>
          </>
        ),
      },
      {
        title: 'Materials, sustainability & care',
        content: details.materials.map((material) => (
          <div className={PRODUCT_ACCORDION_MATERIAL} key={material.title}>
            <p className={PRODUCT_ACCORDION_MATERIAL_TITLE}>{material.title}</p>
            <p className={PRODUCT_ACCORDION_MATERIAL_DESC}>{material.text}</p>
          </div>
        )),
      },
    ].map((item, index) => (
      <Accordion.Item className={PRODUCT_ACCORDION_ITEM} key={item.title} eventKey={`${index}`}>
        <Accordion.Header className={PRODUCT_ACCORDION_ITEM_HEADER}>{item.title}</Accordion.Header>
        <Accordion.Body>{item.content}</Accordion.Body>
      </Accordion.Item>
    ));
  }, [details, size]);

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen className={classes}>
      {accordionContent}
    </Accordion>
  );
};

export default ProductAccordion;
