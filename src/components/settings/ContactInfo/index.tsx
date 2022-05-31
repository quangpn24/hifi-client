import { Button, Card, Form, Input, message } from 'antd';
import userApi from 'api/userApi';
import axios from 'axios';
import React, { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';

type Props = {};

const ContactInfo = (props: Props) => {
  const user = useAppSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNUmber] = useState(user?.phoneNumber);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      await userApi.updateMe({ phoneNumber: values.phoneNumber });
      message.success('Update phone number successfully!');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error?.response?.data.message);
      } else {
        message.error('Failed to update phone number');
      }
    }
    setLoading(false);
  };
  return (
    <div className='px-16'>
      <Card title={'Change Phone Number'.toUpperCase()}>
        <Form
          onFinish={onFinish}
          initialValues={{
            phoneNumber: user?.phoneNumber,
          }}
        >
          <Form.Item
            hasFeedback
            name='phoneNumber'
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
              {
                validator: (_, value) => {
                  if (value && !/^\d{10}$/.test(value)) {
                    return Promise.reject('Phone number must be 10 digits');
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Input placeholder='Mobile number' value={phoneNumber} />
          </Form.Item>
          <Button className='mt-4' htmlType='submit' type='primary' loading={loading}>
            Update Phone Number
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ContactInfo;
