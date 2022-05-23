import React, { useEffect, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, message, Modal } from 'antd';
import Header from '../Header';
import { Input } from 'antd';
import ActionSuggestion from '../ActionSuggestion';
import userApi from 'api/userApi';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import { authActions } from 'redux/reducers/authSlice';
import axios from 'axios';

const { TextArea } = Input;

const AboutMe = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const [about, setAbout] = useState<string | undefined>(user?.about);
  const [loading, setLoading] = useState(false);

  const handleOk = async () => {
    try {
      setLoading(true);
      const newUser = await userApi.updateMe({ about });
      dispatch(authActions.update({ user: { ...(user ?? newUser), about: about ?? '' } }));
      message.success('Update about me successfully');
      setVisible(false);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        message.error(error?.response?.data.message);
      } else {
        message.error(error?.message);
      }
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (visible) {
      setAbout(user?.about);
    }
  }, [user?.about, visible]);

  return (
    <>
      <div className='mb-8'>
        <Header
          text={'About Me'}
          action={
            !!about && (
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setVisible(true);
                }}
                type='text'
              >
                Edit
              </Button>
            )
          }
        />
        <Divider className='!my-2' />
        <div className='mt-4'>
          {!!user?.about ? (
            <p>{user?.about}</p>
          ) : (
            <ActionSuggestion
              text='Tell employers what you can bring to the table.'
              textButton='ADD A DESCRIPTION ABOUT ME'
              onClick={() => {
                setVisible(true);
              }}
            />
          )}
        </div>
      </div>
      <Modal
        title='About me'
        visible={visible}
        onOk={handleOk}
        okText='SAVE'
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <p>Telling them about yourself will help them understand you.</p>
        <TextArea
          rows={5}
          value={about}
          placeholder='Add an introduction about yourselft'
          onChange={(e) => setAbout(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default AboutMe;
