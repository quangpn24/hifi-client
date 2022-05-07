import { useAppSelector } from 'redux/hooks';
import {
  selectActivity,
  selectEducation,
  selectIntro,
  selectLabel,
  selectSocial,
  selectWork,
} from 'redux/selectors';
import style from './index.module.less';
import styled from 'styled-components';
import Intro from '../../components/Intro';

const GridContainer = styled.div`
  margin: auto;
  display: grid;
  padding: 40px 25px;
  grid-template-columns: 68% 10px 1fr;
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Divider = styled.div`
  height: 100%;
  width: 2px;
  background-color: #007bff;
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:first-child {
    padding-right: 10px;
  }
`;

const EmployeName = styled.div`
  margin: 0;
  color: ${(props) => props.theme.primaryColor};
  font-size: 1.5rem;
`;

const DefaultLayout = () => {
  const intro = useAppSelector(selectIntro);
  const social = useAppSelector(selectSocial);
  const education = useAppSelector(selectEducation);
  const activity = useAppSelector(selectActivity);
  const work = useAppSelector(selectWork);
  const label = useAppSelector(selectLabel);

  return (
    <GridContainer>
      <GridColumn>
        <EmployeName>{intro.name}</EmployeName>
        <Intro intro={intro} />
      </GridColumn>
      <Divider />
      <GridColumn></GridColumn>
    </GridContainer>
  );
};

export default DefaultLayout;
