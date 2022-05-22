import React from 'react';
import styles from '../styles.module.css';
type Props = {
  icon: JSX.Element;
  text: string;
};

const QuickActionItem = ({ icon, text }: Props) => {
  return (
    <div className={styles['action-item']}>
      {icon}
      <p className='!mb-0 ml-1'>{text}</p>
    </div>
  );
};

export default QuickActionItem;
