import Image from 'next/image';
import React from 'react';
import logo from 'assets/images/logo.png';

export const SideBar = () => {
  return (
    <div className={`bg-primary-color flex items-center flex-col justify-center h-screen`}>
      <div className='mb-4 absolute top-8 left-8'>
        <Image src={logo} alt='logo' height={100} width={100} />
      </div>
    </div>
  );
};
