import React from 'react';
import styled from 'styled-components';
import AppIcon from 'components/commons/AppIcon';
import { IntroState } from 'redux/reducers/introReducer';

const Role = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 0;
  font-weight: 600;
`;

const Contact = ({ icon, value }: any) => (
  <div className='flex items-center gap-2'>
    {icon}
    <p className='m-0'>{value}</p>
  </div>
);

interface IProps {
  intro: IntroState;
}
const Intro = ({ intro }: IProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexDirection: 'column' }}>
        <Role>{intro.title}</Role>
      </div>

      <div style={{ flexDirection: 'column' }}>
        <Contact icon={<AppIcon icon='Hi/HiPhone' size='18' />} value={intro.phone} />
        <Contact icon={<AppIcon icon='Hi/HiMail' size='18' />} value={intro.email} />
        <Contact icon={<AppIcon icon='Hi/HiLocationMarker' size='18' />} value={intro.address} />
      </div>
    </div>
  );
};

export default Intro;
