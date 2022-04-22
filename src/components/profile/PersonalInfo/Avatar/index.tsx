import { CameraIcon } from '@heroicons/react/outline';
import { Spin } from 'antd';
import { DEFAULT_IMAGE } from 'constant';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './styles.module.css';
type Props = {
  value?: File;
  onChange?: (value?: File) => void;
  image?: string;
  canUpdate?: boolean;
};

const Avatar = ({ image, onChange, canUpdate }: Props) => {
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/*',
    maxSize: 3145728,
    onDrop: (acceptedFiles) => {
      console.log('acceptedFiles', acceptedFiles);
      if (!acceptedFiles?.[0]) return;
      handleImageChange(acceptedFiles[0]);
    },
  });
  const [previewImage, setPreviewImage] = useState<string | undefined>(undefined);

  const handleImageChange = (file?: File) => {
    if (!file) {
      setPreviewImage(undefined);
      return;
    }
    console.log('handleImageChange File: ', file);
    revokeURLImage();
    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);

    console.log('PreviewUrl : ', previewUrl);
    onChange?.(file);
  };
  const revokeURLImage = useCallback(() => {
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
      setPreviewImage(undefined);
    }
  }, [previewImage]);
  return (
    <div className='relative dropzone h-36 w-36 overflow-hidden rounded-[50%]' {...getRootProps()}>
      <input type='file' accept='image/*' {...getInputProps()} />

      {/* <div className={styles.avatar}>
        <Image
          src={previewImage || image || DEFAULT_IMAGE}
          alt='avatar-user'
          loading='lazy'
          layout='fill'
        />
      </div> */}

      <div className='h-36 w-36 absolute' style={{ borderRadius: '50%' }}>
        <Image
          src={previewImage || image || DEFAULT_IMAGE}
          alt='avatar-user'
          loading='lazy'
          layout='responsive'
          width={200}
          height={200}
        />
      </div>
      {canUpdate && (
        <div className={styles.backdrop}>
          <CameraIcon className='h-10 w-10 text-white' />
        </div>
      )}
    </div>
  );
};

export default Avatar;
