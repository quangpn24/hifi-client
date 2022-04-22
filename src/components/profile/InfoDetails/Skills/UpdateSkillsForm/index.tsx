import { Checkbox, Divider, Form, Input, message, Select, Space } from 'antd';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import suggestionApi from 'api/suggestionApi';
import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Skill } from 'types';
import Utils from 'utils';
import Chip from '../Chip';
import SkillCheckboxGroup from '../SkillCheckboxGroup';
import SkillsList from '../SkillsList';

const { TextArea } = Input;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
interface IProps {
  skills?: Skill[];
  formType?: 'update' | 'create';
  onSubmit?: (values: Skill[]) => void;
}

const UpdateSkillsForm = React.forwardRef<any, IProps>(
  ({ onSubmit, skills: data, formType }, ref) => {
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>(data || []);
    useImperativeHandle(ref, () => ({
      submit() {
        onSubmit?.(selectedSkills);
      },
      resetFields() {},
    }));

    const handleSkillsCheckboxChange = (selectedValue: Skill[]) => {
      setSelectedSkills(selectedValue);
    };

    const handleDelete = (id: string) => {
      setSelectedSkills((prev) => {
        return prev.filter((skill) => skill._id !== id);
      });
    };
    return (
      <div>
        <SkillCheckboxGroup defaultValues={selectedSkills} onChange={handleSkillsCheckboxChange} />
        <Divider type='horizontal' className='!my-2 bg-gray-400 h-0.5' />
        {selectedSkills.length > 0 ? (
          <>
            <p className='text-base'>{selectedSkills.length} Skills selected</p>
            <Space className='mt-4' size={[8, 16]} wrap>
              {selectedSkills?.map((skill) => (
                <Chip key={skill._id} text={skill.text} onDelete={() => handleDelete(skill._id)} />
              ))}
            </Space>
          </>
        ) : (
          <p>No skills selected</p>
        )}
      </div>
    );
  }
);
UpdateSkillsForm.displayName = 'UpdateSkillsForm';
export default UpdateSkillsForm;
