import AppIcon from 'components/commons/AppIcon';
import { SocialState } from 'redux/reducers/socialReducer';
import styled from 'styled-components';
import { stringHelper } from 'utils';

const SocialDiv = styled.div`
  padding: 8px;
  color: ${(props) => props.theme.fontColor};
  border-top: 1px solid ${(props) => props.theme.primaryColor};
  border-bottom: 1px solid ${(props) => props.theme.primaryColor};
  margin: 10px 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.7rem;

  a,
  svg {
    color: ${(props) => props.theme.primaryColor};
  }
`;

const SocialSection = ({ socials }: { socials: SocialState }) => {
  if (!socials) return <></>;
  return (
    <SocialDiv>
      {socials
        .filter((social: any) => social.url)
        .map((social) => {
          const icon = `Si/Si${stringHelper.capitalizeFirstLetter(social.network)}`;
          return (
            <a href={social.url} key={social.url} target='_blank' rel='noreferrer'>
              <AppIcon icon={icon} size='16' />
            </a>
          );
        })}
    </SocialDiv>
  );
};

export default SocialSection;
