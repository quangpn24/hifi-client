import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';
type Props = {
  text: string;
};

const Item = ({ text }: Props) => {
  return (
    <li className='flex grap-2 items-center mb-2'>
      <CheckCircleIcon className='h-5 w-5 mr-1' />
      <p className='!mb-0'>{text}</p>
    </li>
  );
};

export default Item;
