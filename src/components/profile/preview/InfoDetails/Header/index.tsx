import React from 'react';

type Props = {
  text: string;
};

const Header = ({ text }: Props) => {
  return (
    <>
      <div className='lg:flex justify-between items-center !mb-0'>
        <h2 className='text-xl !mb-0'>
          <strong>{text}</strong>
        </h2>
      </div>
    </>
  );
};

export default Header;
