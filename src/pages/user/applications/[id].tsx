import React, { useEffect } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { Col, Divider, Row, Space } from 'antd';
import ApplicationItem from 'components/application/ApplicationItem';
import Image from 'next/image';
import { CalendarIcon, ExternalLinkIcon, EyeIcon } from '@heroicons/react/outline';
import JobDetails from 'components/application/JobDetails';
import Link from 'next/link';
import applicationApi from 'api/applicationApi';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import dayjs from 'dayjs';
import { ApplicationStatusMap } from 'components/application/StatusSideBar';
type Props = {
  application: Application;
};

const ApplicationDetail = ({ application }: Props) => {
  return (
    <div className='p-8'>
      <Link href={'/user/applications'}>
        <a>
          <div className='flex items-center'>
            <ChevronLeftIcon className='w-5 h-5' />
            <span className='inline-block'>Back to Applications</span>
          </div>
        </a>
      </Link>
      <Row className='mt-4' gutter={24}>
        <Col span={16}>
          <div className='flex p-4 w-full rounded bg-white'>
            <Image
              src={'https://picsum.photos/200'}
              layout='fixed'
              width={50}
              height={50}
              alt='logo-company'
            />
            <div className='ml-4 w-full '>
              <h4 className='!mb-0  text-xl'>{application.post.title}</h4>
              <p className='!mt-1 !mb-0'>{application.post.company?.name}</p>
              <div className='flex items-center my-2'>
                <CalendarIcon className='w-5 h-5 mr-2' />
                <p className='!mb-0'>
                  Submitted on {dayjs(application.createAt).format('MMMM DD YYYY, HH:mm')}
                </p>
              </div>
              <div className='flex items-center my-2'>
                <EyeIcon className='w-5 h-5 mr-2' />
                <p className='!mb-0'>
                  Application status is last updated by recruiter{' '}
                  {dayjs(application.updatedAt).fromNow()}
                </p>
              </div>
              <span className='bg-slate-600 px-3 py-1 text-center inline-block rounded-3xl text-white'>
                {ApplicationStatusMap.get(application.status)?.text}
              </span>
            </div>
          </div>
          <Divider />
          <JobDetails jobPost={application.post} />
        </Col>
        <Col span={8}>
          <div
            className='p-4 rounded bg-white'
            style={{
              border: '1px solid rgb(198, 198, 198)',
            }}
          >
            <h3>Resume</h3>
            <Link href={application.resume.url}>
              <a target={'_blank'}>
                <div className='flex items-center mt-4 gap-1'>
                  <ExternalLinkIcon className='w-5 h-5' />
                  <span
                    className='inline-block'
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {application.resume.fileName}
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div
            className='p-4 rounded bg-white mt-4'
            style={{
              border: '1px solid rgb(198, 198, 198)',
            }}
          >
            <h3>Cover letter</h3>
            <div className='flex items-center mt-4 gap-1'>
              {application.coverLetter ?? 'You did not submit a cover letter.'}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;
  try {
    const data = await applicationApi.getApplicationDetail(id);
    return {
      props: {
        application: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
export default ApplicationDetail;
