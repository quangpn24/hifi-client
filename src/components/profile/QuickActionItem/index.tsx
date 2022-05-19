import classNames from 'classnames';
import React from 'react';
import styles from '../styles.module.css';
type Props = {
  icon: JSX.Element;
  text: string;
};

const QuickActionItem = ({ icon, text }: Props) => {
  return (
    <div className={classNames(styles['action-item'])}>
      {icon}
      <p className='mt-2 !mb-0'>{text}</p>
    </div>
  );
};

export default QuickActionItem;
