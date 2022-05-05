import { Form } from 'antd';
import { MarkDownField } from 'components/resume-builder/widgets';
import { useAppDispatch } from 'redux/hooks';
import { updateIntro } from 'redux/reducers/introReducer';

const SkillEditor = () => {
  const dispatch = useAppDispatch();
  return (
    <div className='m-4'>
      <Form layout='vertical'>
        <Form.Item name='skills'>
          <MarkDownField
            setValue={(text: any) => dispatch(updateIntro({ field: 'skills', value: text }))}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default SkillEditor;
