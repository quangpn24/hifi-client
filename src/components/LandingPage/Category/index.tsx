import Icon from '@ant-design/icons';
import { Row, Col, Button, Avatar, Card } from 'antd';
import type { NextPage } from 'next';
import logo from '/public/images/Logo.svg';
import Image from 'next/image';
import Jobhunt from '/public/images/Job-hunt.svg';
import Title from 'antd/lib/typography/Title';

interface categoryData {
  id: number;
  name: String;
  image: string;
  jobs: number;
}

interface Props {
  category: categoryData;
}

const Category: NextPage<Props> = (props) => {
  const { category } = props;
  return (
    <Card
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <Row>
        <Col span={8}>
          <Image src={category.image} alt='' width={500} height={500}></Image>
        </Col>
        <Col span={16}>
          <h2 className='font-bold text-xl text-text-primary'>{category.name}</h2>
          <h5 className='font-bold text-md text-text-secondary'>{category.jobs} jobs available</h5>
        </Col>
      </Row>
    </Card>
  );
};

export default Category;
