import { ComponentProps, FC, useMemo } from 'react';
import classNames from 'classnames';
import { WRAPPER, SECTION } from '../../../constants/classNames';
import { TDetails } from '../../../types/types';
import SectionAdvantage from '../SectionAdvantage/SectionAdvantage';
import './Advantages.scss';

export type TAdvantagesProps = ComponentProps<'section'> & {
  details: TDetails;
};

export const ADVANTAGES = 'advantages';

const Advantages: FC<TAdvantagesProps> = (props) => {
  const { className, details } = props;
  const classes = classNames(SECTION, WRAPPER, ADVANTAGES, className);

  const sections = useMemo(
    () =>
      details.advantages.map(({ mediaURL, title, text }, index) => {
        return (
          <SectionAdvantage
            key={title}
            horizontal={index === 0}
            reversed={index % 2 === 0 && index !== 0}
            mediaURL={mediaURL}
            title={title}
            text={text}
          />
        );
      }),
    [details]
  );

  return <section className={classes}>{sections}</section>;
};

export default Advantages;
