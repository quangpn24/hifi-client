import React from 'react';
import styles from '../../styles.module.css';
import { XIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
type Props = {
  text: string;
  onDelete?: () => void;
};

const Chip = ({ text, onDelete }: Props) => {
  return (
    <div
      className={classNames(styles.chip, {
        'flex justify-center items-center': !!onDelete,
      })}
      onClick={() => onDelete?.()}
    >
      <p>{text}</p>
      {onDelete && <XIcon className='ml-3 h-4 w-4 cursor-pointer' />}
    </div>
  );
};

export default Chip;
