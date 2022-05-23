import { Button, Col, Divider, Row } from 'antd';
import Image from 'next/image';
import logo from '/public/images/Logo.svg';

const Footer = () => {
  return (
    <div className='bg-white py-4 sticky  w-full'>
      <div className='contain'>
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
        <Divider className='bg-tertiary my-4'></Divider>
        <h5 className='text-text-tertiary inline-block'>
          {`Copyright @ 2022. All right Reservered`}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
