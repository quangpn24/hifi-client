import { Button, Col, Divider, Row } from 'antd';
import Image from 'next/image';
import logo from '/public/images/Logo.svg';
import { FC } from 'react';

const Footer: FC = (props) => {
  return (
    <div className='bg-white px-16 pb-4 w-full'>
      <Row>
        <Col span={8}>
          <Row className='items-center'>
            <Button
              type='link'
              className='w-16px h-16px'
              href='./'
              icon={<Image alt='' src={logo} />}
            ></Button>
            <span className='font-bold text-xl text-text-primary'>HIFI</span>
          </Row>
        </Col>
      </Row>
      <Divider className='bg-tertiary m-4'></Divider>
      <h5 className='text-text-tertiary inline-block'>
        {`Copyright @ 2022. All right Reservered`}
      </h5>
    </div>
  );
};

export default Footer;
