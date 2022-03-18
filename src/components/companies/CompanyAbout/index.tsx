import { Button, Card, Col, Input, Row } from 'antd';
import Link from 'next/link';

interface Props {
  id: number;
  logoUrl: string;
  companyName: string;
  address: string;
  field: string;
  jobs: number;
}

const CompanyAbout = () => {
  return (
    <Row gutter={[20, 20]}>
      <Col span={16}>
        <h4 className='text-lg font-bold my-0'>companyName</h4>
        <p className='my-0'>address</p>
        <p>field</p>
      </Col>
    </Row>
  );
};

export default CompanyAbout;
