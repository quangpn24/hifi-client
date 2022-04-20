import { Checkbox, Form, Input, Select } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import Utils from 'utils';
import MonthYearSelect from '../../MonthYearSelect';

const { TextArea } = Input;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface IProps {
  education?: Education;
  formType?: 'update' | 'create';
  onSubmit?: (values: Education) => void;
}
const { Option } = Select;
const NewEducationForm = React.forwardRef<any, IProps>(({ onSubmit, education, formType }, ref) => {
  const [form] = Form.useForm();
  const [isPresent, setIsPresent] = useState(education?.isPresent);
  const [schools, setSchools] = useState<string[]>([]);
  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));
  useEffect(() => form.resetFields(), [education]);
  useEffect(() => {
    setIsPresent(education?.isPresent);
    // form.setFieldsValue({ isPresent: education?.isPresent });
  }, [education?.isPresent]);
  const onFinish = (data: any) => {
    form.submit;
    data.startDate = Utils.convertMonthYearToDate(data.startDate);
    data.endDate = !data.isPresent ? Utils.convertMonthYearToDate(data.endDate) : undefined;
    onSubmit?.(data);
    form.resetFields();
  };
  const onIsPresentChange = (value: boolean) => {
    setIsPresent(value);
  };

  const handleSchoolSearch = () => {};
  return (
    <Form
      {...layout}
      form={form}
      labelAlign='left'
      validateMessages={validateMessages}
      onFinish={onFinish}
      initialValues={{
        ...education,
        startDate: Utils.convertReverseMonthYearToDate(education?.startDate),
        endDate: Utils.convertReverseMonthYearToDate(education?.endDate),
      }}
    >
      <Form.Item
        label='Instituation'
        name='school'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Select
          showSearch
          placeholder={'Instituation'}
          defaultActiveFirstOption={false}
          filterOption={false}
          onSearch={handleSchoolSearch}
          notFoundContent={null}
        >
          {schools.map((s) => (
            <Option key={s}>{s}</Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label='Degree'
        name='degree'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input placeholder='Degree' />
      </Form.Item>
      <Form.Item
        label='Field of Study'
        name='fieldStudy'
        rules={[
          {
            required: true,
          },
        ]}
        required={false}
      >
        <Input placeholder='Field of Study' />
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
        <Checkbox onChange={(e) => onIsPresentChange(e.target.checked)}>
          I{"'"}m currently studying
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
        <TextArea rows={5} placeholder='Additional information (optional)' maxLength={6} />
      </Form.Item>
    </Form>
  );
});
NewEducationForm.displayName = 'NewEducationForm';
export default NewEducationForm;
