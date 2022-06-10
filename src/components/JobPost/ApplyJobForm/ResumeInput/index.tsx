import { DocumentTextIcon, TrashIcon, XIcon } from '@heroicons/react/solid';
import { Button } from 'antd';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

type Resume = {
  fileName: string;
  url?: string;
  file?: File;
};
type Props = {
  value?: Resume;
  onChange?: (value?: Resume) => void;
};

const ResumeInput = ({ value, onChange }: Props) => {
  const [resume, setResume] = useState<Resume | undefined>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setResume(value);
  }, [value]);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target?.files?.[0];
    if (!file) return;
    setResume({ fileName: file.name, file });
    onChange?.(resume ? { ...resume, file } : { fileName: file.name, file });
  };
  const onDelete = () => {
    setResume(undefined);
    onChange?.(undefined);
  };
  return (
    <div>
      <input
        type='file'
        id='file'
        ref={inputRef}
        onChange={onChangeFile}
        style={{ display: 'none' }}
      />
      {resume ? (
        <div
          className={
            'p-3 rounded-md my-4 border-primary-color border-[2px] border-dashed flex items-center justify-between max-w-[40%]'
          }
        >
          <p
            className='!mb-0'
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {resume?.fileName}
          </p>
          <Button
            type='text'
            shape='circle'
            className='flex items-center justify-center '
            onClick={onDelete}
          >
            <XIcon className='h-5 w-5' />
          </Button>
        </div>
      ) : (
        <div
          className='p-3 rounded-md border-[2px] border-dashed border-primary-color my-4 flex justify-center items-center gap-2 cursor-pointer  max-w-[40%]'
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <DocumentTextIcon className='w-5 h-5 text-primary-color' />
          <p className='text-primary-color !mb-0'>Upload your CV</p>
        </div>
      )}
    </div>
  );
};

export default ResumeInput;
