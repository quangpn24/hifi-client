import { Form, Input } from 'antd';
import InputTitle from 'components/commons/InputTitle';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateSocial } from 'redux/reducers/socialReducer';
import { selectSocial } from 'redux/selectors';

interface IProps {}

const metadata = [
  {
    label: 'Linkedin',
    name: 'linkedin',
  },
  {
    label: 'Github',
    name: 'github',
  },
  {
    label: 'Hackerrank',
    name: 'hackerrank',
  },
  {
    label: 'Twitter',
    name: 'twitter',
  },
  {
    label: 'Behance',
    name: 'behance',
  },
  {
    label: 'Dribble',
    name: 'dribble',
  },
  {
    label: 'Medium',
    name: 'medium',
  },
  {
    label: 'Devto',
    name: 'devto',
  },
  {
    label: 'Hashnode',
    name: 'hashnode',
  },
  {
    label: 'Codeforces',
    name: 'codeforces',
  },
];

const SocialEditor = ({}: IProps) => {
  const state = useAppSelector(selectSocial);
  const dispatch = useAppDispatch();
  let init = {};
  state.map((item) => {
    let key = item.network;
    let obj = {
      [key]: item.url,
    };
    init = {
      ...obj,
      ...init,
    };
  });
  return (
    <Form initialValues={init} layout='vertical'>
      {metadata.map((item) => (
        <Form.Item key={item.name} label={<InputTitle title={item.label} />} name={item.name}>
          <Input
            value={state.find((value) => value.network === item.name)?.url}
            onChange={(event) =>
              dispatch(updateSocial({ network: event.target.id, url: event.target.value }))
            }
          />
        </Form.Item>
      ))}
    </Form>
  );
};

export default SocialEditor;
