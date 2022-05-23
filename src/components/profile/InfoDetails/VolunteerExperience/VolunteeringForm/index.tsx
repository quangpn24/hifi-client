import { Checkbox, Form, Input } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import dateTimeHelper from 'utils/dateTimeHelper';
import MonthYearSelect from '../../MonthYearSelect';

const { TextArea } = Input;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface IProps {
  volunteering?: Volunteering;
  onSubmit?: (values: Volunteering) => void;
}

const VolunteeringForm = React.forwardRef<any, IProps>(({ onSubmit, volunteering }, ref) => {
  const [form] = Form.useForm();
  const [isPresent, setIsPresent] = useState(volunteering?.isPresent);
  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));
  useEffect(() => form.resetFields(), [volunteering]);
  useEffect(() => {
    setIsPresent(volunteering?.isPresent);
    // form.setFieldsValue({ isPresent: workExp?.isPresent });
  }, [volunteering?.isPresent]);
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
        ...volunteering,
        startDate: dateTimeHelper.convertReverseMonthYearToDate(volunteering?.startDate),
        endDate: dateTimeHelper.convertReverseMonthYearToDate(volunteering?.endDate),
      }}
    >
      <Form.Item
        label='Organization'
        name='activityName'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input placeholder='Organization or Activity Name' />
      </Form.Item>

      <Form.Item
        label='Role'
        name='role'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input placeholder='Your role' />
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
VolunteeringForm.displayName = 'VolunteeringForm';
export default VolunteeringForm;
