import { CheckCircleIcon } from '@heroicons/react/solid';
import classNames from 'classnames';
import React from 'react';

type Props = {
  text: string;
  active?: boolean;
  onClick?: () => void;
};

const StatusCard = ({ text, active = false, onClick }: Props) => {
  return (
    <div
      className={classNames(
        'text-center py-3 border-2 text-lg border-gray-500 border-solid cursor-pointer font-medium tracking-wide my-3 relative hover:border-primary-color',
        active && {
          'bg-[#e4e4f9] border-primary-color': true,
        }
      )}
      onClick={onClick}
    >
      {active && <CheckCircleIcon className='absolute left-2 w-7 h-7' color='#446ffc' />}
      {text}
    </div>
  );
};

export default StatusCard;
