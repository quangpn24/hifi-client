import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, FormInstance, message, Modal } from 'antd';
import workExperienceApi from 'api/workExperienceApi';
import { useProfileOverviewContext } from 'context/ProfileContext';
import React, { useEffect, useRef, useState } from 'react';
import Utils from 'utils';
import ActionSuggestion from '../ActionSuggestion';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SegmentItem from '../SegmentItem';
import NewWorkExpForm from './NewWorkExpForm';

type Props = {};
const WorkExperience = (props: Props) => {
  const { changeOverview } = useProfileOverviewContext() as ProfileOverviewContextType;
  const [visible, setVisible] = useState(false);
  const formRef = useRef<FormInstance<any> | null>(null);
  const [exps, setExps] = useState<WorkExperience[]>([]);
  const [selectedExp, setSelectedExp] = useState<WorkExperience>();

  useEffect(() => {
    let isMounted = true;

    workExperienceApi
      .getWorkExperiences()
      .then((data) => {
        isMounted && setExps(data);
        changeOverview({ experience: Array.isArray(data) ? data.length > 0 : false });
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false;
    };
  }, [changeOverview]);

  const handleOk = () => {
    formRef.current?.submit();
  };
  const handleCancel = () => {
    setVisible(false);
    setSelectedExp(undefined);
    formRef.current?.resetFields();
  };

  const handleFormSubmit = async (value: WorkExperience) => {
    try {
      if (selectedExp) {
        const updatedWorkExp = await workExperienceApi.updateWorkExperience(selectedExp._id, value);
        setExps((prev) => {
          const copyPrev = [...prev];
          const index = prev.findIndex((item) => item._id === updatedWorkExp._id);
          if (index !== -1) {
            copyPrev[index] = updatedWorkExp;
          }
          return copyPrev;
        });

        changeOverview({ experience: true });
        setSelectedExp(undefined);
        message.success('Edit work experience successfully');
      } else {
        const newWorkExp = await workExperienceApi.createWorkExperience(value);
        setExps((prev) => [...prev, newWorkExp]);
        changeOverview({ experience: true });
        message.success('Add new work experience success');
      }
    } catch (error) {}

    formRef.current?.resetFields();
    setVisible(false);
  };

  const handleDelete = (value: WorkExperience) => {
    Modal.confirm({
      title: 'Are you sure delete this job interest?',
      onOk: async () => {
        try {
          await workExperienceApi.deleteWorkExperience(value._id);
          setExps((prev) => prev.filter((e) => e._id !== value._id));
          changeOverview({ experience: exps.length > 1 });
          message.success('Delete successfully');
        } catch (error: any) {
          message.error(error.message);
        }
      },
    });
  };
  return (
    <>
      <HrefContainer id='experience'>
        <Header
          text={'Work experience'.toUpperCase()}
          action={
            exps.length > 0 ? (
              <Button icon={<EditOutlined />} type='text' onClick={() => setVisible(true)}>
                ADD WORK EXPERIENCE
              </Button>
            ) : (
              <></>
            )
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
            <ActionSuggestion
              text='77.9% of employers surveyed consider work experience to be a crucial data point in job applications.
               So be sure to fill up this section to raise your chances of securing an interview!'
              textButton='Add work experience'
              onClick={() => {
                setVisible(true);
              }}
            />
          )}
        </div>
      </HrefContainer>

      <Modal title='ADD WORK EXPERIENCE' visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <NewWorkExpForm onSubmit={handleFormSubmit} workExp={selectedExp} ref={formRef} />
      </Modal>
    </>
  );
};

export default WorkExperience;
