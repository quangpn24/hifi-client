import React from 'react';

interface IProps {
  label: string;
  value?: string | number;
}

const InfoItem: React.FC<IProps> = ({ label, value }) => {
  return (
    <div className='mb-4'>
      <div className='uppercase text-zinc-400 font-semibold	text-base'>{label}</div>
      <p className='font-medium	text-base'>{value}</p>
    </div>
  );
};

export default InfoItem;
