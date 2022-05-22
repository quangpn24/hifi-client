import { EditOutlined, FormOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useAppDispatch } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
const Content = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      dispatch(authActions.logout());
    } catch (error) {
      console.log('handleLogout Error: ', error);
    }
  };

  const editProfile = () => {
    router.push('/profile');
  };

  const viewApplications = () => {
    router.push('/user/applications');
  };
  const viewAccountSettings = () => {
    router.push('/settings');
  };

  const contents = [
    {
      key: '1',
      icon: <EditOutlined />,
      content: 'Edit Profile',
      onClick: editProfile,
    },
    {
      key: '2',
      icon: <FormOutlined />,
      content: 'My Applications',
      onClick: viewApplications,
    },
    {
      key: '3',
      icon: <SettingOutlined />,
      content: 'Account Settings',
      onClick: viewAccountSettings,
    },
    {
      key: '4',
      icon: <LogoutOutlined />,
      content: 'Log Out',
      onClick: handleLogout,
    },
  ];
  const renderMenu = () => {
    return contents.map((content) => {
      return (
        <Menu.Item
          style={{ padding: '0', fontSize: '14px' }}
          key={content.key}
          onClick={content.onClick}
          icon={content.icon}
        >
          {content.content}
        </Menu.Item>
      );
    });
  };
  const menuRendered = renderMenu();
  return (
    <div>
      <Menu style={{ width: 180 }}>{menuRendered}</Menu>
    </div>
  );
};

export default Content;