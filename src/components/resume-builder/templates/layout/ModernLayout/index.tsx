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
import {
  AwardSection,
  DescriptionSection,
  EducationSection,
  ExperienceSection,
  LabelSection,
  ModernIntroSection,
} from '../../components';

const GridContainer = styled.div`
  margin: auto;
  display: grid;
  padding: 0px 20px 25px;
  grid-template-columns: 1fr 20px 65%;
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
    <div>
      <ModernIntroSection intro={intro} socials={social} />
      <GridContainer>
        <GridColumn>
          <LabelSection title={label.summary} />
          <DescriptionSection description={intro.summary} />
          <LabelSection title={label.skill} />
          <DescriptionSection description={intro.skills} />
          <LabelSection title={label.activity} />
          <DescriptionSection description={intro.activities} />
          <LabelSection title={label.award} />
          <AwardSection awards={award} />
        </GridColumn>
        <div></div>
        <GridColumn>
          <LabelSection title={label.experience} />
          <ExperienceSection companies={work} />
          <LabelSection title={label.education} />
          <EducationSection education={education} />
        </GridColumn>
      </GridContainer>
    </div>
  );
};

export default DefaultLayout;
