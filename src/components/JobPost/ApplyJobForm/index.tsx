import { PencilIcon } from '@heroicons/react/solid';
import { Button, Checkbox, Form, Input, message, Modal } from 'antd';
import applicationApi from 'api/applicationApi';
import axios from 'axios';
import { validateMessages } from 'constant/validateMessages';
import { deteteFile, uploadFile } from 'firebase/services';
import React, { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import { selectUser } from 'redux/selectors';
import ResumeInput from './ResumeInput';
import moment from 'moment';
import notificationSocket from 'utils/notificationSocket';

type Props = {
  title?: string;
  visible?: boolean;
  onCancel?: () => void;
  onSuccess?: () => void;
  post: Post;
};
const { TextArea } = Input;
const ApplyJobFormModal = ({ post, title, visible, onCancel, onSuccess }: Props) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [haveCoverLetter, setHaveCoverLetter] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useAppSelector(selectUser);
  const defaultValues = useMemo(
    () => ({
      resume: user?.resume,
      phoneNumber: user?.phoneNumber,
      haveCoverLetter: false,
    }),
    [user]
  );
  const onFinish = async (data: any) => {
    !data.haveCoverLetter && data.coverLetter && delete data.coverLetter;
    data.userId = user?._id;
    data.postId = post._id;
    setLoading(true);
    const { resume } = data;

    let fileUrl;
    try {
      if (!resume.url) {
        if (resume?.file) {
          const { error, url } = await uploadFile(resume.file, 'job-seekers/resume');

          fileUrl = url;
          if (error || !url) {
            throw new Error(error);
          }
        }
        const resumeData =
          resume && fileUrl
            ? {
                fileName: resume.fileName,
                url: fileUrl,
              }
            : null;
        const application = await applicationApi.createApplication({ ...data, resume: resumeData });

        dispatch(
          authActions.update({
            user: { ...user!!, resume: resumeData },
          })
        );
      } else {
        const application = await applicationApi.createApplication({ ...data });
      }

      message.success('Send application successfully');

      const sendData = {
        receiverType: 'company',
        receiver: post.company?._id,
        message: 'New application from ' + user?.name,
        redirectUrl: '/manage-candidates',
        createdAt: moment(),
      };

      notificationSocket.emit('sendNotification', sendData);
      onCancel?.();
    } catch (error: any) {
      if (fileUrl) {
        await deteteFile(fileUrl, 'job-seekers/resume/');
        data.resume.url = undefined;
      }
      setLoading(false);
      if (axios.isAxiosError(error)) {
        message.error(error.response?.data.message);
      } else {
        message.error(error.message);
      }
    }
    form.resetFields();
  };

  const handleOk = async (data: any) => {
    form.submit();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  useEffect(() => {
    if (visible) {
      setLoading(false);
    }
  }, [visible]);

  useEffect(() => {
    if (visible) {
      form.setFieldsValue(defaultValues);
      setHaveCoverLetter(false);
    }
  }, [form, visible, defaultValues]);
  return (
    <Modal
      title={title}
      visible={visible}
      confirmLoading={loading}
      onOk={handleOk}
      onCancel={handleCancel}
      okText='Submit application'
    >
      <div>
        <p>You are about to apply to {post.title}</p>
        <Form
          form={form}
          labelAlign='left'
          layout='vertical'
          validateMessages={validateMessages}
          onFinish={onFinish}
          onValuesChange={(changedValued) => {
            if (typeof changedValued?.haveCoverLetter === 'boolean') {
              setHaveCoverLetter(changedValued.haveCoverLetter);
            }
          }}
          initialValues={defaultValues}
        >
          <Form.Item
            label='Resume'
            name='resume'
            rules={[
              {
                required: true,
                message: 'Please input your resume',
              },
            ]}
            required={true}
            className='!mb-0'
          >
            <ResumeInput />
          </Form.Item>
          <p>
            Upload file in PDF format max 5MB.
            <br /> Upload it for once and you can use it for the next application.
          </p>

          <Form.Item
            label='Phone Number'
            name='phoneNumber'
            rules={[
              {
                required: true,
                message: 'Please input your phone number',
              },
            ]}
            required={true}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='haveCoverLetter'
            label={
              <p className='flex !mb-0 items-center'>
                <PencilIcon className='w-4 h-4 mr-1' />
                <span>Cover Letter</span>
              </p>
            }
            valuePropName='checked'
          >
            <Checkbox>I have a cover letter!</Checkbox>
          </Form.Item>
          <Form.Item name='coverLetter' hidden={!haveCoverLetter}>
            <TextArea />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
export default ApplyJobFormModal;
