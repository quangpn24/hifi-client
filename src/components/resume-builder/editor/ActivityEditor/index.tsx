import { Form } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import { MarkDownField } from 'components/resume-builder/widgets';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateActivity } from 'redux/reducers/activityReducer';
import { selectActivity } from 'redux/selectors';

const Title = (title: string, icon: string) => (
  <div className='flex gap-2 items-center'>
    <AppIcon icon={icon} size='18' />
    <p className='m-0 text-base font-medium'>{title}</p>
  </div>
);

const ActivityEditor = () => {
  const state = useAppSelector(selectActivity);
  const dispatch = useAppDispatch();
  return (
    <div className='m-4'>
      <Form initialValues={state} layout='vertical'>
        <Form.Item label={Title('Award', 'Hi/HiOutlineBadgeCheck')} name='award'>
          <MarkDownField
            height='240px'
            setValue={(text: any) => dispatch(updateActivity({ field: 'award', value: text }))}
          />
        </Form.Item>
        <Form.Item label={Title('Volunteering', 'Hi/HiOutlineHeart')} name='volunteering'>
          <MarkDownField
            setValue={(text: any) =>
              dispatch(updateActivity({ field: 'volunteering', value: text }))
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default ActivityEditor;
