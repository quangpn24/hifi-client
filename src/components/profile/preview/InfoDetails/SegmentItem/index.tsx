import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './styles.module.css';
type Props = {
  title: string;
  subtitle: string;
  timeline: string;
  descrition?: string;
  last?: boolean;
};

const SegmentItem = ({ title, subtitle, timeline, last, descrition }: Props) => {
  const [showActions, setShowActions] = useState(false);
  return (
    <div
      className='flex gap-6 relative mb-5'
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* <Divider /> */}
      <div
        className={classNames(
          'ml-8 relative max-w-xs md:max-w-sm lg:max-w-3xl xl:max-w-4xl',
          styles.item,
          {
            [styles['last-item']]: last,
          }
        )}
      >
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='!mb-1 text-base'>{subtitle}</p>
        <p className='!mb-1 text-gray-500'>{timeline}</p>
        {descrition && <p className='!mb-0 text-gray-500'>{descrition}</p>}
      </div>
    </div>
  );
};

export default SegmentItem;
