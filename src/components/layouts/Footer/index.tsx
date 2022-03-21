import Icon from '@ant-design/icons';
import { Row, Col, Button, Avatar, Divider } from 'antd';
import type { NextPage } from 'next';
import logo from '/public/images/Logo.svg';
import Image from 'next/image';

const Footer: NextPage = (props) => {
  return (
    <div className='bg-white z-10 px-16 py-4'>
      <Row>
        <Col span={8}>
          <Row className='items-center'>
            <Button
              type='link'
              className='w-16'
              href='./'
              icon={<Image alt='' src={logo} />}
            ></Button>
            <span className='font-bold text-xl text-text-primary'>HIFI</span>
          </Row>
        </Col>
      </Row>
      <Divider className='bg-tertiary'></Divider>
      <h5 className='text-text-tertiary inline-block'>
        {`Copyright @ 2022. All right Reservered`}
      </h5>
    </div>
  );
};

export default Footer;
