import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, FormInstance, message, Modal } from 'antd';
import educationApi from 'api/educationApi';
import { useEffect, useRef, useState } from 'react';
import { dateTimeHelper } from 'utils';
import Header from '../Header';
import SegmentItem from '../SegmentItem';
import NewEducationForm from './NewEducationForm';
const Education = () => {
  const [visible, setVisible] = useState(false);
  const [educations, setEducations] = useState<Education[]>([]);
  const [selectedEdu, setSelectedEdu] = useState<Education>();
  const formRef = useRef<FormInstance<any> | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let isMounted = true;

    educationApi
      .getEducations()
      .then((data) => isMounted && setEducations(data))
      //TODO: toast error
      .catch((err) => console.log('get educationApi Error: ', err));

    return () => {
      isMounted = false;
    };
  }, []);

  const handleOk = () => {
    formRef.current?.submit();
  };
  const handleCancel = () => {
    selectedEdu && setSelectedEdu(undefined);
    setVisible(false);
    formRef.current?.resetFields();
  };
  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);
      if (selectedEdu) {
        const updatedEdu = await educationApi.updateEducation(selectedEdu._id, data);
        setEducations((prev) => {
          const copy = [...prev];
          const index = copy.findIndex((edu) => edu._id === updatedEdu._id);
          if (index !== -1) {
            copy[index] = updatedEdu;
          }

          return copy;
        });
        message.success('update successfully');
        setSelectedEdu(undefined);
      } else {
        const newEdu = await educationApi.createEducation(data);
        setEducations((prev) => [...prev, newEdu]);
        message.success('add successfully');
      }
      formRef.current?.resetFields();
      setVisible(false);
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };
  const handleDelete = (edu: Education) => {
    Modal.confirm({
      title: 'Are you sure delete this education?',
      onOk: async () => {
        try {
          await educationApi.deleteEducation(edu._id);
          setEducations((prev) => prev.filter((e) => e._id !== edu._id));
          message.success('delete successfully');
        } catch (error: any) {
          message.error(error.message);
        }
      },
    });
  };
  return (
    <>
      <div className='mb-8'>
        <Header
          text={'Education'}
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
              timeline={dateTimeHelper.showTimeline(e.startDate, e.endDate)}
              descrition={e.notes}
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
      <Modal
        title={selectedEdu ? 'EDIT EDUCATION' : ' ADD EDUCATION'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
        okText='SAVE'
      >
        <NewEducationForm education={selectedEdu} ref={formRef} onSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default Education;
