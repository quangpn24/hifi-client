import type { NextPage } from 'next';
import { Col, Drawer, Row } from 'antd';
import React, { useState } from 'react';
import SideNav from 'components/commons/Chatting/SideNav';
import ChatBox from 'components/commons/Chatting/ChatBox';

const Chatting: NextPage = () => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleSetVisible = () => {
    setVisible(true);
  };

  return (
    <Row className='px-4 my-4 mx-16 bg-white'>
      <Drawer visible={visible} placement='right' closable={false} onClose={handleClose}>
        <SideNav></SideNav>
      </Drawer>
      <Col
        xs={0}
        sm={0}
        md={6}
        className='px-4 py-2 border-r-2 border-0 border-r-primary border-solid'
      >
        <SideNav />
      </Col>
      <Col xs={24} sm={24} md={18}>
        <ChatBox setVisibleDrawer={handleSetVisible} />
      </Col>
    </Row>
  );
};

export default Chatting;
