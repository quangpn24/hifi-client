import React from 'react';
import styles from '../styles.module.css';
type Props = {
  icon: JSX.Element;
  text: string;
  onClick?: () => void;
};

const QuickActionItem = ({ icon, text, onClick }: Props) => {
  return (
    <div className={styles['action-item']} onClick={onClick}>
      {icon}
      <p className='!mb-0 ml-1'>{text}</p>
    </div>
  );
};

export default QuickActionItem;
