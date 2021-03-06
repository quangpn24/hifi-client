import { EditOutlined } from '@ant-design/icons';
import { PaperClipIcon } from '@heroicons/react/outline';
import { DocumentTextIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { Button, Divider, message, Modal } from 'antd';
import userApi from 'api/userApi';
import { useProfileOverviewContext } from 'context/ProfileContext';
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

type Resume = {
  fileName: string;
  url?: string;
  file?: File;
};
const ResumeSection = ({}: Props) => {
  const user = useAppSelector(selectUser);
  const { changeOverview } = useProfileOverviewContext() as ProfileOverviewContextType;
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState<Resume | null>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOk = async () => {
    setLoading(true);
    try {
      let fileUrl;
      if (resume?.file) {
        const { error, url } = await uploadFile(resume.file, 'job-seekers/resume');
        fileUrl = url;
        if (error || !url) {
          throw new Error(error);
        }
      }
      const updatedUser = await userApi.updateMe({
        resume:
          resume && fileUrl
            ? {
                fileName: resume.fileName,
                url: fileUrl,
              }
            : null,
      });
      dispatch(
        authActions.update({ user: { ...(user ? user : updatedUser), resume: updatedUser.resume } })
      );
      changeOverview({ resume: true });
      message.success('Update resume successfully');
      setVisible(false);
    } catch (error: any) {
      message.error(error);
    }

    setLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
    setResume(undefined);
  };

  const onEdit = () => {
    inputRef.current?.click();
  };

  const onDelete = () => {
    setResume(undefined);
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target?.files?.[0];
    if (!file) return;
    setResume({ fileName: file.name, file });
  };

  useEffect(() => {
    setResume(user?.resume ? { ...user?.resume } : undefined);
  }, [user?.resume]);

  return (
    <>
      <HrefContainer id='resume'>
        <Header
          text={'Resume'}
          action={
            user?.resume && (
              <Button
                icon={<EditOutlined />}
                type='text'
                onClick={() => {
                  setVisible(true);
                }}
              >
                Edit
              </Button>
            )
          }
        />
        <Divider className='!my-2' />
        {user?.resume ? (
          <Link href={user.resume.url}>
            <a target={'_blank'}>
              <div className='mt-4 flex items-center hover:text-primary-color hover:cursor-pointer'>
                <PaperClipIcon className='h-5 w-5 mr-2' />
                <p className='!mb-0'>{user.resume.fileName}</p>
              </div>
            </a>
          </Link>
        ) : (
          <ActionSuggestion
            text='77.4% of employers consider resumes to be very important in job applications.'
            textButton='ADD RESUME'
            onClick={() => {
              setVisible(true);
            }}
          />
        )}
      </HrefContainer>
      <Modal
        title={user?.resume ? 'EDIT RESEME' : ' ADD RESEME'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
        okText='SAVE'
      >
        <div>
          <p>77.4% of employers consider resumes to be very important in job applications.</p>
          <input
            type='file'
            id='file'
            ref={inputRef}
            onChange={onChangeFile}
            style={{ display: 'none' }}
            disabled={loading}
          />
          {resume ? (
            <div className={'p-4 bg-slate-200 rounded-md my-4'}>
              <p>{resume?.fileName}</p>
              <div className='flex gap-2 right-4 mt-2'>
                <Button
                  type='text'
                  className='flex gap-1 items-center '
                  icon={<PencilIcon className='h-5 w-5 text-primary-color' />}
                  onClick={onEdit}
                >
                  Edit
                </Button>
                <Button
                  type='text'
                  className='flex gap-1 items-center '
                  icon={<TrashIcon className='h-5 w-5 text-red-500' />}
                  onClick={onDelete}
                >
                  Delete
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

          <p>
            Protip! Please upload your resume in PDF format (max 5MB) to get a better first
            impression and boost your chances as employers prefer that!
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ResumeSection;
