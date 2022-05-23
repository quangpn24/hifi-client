import { EyeIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { Progress, Spin } from 'antd';
import jobInterestedApi from 'api/jobInterestApi';
import { JOBSEEKER_STATUS } from 'constant';
import { useProfileOverviewContext } from 'context/ProfileContext';
import dayjs from 'dayjs';
import Link from 'next/link';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import InstructionItem from '../InstructionItem';
import QuickActionItem from '../QuickActionItem';
import styles from '../styles.module.css';
import UpdateStatusModal from './UpdateStatusModal';
type Props = {};
type OptionsFlags = {
  [Property in keyof ProfileOverviewType]: boolean;
};
const ToolSidebar = (props: Props) => {
  const { loading, profileOverview } = useProfileOverviewContext() as ProfileOverviewContextType;
  const user = useAppSelector(selectUser);
  const [visible, setVisible] = React.useState(false);
  const [jobInterest, setJobInterest] = React.useState<JobInterest>();
  console.log('profileOverview', profileOverview);
  const keys = Object.keys(profileOverview) as Array<keyof typeof profileOverview>;
  console.log('keys', keys);
  const completedRate = parseFloat(
    ((1.0 * keys.filter((key) => profileOverview[key] === true).length) / keys.length).toFixed(2)
  );
  console.log('completedRate', completedRate);
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
    <>
      <div>
        <h3 className='text-xl text-gray-600 tracking-wide'>Job Status</h3>
        <div className={styles.status} onClick={() => setVisible(true)}>
          <p className='!mb-0 text-primary-color'>
            {user?.candidateStatus
              ? `${JOBSEEKER_STATUS.get(user.candidateStatus)?.status}${
                  dayjs(jobInterest?.preferredStartDate).isSame(new Date(), 'day')
                    ? ' (Immediately)'
                    : ''
                }`
              : 'Select Status'}
          </p>
          <ChevronRightIcon className='text-primary-color h-8 w-8' />
        </div>
        <h3 className='text-xl mt-4 text-gray-600 tracking-wide'>Quick Actions</h3>
        <div>
          <QuickActionItem
            icon={<EyeIcon className='w-8 h-8' />}
            text={'Preview profile'}
            onClick={() => {
              Router.push('/profile/preview');
            }}
          />
        </div>
        <div className=' mt-4 p-3.5 flex flex-col bg-white shadow-lg rounded-md'>
          <p className='!mb-0'>
            Profile completion:{' '}
            <span className='font-bold'>{(completedRate * 100).toFixed(0)}%</span>
          </p>
          <Progress
            percent={completedRate * 100}
            strokeColor={{
              '0%': '#9f9cef',
              '100%': '#514CDD',
            }}
            showInfo={false}
          />

          <div>
            {loading ? (
              <div className='flex items-center justify-center mt-4'>
                <Spin />
              </div>
            ) : (
              <>
                {!profileOverview.basicInfo && (
                  <InstructionItem href='#basic-info' text='Basic Information' onClick={() => {}} />
                )}
                {!profileOverview.about && (
                  <InstructionItem href='#about-me' text='About me' onClick={() => {}} />
                )}
                {!profileOverview.awards && (
                  <InstructionItem href='#awards' text='Awards' onClick={() => {}} />
                )}
                {!profileOverview.resume && (
                  <InstructionItem href='#resume' text='Resume' onClick={() => {}} />
                )}
                {!profileOverview.experience && (
                  <InstructionItem href='#experience' text='Work Experience' onClick={() => {}} />
                )}
                {!profileOverview.education && (
                  <InstructionItem href='#education' text='Education' onClick={() => {}} />
                )}
                {!profileOverview.skills && (
                  <InstructionItem href='#skills' text='Skills' onClick={() => {}} />
                )}
                {!profileOverview.interests && (
                  <InstructionItem
                    href='#interests'
                    text='Job interested & Preferences'
                    onClick={() => {}}
                  />
                )}
                {!profileOverview.volunteerings && (
                  <InstructionItem
                    href='#volunteerings'
                    text='Organizational & Volunteering Experiences'
                    onClick={() => {}}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <UpdateStatusModal
        visible={visible}
        onCancel={() => setVisible(false)}
        preferredStartDate={jobInterest?.preferredStartDate}
      />
    </>
  );
};

export default ToolSidebar;
