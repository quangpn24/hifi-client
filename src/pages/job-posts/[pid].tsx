import { Button } from 'antd';
import postApi from 'api/postApi';
import ApplyJobFormModal from 'components/JobPost/ApplyJobForm';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useState } from 'react';

type Props = {
  post: Post;
};

const PostDetailPage = ({ post }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <div>
      <Button onClick={showModal}>Apply now</Button>
      <ApplyJobFormModal
        title={`Apply ${post.title}`}
        visible={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
        }}
        post={post}
      />
    </div>
  );
};

interface IParams extends ParsedUrlQuery {
  pid: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { pid } = context.params as IParams;
  try {
    const data = await postApi.getPostDetail(pid);
    return {
      props: {
        post: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default PostDetailPage;
