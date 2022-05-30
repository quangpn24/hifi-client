import { Button, Col, Divider, Menu, Row } from 'antd';
import ContactInfo from 'components/settings/ContactInfo';
import LoginDetails from 'components/settings/LoginDetails';
import Support from 'components/settings/Support';
import { DEFAULT_IMAGE } from 'constant';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
const tabs = [
  {
    key: 'detail',
    title: 'LOGIN DETAILS',
  },
  {
    key: 'contact',
    title: 'CONTACT INFORMATION',
  },
  {
    key: 'help',
    title: 'HELP & SUPPORT',
  },
];
const SettingsPage: NextPage = () => {
  const user = useAppSelector(selectUser);
  const [tab, setTab] = useState(tabs[0].key);
  return (
    <div className='bg-white rounded-md p-4 my-4'>
      <h2 className='font-bold mb-2'>Account Settings</h2>
      <Row className='h-full'>
        <Col
          span={6}
          className='h-full'
          style={{
            borderRight: '1px solid rgb(198, 198, 198)',
            minHeight: '800px',
          }}
        >
          <div className='flex flex-col justify-center items-center my-2'>
            <div className='w-32 h-32' style={{ borderRadius: '50%', overflow: 'hidden' }}>
              <Image
                src={user?.photoUrl ?? DEFAULT_IMAGE}
                alt={user?.name ?? 'avatar-user'}
                loading='lazy'
                layout='responsive'
                width={200}
                height={200}
              />
            </div>
            <h3>{user?.name}</h3>
            <Link href={'/profile'}>
              <a className='my-2'>
                <Button>Manage Profile</Button>
              </a>
            </Link>
          </div>
          <Menu
            defaultSelectedKeys={[tabs[0].key]}
            mode='inline'
            onClick={(e) => {
              setTab(e.key);
            }}
          >
            {tabs.map((item) => (
              <Menu.Item key={item.key}>{item.title}</Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col span={18}>
          {tab === 'detail' && <LoginDetails />}
          {tab === 'contact' && <ContactInfo />}
          {tab === 'help' && <Support />}
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;
