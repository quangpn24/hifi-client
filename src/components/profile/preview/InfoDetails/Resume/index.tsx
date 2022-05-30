import { EditOutlined } from '@ant-design/icons';
import { PaperClipIcon } from '@heroicons/react/outline';
import { DocumentTextIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { Button, Divider, message, Modal } from 'antd';
import userApi from 'api/userApi';
import { uploadFile } from 'firebase/services';
import Link from 'next/link';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import { selectUser } from 'redux/selectors';
import ActionSuggestion from '../ActionSuggestion';
import Header from '../Header';
import HrefContainer from '../HrefContainer';

type Props = {};

const ResumeSection = ({}: Props) => {
  const user = useAppSelector(selectUser);
  return (
    <HrefContainer id='resume'>
      <Header text={'Resume'} />
      <Divider className='!my-2' />
      {user?.resume && (
        <Link href={user.resume.url}>
          <a target={'_blank'}>
            <div className='mt-4 flex items-center hover:text-primary-color hover:cursor-pointer'>
              <PaperClipIcon className='h-5 w-5 mr-2' />
              <p className='!mb-0'>{user.resume.fileName}</p>
            </div>
          </a>
        </Link>
      )}
    </HrefContainer>
  );
};

export default ResumeSection;
