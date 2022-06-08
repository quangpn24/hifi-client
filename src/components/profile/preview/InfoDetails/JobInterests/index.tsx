import { Divider } from 'antd';
import jobInterestedApi from 'api/jobInterestApi';
import React, { useEffect, useState } from 'react';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import FieldsOfInterest from './FieldsOfInterest';
import InterestSection from './InterestSection';

const JobInterests = () => {
  const [jobInterest, setJobInterest] = useState<Partial<JobInterest>>();

  useEffect(() => {
    let isMounted = true;
    jobInterestedApi
      .getJobInterest()
      .then((data) => {
        if (isMounted) {
          setJobInterest(data);
        }
      })
      .catch((err) => {
        console.log('getJobInterest Error: ', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <HrefContainer id='interests'>
      <Header text={'Job interests & preferences'} />
      <Divider className='!my-2' />
      {/* <p className='my-4'>{content}</p> */}
      <div className='mt-4 gap-y-4'>
        {jobInterest?.fields && <FieldsOfInterest fields={jobInterest.fields} />}
        {jobInterest && (jobInterest.typesOfOpportunity?.length ?? 0) > 0 ? (
          <>
            <div className='h-4' />
            <InterestSection
              label='Type of Opportunity'
              type='list'
              data={jobInterest?.typesOfOpportunity?.map((t) => ({ id: t, text: t })) || []}
            />
          </>
        ) : null}
        {jobInterest?.currencyCode && jobInterest?.salaryExpectation && (
          <>
            <div className='h-4' />
            <InterestSection
              label='Salary Expectation'
              type='text'
              data={`${jobInterest?.currencyCode} ${jobInterest?.salaryExpectation}`}
            />
          </>
        )}
        {jobInterest?.workLocation && (
          <>
            <div className='h-4' />
            <InterestSection
              label='Work Location Preference'
              type='text'
              data={jobInterest?.workLocation}
            />
          </>
        )}
        <div className='h-4' />
        <InterestSection
          label='Willing to Work Remotely'
          type='text'
          data={jobInterest?.willingToWorkRemotely ? 'Yes' : 'No'}
        />
      </div>
    </HrefContainer>
  );
};

export default JobInterests;
