import { CheckCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Modal, Progress, Row } from 'antd';
import React from 'react';
import InstructionItem from '../InstructionItem';
import ShortcutItem from '../QuickActionItem';
import { ChevronRightIcon } from '@heroicons/react/solid';
import styles from '../styles.module.css';
type Props = {};

const ToolSidebar = (props: Props) => {
  const [visible, setVisible] = React.useState(false);

  const handleOk = () => {};
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <div>
      <h3 className='text-xl text-gray-600 tracking-wide'>Job Status</h3>
      <div className={styles.status} onClick={() => setVisible(true)}>
        <p className='!mb-0 text-primary-color'>Select Status</p>
        <ChevronRightIcon className='text-primary-color h-8 w-8' />
      </div>
      <h3 className='text-xl mt-4 text-gray-600 tracking-wide'>Quick Actions</h3>
      <div>
        <Row gutter={10}>
          <Col span={8}>
            <ShortcutItem
              icon={
                <CheckCircleOutlined
                  style={{
                    fontSize: '240%',
                  }}
                />
              }
              text={'Quick fill Profile'}
            />
          </Col>
          <Col span={8}>
            <ShortcutItem
              icon={
                <CheckCircleOutlined
                  style={{
                    fontSize: '240%',
                  }}
                />
              }
              text={'Export to PDF'}
            />
          </Col>
          <Col span={8}>
            <ShortcutItem
              icon={
                <CheckCircleOutlined
                  style={{
                    fontSize: '240%',
                  }}
                />
              }
              text={'Preview Profile'}
            />
          </Col>
        </Row>
      </div>
      <div className=' mt-4 p-3.5 flex flex-col bg-white shadow-lg rounded-md'>
        <p>
          Profile completion: <span className='font-bold'>30%</span>
        </p>
        <Progress percent={30} />

        <div>
          <InstructionItem text='Basic Information' onClick={() => {}} />
          <InstructionItem text='Resume' onClick={() => {}} />
          <InstructionItem text='Work Experience' onClick={() => {}} />
          <InstructionItem text='Education' onClick={() => {}} />
          <InstructionItem text='Skills' onClick={() => {}} />
          <InstructionItem text='Job interested & Preferences' onClick={() => {}} />
          <InstructionItem text='Portfolios, Attachment & Social Media' onClick={() => {}} />
          <InstructionItem text='Awards' onClick={() => {}} />
          <InstructionItem text='Organizational & Volunteering Experiences' onClick={() => {}} />
        </div>
      </div>
      <Modal title='STATUS AVAILABILITY ' visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>Telling them about yourself will help them understand you.</p>
      </Modal>
    </div>
  );
};

export default ToolSidebar;
