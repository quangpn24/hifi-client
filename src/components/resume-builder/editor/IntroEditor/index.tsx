import { Form, Input } from 'antd';
import InputTitle from 'components/commons/InputTitle';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateIntro } from 'redux/reducers/introReducer';
import { selectIntro } from 'redux/selectors';
import { MarkDownField } from '../../widgets';

interface IProps {}

const metadata = [
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Title',
    name: 'title',
  },
  {
    label: 'Image url',
    name: 'image',
  },
  {
    label: 'Email',
    name: 'email',
  },
  {
    label: 'Phone number',
    name: 'phone',
  },
  {
    label: 'Address',
    name: 'address',
  },
];

const IntroEditor = ({}: IProps) => {
  const state = useAppSelector(selectIntro);
  const dispatch = useAppDispatch();

  type IntroKey = keyof typeof state;
  return (
    <Form initialValues={state} layout='vertical'>
      {metadata.map((item) => (
        <Form.Item key={item.name} label={<InputTitle title={item.label} />} name={item.name}>
          <Input
            value={state[item.name as IntroKey]}
            onChange={(event) =>
              dispatch(updateIntro({ field: event.target.id, value: event.target.value }))
            }
          />
        </Form.Item>
      ))}
      <Form.Item label={<InputTitle title='Summary' />} name='summary'>
        <MarkDownField
          defaultValue={state.summary}
          setValue={(text: any) => dispatch(updateIntro({ field: 'summary', value: text }))}
        />
      </Form.Item>
    </Form>
  );
};

export default IntroEditor;
