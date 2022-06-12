import { Col, Image, Row, Tag } from 'antd';
import postApi from 'api/postApi';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import dateTimeHelper from 'utils/dateTimeHelper';
import { HeroIcon } from 'utils/HeroIcon';

import Jobhunt from '/public/images/Job-hunt.svg';
type Props = {
  data: Post;
};

const JobCardItem = ({ data }: Props) => {
  const [isLiked, setIsLiked] = useState(data.isFavorited);
  const idUser = useAppSelector((state) => state.auth.user?._id);
  const router = useRouter();
  const handleLike = async () => {
    try {
      if (idUser) {
        if (isLiked) {
          await postApi.deleteFavoritePost(idUser, data._id);
        } else {
          await postApi.addFavoritePost(idUser, data._id);
        }
        setIsLiked(!isLiked);
      } else {
        router.push('/auth/login');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dayLeft = dateTimeHelper.dayLeft(new Date(data.applicationDeadline ?? '1/1/2022'));
  return (
    <Row>
      <Col span={3} lg={2} className='mr-5'>
        <a href={`/job-posts/${data._id}`} target='_blank' rel='noopener noreferrer'>
          <Image
            className='w-full h-full object-contain border border-slate-600'
            src={data?.company?.logo || Jobhunt}
            alt={data.title || 'company name'}
          />
        </a>
      </Col>
      <Col span={21} className='text-lg'>
        <Row>
          <Col span={24} className='text-[#8B7A9F] font-semibold flex justify-between'>
            <a href={`/companies/${data.company?._id}`} target='_blank' rel='noopener noreferrer'>
              <div> {data.company?.name || ' '}</div>
            </a>
            <div className='text-base'>
              {dayLeft > 0 ? (
                <>
                  <strong>
                    {dateTimeHelper.dayLeft(new Date(data.applicationDeadline ?? '1/1/2022'))}
                  </strong>{' '}
                  days left to apply
                </>
              ) : (
                <p className='text-error-color'>Expired</p>
              )}
            </div>
          </Col>
        </Row>
        <Col span={18}>
          <a
            href={`/job-posts/${data._id}`}
            target='_blank'
            rel='noopener noreferrer'
            className=' hover:underline !decoration-black'
          >
            <h2 className='text-[22px] font-semibold mb-0'>{data.title}</h2>
          </a>
        </Col>
        <Col span={24} className='text-[14px] my-2'>
          {data.locations && data?.locations[0]?.address}
        </Col>
        <Row>
          <Col span={20}>
            <Tag color='geekblue'>{data.jobCategory?.name}</Tag>
            <Tag>
              {data?.salary?.negotiable
                ? 'Negotiable'
                : `${data?.salary?.min} - ${data?.salary?.max} ${data?.salary?.unit}`}
            </Tag>
            {data.skillTags &&
              data.skillTags?.map((e: any, index) => (
                <Tag color='green' key={index}>
                  {e.text}
                </Tag>
              ))}
            <Tag color='volcano'>{dateTimeHelper.timeAgo(new Date(data.updatedAt ?? ''))}</Tag>
          </Col>
          <Col span={4} className='!flex justify-end'>
            <div onClick={() => handleLike()}>
              <HeroIcon
                icon='HeartIcon'
                outline={!isLiked}
                size='h-[22px]'
                color={isLiked ? '!text-[#D82727]' : ''}
                className=' hover:!text-[#D82727] cursor-pointer'
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default JobCardItem;
