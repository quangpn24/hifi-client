import { Col, Input, Row, Button, Card, Select, Pagination } from 'antd';
import postApi from 'api/postApi';
import AppHeading from 'components/commons/AppHeading';
import CheckboxMenu from 'components/commons/CheckboxMenu';
import JobCardItem from 'components/JobSeeker/JobList/JobCardItem';
import { PAGE_SIZE } from 'constant/others';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PostItem } from 'types';
const { Search } = Input;
type Props = {};

type Option = {
  label: string;
  value: string | number;
};
const Jobs = (props: Props) => {
  const [data, setData] = useState<Array<PostItem>>([]);
  const [totalSize, setTotalSize] = useState<number>(0);
  const [categoryOption, setCategoryOption] = useState<Array<Option>>([]);
  const [selectedCategory, setSelectedCategory] = useState<Array<String | Number>>([]);
  const [selectedSalary, setSelectedSalary] = useState<String | Number>();
  const router = useRouter();
  const salaryOption = [
    { label: 'All salary', value: 'all' },
    { label: 'Less than 10M', value: '0' },
    { label: '10M - 20M', value: '1' },
    { label: 'Greater than 20M', value: '2' },
    { label: 'Negotiable', value: '3' },
  ];

  const convertToPostType = (data: any) => {
    const posts: Array<PostItem> = data.map((e: any) => {
      return {
        title: e.title,
        companyName: e.company?.name,
        jobCategories: e.jobCategories,
        _id: e._id,
        skill: e.skillTags,
        address: e?.locations[0],
        image: '',
        salary: e.salary,
        updatedAt: new Date(e.updatedAt),
      };
    });
    console.log(posts);
    return posts;
  };
  const handleSearch = async (value: String) => {
    if (value.length > 0) router.push(`${router.basePath}?search=${value}`);
    else router.push(router.basePath);
    try {
      const res = await postApi.getPosts(`?search=${value}`);
      if (res.data.data) {
        const posts = convertToPostType(res.data.data);
        setData(posts);
        setTotalSize(res.data.totalItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async () => {
    try {
      let query = '';
      if (selectedCategory.length > 0) {
        query = `?jobCategories=${selectedCategory.join(',')}`;
      } else {
        query = '?';
      }
      if (selectedSalary) {
        if (query.length > 1) query += '&';
        switch (selectedSalary) {
          case '0': {
            query += 'salary[end]=10000000';
            break;
          }
          case '1': {
            query += 'salary[start]=10000000&salary[end]=20000000';
            break;
          }
          case '2': {
            query += 'salary[start]=20000000';
            break;
          }
          case '3': {
            query += 'salary[negotiable]=true';
            break;
          }
          case 'all': {
            query += '';
            break;
          }
        }
      }
      const res = await postApi.getPosts(query);
      const posts = convertToPostType(res.data.data);
      setData(posts);
      setTotalSize(res.data.totalItems);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = async (currPage: number) => {
    router.push(`${router.basePath}?page=${currPage}`);
    try {
      const res = await postApi.getPosts(`?page=${currPage}`);
      if (res.data.data) {
        const posts = convertToPostType(res.data.data);
        setData(posts);
        setTotalSize(res.data.totalItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postApi.getPosts();
        if (res.data.data) {
          const posts = convertToPostType(res.data.data);
          setData(posts);
          setTotalSize(res.data.totalItems);
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchOptionFilter = async () => {
      try {
        const res = await postApi.getFilterOption();
        if (res.data.data) {
          const categorys = res.data.data.categoryOption.map((e: any) => {
            return {
              label: e.name,
              value: e._id,
            };
          });
          setCategoryOption(categorys);
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
      <Row className='w-full px-16 py-[40px] bg-white'>
        {/* <Col span={24} className='my-[20px]'>
          <AppHeading text={'Find jobs'} />
        </Col> */}
        <Col span={24}>
          <div className=' w-2/5 mb-[20px]'>
            <Search
              className=' shadow-md'
              placeholder='Search for job title'
              allowClear
              size='large'
              enterButton='Search'
              onSearch={(value) => handleSearch(value)}
            />
          </div>
        </Col>
        <Col>
          <div className='flex w-auto'>
            <div>
              <CheckboxMenu
                options={categoryOption}
                onChange={(selectedValue: any) => setSelectedCategory(selectedValue)}
                keyword='Category'
              />
            </div>
            <div className='ml-3'>
              <Select
                style={{ width: 160 }}
                defaultValue='all'
                options={salaryOption}
                onChange={(selectedValue: any) => setSelectedSalary(selectedValue)}
              />
            </div>
            <Button type='primary' className='!ml-3 !px-4' onClick={handleFilter}>
              Filter
            </Button>
          </div>
        </Col>
      </Row>
      <Row className='w-full mt-[20px] px-16 pt-[20px] bg-[#FAFAFC]' justify='center'>
        {data?.map((e) => (
          <Col span={24} className='mb-4' key={`${e._id}`}>
            <JobCardItem data={e} />
          </Col>
        ))}
        {data && data.length > 0 && (
          <Pagination
            className='!my-5'
            defaultCurrent={1}
            total={totalSize}
            pageSize={PAGE_SIZE}
            showSizeChanger={false}
            onChange={(currPage) => handleNextPage(currPage)}
          />
        )}
      </Row>
    </Row>
  );
};

export default Jobs;
