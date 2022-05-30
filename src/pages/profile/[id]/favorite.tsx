import { Col, Pagination, Row } from 'antd';
import postApi from 'api/postApi';
import JobCardItem from 'components/JobSeeker/JobList/JobCardItem';
import { PAGE_SIZE } from 'constant/others';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';

type Props = {};
type DataType = {
  _id: string;
  post: Post;
};
const FavoriteList = (props: Props) => {
  const [data, setData] = useState<DataType[]>([]);
  const [totalSize, setTotalSize] = useState<number>(0);
  const router = useRouter();
  const idUser = useAppSelector((state) => state.auth.user?._id);

  // const handleSearch = async (value: String) => {
  //   if (value.length > 0) router.push(`${router.basePath}?search=${value}`);
  //   else router.push(router.basePath);
  //   try {
  //     const res = await postApi.getPosts(`?search=${value}`);
  //     if (res.data.data) {
  //       const posts = convertToPostType(res.data.data);
  //       setData(posts);
  //       setTotalSize(res.data.totalItems);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleChangePage = async (currPage: number) => {
    router.push(`${router.basePath}?page=${currPage}`);
    try {
      const res = await postApi.getFavoritePost(`?page=${currPage}`);
      if (res.data.data) {
        setData(res.data.data);
        setTotalSize(res.data.totalItems);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await postApi.getFavoritePost(idUser);
        if (res.data.data) {
          setData(res.data.data);
          setTotalSize(res.data.totalItems);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Row className='w-full mt-[20px] px-16 pt-[20px] bg-[#FAFAFC]' justify='center'>
      {data?.map((e) => (
        <Col span={24} className='mb-4' key={`${e._id}`}>
          <JobCardItem data={{ ...e.post, isFavorited: true }} />
        </Col>
      ))}
      {data && data.length > 0 && (
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
  );
};

export default FavoriteList;
