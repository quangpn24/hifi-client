import React, { useEffect, useRef, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, message, Modal, Space } from 'antd';
import Header from '../Header';
import Chip from './Chip';
import UpdateSkillsForm from './UpdateSkillsForm';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import SkillsList from './SkillsList';
import userApi from 'api/userApi';
import { authActions } from 'redux/reducers/authSlice';

type Props = {};

const Skills = ({}: Props) => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef<any>(null);
  const user = useAppSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let mounted = true;
    userApi
      .getUserSkills()
      .then((res) => {
        if (mounted) {
          dispatch(authActions.update({ user: res.user }));
        }
      })
      .catch((err) => {
        console.log('Error', err);
        message.error(err.message);
      });

    return () => {
      mounted = false;
    };
  }, [dispatch]);

  const handleOk = () => {
    formRef.current?.submit();
  };
  const handleCancel = () => {
    setVisible(false);
    formRef.current?.resetFields();
  };
  const handleFormSubmit = async (data: Skill[]) => {
    try {
      setLoading(true);
      const { user } = await userApi.updateSkills(data.map((d) => d._id));
      dispatch(authActions.update({ user }));
      setLoading(false);
      setVisible(false);
    } catch (error: any) {
      message.error('Error from edit skill: ', error?.message);
    }
  };

  return (
    <>
      <div className='mb-8'>
        <Header
          text={'Skills'.toUpperCase()}
          action={
            <Button
              icon={<EditOutlined />}
              type='text'
              onClick={() => {
                setVisible(true);
              }}
            >
              Edit
            </Button>
          }
        />
        <Divider className='!my-2' />
        {(!!user?.skills && user?.skills?.length) > 0 ? (
          <SkillsList skills={user?.skills} />
        ) : (
          <p>No skills</p>
        )}
      </div>
      <Modal
        title='SKILLS'
        visible={visible}
        onOk={handleOk}
        okText='SAVE'
        okButtonProps={{
          className: '!px-8',
        }}
        confirmLoading={loading}
        cancelText='CANCEL'
        onCancel={handleCancel}
      >
        <UpdateSkillsForm onSubmit={handleFormSubmit} skills={user?.skills} ref={formRef} />
      </Modal>
    </>
  );
};

export default Skills;
