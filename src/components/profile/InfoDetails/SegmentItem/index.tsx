import React, { useState } from 'react';
import Divider from '../Divider';
import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { Button } from 'antd';
import styles from './styles.module.css';
import classNames from 'classnames';
type Props = {
  title: string;
  subtitle: string;
  timeline: string;
  descrition?: string;
  onEdit: () => void;
  onDelete: () => void;
  last?: boolean;
};

const SegmentItem = ({ title, subtitle, timeline, last, descrition, onDelete, onEdit }: Props) => {
  const [showActions, setShowActions] = useState(false);
  return (
    <div
      className='flex gap-6 relative mb-5'
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* <Divider /> */}
      <div
        className={classNames('ml-8 relative', styles.item, {
          [styles['last-item']]: last,
        })}
      >
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='!mb-1 text-base'>{subtitle}</p>
        <p className='!mb-1 text-gray-500'>{timeline}</p>
        {descrition && <p className='!mb-0 text-gray-500'>{descrition}</p>}
      </div>
      {showActions && (
        <div className='flex gap-2 absolute right-4'>
          <Button
            type='text'
            className='flex gap-1 items-center '
            icon={<PencilIcon className='h-5 w-5 text-primary-color' />}
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            type='text'
            className='flex gap-1 items-center '
            icon={<TrashIcon className='h-5 w-5 text-red-500' />}
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default SegmentItem;
