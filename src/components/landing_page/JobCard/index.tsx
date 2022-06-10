import Icon, { ToolOutlined } from '@ant-design/icons';
import { Row, Col, Button, Avatar, Card } from 'antd';
import type { NextPage } from 'next';
import logo from '/public/images/Logo.svg';
import Image from 'next/image';
import Jobhunt from '/public/images/Job-hunt.svg';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { useRouter } from 'next/router';
import moment from 'moment';

interface IProps {
  post: Post;
}

const JobCard: React.FC<IProps> = (props) => {
  const router = useRouter();
  const { post } = props;

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
          <Image src={post.postPhoto || Jobhunt} alt=''></Image>
        </Col>
        <Col span={12} className='text-right'>
          <Button
            onClick={() => {
              router.push(`/job-posts/${post._id}`);
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
        <Text className='font-bold text-lg text-text-primary' ellipsis={{ tooltip: post.title }}>
          {post.title}
        </Text>
      </Row>
      <Row>
        <h5 className='font-bold text-md text-text-secondary'>
          {post.company?.locations?.[0]?.address} - {post.jobType}
        </h5>
      </Row>
      <Row justify='space-between' className='mt-8'>
        <Col span={14}>
          <h5 className='font-bold text-md text-text-primary'>{post.company?.name}</h5>
        </Col>
        <Col span={10}>
          <h5 className='font-bold text-md text-text-secondary text-right'>
            {moment(post.applicationDeadline).fromNow()}
          </h5>
        </Col>
      </Row>
    </Card>
  );
};

export default JobCard;
