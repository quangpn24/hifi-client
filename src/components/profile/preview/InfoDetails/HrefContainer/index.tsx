import React from 'react';

type Props = {
  id: string;
};

const HrefContainer: React.FC<Props> = ({ id, children }) => {
  return (
    <div className='mb-8 relative'>
      {children}
      <div
        className='absolute'
        id={id}
        style={{
          top: -120,
        }}
      />
    </div>
  );
};

export default HrefContainer;
