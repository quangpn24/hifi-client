import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Menu, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import RightContent from './RightContent';
import logo from '/public/images/Logo.svg';
interface menuData {
  id: number;
  name: String;
  url: string;
  icon: JSX.Element;
}

interface Props {
  menu: Array<menuData>;
}

const Header = (props: Props) => {
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
      <Row justify='space-between' className='contain py-2 ' align='middle'>
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
              <Link href='/' passHref={true}>
                <Button type='link' className='w-16'>
                  <Image alt='' src={logo} />
                </Button>
              </Link>

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
          <RightContent />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
