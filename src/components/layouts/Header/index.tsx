import Icon, { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Row, Col, Button, Avatar, Menu, Drawer } from 'antd';
import type { NextPage } from 'next';
import logo from '/public/images/Logo.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const { SubMenu } = Menu;

interface menuData {
  id: number;
  name: String;
  url: string;
  icon: JSX.Element;
}

interface Props {
  menu: Array<menuData>;
}

const Header: NextPage<Props> = (props) => {
  const { menu } = props;
  const [pathname, setPathname] = useState(['home']);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const tmp = window.location.pathname.substring(1);
    setPathname([tmp]);
  }, []);

  const navMenu = (
    <>
      {menu.map((item) => (
        <Menu.Item key={item.id}>
          <Link href={item.url} passHref={true}>
            <span className='font-bold text-text-primary text-md'>{item.name}</span>
          </Link>
        </Menu.Item>
      ))}
    </>
  );

  return (
    <div className='sticky inset-x-0 top-0 bg-white z-10 drop-shadow-xl'>
      <Row justify='space-between' className='px-16 py-4 '>
        <Col className='items-center'>
          <div className='mobileVisible'>
            <Button type='primary' onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer placement='left' onClose={onClose} visible={visible}>
              <Menu
                onClick={(e) => {
                  setPathname([e.key]);
                  setVisible(false);
                }}
                selectedKeys={pathname}
                theme='light'
                mode='vertical'
                inlineCollapsed={false}
              >
                {navMenu}
              </Menu>
            </Drawer>
          </div>
          <div className='mobileHidden'>
            <Row align='middle'>
              <Button type='link' className='w-16' href='./'>
                <Image alt='' src={logo} />
              </Button>
              <Menu
                onClick={(e) => setPathname([e.key])}
                selectedKeys={pathname}
                theme='light'
                mode='horizontal'
                expandIcon={<DownOutlined />}
                disabledOverflow={true}
              >
                {navMenu}
              </Menu>
            </Row>
          </div>
        </Col>
        <Col>
          <Button key='login' type='link' href='/login'>
            <span className='font-semibold text-text-secondary'>Login</span>
          </Button>
          <Button key='signup' type='primary' href='/signup'>
            <span className='font-semibold text-[#fff] '>Sign up</span>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
