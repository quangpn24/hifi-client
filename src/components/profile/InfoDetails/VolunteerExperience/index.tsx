import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, FormInstance, message, Modal } from 'antd';
import volunteeringApi from 'api/volunteeringApi';
import { useProfileOverviewContext } from 'context/ProfileContext';
import React, { useEffect, useRef, useState } from 'react';
import Utils from 'utils';
import ActionSuggestion from '../ActionSuggestion';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SegmentItem from '../SegmentItem';
import VolunteeringForm from './VolunteeringForm';
type Props = {};

const VolunteerExperience = (props: Props) => {
  const { changeOverview } = useProfileOverviewContext() as ProfileOverviewContextType;
  const [visible, setVisible] = useState(false);
  const [volunteerings, setVolunteerings] = useState<Volunteering[]>([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteering>();
  const formRef = useRef<FormInstance<any> | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    volunteeringApi
      .getVolunteerings()
      .then((data) => {
        isMounted && setVolunteerings(data);
        changeOverview({ volunteerings: Array.isArray(data) ? data.length > 0 : false });
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
    selectedVolunteer && setSelectedVolunteer(undefined);
    setVisible(false);
    formRef.current?.resetFields();
  };
  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      if (selectedVolunteer) {
        const updatedVolunteering = await volunteeringApi.updateVolunteering(
          selectedVolunteer._id,
          data
        );
        setVolunteerings((prev) => {
          const copy = [...prev];
          const index = copy.findIndex((edu) => edu._id === updatedVolunteering._id);
          if (index !== -1) {
            copy[index] = updatedVolunteering;
          }

          return copy;
        });
        changeOverview({ volunteerings: true });

        message.success('Update successfully');
        setSelectedVolunteer(undefined);
      } else {
        const newEdu = await volunteeringApi.createVolunteering(data);
        setVolunteerings((prev) => [...prev, newEdu]);
        message.success('Add successfully');
      }
      formRef.current?.resetFields();
      setVisible(false);
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };
  const handleDelete = (edu: Volunteering) => {
    Modal.confirm({
      title: 'Are you sure delete this education?',
      onOk: async () => {
        try {
          await volunteeringApi.deleteVolunteering(edu._id);
          setVolunteerings((prev) => prev.filter((e) => e._id !== edu._id));
          if (volunteerings.length === 0 || volunteerings.length === 1) {
            changeOverview({ volunteerings: false });
          }
          message.success('Delete successfully');
        } catch (error: any) {
          message.error(error.message);
        }
      },
    });
  };
  return (
    <>
      <HrefContainer id='volunteerings'>
        <Header
          text={'Organizational & Volunteering Experiences'}
          action={
            volunteerings.length > 0 ? (
              <Button icon={<EditOutlined />} type='text' onClick={() => setVisible(true)}>
                ADD EXPERIENCE
              </Button>
            ) : (
              <></>
            )
          }
        />
        <Divider className='!my-2' />
        {/* <p className='my-4'>{content}</p> */}
        <div className='mt-4 p-1'>
          {volunteerings.length > 0 ? (
            volunteerings.map((vol, index) => (
              <SegmentItem
                key={vol._id}
                title={vol.activityName}
                subtitle={vol.role}
                timeline={Utils.showTimeline(vol.startDate, vol.endDate)}
                descrition={vol.notes}
                onEdit={() => {
                  setSelectedVolunteer(vol);
                  setVisible(true);
                }}
                onDelete={() => handleDelete(vol)}
                last={index === volunteerings.length - 1}
              />
            ))
          ) : (
            <ActionSuggestion
              text="Any extracurricular activities you'd like to let employers know?"
              onClick={() => setVisible(true)}
              textButton='ADD EXPERIENCE'
            />
          )}
        </div>
      </HrefContainer>
      <Modal
        title={selectedVolunteer ? 'EDIT EXPERIENCE' : ' ADD EXPERIENCE'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
        okText='SAVE'
      >
        <VolunteeringForm volunteering={selectedVolunteer} ref={formRef} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default VolunteerExperience;
