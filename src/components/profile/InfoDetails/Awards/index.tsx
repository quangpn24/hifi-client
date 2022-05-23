import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, FormInstance, message, Modal } from 'antd';
import awardApi from 'api/awardApi';
import { useProfileOverviewContext } from 'context/ProfileContext';
import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import Utils from 'utils';
import ActionSuggestion from '../ActionSuggestion';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SegmentItem from '../SegmentItem';
import AwardForm from './AwardForm';
type Props = {
  awards?: Award[];
};

const AwardsSection: React.FC<Props> = ({ awards: data }: Props) => {
  const { changeOverview } = useProfileOverviewContext() as ProfileOverviewContextType;
  const [visible, setVisible] = useState(false);
  const [awards, setAwards] = useState<Award[]>([]);
  const [selectedAward, setSelectedAward] = useState<Award>();
  const formRef = useRef<FormInstance<any> | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    awardApi
      .getAwards()
      .then((data) => {
        isMounted && setAwards(data);
        changeOverview({ awards: Array.isArray(data) ? data.length > 0 : false });
      })
      //TODO: error
      .catch((err) => console.log('getAwards Error: ', err));
    return () => {
      isMounted = false;
    };
  }, [changeOverview]);

  const handleDelete = async (value: Award) => {
    Modal.confirm({
      title: 'Are you sure delete this education?',
      onOk: async () => {
        try {
          await awardApi.deleteAward(value._id);
          setAwards(awards.filter((award) => award._id !== value._id));
        } catch (error: any) {
          message.error(error.message);
        }
      },
    });
  };
  const handleOk = () => {
    formRef.current?.submit();
  };
  const handleCancel = () => {
    setSelectedAward(undefined);
    formRef.current?.resetFields();
    setVisible(false);
  };
  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      if (selectedAward) {
        const updated = await awardApi.updateAward(selectedAward._id, data);
        setAwards((prev) => prev.map((award) => (award._id === updated._id ? updated : award)));
        setSelectedAward(undefined);
      } else {
        const newAward = await awardApi.createAward(data);
        setAwards([...awards, newAward]);
      }
      formRef.current?.resetFields();
      setVisible(false);
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };
  return (
    <>
      <HrefContainer id='awards'>
        <Header
          text={'Awards'}
          action={
            awards.length > 0 ? (
              <Button icon={<EditOutlined />} type='text' onClick={() => setVisible(true)}>
                ADD AN AWARDS
              </Button>
            ) : (
              <></>
            )
          }
        />
        <Divider className='!my-2' />
        {/* <p className='my-4'>{content}</p> */}
        <div className='mt-4 p-1'>
          {awards && awards.length > 0 ? (
            awards?.map((aw, index) => (
              <SegmentItem
                key={aw._id}
                title={aw.title}
                subtitle={aw.achievement}
                descrition={aw.notes}
                timeline={aw.year.toString()}
                onEdit={() => {
                  setSelectedAward(aw);
                  setVisible(true);
                }}
                onDelete={() => handleDelete(aw)}
                last={index === awards.length - 1}
              />
            ))
          ) : (
            <ActionSuggestion
              text='Show off your achievements by adding an award here.'
              textButton='ADD AN AWARD'
              onClick={() => {
                setVisible(true);
              }}
            />
          )}
        </div>
      </HrefContainer>
      <Modal
        title={selectedAward ? 'EDIT EDUCATION' : ' ADD EDUCATION'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
        okText='SAVE'
      >
        <AwardForm award={selectedAward} ref={formRef} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default AwardsSection;
