import { Data } from '@react-google-maps/api';
import { Card, Col, Image, Row, Tag } from 'antd';
import postApi from 'api/postApi';
import Link from 'next/link';
import React, { useState } from 'react';
import { PostItem } from 'types';
import { timeAgo } from 'utils/date_time';
import { HeroIcon } from 'utils/HeroIcon';

type Props = {
  data: PostItem;
};

const JobCardItem = (props: Props) => {
  const [isLiked, setIsLiked] = useState(props.data.isFavorited);
  const handleLike = async () => {
    try {
      if (isLiked) {
        const result = await postApi.deleteFavoritePost('6253d28a27aa74eb68b2988e', props.data._id);
      } else {
        const result = await postApi.addFavoritePost('6253d28a27aa74eb68b2988e', props.data._id);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row className=' mb-[10px] last:mb-0 hover:opacity-90 hover:shadow-lg'>
      <Card className='w-full p-[20px]'>
        <Row>
          <Col span={3}>
            <a href={`/job-list/${props.data._id}`} target='_blank' rel='noopener noreferrer'>
              <Image width={100} height={100} className='bg-red-500' preview={false} />
            </a>
          </Col>
          <Col span={21} className='text-lg pl-[10px]'>
            <Row>
              <Col span={18} className=' text-[#8B7A9F] font-semibold'>
                {props.data.companyName}
              </Col>
              <Col span={6} className='!flex justify-end'>
                <span>
                  Còn <strong>7</strong> ngày để ứng tuyển
                </span>
              </Col>
            </Row>
            <Col span={18}>
              <a
                href={`/job-list/${props.data._id}`}
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:underline !decoration-black'
              >
                <h2 className='text-[22px] font-semibold mb-0'>{props.data.title}</h2>
              </a>
            </Col>
            <Col span={24} className='text-[14px] my-2'>
              {props.data.address}
            </Col>
            <Row>
              <Col span={20}>
                <Tag className='!rounded-[4px]'>{props.data.jobCategories.name}</Tag>
                <Tag className='!rounded-[4px]'>
                  {props.data?.salary?.negotiable
                    ? 'Negotiable'
                    : `${props.data?.salary?.min} - ${props.data?.salary?.max} ${props.data?.salary?.unit}`}
                </Tag>
                {props.data.skill.map((e: any, index) => (
                  <Tag className='!rounded-[4px]' key={index}>
                    {e.text}
                  </Tag>
                ))}
                {props.data.updatedAt && (
                  <Tag className='!rounded-[4px]'>{timeAgo(props.data.updatedAt)}</Tag>
                )}
              </Col>
              <Col span={4} className='!flex justify-end'>
                <div onClick={() => handleLike()}>
                  <HeroIcon
                    icon='HeartIcon'
                    outline={!isLiked}
                    size='h-[22px]'
                    color={isLiked ? '!text-[#D82727]' : ''}
                    className=' hover:!text-[#D82727]'
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default JobCardItem;
