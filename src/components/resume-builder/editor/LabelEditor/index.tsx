import { Form, Input } from 'antd';

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
  return (
    <div className='px-6 py-4'>
      <Form layout='vertical'>
        {metadata.map((item) => (
          <Form.Item key={item.name} name={item.name}>
            <Input placeholder={item.label} />
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};

export default LabelEditor;
