import React from 'react';
import InfoDetails from '../InfoDetails';
import PersonalInfo from '../PersonalInfo';

type Props = {};

const MainProfile = (props: Props) => {
  return (
    <div>
      <PersonalInfo />
      <InfoDetails />
    </div>
  );
};

export default MainProfile;
