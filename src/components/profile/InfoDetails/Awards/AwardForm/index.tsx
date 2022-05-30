import { Form, Input, Select } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import React, { useEffect, useImperativeHandle } from 'react';

const { TextArea } = Input;
const { Option } = Select;
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};
interface IProps {
  award?: Award;
  formType?: 'update' | 'create';
  onSubmit?: (values: Award) => void;
}
const years = new Array(40)
  .fill(0)
  .map((_, index) => index + 1990)
  .sort((a, b) => b - a);
const AwardForm = React.forwardRef<any, IProps>(({ onSubmit, award }, ref) => {
  const [form] = Form.useForm();
  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));
  useEffect(() => form.resetFields(), [award]);
  const onFinish = (data: any) => {
    onSubmit?.(data);
  };

  return (
    <Form
      {...layout}
      form={form}
      labelAlign='left'
      validateMessages={validateMessages}
      onFinish={onFinish}
      labelWrap
      initialValues={{
        ...award,
      }}
    >
      <Form.Item
        label='Award Title'
        name='title'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Title of Your achievement or Contribution'
        name='achievement'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Year'
        name='year'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Select>
          {years.map((year) => (
            <Option key={year} value={year}>
              {year}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }} required={false} name='notes'>
        <TextArea rows={5} placeholder='Additional information (optional)' />
      </Form.Item>
    </Form>
  );
});
AwardForm.displayName = 'AwardForm';
export default AwardForm;
