import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const InstructionItem = ({ text, onClick }: Props) => {
  return (
    <div className='flex items-center justify-center py-3 hover:cursor-pointer' onClick={onClick}>
      <PlusOutlined />
      <p className='ml-2 text-base !mb-0'>{text}</p>
      <RightOutlined style={{ marginLeft: 'auto' }} />
    </div>
  );
};

export default InstructionItem;
