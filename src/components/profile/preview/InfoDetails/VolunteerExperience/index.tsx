import { Divider } from 'antd';
import volunteeringApi from 'api/volunteeringApi';
import { useEffect, useState } from 'react';
import dateTimeHelper from 'utils/dateTimeHelper';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SegmentItem from '../SegmentItem';
type Props = {};

const VolunteerExperience = (props: Props) => {
  const [volunteerings, setVolunteerings] = useState<Volunteering[]>([]);
  useEffect(() => {
    let isMounted = true;
    volunteeringApi
      .getVolunteerings()
      .then((data) => {
        isMounted && setVolunteerings(data);
      })
      .catch((err) => console.log(err));

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <HrefContainer id='volunteerings'>
        <Header text={'Organizational & Volunteering Experiences'} />
        <Divider className='!my-2' />
        {/* <p className='my-4'>{content}</p> */}
        <div className='mt-4 p-1'>
          {volunteerings.length > 0 &&
            volunteerings.map((vol, index) => (
              <SegmentItem
                key={vol._id}
                title={vol.activityName}
                subtitle={vol.role}
                timeline={dateTimeHelper.showTimeline(vol.startDate, vol.endDate)}
                descrition={vol.notes}
                last={index === volunteerings.length - 1}
              />
            ))}
        </div>
      </HrefContainer>
    </>
  );
};

export default VolunteerExperience;
