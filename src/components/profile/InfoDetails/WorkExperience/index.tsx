import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, FormInstance, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Utils from 'utils';
import ActionSuggestion from '../ActionSuggestion';
import Header from '../Header';
import SegmentItem from '../SegmentItem';
import NewWorkExpForm from './NewWorkExpForm';

const data: WorkExperience[] = [
  {
    _id: '1',
    jobTitle: 'Mic check',
    company: 'Zalo',
    startDate: new Date(2021, 1, 1),
    // endDate: new Date(2022, 3, 1),
    isPresent: true,
    notes: 'Work expertt notesss mic check',
  },
  {
    _id: '2',
    jobTitle: 'Mic check 2',
    company: 'Zalo 2',
    startDate: new Date(2020, 1, 1),
    endDate: new Date(2022, 3, 1),
    isPresent: false,
    notes: 'Work expertt notesss mic check 2',
  },
  {
    _id: '3',
    jobTitle: 'Mic check 3 ',
    company: 'Zalo 3',
    startDate: new Date(2019, 1, 1),
    // endDate: new Date(2022, 3, 1),
    isPresent: true,
    notes: 'Work expertt notesss mic check 3',
  },
];

type Props = {};
const WorkExperience = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const formRef = useRef<FormInstance<any> | null>(null);
  const [exps, setExps] = useState<WorkExperience[]>([]);
  const [selectedExp, setSelectedExp] = useState<WorkExperience>();

  useEffect(() => {
    // workExperienceApi.getWorkExperiences().then((res) => {
    //   console.log(res);
    // });
    setExps(data);
  }, []);

  const handleOk = () => {
    formRef.current?.submit();
  };
  const handleCancel = () => {
    setVisible(false);
    setSelectedExp(undefined);
    formRef.current?.resetFields();
    console.log('Cancel');
  };

  const handleFormSubmit = (value: WorkExperience) => {
    console.log('Form data: ', value);

    if (selectedExp) {
      setExps((prev) => {
        const copyPrev = [...prev];
        const index = prev.findIndex((item) => item._id === selectedExp._id);

        if (index !== -1) {
          copyPrev[index] = { ...copyPrev[index], ...value };

          console.log('After edit', copyPrev);
          return copyPrev;
        }

        return prev;
      });

      setSelectedExp(undefined);
    } else {
      setExps([...exps, { ...value, _id: Math.random() * 10000 + '' }]);
    }

    formRef.current?.resetFields();
    setVisible(false);
  };

  const handleDelete = (value: WorkExperience) => {
    console.log('Delete: ', value);

    setExps((prev) => {
      return prev.filter((item) => item._id !== value._id);
    });
  };
  return (
    <>
      <div className='mb-8'>
        <Header
          text={'Work experience'.toUpperCase()}
          action={
            <Button icon={<EditOutlined />} type='text' onClick={() => setVisible(true)}>
              ADD WORK EXPERIENCE
            </Button>
          }
        />
        <Divider className='!my-2' />
        {/* <p className='my-4'>{content}</p> */}
        <div className='mt-4 p-1'>
          {exps.length !== 0 ? (
            exps.map((exp, index) => (
              <SegmentItem
                key={exp._id}
                title={exp.jobTitle}
                subtitle={exp.company}
                timeline={Utils.showTimeline(exp.startDate, exp.endDate)}
                descrition={exp.notes}
                onEdit={() => {
                  setSelectedExp(exp);
                  setVisible(true);
                }}
                onDelete={() => {
                  handleDelete(exp);
                }}
                last={index === exps.length - 1}
              />
            ))
          ) : (
            <ActionSuggestion text='No' textButton='Add work experience' onClick={() => {}} />
          )}
        </div>
      </div>

      <Modal title='ADD WORK EXPERIENCE' visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <NewWorkExpForm onSubmit={handleFormSubmit} workExp={selectedExp} ref={formRef} />
      </Modal>
    </>
  );
};

export default WorkExperience;
