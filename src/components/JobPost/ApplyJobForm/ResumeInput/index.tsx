import { DocumentTextIcon, TrashIcon } from '@heroicons/react/solid';
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
        <div className={'p-4 bg-slate-200 rounded-md my-4'}>
          <p>{resume?.fileName}</p>
          <div className='flex gap-2 right-4 mt-2'>
            <Button
              type='text'
              className='flex gap-1 items-center '
              icon={<TrashIcon className='h-5 w-5 text-red-500' />}
              onClick={onDelete}
            >
              Remove file
            </Button>
          </div>
        </div>
      ) : (
        <div
          className='p-4 bg-slate-200 rounded-md my-4 flex justify-center items-center gap-2 cursor-pointer'
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
