import AppIcon from 'components/commons/AppIcon';
import { IntroState } from 'redux/reducers/introReducer';
import styled from 'styled-components';
import { colorHelper } from 'utils';

const Role = styled.h3`
  color: ${(props) => props.theme.text};
  margin-bottom: 0;
  font-weight: 600;
  line-height: 16px;
`;

const ContacInfo = styled.div`
  font-size: 13.4px;
  font-weight: 500;
  line-height: inherit;
  color: ${(props) => colorHelper.converHexToRGB(props.theme.text, '0.8')};
`;

const EmployerName = styled.div`
  margin: 0;
  color: ${(props) => props.theme.primary};
  font-size: 1.8rem;
  font-weight: 700;
`;

const Icon = styled.div`
  color: ${(props) => colorHelper.converHexToRGB(props.theme.text, '0.9')};
`;

const Contact = ({ icon, value, link }: any) => (
  <div className='flex items-center gap-2'>
    <Icon>{icon}</Icon>
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
      <EmployerName>{intro.name}</EmployerName>
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
