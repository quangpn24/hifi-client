import { useAppSelector } from 'redux/hooks';
import {
  selectAward,
  selectEducation,
  selectIntro,
  selectLabel,
  selectSocial,
  selectWork,
} from 'redux/selectors';
import styled from 'styled-components';
import AvatarImage from '../../components/AvatarImage';
import AwardSection from '../../components/AwardSection';
import DescriptionSection from '../../components/DescriptionSection';
import EducationSection from '../../components/EducationSection';
import ExperienceSection from '../../components/ExperienceSection';
import IntroSection from '../../components/IntroSection';
import LabelSection from '../../components/LabelSection';
import SocialSection from '../../components/SocialSection';

const GridContainer = styled.div`
  margin: auto;
  display: grid;
  padding: 25px 20px;
  grid-template-columns: 65% 20px 1fr;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    padding-right: 10px;
  }
`;

const DefaultLayout = () => {
  const intro = useAppSelector(selectIntro);
  const social = useAppSelector(selectSocial);
  const education = useAppSelector(selectEducation);
  const work = useAppSelector(selectWork);
  const label = useAppSelector(selectLabel);
  const award = useAppSelector(selectAward);
  return (
    <GridContainer>
      <GridColumn>
        <IntroSection intro={intro} />
        <SocialSection socials={social} />
        <LabelSection title={label.experience} />
        <ExperienceSection companies={work} />
        <LabelSection title={label.education} />
        <EducationSection education={education} />
      </GridColumn>
      <div></div>
      <GridColumn>
        <AvatarImage url={intro.image} size={140} />
        <LabelSection title={label.summary} />
        <DescriptionSection description={intro.summary} />
        <LabelSection title={label.skill} />
        <DescriptionSection description={intro.skills} />
        <LabelSection title={label.activity} />
        <DescriptionSection description={intro.activities} />
        <LabelSection title={label.award} />
        <AwardSection awards={award} />
      </GridColumn>
    </GridContainer>
  );
};

export default DefaultLayout;
