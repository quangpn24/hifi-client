import Icon, { ToolOutlined } from '@ant-design/icons';
import { Row, Col, Button, Avatar, Card } from 'antd';
import type { NextPage } from 'next';
import logo from '/public/images/Logo.svg';
import Image from 'next/image';
import Jobhunt from '/public/images/Job-hunt.svg';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { useRouter } from 'next/router';
import { Router } from 'react-router-dom';

interface jobData {
  id: number;
  companyName: String;
  logo: string;
  title: string;
  location: string;
  timesheet: string;
  time: string;
}

interface Props {
  job: jobData;
}

const JobCard: NextPage<Props> = (props) => {
  const router = useRouter();
  const { job } = props;
  return (
    <Card
      className='h-full'
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <Row justify='space-between'>
        <Col span={6}>
          <Image src={job.logo} alt=''></Image>
        </Col>
        <Col span={12} className='text-right'>
          <Button
            onClick={() => {
              router.push(`/jobs/${job.id}`);
            }}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <h5 className='text-primary'>Apply</h5>
          </Button>
        </Col>
      </Row>
      <Row>
        <Text className='font-bold text-lg text-text-primary' ellipsis={{ tooltip: job.title }}>
          {job.title}
        </Text>
      </Row>
      <Row>
        <h5 className='font-bold text-md text-text-secondary'>
          {job.location} - {job.timesheet}
        </h5>
      </Row>
      <Row justify='space-between' className='mt-8'>
        <Col span={6}>
          <h5 className='font-bold text-md text-text-primary'>{job.companyName}</h5>
        </Col>
        <Col span={10}>
          <h5 className='font-bold text-md text-text-secondary text-right'>{job.time}</h5>
        </Col>
      </Row>
    </Card>
  );
};

export default JobCard;
