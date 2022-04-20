import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.css';
import { CameraIcon } from '@heroicons/react/outline';
type Props = {
  image?: string;
  onClick?: () => void;
};

const Avatar = ({ image, onClick }: Props) => {
  return (
    <div className='relative h-36 w-36 overflow-hidden rounded-[50%]' onClick={onClick}>
      <div className={styles.avatar}>
        <img src={image} alt='avatar-user' />
      </div>

      <div className={styles.backdrop}>
        <CameraIcon className='h-10 w-10 text-white' />
      </div>
    </div>
  );
};

export default Avatar;
