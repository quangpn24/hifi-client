import { Checkbox, Form, Input } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { dateTimeHelper } from 'utils';
import MonthYearSelect from '../../MonthYearSelect';

const { TextArea } = Input;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface IProps {
  workExp?: WorkExperience;
  formType?: 'update' | 'create';
  onSubmit?: (values: WorkExperience) => void;
}

const NewWorkExpForm = React.forwardRef<any, IProps>(({ onSubmit, workExp, formType }, ref) => {
  const [form] = Form.useForm();
  const [isPresent, setIsPresent] = useState(workExp?.isPresent);
  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));
  useEffect(() => form.resetFields(), [workExp]);
  useEffect(() => {
    setIsPresent(workExp?.isPresent);
    // form.setFieldsValue({ isPresent: workExp?.isPresent });
  }, [workExp?.isPresent]);
  const onFinish = (data: any) => {
    form.submit;
    data.startDate = dateTimeHelper.convertMonthYearToDate(data.startDate);
    data.endDate = !data.isPresent
      ? dateTimeHelper.convertMonthYearToDate(data.endDate)
      : undefined;
    onSubmit?.(data);
    form.resetFields();
  };
  const onIsPresentChange = (value: boolean) => {
    setIsPresent(value);
  };

  return (
    <Form
      {...layout}
      form={form}
      labelAlign='left'
      validateMessages={validateMessages}
      onFinish={onFinish}
      initialValues={{
        ...workExp,
        startDate: dateTimeHelper.convertReverseMonthYearToDate(workExp?.startDate),
        endDate: dateTimeHelper.convertReverseMonthYearToDate(workExp?.endDate),
      }}
    >
      <Form.Item
        label='Job Title'
        name='jobTitle'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input placeholder='Job title' />
      </Form.Item>

      <Form.Item
        label='Company'
        name='company'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input placeholder='Company' />
      </Form.Item>
      <Form.Item
        label='Start Date'
        name='startDate'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <MonthYearSelect />
      </Form.Item>
      <Form.Item
        label='End Date'
        name='endDate'
        rules={[
          {
            required: !isPresent,
          },
        ]}
        required={false}
      >
        <MonthYearSelect disabled={isPresent} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 24 }} name='isPresent' valuePropName='checked'>
        <Checkbox value={isPresent} onChange={(e) => onIsPresentChange(e.target.checked)}>
          I{"'"}m currently working in this company
        </Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{ span: 24 }}
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
        name='notes'
      >
        <TextArea rows={5} placeholder='Additional information (optional)' />
      </Form.Item>
    </Form>
  );
});
NewWorkExpForm.displayName = 'NewWorkExpForm';
export default NewWorkExpForm;
