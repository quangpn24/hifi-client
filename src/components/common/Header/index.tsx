import Icon from '@ant-design/icons';
import { Row, Col, Button, Avatar } from 'antd';
import type { NextPage } from 'next';
import logo from '/public/images/Logo.svg';
import Image from 'next/image';

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
  return (
    <div className='fixed inset-x-0 top-0 bg-white z-10 drop-shadow-xl'>
      <Row justify='space-between' className='px-16 py-4 '>
        <Col className='items-center'>
          <Row>
            <Button type='link' className='w-16' href='./'>
              <Image alt='' src={logo} />
            </Button>
            {menu.map((item) => (
              <Button key={item.id} type='link' href={item.url} className='ml-4'>
                <span className='font-semibold text-text-primary'>{item.name}</span>
              </Button>
            ))}
          </Row>
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
