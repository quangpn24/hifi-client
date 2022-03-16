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

const CompanyCard = (props: Props) => {
  return (
    <Card bordered={false}>
      <Row gutter={[20, 20]}>
        <Col span={8}>
          <img
            className='w-full h-20 object-cover rounded-md'
            src={props.logoUrl}
            alt='fossil-logo'
          />
        </Col>
        <Col span={16}>
          <h4 className='text-lg font-bold my-0'>{props.companyName}</h4>
          <p className='my-0'>{props.address}</p>
          <p>{props.field}</p>
        </Col>
        <Col span={24}>
          <Button className='w-full' type='default' size='large'>
            <Link href={`/companies/${props.id}`} as={`/companies/${props.id}`}>
              <a>{`${props.jobs} jobs posted`}</a>
            </Link>
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default CompanyCard;
