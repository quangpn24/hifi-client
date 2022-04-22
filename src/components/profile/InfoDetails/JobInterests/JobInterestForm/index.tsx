import { MinusCircleIcon, PlusIcon } from '@heroicons/react/outline';
import { Button, Divider, Form, Input } from 'antd';
import jobInterestedApi from 'api/jobInterestApi';
import suggestionApi from 'api/suggestionApi';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import Utils from 'utils';
import FieldsInput from './FieldsInput';
const { TextArea } = Input;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface IProps {
  fields?: InterestField[];
  formType?: 'update' | 'create';
  onSubmit?: (values: InterestField[]) => void;
}
const formItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};
const JobInterestsForm = React.forwardRef<any, IProps>(({ onSubmit, fields }, ref) => {
  const [form] = Form.useForm();
  const [jobCategories, setJobCategories] = useState<string[]>([]);
  useImperativeHandle(ref, () => ({
    submit() {
      form.submit();
    },
    resetFields() {
      form.resetFields();
    },
  }));
  useEffect(() => {
    suggestionApi
      .getAllJobCategories()
      .then((cates) => {
        const subs: string[] = [];
        cates.forEach((cate) => {
          subs.push(...cate.subcategories.map((sub) => sub.name));
        });
        setJobCategories(subs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => form.resetFields(), [jobInterest]);
  const onFinish = (data: any) => {
    console.log('On finish: ', data);
    onSubmit?.(data);
  };

  return (
    <Form form={form} name='dynamic_form_item' {...formItemLayoutWithOutLabel} onFinish={onFinish}>
      <Form.List name='fields' initialValue={fields}>
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field) => (
              <Form.Item {...formItemLayout} required={false} key={field.key}>
                <div className='flex items-center gap-2'>
                  <Form.Item {...field} validateTrigger={['onBlur']} noStyle>
                    <FieldsInput jobs={jobCategories} />
                  </Form.Item>
                  {fields.length > 1 ? (
                    <MinusCircleIcon
                      className='dynamic-delete-button h-5 w-5 cursor-pointer'
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </div>
                <Divider className='!mb-0' />
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type='dashed'
                onClick={() => {
                  add();
                }}
                className='flex items-center self-center'
                icon={<PlusIcon className='w-5 h-5 mr-2' />}
              >
                Add Another Job Function
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
});
JobInterestsForm.displayName = 'JobInterestsForm';
export default JobInterestsForm;
