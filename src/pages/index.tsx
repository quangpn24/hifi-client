import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Col, Image as AntImage, Input, Row, Tabs } from 'antd';
import axios from 'axios';
import CategoryCard from 'components/landing_page/CategoryCard';
import JobCard from 'components/landing_page/JobCard';
import ReactFullpage from '@fullpage/react-fullpage';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Jobhunt from '/public/images/Job-hunt.svg';
const { TabPane } = Tabs;
const { Search } = Input;
import categoryApi from 'api/categoryApi';
import postApi from 'api/postApi';
import companyApi from 'api/companyApi';
import Footer from 'components/layouts/Footer';

//define type for data
interface Data {
  userId: Number;
  id: Number;
  title: String;
  completed: Boolean;
}

//define type for props
interface Props {
  data: Data;
}

const Home: NextPage<Props> = (props) => {
  const { data } = props;
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [activeKey, setActiveKey] = useState<string>();
  const anchors = ['welcome', 'categories', 'jobs', 'companies'];

  const handleChangeTab = (activeKey: string) => {
    setActiveKey(activeKey);
  };

  const handleSearch = (value: string) => {
    router.push(`/job-posts/?search=${value}`);
  };

  const order = (a: any, b: any) => {
    return a.jobs > b.jobs ? -1 : a.jobs < b.jobs ? 1 : 0;
  };

  useEffect(() => {
    categoryApi
      .getCategories()
      .then((res) => {
        const categories = res.data.value;
        setCategories(categories.sort(order));
        setActiveKey(categories[0]._id);
      })
      .catch((err) => {
        console.log(err);
      });

    companyApi
      .getCompanies()
      .then((res) => {
        setCompanies(res.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (activeKey) {
      postApi
        .getPostsLandingPage(activeKey)
        .then((res) => {
          setPosts(res.data.value);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [activeKey]);

  return (
    <div className='px-16 py-8 !h-auto'>
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
      <Row justify='space-between' className='mb-4'>
        <Col>
          <h3 className='font-bold text-3xl text-text-primary'>Categories!</h3>
        </Col>
        <Col>
          <Button type='link' href='categories'>
            <span className='text-text-tertiary'>All categories</span>
            <ArrowRightOutlined style={{ color: '#8B7A9F' }} />
          </Button>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        {categories.map((category) => (
          <Col lg={8} md={12} key={category?._id}>
            <CategoryCard category={category} />
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
      <Tabs defaultActiveKey={activeKey} centered size='large' onChange={handleChangeTab}>
        {categories.map((category) => (
          <TabPane tab={category.name} key={category._id}>
            <Row gutter={[20, 20]}>
              {posts.map((post) => (
                <Col md={12} lg={6} key={post._id}>
                  <JobCard post={post} key={post._id} />
                </Col>
              ))}
            </Row>
          </TabPane>
        ))}
      </Tabs>
      <Row justify='center' className='pt-8'>
        <Button type='primary' size='large' href='/job-posts'>
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
      <Row gutter={[32, 16]}>
        {companies.map((company) => (
          <Col span={8} key={company._id} className='text-center h-44'>
            <AntImage
              preview={false}
              src={
                company.logo ||
                'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM3g1SHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c535e18eca3ff84fd6857746a6ea66ed9cb31b69/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/logo2.png'
              }
              className='max-h-44  cursor-pointer'
              alt=''
              onClick={() => {
                router.push(`/companies/${company._id}`);
              }}
            ></AntImage>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); // example
    const data = result.data;
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { data },
    };
  } catch (e: any) {
    res.statusCode = 404;
    console.log('Errror: ', e.message);
    return {
      props: {},
    };
  }
};

export default Home;
