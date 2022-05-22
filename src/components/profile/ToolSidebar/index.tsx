import { EyeIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { Progress } from 'antd';
import jobInterestedApi from 'api/jobInterestApi';
import { JOBSEEKER_STATUS } from 'constant';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import InstructionItem from '../InstructionItem';
import QuickActionItem from '../QuickActionItem';
import styles from '../styles.module.css';
import UpdateStatusModal from './UpdateStatusModal';
type Props = {};

const ToolSidebar = (props: Props) => {
  const user = useAppSelector(selectUser);
  const [visible, setVisible] = React.useState(false);
  const [jobInterest, setJobInterest] = React.useState<JobInterest>();

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
          <QuickActionItem icon={<EyeIcon className='w-8 h-8' />} text={'Preview profile'} />
        </div>
        <div className=' mt-4 p-3.5 flex flex-col bg-white shadow-lg rounded-md'>
          <p>
            Profile completion: <span className='font-bold'>30%</span>
          </p>
          <Progress percent={30} strokeColor='#514CDD' />

          <div>
            <InstructionItem text='Basic Information' onClick={() => {}} />
            <InstructionItem text='Resume' onClick={() => {}} />
            <InstructionItem text='Work Experience' onClick={() => {}} />
            <InstructionItem text='Education' onClick={() => {}} />
            <InstructionItem text='Skills' onClick={() => {}} />
            <InstructionItem text='Job interested & Preferences' onClick={() => {}} />
            <InstructionItem text='Portfolios, Attachment & Social Media' onClick={() => {}} />
            <InstructionItem text='Awards' onClick={() => {}} />
            <InstructionItem text='Organizational & Volunteering Experiences' onClick={() => {}} />
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
