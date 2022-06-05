import { CalendarIcon } from '@heroicons/react/outline';
import { Tag } from 'antd';
import { APPLICATION_STATUS_MAP } from 'constant';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  data: Application;
};

const ApplicationItem = ({ data }: Props) => {
  const router = useRouter();
  return (
    <Link
      href={{
        pathname: router.pathname + '/' + data.id,
      }}
    >
      <a>
        <div
          className='flex p-4 w-full bg-white hover:shadow-lg hover:cursor-pointer rounded'
          style={{
            border: '1px solid rgb(227, 227, 227)',
          }}
        >
          <Image
            src={data.post?.company?.logo || 'https://picsum.photos/200'}
            layout='fixed'
            width={50}
            height={50}
            alt='logo-company'
          />
          <div className='ml-4 w-full '>
            <h4 className='!mb-0  text-xl'>{data.post?.title}</h4>
            <p className='!mt-1 !mb-0'>{data.post?.company?.name} </p>
            <div className='flex items-center my-2'>
              <CalendarIcon className='w-5 h-5 mr-2' />
              <p className='!mb-0'>
                Submitted on {dayjs(data.createAt).format('MMMM DD YYYY, HH:mm a')}
              </p>
            </div>
            <Tag color={APPLICATION_STATUS_MAP.get(data.status)?.color}>
              {APPLICATION_STATUS_MAP.get(data.status)?.text}
            </Tag>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ApplicationItem;
