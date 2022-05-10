import { HomeOutlined } from '@ant-design/icons';

interface IMenu {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
}

const menu: IMenu[] = [
  {
    id: 1,
    name: 'Jobs',
    url: './jobs',
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    name: 'Companies',
    url: './companies',
    icon: <HomeOutlined />,
  },
];

export default menu;
