import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { getUrlWithNewParams } from '../../../utils/getUrlWithNewParams';
import { encode } from 'ent';
import Button from '../../shared/Button/Button';
import './ParamTabs.scss';

export type TParamTabsProps = ComponentProps<'div'> & {
  values: string[];
  currentValue: string;
  paramName: string;
};

export const PARAM_TABS = 'param-tabs';
export const PARAM_TABS_LINK = `${PARAM_TABS}__link`;
export const PARAM_TABS_GRID = `${PARAM_TABS}__grid`;

const ParamTabs: FC<TParamTabsProps> = (props) => {
  const { className, values, currentValue, paramName } = props;
  const classes = classNames(PARAM_TABS, className);

  const links = useMemo(() => {
    return values.map((value) => {
      return (
        <Button
          el="link"
          className={PARAM_TABS_LINK}
          key={value}
          theme="secondary"
          view="primary"
          selected={value === currentValue}
          capitalized
          to={getUrlWithNewParams({ [paramName]: encode(value) })}
          relative="path">
          {value}
        </Button>
      );
    });
  }, [values, currentValue, paramName]);

  return (
    <div className={classes}>
      <div className={PARAM_TABS_GRID}>{links}</div>
    </div>
  );
};

export default ParamTabs;
