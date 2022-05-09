import React from 'react';

type Props = {
  text: string;
  action: React.ReactNode;
};

const Header = ({ text, action }: Props) => {
  return (
    <>
      <div className='lg:flex justify-between items-center !mb-0'>
        <h2 className='text-2xl !mb-0'>
          <strong>{text}</strong>
        </h2>
        {action}
      </div>
    </>
  );
};

export default Header;
