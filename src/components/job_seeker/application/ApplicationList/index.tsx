import { Space, Spin } from 'antd';
import applicationApi from 'api/applicationApi';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ApplicationItem from '../ApplicationItem';

type Props = {};

const ApplicationList = (props: Props) => {
  const [applications, setApplications] = React.useState<Application[]>([]);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { status } = router.query;
  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    applicationApi
      .getApplications({ status: status === 'ALL' ? undefined : (status as string) })
      .then((data) => {
        isMounted && setApplications(data);
      })
      .catch((error) => {
        console.log('getApplications error: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [status]);

  return (
    <div className='w-full ml-12'>
      <h3 className='text-base font-bold'>{applications.length} Applications</h3>
      <Space direction='vertical' size={10} className='w-full max-h- overflow-auto'>
        {loading ? (
          <div className='flex justify-center items-center w-full h-full'>
            <Spin size='large' />
          </div>
        ) : (
          applications.map((a) => <ApplicationItem key={a.id} data={a} />)
        )}
      </Space>
    </div>
  );
};

export default ApplicationList;
