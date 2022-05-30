import { EditOutlined } from '@ant-design/icons';
import { Button, Divider, FormInstance, message, Modal } from 'antd';
import awardApi from 'api/awardApi';
import { useProfileOverviewContext } from 'context/ProfileContext';
import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import Utils from 'utils';
import ActionSuggestion from '../ActionSuggestion';
import Header from '../Header';
import HrefContainer from '../HrefContainer';
import SegmentItem from '../SegmentItem';
type Props = {};

const AwardsSection: React.FC<Props> = () => {
  const [awards, setAwards] = useState<Award[]>([]);
  useEffect(() => {
    let isMounted = true;

    awardApi
      .getAwards()
      .then((data) => {
        isMounted && setAwards(data);
      })
      //TODO: error
      .catch((err) => console.log('getAwards Error: ', err));
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <HrefContainer id='awards'>
      <Header text={'Awards'} />
      <Divider className='!my-2' />
      <div className='mt-4 p-1'>
        {awards &&
          awards.length > 0 &&
          awards?.map((aw, index) => (
            <SegmentItem
              key={aw._id}
              title={aw.title}
              subtitle={aw.achievement}
              descrition={aw.notes}
              timeline={aw.year.toString()}
              last={index === awards.length - 1}
            />
          ))}
      </div>
    </HrefContainer>
  );
};

export default AwardsSection;
