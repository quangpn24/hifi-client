import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
type Props = {
  className?: string | undefined;
};

const Divider = ({ className }: Props) => {
  console.log('Styles', styles);
  return (
    <div className={classNames('relative bg-primary-color w-1 h-full', styles.divider, className)}>
      <div
        className='bg-primary-color w-4 h-4 absolute'
        style={{
          borderRadius: '50%',
          // left: '-50%',
          transform: 'translateX(-40%)',
        }}
      />
    </div>
  );
};

export default Divider;
