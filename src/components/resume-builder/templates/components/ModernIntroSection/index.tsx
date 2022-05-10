import AppIcon from 'components/commons/AppIcon';
import { IntroState } from 'redux/reducers/introReducer';
import { SocialState } from 'redux/reducers/socialReducer';
import styled from 'styled-components';
import { EmployerName, Role } from 'styles/styles';
import { stringHelper } from 'utils';
import AvatarImage from '../AvatarImage';
import { Contact } from '../IntroSection';

const IntroContainer = styled.div`
  margin: auto;
  padding: 25px 20px 5px;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.7rem;
  margin-top: 12px;
  gap: 8px;

  a,
  svg {
    color: ${(props) => props.theme.primary};
  }
`;

interface IProps {
  intro: IntroState;
  socials: SocialState;
}

const ModernIntroSection = ({ intro, socials }: IProps) => {
  return (
    <IntroContainer>
      <div className='flex gap-4'>
        <AvatarImage url={intro.image} size={120} />
        <div>
          <EmployerName>{intro.name}</EmployerName>
          <Role>{intro.title}</Role>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <Contact icon={<AppIcon icon='Hi/HiPhone' size='16' />} value={intro.phone} />
        <Contact
          icon={<AppIcon icon='Hi/HiMail' size='18' />}
          value={intro.email}
          link={`mailto:${intro.email}`}
        />
        <Contact icon={<AppIcon icon='Hi/HiLocationMarker' size='18' />} value={intro.address} />
        <SocialContainer>
          {socials
            .filter((social: any) => social.url)
            .map((social) => {
              const icon = `Si/Si${stringHelper.capitalizeFirstLetter(social.network)}`;
              return (
                <a href={social.url} key={social.url} target='_blank' rel='noreferrer'>
                  <AppIcon icon={icon} size='17' />
                </a>
              );
            })}
        </SocialContainer>
      </div>
    </IntroContainer>
  );
};

export default ModernIntroSection;
