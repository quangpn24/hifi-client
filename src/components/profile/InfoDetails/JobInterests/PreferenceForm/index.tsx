import { Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { validateMessages } from 'constant/validateMessages';
import React, { useEffect, useImperativeHandle } from 'react';
import currencies from './currency.json';
const { TextArea } = Input;
const { Option } = Select;
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 14 },
};
interface IProps {
  data?: any;
  formType?: 'update' | 'create';
  onSubmit?: (values: any) => void;
}
const parseTypes = (types: string[]) => {
  const typeObject = {
    fullTime: false,
    internship: false,
    partTime: false,
    freelance: false,
  };

  types.forEach((type) => {
    type === 'Full-time' && (typeObject.fullTime = true);
    type === 'Part-time' && (typeObject.partTime = true);
    type === 'Freelance' && (typeObject.freelance = true);
    type === 'Internship' && (typeObject.internship = true);
  });

  return typeObject;
};
const PreferenceForm = React.forwardRef<any, IProps>(({ onSubmit, data }, ref) => {
  const [form] = Form.useForm();
  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));
  useEffect(() => form.resetFields(), [data]);
  const onFinish = (data: any) => {
    if (data.currencyCode && !data.salaryExpectation) {
      form.setFields([
        {
          name: 'salaryExpectation',
          errors: ['Please enter salary expectation'],
        },
      ]);
      return;
    }
    if (!data.currencyCode && data.salaryExpectation) {
      form.setFields([
        {
          name: 'currencyCode',
          errors: ['Please enter currency code'],
        },
      ]);
      return;
    }
    onSubmit?.(data);
  };

  return (
    <Form
      {...layout}
      form={form}
      labelAlign='left'
      validateMessages={validateMessages}
      onFinish={onFinish}
      onFinishFailed={(errorInfo: any) => {
        console.log('Failed:', errorInfo);
      }}
      labelWrap
      layout='vertical'
      initialValues={{
        ...data,
      }}
    >
      <Form.Item name='typesOfOpportunity' label='Type of Opportunities'>
        <Checkbox.Group className='flex flex-col items-start gap-2'>
          <Checkbox value={'Full-time'} className='!ml-0'>
            Full-time
          </Checkbox>
          <Checkbox value={'Part-time'} className='!ml-0'>
            Part-time
          </Checkbox>
          <Checkbox value='Freelance' className='!ml-0'>
            Freelance
          </Checkbox>
          <Checkbox value='Internship' className='!ml-0'>
            Internship
          </Checkbox>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item label='Monthly Salary Expectation' wrapperCol={{ span: 24 }} className='!mb-0'>
        <Row gutter={[12, 0]}>
          <Col span={6}>
            <Form.Item name='currencyCode'>
              <Select
                showSearch
                optionFilterProp='value'
                filterOption={(input, option) =>
                  (option?.value as string).toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {Object.values(currencies).map((c) => (
                  <Option key={c.code} value={c.code}>
                    {c.code}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item name='salaryExpectation'>
              <InputNumber className='!w-full' controls={false} />
            </Form.Item>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item label='Work Location Preference' name='workLocation'>
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{ span: 24 }}
        required={false}
        name='willingToWorkRemotely'
        valuePropName='checked'
      >
        <Checkbox>Willing to work remotely</Checkbox>
      </Form.Item>
    </Form>
  );
});
PreferenceForm.displayName = 'PreferenceForm';
export default PreferenceForm;
