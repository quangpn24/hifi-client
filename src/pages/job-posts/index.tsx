import { Col, Input, Row, Button, Card, Select, Pagination } from 'antd';
import postApi from 'api/postApi';
import subcategoryApi from 'api/subcategoryApi';
import CheckboxMenu from 'components/commons/CheckboxMenu';
import JobCardItem from 'components/JobSeeker/JobList/JobCardItem';
import { PAGE_SIZE } from 'constant/others';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useState } from 'react';

const { Search } = Input;
type Props = {
  posts: Post[];
  categoryOption: Option[];
  totalItems: number;
};

type Option = {
  label: string;
  value: string | number;
};
const Jobs = (props: Props) => {
  const { categoryOption } = props;
  const [posts, setPosts] = useState<Post[]>(props.posts);
  const [totalSize, setTotalSize] = useState<number>(props.totalItems);
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Array<string | number>>([]);
  const [defaultCategory, setDefaultCategory] = useState<Array<string | number>>();
  const [defaultSearch, setDefaultSearch] = useState<string>();
  const [selectedSalary, setSelectedSalary] = useState<String | Number>();
  const router = useRouter();
  const salaryOption = [
    { label: 'All salary', value: 'all' },
    { label: '< 10M', value: '0' },
    { label: '10M - 20M', value: '1' },
    { label: '> 20M', value: '2' },
    { label: 'Negotiable', value: '3' },
  ];

  const handleSearch = async (value: String) => {
    if (value.length > 0) router.push(`${router.basePath}?search=${value}`);
    else router.push(router.basePath);
    try {
      const res = await postApi.getPosts(`?search=${value}`);
      if (res.data.data) {
        setPosts(res.data.data);
        setTotalSize(res.data.totalItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async () => {
    try {
      let queryTmp = '';

      if (selectedCategory.length > 0) {
        queryTmp = `?jobCategory=${selectedCategory.join(',')}`;
      } else {
        queryTmp = '?';
      }
      if (selectedSalary) {
        if (queryTmp.length > 1) queryTmp += '&';
        switch (selectedSalary) {
          case '0': {
            queryTmp += 'salary[end]=10000000';
            break;
          }
          case '1': {
            queryTmp += 'salary[start]=10000000&salary[end]=20000000';
            break;
          }
          case '2': {
            queryTmp += 'salary[start]=20000000';
            break;
          }
          case '3': {
            queryTmp += 'salary[negotiable]=true';
            break;
          }
          case 'all': {
            queryTmp += '';
            break;
          }
        }
      }
      setQuery(queryTmp);
      const res = await postApi.getPosts(queryTmp);
      setPosts(res.data.data);
      setTotalSize(res.data.totalItems);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePage = async (currPage: number) => {
    router.push(`${router.basePath}?page=${currPage}`);
    try {
      const tmp = query.length > 0 ? `${query}&page=${currPage}` : `?page=${currPage}`;
      const res = await postApi.getPosts(`?page=${currPage}`);
      if (res.data.data) {
        setPosts(res.data.data);
        setTotalSize(res.data.totalItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const { categoryId, search } = router.query;
    if (categoryId) {
      subcategoryApi
        .getSubByCategoryId(categoryId as string)
        .then((res) => {
          const selectCategory = res.data.value.map((category: any) => {
            return category._id;
          });
          setDefaultCategory(selectCategory);
          setSelectedCategory(selectCategory);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setDefaultCategory([]);
    }

    if (search) {
      setDefaultSearch(search as string);
    }
  }, []);

  useEffect(() => {
    if (defaultCategory) {
      handleFilter();
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (defaultSearch) {
      handleSearch(defaultSearch);
    }
  }, [defaultSearch]);

  return (
    <div className='p-8 py-0'>
      <Card>
        <Row>
          {/* <Col span={24} className='my-[20px]'>
          <AppHeading text={'Find jobs'} />
        </Col> */}
          <Col span={24}>
            <div className=' w-2/5 mb-[20px]'>
              <Search
                placeholder='Search for job title'
                allowClear
                size='large'
                enterButton='Search'
                onSearch={handleSearch}
              />
            </div>
          </Col>
          <Col>
            <div className='flex w-auto'>
              <div>
                <CheckboxMenu
                  defaultValue={defaultCategory}
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
      </Card>
      <Row className='mt-10' justify='center'>
        {posts?.map((e) => (
          <Col span={24} className='mb-4' key={`${e._id}`}>
            <Card>
              <JobCardItem data={e} />
            </Card>
          </Col>
        ))}
        {posts && posts.length > 0 && (
          <Pagination
            className='!my-5'
            defaultCurrent={1}
            total={totalSize}
            pageSize={PAGE_SIZE}
            showSizeChanger={false}
            onChange={(currPage) => handleChangePage(currPage)}
          />
        )}
      </Row>
    </div>
  );
};

interface IParams extends ParsedUrlQuery {
  categoryId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const resPosts = await postApi.getPosts();
    const resFilterOption = await postApi.getFilterOption();
    return {
      props: {
        posts: resPosts.data.data,
        categoryOption: resFilterOption.data.data.categoryOption.map((e: any) => {
          return {
            label: e.name,
            value: e._id,
          };
        }),
        totalItems: resPosts.data.totalItems,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Jobs;
