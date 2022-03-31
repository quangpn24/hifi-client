import Image from 'next/image';
import React from 'react';
import logo from 'assets/images/logo.png';

export const SideBar = () => {
  return (
    <div className={`bg-primary-color flex items-center flex-col justify-center h-screen`}>
      <Image src={logo} alt='logo' height={100} width={100} className='mb-4' />
      <h3 className='text-3xl mt-4 mb-1 font-semibold text-white'>HiFi</h3>
      <p className='text-base font-semibold text-white'>Get hired, find jobs</p>
    </div>
  );
};
