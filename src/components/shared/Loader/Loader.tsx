import { getClasses } from '../../../utils/getClasses';
import { ComponentProps, FC } from 'react';
import './loader.scss';

export type TLoaderProps = ComponentProps<'span'>;

export const LOADER = 'loader';
export const LOADER_DOT = `${LOADER}__dot`;

const Loader: FC<TLoaderProps> = (props) => {
  const { className, ...restProps } = props;

  const classes = getClasses(LOADER, className);

  return (
    <span className={classes} {...restProps} data-testid="loader">
      <span className={LOADER_DOT} />
    </span>
  );
};

export default Loader;
