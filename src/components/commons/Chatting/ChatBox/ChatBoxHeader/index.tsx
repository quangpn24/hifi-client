import { MessageOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Row, Typography } from 'antd';
import React, { FC } from 'react';

interface IProps {
  chatter?: Chatter;
  setVisibleDrawer: Function;
}

const ChatBoxHeader: FC<IProps> = (props) => {
  const { chatter, setVisibleDrawer } = props;

  const handleVisible = () => {
    setVisibleDrawer();
  };

  return (
    <div className='p-2 w-full border-b-2 border-0 border-b-primary border-solid top-0 sticky'>
      <Row align='middle'>
        <Col md={3} xs={4}>
          <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' className='!h-16 !w-16' />
        </Col>
        <Col md={6} sm={8} xs={8}>
          <Typography.Title level={5} className='!mb-0'>
            {chatter?.name}
          </Typography.Title>
        </Col>
        <Col md={0} sm={2} xs={2} offset={10}>
          <Button
            shape='circle'
            type='primary'
            icon={<MessageOutlined />}
            onClick={handleVisible}
          ></Button>
        </Col>
      </Row>
    </div>
  );
};

export default ChatBoxHeader;
