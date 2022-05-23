import { PlusOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
  href: string;
};

const InstructionItem = ({ text, onClick, href }: Props) => {
  return (
    <Link href={href}>
      <a>
        <div
          className='flex items-center justify-center py-3 hover:cursor-pointer'
          onClick={onClick}
        >
          <PlusOutlined />
          <p className='ml-2 text-base !mb-0'>{text}</p>
          <RightOutlined style={{ marginLeft: 'auto' }} />
        </div>
      </a>
    </Link>
  );
};

export default InstructionItem;
