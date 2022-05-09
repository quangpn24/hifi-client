import { Form } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import { MarkDownField } from 'components/resume-builder/widgets';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateIntro } from 'redux/reducers/introReducer';
import { selectIntro } from 'redux/selectors';

const Title = (title: string, icon: string) => (
  <div className='flex gap-2 items-center'>
    <AppIcon icon={icon} size='18' />
    <p className='m-0 text-base font-medium'>{title}</p>
  </div>
);

const ActivityEditor = () => {
  const state = useAppSelector(selectIntro);
  const dispatch = useAppDispatch();
  return (
    <Form layout='vertical'>
      <Form.Item label={Title('Activities', 'Hi/HiOutlineBadgeCheck')} name='activities'>
        <MarkDownField
          defaultValue={state.activities}
          setValue={(text: any) => dispatch(updateIntro({ field: 'activities', value: text }))}
        />
      </Form.Item>
    </Form>
  );
};

export default ActivityEditor;
