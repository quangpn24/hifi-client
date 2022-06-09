import React from 'react';
import { Avatar, Col, Row } from 'antd';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import { DEFAULT_IMAGE } from 'constant';

const Title = () => {
  const user = useAppSelector(selectUser);

  return (
    <div>
      <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Col span={7}>
          <Avatar shape='square' src={user?.photoUrl ? user.photoUrl : DEFAULT_IMAGE} />
        </Col>
        <Col span={17}>
          <p style={{ fontSize: '16px', marginBottom: '0' }}>{user?.name}</p>
          <p
            style={{
              color: 'rgba(114,132,154,.7)',
              fontSize: '14px',
              marginBottom: '4px',
            }}
          ></p>
        </Col>
      </Row>
    </div>
  );
};

export default Title;
