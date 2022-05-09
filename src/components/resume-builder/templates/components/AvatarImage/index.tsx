/* eslint-disable @next/next/no-img-element */

const AvatarImage = () => {
  return (
    <div className='text-center mt-1 mb-4'>
      <img
        src='https://picsum.photos/id/1011/500/500'
        className='rounded-full'
        alt='avatar'
        width={140}
        height={140}
      />
    </div>
  );
};

export default AvatarImage;
