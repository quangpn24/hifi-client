import { Menu, MenuProps } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

type Props = {};

export const ApplicationStatusMap = new Map([
  [
    'ALL',
    {
      key: 'ALL',
      text: 'All',
      color: 'primary',
    },
  ],
  [
    'NEW',
    {
      key: 'NEW',
      text: 'Pending Review',
      color: 'lime',
    },
  ],
  [
    'IN_PROGRESS',
    {
      key: 'IN_PROGRESS',
      text: 'In Progress',
      color: 'processing',
    },
  ],
  [
    'HIRED',
    {
      key: 'HIRED',
      text: 'Hired',
      color: 'success',
    },
  ],
  [
    'UNSUITABLE',
    {
      key: 'UNSUITABLE',
      text: 'Unsuitable',
      color: 'default',
    },
  ],
]);

const StatusSideBar = (props: Props) => {
  const [status, setStatus] = useState(ApplicationStatusMap.keys().next().value);
  const router = useRouter();
  const handleClick: MenuProps['onClick'] = (e) => {
    setStatus(e.key);
    router.query.status = e.key;
    router.push(router);
  };

  return (
    <Menu
      style={{ width: 256 }}
      mode={'vertical'}
      theme={'light'}
      selectedKeys={[status]}
      onClick={handleClick}
    >
      {Array.from(ApplicationStatusMap).map(([key, value]) => (
        <Menu.Item key={value.key}>{value.text.toUpperCase()}</Menu.Item>
      ))}
    </Menu>
  );
};

export default StatusSideBar;
