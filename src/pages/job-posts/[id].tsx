import { Button, Card, Col, Divider, Image, Row, Tag, Tooltip } from 'antd';
import postApi from 'api/postApi';
import ApplyJobFormModal from 'components/JobPost/ApplyJobForm';
import DescriptionItem from 'components/JobSeeker/JobList/DescriptionItem';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import React, { useEffect, useState } from 'react';
import { Post } from 'types';
import { HeroIcon } from 'utils/HeroIcon';

type Props = {
  post: Post;
};

const JobDetails = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { post } = props;
  const [isLiked, setIsLiked] = useState(post?.isFavorited);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleLike = async () => {
    try {
      if (isLiked) {
        const result = await postApi.deleteFavoritePost('6253d28a27aa74eb68b2988e', post?._id);
      } else {
        const result = await postApi.addFavoritePost('6253d28a27aa74eb68b2988e', post?._id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='px-16'>
      <Card>
        <div>
          <Row className=' bg-white' gutter={[0, 20]}>
            <Col span={2} className='mt-5'>
              <Image width={80} height={80} className='bg-red-500' preview={false} />
            </Col>
            <Col span={22} className='mt-5'>
              <Row>
                <Col span={18}>
                  <span className=' text-3xl font-semibold'>{post?.title}</span>
                </Col>
                <Col span={6} className='!flex flex-row items-center text-[#685879] justify-end'>
                  <HeroIcon
                    icon='ShareIcon'
                    className='!h-[30px] !w-[30px] mr-[10px] border-[1px] border-[#00ADEF] rounded-[4px] p-[2px] text-[#00ADEF]'
                  />
                  <div onClick={() => handleLike()}>
                    <HeroIcon
                      icon='HeartIcon'
                      outline={!isLiked}
                      color={isLiked ? '!text-[#D82727]' : ''}
                      className='!h-[30px] !w-[30px] mr-[10px] border-[1px] border-[#8B7A9F] rounded-[4px] p-[2px] hover:!text-[#D82727]'
                    />
                  </div>
                </Col>
              </Row>

              <Col span={24} className='text-[#685879] text-lg'>
                {`${post?.company?.name} · ${post.company?.locations[0].address}`}
              </Col>
              <Row className='my-[20px]'>
                {post?.skillTags?.map((e: any) => (
                  <Tag
                    key={e._id}
                    className=' !text-[16px] !h-[30px] !flex !items-center !rounded-[4px]'
                  >
                    {e.text}
                  </Tag>
                ))}
              </Row>
              <Row className=' text-base mt-5' gutter={[20, 10]}>
                <Col span={24}>
                  <DescriptionItem
                    iconName='CurrencyDollarIcon'
                    content={
                      post?.salary?.negotiable
                        ? 'Negotiable'
                        : `${post?.salary?.min} - ${post?.salary?.max} ${post?.salary?.unit}`
                    }
                    outline={true}
                  />
                </Col>
                <Col span={24}>
                  <DescriptionItem iconName='ClockIcon' outline content={post?.jobType} />
                </Col>
                <Col span={24}>
                  <DescriptionItem
                    iconName='OfficeBuildingIcon'
                    content={post?.jobCategory?.name}
                  />
                </Col>
              </Row>

              <Col span={10} className='mt-5'>
                <Button type='primary' onClick={showModal}>
                  Apply now
                </Button>
              </Col>
            </Col>
            <Divider className='!mb-0' />
          </Row>
          <Row className='text-[#685879] mt-[30px]'>
            <div dangerouslySetInnerHTML={{ __html: post?.description }}></div>
          </Row>
          <Divider />

          <Row>
            <Col span={24}>
              <Row>
                <Col span={20}>
                  <h2 className='text-2xl'>About the company</h2>
                </Col>
                <Col span={4}>
                  <Link href={'/'}>
                    <div className='flex items-center text-red-700 text-base hover:cursor-pointer'>
                      Go to company page
                      <HeroIcon icon='ArrowRightIcon' outline={true} className=' -rotate-45 ml-2' />
                    </div>
                  </Link>
                </Col>
              </Row>
              <h3 className=' text-[20px]'>Intro</h3>
              <p>{post?.company?.summary}</p>
              <h3 className=' text-[20px]'>Address</h3>
              {post?.company?.locations.map((e, index) => {
                return (
                  <div key={index}>
                    ● <strong>{e.officeName}</strong> - {e.address}
                  </div>
                );
              })}
              <h3 className=' text-[20px] mt-2'>Size</h3>
              <div>{post?.company?.size}/people</div>
            </Col>
          </Row>
        </div>
      </Card>
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
  const { id } = context.params as IParams;
  try {
    const res = await postApi.getById(id);
    return {
      props: {
        post: res.data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default JobDetails;
