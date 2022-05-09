import AppIcon from 'components/commons/AppIcon';
import { IntroState } from 'redux/reducers/introReducer';
import styled from 'styled-components';

const Role = styled.h3`
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 0;
  font-weight: 600;
  line-height: 16px;
`;

const ContacInfo = styled.div`
  font-size: 13px;
  line-height: inherit;
`;

const Contact = ({ icon, value, link }: any) => (
  <div className='flex items-center gap-2'>
    {icon}
    {link ? (
      <a href={link} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <ContacInfo>{value}</ContacInfo>
      </a>
    ) : (
      <ContacInfo>{value}</ContacInfo>
    )}
  </div>
);

interface IProps {
  intro: IntroState;
}

const IntroSection = ({ intro }: IProps) => {
  return (
    <div className='flex-col '>
      <Role>{intro.title}</Role>
      <div className='m-3' />
      <Contact icon={<AppIcon icon='Hi/HiPhone' size='16' />} value={intro.phone} />
      <Contact
        icon={<AppIcon icon='Hi/HiMail' size='18' />}
        value={intro.email}
        link={`mailto:${intro.email}`}
      />
      <Contact icon={<AppIcon icon='Hi/HiLocationMarker' size='18' />} value={intro.address} />
    </div>
  );
};

export default IntroSection;
