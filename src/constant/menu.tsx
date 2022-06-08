import { HomeOutlined } from '@ant-design/icons';
import PayrollPage from 'pages/payroll';

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
    url: '/job-posts',
    icon: <HomeOutlined />,
  },
  {
    id: 2,
    name: 'Companies',
    url: '/companies',
    icon: <HomeOutlined />,
  },
  {
    id: 3,
    name: 'Resume builder',
    url: '/resume-builder',
    icon: <HomeOutlined />,
  },
  {
    id: 4,
    name: 'Gross - Net',
    url: '/payroll',
    icon: <PayrollPage />,
  },
];

export default menu;
