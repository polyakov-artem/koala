import { ComponentProps, FC, useMemo } from 'react';
import { TSize } from '../../../types/types';
import classNames from 'classnames';
import { getUrlWithNewParams } from '../../../utils/getUrlWithNewParams';
import Button from '../Button/Button';
import { encode } from 'ent';
import './SizeTabs.scss';

export type TSizeTabsProps = ComponentProps<'div'> & { sizes: TSize[]; currentSizeName: string };

export const SIZE_TABS = 'size-tabs';
export const SIZE_TABS_LINK = `${SIZE_TABS}__link`;
export const SIZE_TABS_GRID = `${SIZE_TABS}__grid`;

const SizeTabs: FC<TSizeTabsProps> = (props) => {
  const { className, sizes, currentSizeName } = props;
  const classes = classNames(SIZE_TABS, className);

  const sizeLinks = useMemo(() => {
    return [...new Set(sizes.map((size) => size.name))].map((sizeName) => {
      return (
        <Button
          el="link"
          className={SIZE_TABS_LINK}
          key={sizeName}
          theme="secondary"
          view="primary"
          selected={sizeName === currentSizeName}
          capitalized
          to={getUrlWithNewParams({ size: encode(sizeName) })}
          relative="path">
          {sizeName}
        </Button>
      );
    });
  }, [sizes, currentSizeName]);

  return (
    <div className={classes}>
      <div className={SIZE_TABS_GRID}>{sizeLinks}</div>
    </div>
  );
};

export default SizeTabs;
