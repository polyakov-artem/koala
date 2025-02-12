import { ComponentProps, FC } from 'react';
import Loader from '../../shared/Loader/loader';
import { LOADING_FAIL_PLACEHOLDER, LOADING_PLACEHOLDER } from '../../../constants/constants';
import { getClasses } from '../../../utils/getClasses';
import './LoaderBlock.scss';

export type TLoaderBlockProps = ComponentProps<'div'> & {
  loading?: boolean;
  showLoadingMsg?: boolean;
  errorMsg?: string;
  loadingMsg?: string;
  centered?: boolean;
};

export const LOADER_BLOCK = 'loader-block';

const LoaderBlock: FC<TLoaderBlockProps> = ({
  className,
  loading,
  showLoadingMsg = false,
  errorMsg = LOADING_FAIL_PLACEHOLDER,
  loadingMsg = LOADING_PLACEHOLDER,
  centered = true,
}) => {
  const classes = getClasses(LOADER_BLOCK, className, { centered });

  return (
    <div className={classes}>{loading ? showLoadingMsg ? loadingMsg : <Loader /> : errorMsg}</div>
  );
};

export default LoaderBlock;
