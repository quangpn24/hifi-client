import { EditOutlined } from '@ant-design/icons';
import { Button, Col, FormInstance, message, Modal, Row } from 'antd';
import userApi from 'api/userApi';
import { DEFAULT_IMAGE } from 'constant';
import dayjs from 'dayjs';
import { uploadFile } from 'firebase/services';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import { selectUser } from 'redux/selectors';
import InfoItem from '../InfoItem';
import UpdateInfoForm from './UpdateInfoForm';
type Props = {};

const PersonalInfo = (props: Props) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const formRef = useRef<FormInstance<any> | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOk = () => {
    formRef.current?.submit();
  };
  const handleCancel = () => {
    formRef.current?.resetFields();
    setVisible(false);
  };

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      if (data.photoFile) {
        const { url, error } = await uploadFile(data.photoFile, 'job-seekers/profile');
        if (url) data.photoUrl = url;
        else {
          throw new Error(error);
        }
      }
      data.birthDate = data?.birthDate?.format();
      const updatedUser = await userApi.updateMe(data);
      updatedUser.skills = user?.skills ?? [];
      dispatch(authActions.update({ user: updatedUser }));
      message.success('Update profile successfully');
      setVisible(false);
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <div className='bg-white shadow-md rounded-md'>
        <Row className='p-4' gutter={16}>
          <Col>
            <div
              className='flex items-center justify-center bg-red-700'
              style={{ borderRadius: '50%', overflow: 'hidden' }}
            >
              <div className='h-36 w-36 ' style={{ borderRadius: '50%' }}>
                <Image
                  src={user?.photoUrl || DEFAULT_IMAGE}
                  alt='avatar-user'
                  loading='lazy'
                  layout='responsive'
                  width={170}
                  height={170}
                />
              </div>
            </div>
          </Col>
          <Col lg={17} md={24}>
            <h3 className='text-xl font-bold'>{user?.name}</h3>
            <Row gutter={[0, 24]}>
              <Col span={12}>
                <InfoItem label='Phone Number' value={user?.phoneNumber} />
                <InfoItem label='Address' value={user?.address} />
                <InfoItem label='Gender' value={user?.phoneNumber} />
              </Col>
              <Col span={12}>
                <InfoItem
                  label={`Email ${user?.isVerified ? '(Verified)' : '(Unverified)'}`}
                  value={user?.email}
                />
                <InfoItem
                  label='Age'
                  value={`${dayjs(user?.birthDate).fromNow(true)} old, ${
                    user?.gender === 'FEMALE' ? 'Female' : 'Male'
                  }`}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={1} md={24}>
            <Button
              icon={<EditOutlined style={{ fontSize: '130%' }} />}
              onClick={() => {
                setVisible(true);
              }}
            />
          </Col>
        </Row>
      </div>
      <Modal
        title='BASIC INFORMATION'
        visible={visible}
        okText={'SAVE'}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <UpdateInfoForm ref={formRef} onSubmit={handleSubmit} user={user} />
      </Modal>
    </>
  );
};

export default PersonalInfo;
