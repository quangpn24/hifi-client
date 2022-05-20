import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, FormInstance, message, Modal, Tabs } from 'antd';
import jobInterestedApi from 'api/jobInterestApi';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';
import FieldsOfInterest from './FieldsOfInterest';
import InterestSection from './InterestSection';
import JobInterestsForm from './JobInterestForm';
import PreferenceForm from './PreferenceForm';
const { TabPane } = Tabs;

type TabType = 'JOB INTERESTS' | 'PREFERENCES';
const JobInterests = () => {
  const [visible, setVisible] = useState(false);
  const [jobInterest, setJobInterest] = useState<Partial<JobInterest>>();
  const [tab, setTab] = useState<TabType>('JOB INTERESTS');
  const [loading, setLoading] = useState(false);
  const fieldsFormRef = useRef<FormInstance<any> | null>(null);
  const preferenceFormRef = useRef<FormInstance<any> | null>(null);
  const [formSubmitState, setFormSubmitState] = useState({
    fieldsForm: false,
    preferenceForm: false,
  });

  useEffect(() => {
    jobInterestedApi
      .getJobInterest()
      .then((data) => {
        setJobInterest(data);
      })
      .catch((err) => {
        console.log('getJobInterest: ', err);
      });
  }, []);

  useEffect(() => {
    if (formSubmitState.fieldsForm && formSubmitState.preferenceForm && jobInterest) {
      setLoading(true);
      jobInterestedApi
        .updateJobInterest(jobInterest)
        .then((updated) => {
          setJobInterest(updated);
          fieldsFormRef.current?.resetFields();
          preferenceFormRef.current?.resetFields();
          message.success('Update successfully');
          setVisible(false);
        })
        .catch((err: any) => {
          message.error(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
      setFormSubmitState({
        fieldsForm: false,
        preferenceForm: false,
      });
    }
  }, [formSubmitState]);

  const handleOk = () => {
    fieldsFormRef.current?.submit();
    preferenceFormRef.current?.submit();
  };
  const handleCancel = () => {
    setVisible(false);
    fieldsFormRef.current?.resetFields();
  };

  const handleFieldsFormSubmit = async (value: any) => {
    setJobInterest((prev) => ({ ...prev, fields: [...value.fields] }));
    setFormSubmitState((prev) => ({ ...prev, fieldsForm: true }));
  };
  const handleReferenceFormSubmit = async (value: any) => {
    setJobInterest((prev) =>
      prev ? { ...prev, preference: { ...value } } : { preference: { ...value } }
    );
    setFormSubmitState((prev) => ({ ...prev, preferenceForm: true }));
  };

  return (
    <>
      <div className='mb-8'>
        <Header
          text={'Job intesrests & preferences'}
          action={
            <Button icon={<EditOutlined />} type='text' onClick={() => setVisible(true)}>
              Edit
            </Button>
          }
        />
        <Divider className='!my-2' />
        {/* <p className='my-4'>{content}</p> */}
        <div className='mt-4 gap-y-4'>
          {jobInterest?.fields && <FieldsOfInterest fields={jobInterest.fields} />}
          {jobInterest && (jobInterest?.preference?.typesOfOpportunity?.length ?? 0) > 0 ? (
            <>
              <div className='h-4' />
              <InterestSection
                label='Type of Opportunity'
                type='list'
                data={
                  jobInterest?.preference?.typesOfOpportunity.map((t) => ({ id: t, text: t })) || []
                }
              />
            </>
          ) : null}
          {jobInterest?.preference?.currencyCode && jobInterest?.preference.salaryExpectation && (
            <>
              <div className='h-4' />
              <InterestSection
                label='Salary Expectation'
                type='text'
                data={`${jobInterest?.preference.currencyCode} ${jobInterest?.preference.salaryExpectation}`}
              />
            </>
          )}
          {jobInterest?.preference?.workLocation && (
            <>
              <div className='h-4' />
              <InterestSection
                label='Work Location Preference'
                type='text'
                data={jobInterest?.preference?.workLocation}
              />
            </>
          )}
          <div className='h-4' />
          <InterestSection
            label='Willing to Work Remotely'
            type='text'
            data={jobInterest?.preference?.willingToWorkRemotely ? 'Yes' : 'No'}
          />
        </div>
      </div>
      <Modal
        title='ADD WORK EXPERIENCE'
        visible={visible}
        okText='SAVE'
        onOk={handleOk}
        onCancel={handleCancel}
        confirmLoading={loading}
      >
        <p>
          Adding your job interests and preferences helps us in recommending suitable jobs for you.
        </p>
        <Tabs
          defaultActiveKey={tab}
          onChange={(active) => {
            setTab(active as TabType);
          }}
        >
          <TabPane tab={'JOB INTERESTS'} key='JOB INTERESTS'>
            <JobInterestsForm
              onSubmit={handleFieldsFormSubmit}
              fields={jobInterest?.fields}
              ref={fieldsFormRef}
            />
          </TabPane>
          <TabPane tab='PREFERENCES' key='PREFERENCES'>
            <PreferenceForm
              ref={preferenceFormRef}
              data={jobInterest?.preference}
              onSubmit={handleReferenceFormSubmit}
            />
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default JobInterests;
