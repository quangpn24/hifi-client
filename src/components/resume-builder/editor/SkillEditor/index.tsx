import { Form } from 'antd';
import { MarkDownField } from 'components/resume-builder/widgets';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateIntro } from 'redux/reducers/introReducer';
import { selectIntro } from 'redux/selectors';

const SkillEditor = () => {
  const state = useAppSelector(selectIntro);
  const dispatch = useAppDispatch();
  return (
    <Form layout='vertical'>
      <Form.Item name='skills'>
        <MarkDownField
          defaultValue={state.skills}
          setValue={(text: any) => dispatch(updateIntro({ field: 'skills', value: text }))}
        />
      </Form.Item>
    </Form>
  );
};

export default SkillEditor;
