import Icon, { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col, Button, Avatar, Divider, Input } from 'antd';
import type { NextPage } from 'next';
import logo from '/public/images/Logo.svg';
import Image from 'next/image';
import { Typography, Image as AntImage } from 'antd';
import Text from 'antd/lib/typography/Text';
import Jobhunt from '/public/images/Job-hunt.svg';
import Category from '../../LandingPage/Category';
import { Tabs } from 'antd';
import FeatureJob from 'components/LandingPage/FeatureJob';
const { TabPane } = Tabs;
const { Search } = Input;

const LandingPage: NextPage = (props) => {
  const categories = [
    {
      id: 1,
      name: 'ABC',
      image: Jobhunt,
      jobs: 123,
    },
    {
      id: 2,
      name: 'DEF',
      image: Jobhunt,
      jobs: 153,
    },
    {
      id: 3,
      name: 'YUT',
      image: Jobhunt,
      jobs: 53,
    },
    {
      id: 4,
      name: 'RFG',
      image: Jobhunt,
      jobs: 253,
    },
    {
      id: 5,
      name: 'JKI',
      image: Jobhunt,
      jobs: 113,
    },
    {
      id: 6,
      name: 'NMH',
      image: Jobhunt,
      jobs: 153,
    },
  ];

  const jobs = [
    {
      id: 1,
      companyName: 'Tiki',
      logo: Jobhunt,
      title: 'Frontend Engineer Intern - Social Commerce Platform',
      location: 'HCM',
      timesheet: 'Full time',
      time: '12/03/2022 10:10',
    },
    {
      id: 2,
      companyName: 'Lazada',
      logo: Jobhunt,
      title: 'Frontend Engineer Senior',
      location: 'HCM',
      timesheet: 'Full time',
      time: '12/03/2022 10:10',
    },
    {
      id: 3,
      companyName: 'VNG',
      logo: Jobhunt,
      title: 'Frontend Engineer Intern - Social Commerce Platform',
      location: 'HCM',
      timesheet: 'Full time',
      time: '12/03/2022 10:10',
    },
    {
      id: 4,
      companyName: 'Elca',
      logo: Jobhunt,
      title: 'Frontend Engineer Intern - Social Commerce Platform',
      location: 'HCM',
      timesheet: 'Full time',
      time: '12/03/2022 10:10',
    },
    {
      id: 5,
      companyName: 'Fossil',
      logo: Jobhunt,
      title: 'Frontend Engineer Intern - Social Commerce Platform ',
      location: 'HCM',
      timesheet: 'Full time',
      time: '12/03/2022 10:10',
    },
    {
      id: 6,
      companyName: 'Zalo',
      logo: Jobhunt,
      title: 'Frontend Engineer Intern - Social Commerce Platform',
      location: 'HCM',
      timesheet: 'Full time',
      time: '12/03/2022 10:10',
    },
  ];

  const companies = [
    {
      id: 1,
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3g1SHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c535e18eca3ff84fd6857746a6ea66ed9cb31b69/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/logo2.png',
    },
    {
      id: 2,
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN1RFRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--fd973422c6f688d8007a832ba2ed146a33b8dc15/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/Logo%20xanh%20d%C6%B0%C6%A1ng.png',
    },
    {
      id: 3,
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMmZvSXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--a72d8a6545664966af9f6674fde5e1164b55ced4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/Logo%20MB%20he%20mau%20RGB%2001.png',
    },
    {
      id: 4,
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNXNuSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8b784f1c4b281934c44c4353eb3fc7f4c06f6745/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/FossilGroup-logo.png',
    },
    {
      id: 5,
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOXdVRlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--911d57240c287c9f97546479f528a92ee4198990/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/zalocareers_blue_2.png',
    },
    {
      id: 6,
      logo: 'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEJwSFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--61bb4901a74cef186408525de025b905e8ecf1ea/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/logo%20FSOFT%20d%E1%BB%8Dc.png',
    },
  ];

  const handleSearch = () => {};
  return (
    <div className='px-16 py-8 mt-16 bg-[#EBEFF7]'>
      <Row justify='space-between' gutter={[20, 20]}>
        <Col md={8} xs={24}>
          <h3 className='font-bold text-3xl text-text-primary'>
            Find your future! Hire your future!
          </h3>
          <h5 className='text-text-tertiary inline-block'>
            {`Find your future. Let't go to discover the world!. Your oppornities are in your hand ^^`}
          </h5>
          <Row className='mt-8'>
            <Col span={24}>
              <Search
                size='large'
                placeholder='Search'
                allowClear
                enterButton
                onSearch={handleSearch}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} xs={0}></Col>
        <Col md={10} xs={24}>
          <div className='w-400'>
            <Image src={Jobhunt} alt='' width={500} height={500}></Image>
          </div>
        </Col>
      </Row>
      <Row justify='space-between'>
        <Col>
          <h3 className='font-bold text-3xl text-text-primary'>Categories!</h3>
        </Col>
        <Col>
          <Button type='link'>
            <span className='text-text-tertiary'>All categories</span>
            <ArrowRightOutlined style={{ color: '#8B7A9F' }} />
          </Button>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        {categories.map((category) => (
          <Col lg={8} md={12} key={category.id}>
            <Category category={category}></Category>
          </Col>
        ))}
      </Row>
      <Row justify='center' className='pt-8'>
        <h3 className='font-bold text-3xl text-text-primary'>Exciting jobs!</h3>
      </Row>
      <Row justify='center'>
        <h5 className='text-text-tertiary max-w-md text-center'>
          {`Find your future. Let't go to discover the world!. Your oppornities are in your hand ^^`}
        </h5>
      </Row>
      <Tabs defaultActiveKey='1' centered size='large'>
        {categories.map((category) => (
          <TabPane tab={category.name} key={category.id}>
            <Row gutter={[20, 20]}>
              {jobs.map((job) => (
                <Col md={12} lg={6} key={category.id}>
                  <FeatureJob job={job} key={job.id} />
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
      <Row justify='center' className='pt-8'>
        <Button type='primary' size='large'>
          Explore more jobs
        </Button>
      </Row>
      <Row justify='center' className='pt-8'>
        <h3 className='font-bold text-3xl text-text-primary'>Top Companies!</h3>
      </Row>
      <Row justify='center'>
        <h5 className='text-text-tertiary max-w-md text-center'>
          {`Find your future. Let't go to discover the world!. Your oppornities are in your hand ^^`}
        </h5>
      </Row>
      <Row className='p-8'>
        {companies.map((company) => (
          <Col
            span={8}
            key={company.id}
            className='text-center h-44'
            style={{ lineHeight: '176px' }}
          >
            <AntImage preview={false} src={company.logo} className='max-h-44' alt=''></AntImage>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LandingPage;
