import AppIcon from 'components/commons/AppIcon';
import { IntroState } from 'redux/reducers/introReducer';
import styled from 'styled-components';
import { EmployerName, Role } from 'styles/styles';
import colorHelper from 'utils/colorHelper';

const ContacInfo = styled.div`
  font-size: 13.4px;
  font-weight: 500;
  line-height: inherit;
  color: ${(props) => colorHelper.converHexToRGB(props.theme.text, '0.8')};
`;

const Icon = styled.div`
  color: ${(props) => colorHelper.converHexToRGB(props.theme.text, '0.9')};
`;

export const Contact = ({ icon, value, link }: any) => (
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
    <div className='flex-col'>
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
