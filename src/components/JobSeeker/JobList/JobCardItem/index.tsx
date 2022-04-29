import { Data } from '@react-google-maps/api';
import { Card, Col, Image, Row, Tag } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { HeroIcon } from 'utils/HeroIcon';

type Props = {
  data: any;
};

const JobCardItem = (props: Props) => {
  const [isLike, setIsLike] = useState(false);

  const Like = () => {
    setIsLike(!isLike);
  };
  return (
    <Row className=' mb-[10px] last:mb-0 hover:opacity-90 hover:shadow-lg'>
      <Card className='w-full p-[20px]'>
        <Row>
          <Col span={3}>
            <a href={`/job-list/${props.data._id}`} target='_blank'>
              <Image width={100} height={100} className='bg-red-500' preview={false} />
            </a>
          </Col>
          <Col span={21} className='text-lg pl-[10px]'>
            <Row>
              <Col span={18} className=' text-[#8B7A9F] font-semibold'>
                {props.data.company}
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
                <Tag className='!rounded-[4px]'>
                  {props.data?.salary.negotiable
                    ? 'Negotiable'
                    : `${props.data?.salary.min} - ${props.data?.salary.max} ${props.data?.salary.unit}`}
                </Tag>
                {props.data.skill.map((e: any) => (
                  <Tag className='!rounded-[4px]'>{e.text}</Tag>
                ))}
                <Tag className='!rounded-[4px]'>Cập nhật 2 giờ trước</Tag>
              </Col>
              <Col span={4} className='!flex justify-end'>
                <div onClick={() => Like()}>
                  <HeroIcon
                    icon='HeartIcon'
                    outline={!isLike}
                    size='h-[22px]'
                    color={isLike ? '!text-[#D82727]' : ''}
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
