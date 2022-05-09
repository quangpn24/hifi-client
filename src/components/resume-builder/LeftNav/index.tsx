import { Tabs } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import {
  EducationEditor,
  IntroEditor,
  LabelEditor,
  SkillEditor,
  SocialEditor,
  WorkEditor,
} from '../editor';
import ActivityEditor from '../editor/ActivityEditor';
import { AwardEditor } from '../editor/Editor';

const sideBarList = [
  {
    key: 0,
    title: 'Intro',
    icon: 'Hi/HiOutlineUser',
    component: <IntroEditor />,
  },
  {
    key: 1,
    title: 'Social',
    icon: 'Hi/HiOutlineShare',
    component: <SocialEditor />,
  },
  {
    key: 2,
    title: 'Skills',
    icon: 'Hi/HiOutlinePuzzle',
    component: <SkillEditor />,
  },
  {
    key: 3,
    title: 'Experience',
    icon: 'Hi/HiOutlineBriefcase',
    component: <WorkEditor />,
  },
  {
    key: 4,
    title: 'Education',
    icon: 'Hi/HiOutlineLibrary',
    component: <EducationEditor />,
  },
  {
    key: 5,
    title: 'Activity',
    icon: 'Hi/HiOutlineGlobe',
    component: <ActivityEditor />,
  },
  {
    key: 6,
    title: 'Award',
    icon: 'Hi/HiOutlineTag',
    component: <AwardEditor />,
  },
  {
    key: 7,
    title: 'Label',
    icon: 'Hi/HiOutlineTag',
    component: <LabelEditor />,
  },
];

interface IMenu {
  key: number;
  title: string;
  icon: string;
  component: JSX.Element;
}

const LeftNav = () => {
  return (
    <div className='bg-white'>
      <Tabs defaultActiveKey='0' tabPosition='left'>
        {sideBarList.map((item: IMenu) => (
          <Tabs.TabPane
            key={item.key}
            tab={
              <div className='flex gap-2 items-center'>
                <AppIcon icon={item.icon} size={'18'} />
                <p className='m-0'>{item.title}</p>
              </div>
            }
          >
            <div className='px-4 py-2'>{item.component}</div>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default LeftNav;
