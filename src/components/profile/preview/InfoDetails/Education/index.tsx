import { Divider } from 'antd';
import educationApi from 'api/educationApi';
import { useEffect, useState } from 'react';
import dateTimeHelper from 'utils/dateTimeHelper';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SegmentItem from '../SegmentItem';
const Education = () => {
  const [educations, setEducations] = useState<Education[]>([]);
  useEffect(() => {
    let isMounted = true;

    educationApi
      .getEducations()
      .then((data) => {
        isMounted && setEducations(data);
      })
      //TODO: toast error
      .catch((err) => console.log('get educationApi Error: ', err));

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <>
      <HrefContainer id='education'>
        <Header text={'Education'} />
        <Divider className='!my-2' />
        {/* <p className='my-4'>{content}</p> */}
        <div className='mt-4 p-1'>
          {educations.map((e, index) => (
            <SegmentItem
              key={e._id}
              title={e.school}
              subtitle={e.fieldStudy}
              timeline={dateTimeHelper.showTimeline(e.startDate, e.endDate)}
              descrition={e.notes}
              last={index === educations.length - 1}
            />
          ))}
        </div>
      </HrefContainer>
    </>
  );
};

export default Education;
