import { Button } from 'antd';
import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
type Props = {
  text: string;
  textButton: string;
  onClick: () => void;
};

const ActionSuggestion = ({ onClick, text, textButton }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='mb-2 text-gray-600 text-base text-center px-6'>{text}</p>
      <Button
        icon={<PlusCircleIcon className='w-5 h-5 text-primary-color' />}
        className='child:text-primary-color flex gap-1 items-center font-bold'
        onClick={onClick}
        type='text'
      >
        {textButton.toUpperCase()}
      </Button>
    </div>
  );
};

export default ActionSuggestion;
