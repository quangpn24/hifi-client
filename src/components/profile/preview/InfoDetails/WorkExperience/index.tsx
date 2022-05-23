import { Divider } from 'antd';
import workExperienceApi from 'api/workExperienceApi';
import React, { useEffect, useState } from 'react';
import Utils from 'utils';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SegmentItem from '../SegmentItem';

type Props = {};
const WorkExperience = (props: Props) => {
  const [exps, setExps] = useState<WorkExperience[]>([]);

  useEffect(() => {
    let isMounted = true;

    workExperienceApi
      .getWorkExperiences()
      .then((data) => {
        isMounted && setExps(data);
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <HrefContainer id='experience'>
        <Header text={'Work experience'.toUpperCase()} />
        <Divider className='!my-2' />
        <div className='mt-4 p-1'>
          {exps.length !== 0 &&
            exps.map((exp, index) => (
              <SegmentItem
                key={exp._id}
                title={exp.jobTitle}
                subtitle={exp.company}
                timeline={Utils.showTimeline(exp.startDate, exp.endDate)}
                descrition={exp.notes}
                last={index === exps.length - 1}
              />
            ))}
        </div>
      </HrefContainer>
    </>
  );
};

export default WorkExperience;
