import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import Utils from 'utils';
import Header from '../Header';
import SegmentItem from '../SegmentItem';
import NewEducationForm from './NewEducationForm';
type Props = {};
const data: Education[] = [
  {
    school: 'University of Information Technology',
    _id: '1',
    degree: 'Bachelor of Science',
    fieldStudy: 'Software Engineering',
    startDate: new Date(2020, 1, 1),
    isPresent: true,
    notes: 'University of Information Technology 1, Software Engineering 1',
  },
  {
    school: 'University of Information Technology 2',
    _id: '2',
    degree: 'Bachelor of Science 2',
    fieldStudy: 'Software Engineering 2',
    startDate: new Date(2020, 1, 1),
    isPresent: true,
    notes: 'University of Information Technology 2, Software Engineering 2',
  },
];
const Education = () => {
  const [visible, setVisible] = useState(false);
  const [educations, setEducations] = useState<Education[]>([]);
  const [selectedEdu, setSelectedEdu] = useState<Education>();

  useEffect(() => {
    setEducations(data);
  }, []);

  const handleOk = () => {};
  const handleCancel = () => {
    setVisible(false);
  };
  const handleDelete = (edu: Education) => {};
  return (
    <>
      <div className='mb-8'>
        <Header
          text={'Education'.toUpperCase()}
          action={
            <Button icon={<EditOutlined />} type='text' onClick={() => setVisible(true)}>
              ADD EDUCATION
            </Button>
          }
        />
        <Divider className='!my-2' />
        {/* <p className='my-4'>{content}</p> */}
        <div className='mt-4 p-1'>
          {educations.map((e, index) => (
            <SegmentItem
              key={e._id}
              title={e.school}
              subtitle={e.fieldStudy}
              timeline={Utils.showTimeline(e.startDate, e.endDate)}
              onEdit={() => {
                setSelectedEdu(e);
                setVisible(true);
              }}
              onDelete={() => handleDelete(e)}
              last={index === educations.length - 1}
            />
          ))}
        </div>
      </div>
      <Modal title='ADD EDUCATION' visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <NewEducationForm education={selectedEdu} />
      </Modal>
    </>
  );
};

export default Education;
