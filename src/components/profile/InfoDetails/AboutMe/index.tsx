import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, Modal } from 'antd';
import Header from '../Header';
import { Input } from 'antd';
import ActionSuggestion from '../ActionSuggestion';

const { TextArea } = Input;
type Props = {
  content: string;
};
type ActionType = 'add' | 'edit';
const AboutMe = ({ content }: Props) => {
  const [visible, setVisible] = useState(false);
  const [about, setAbout] = useState<string | undefined>();
  const [newAbout, setNewAbout] = useState<string | undefined>('');
  const [type, setType] = useState<ActionType>('add');

  const handleOk = () => {};
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <div className='mb-8'>
        <Header
          text={'About Me'.toUpperCase()}
          action={
            !!about && (
              <Button
                icon={<EditOutlined />}
                onClick={() => {
                  setType('edit');
                  setVisible(true);
                }}
                type='text'
              >
                Edit
              </Button>
            )
          }
        />
        <Divider className='!my-2' />
        <div className='mt-4'>
          {!!about ? (
            <p>
              Là người có tư duy logic và khả năng tiếp thu, thích ứng nhanh với những điều, tôi
              mong muốn trở thành một trong những lập trình viên chủ chốt của công ty để mang lại
              những giải pháp công nghệ tối ưu cho khách hàng. Đồng thời, tôi muốn được nâng cao
              trình độ chuyên môn và năng lực nghề nghiệp thông qua môi trường làm việc chuyên
              nghiệp của công ty.
            </p>
          ) : (
            <ActionSuggestion
              text='Tell employers what you can bring to the table.'
              textButton='ADD A DESCRIPTION ABOUT ME'
              onClick={() => {
                setType('add');
                setVisible(true);
              }}
            />
          )}
        </div>
      </div>
      <Modal title='About me' visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>Telling them about yourself will help them understand you.</p>
        <TextArea
          rows={5}
          placeholder='Add an introduction about yourselft'
          onChange={(e) => setNewAbout(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default AboutMe;
