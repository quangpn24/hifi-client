import { Col, Input, Row, Button, Card } from 'antd';
import postApi from 'api/postApi';
import AppHeading from 'components/commons/AppHeading';
import CheckboxMenu from 'components/commons/CheckboxMenu';
import JobCardItem from 'components/JobSeeker/JobList/JobCardItem';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const { Search } = Input;
type Props = {};
type Option = {
  label: string;
  value: string | number;
};
interface Post {
  title: String;
  company: String;
  address: String;
  skill: Array<Object>;
  image: String;
  _id: String;
  salary: Object;
}
const Jobs = (props: Props) => {
  const [data, setData] = useState<Array<Post>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postApi.getPosts();
        if (res.data.data) {
          const posts = res.data.data.map((e: any) => {
            return {
              title: e.title,
              company: e.company?.name,
              _id: e._id,
              skill: e.skillTags,
              address: 'HCM',
              image: '',
              salary: e.salary,
            };
          });
          setData([...posts, ...posts, ...posts]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchOptionFilter = async () => {
      try {
        const res = await postApi.getFilterOption();
        if (res.data.data) {
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    fetchOptionFilter();
  }, []);

  return (
    <Row>
      <Row className='w-full px-[150px] py-[40px] bg-white'>
        <Col span={24} className='my-[20px]'>
          <AppHeading text={'Search jobs, companies, ....'} />
        </Col>
        <Col span={24}>
          <div className=' w-2/5 mb-[20px]'>
            <Search
              className=' shadow-md'
              placeholder='Search for job title'
              allowClear
              size='large'
              enterButton='Search'
            />
          </div>
        </Col>
        <Col>
          <div className='flex w-auto'>
            {/* <CheckboxMenu
              options={options}
              onChange={() => {}}
              keyword='Catelogy'
              defaultValue={[1, 2, 3]}
            />
            <CheckboxMenu options={} onChange={() => {}} keyword='Level' />
            <CheckboxMenu options={options} onChange={() => {}} keyword='Salary' /> */}
            <Button type='primary' className='!ml-[10px] !px-4'>
              Filter
            </Button>
          </div>
        </Col>
      </Row>
      {/* <Card className='w-full'> */}
      <Row className='w-full mt-[20px] px-[150px] pt-[20px] bg-[#FAFAFC]'>
        {data?.map((e) => (
          <Col span={24} className='mb-4'>
            <JobCardItem data={e} />
          </Col>
        ))}
      </Row>
      {/* </Card> */}
    </Row>
  );
};

export default Jobs;
