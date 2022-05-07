import { Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateLabel } from 'redux/reducers/labelReducer';
import { selectLabel } from 'redux/selectors';

interface IProps {}

const metadata = [
  {
    label: 'About me',
    name: 'summary',
  },
  {
    label: 'Career objective',
    name: 'objective',
  },
  {
    label: 'Experience',
    name: 'experience',
  },
  {
    label: 'Education',
    name: 'education',
  },
  {
    label: 'Awards',
    name: 'award',
  },
  {
    label: 'Volunteering',
    name: 'volunteering',
  },
  {
    label: 'Skills',
    name: 'skill',
  },
];

const LabelEditor = ({}: IProps) => {
  const state = useAppSelector(selectLabel);
  const dispatch = useAppDispatch();
  return (
    <Form initialValues={state} layout='vertical'>
      {metadata.map((item) => (
        <Form.Item key={item.name} name={item.name}>
          <Input
            placeholder={item.label}
            onChange={(event) =>
              dispatch(updateLabel({ field: event.target.id, value: event.target.value }))
            }
          />
        </Form.Item>
      ))}
    </Form>
  );
};

export default LabelEditor;
