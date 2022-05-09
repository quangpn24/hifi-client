import { Timeline } from 'antd';
import MarkdownIt from 'markdown-it';
import { Education } from 'redux/reducers/educationReducer';
import styled from 'styled-components';

const FlexTimeline = styled(Timeline)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: 100%;
  color: ${(props: any) => props.theme.fontColor};
  margin-top: 4px;

  ul {
    padding-left: 16px;
    margin-bottom: 0;
    font-size: 0.8rem;
  }
`;

const TimelineItem = styled(FlexTimeline.Item)`
  padding-bottom: 0;
  flex-grow: 1;
  padding-bottom: 12px;

  :last-child {
    flex-grow: 0;
    padding-bottom: 0;
  }
`;

const TitleText = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const BoldText = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: inherit;
`;

const ItalicText = styled.div`
  font-style: italic;
  font-size: 0.6rem;
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

const EducationItem = ({ edu }: { edu: Education }) => (
  <>
    <div className='flex items-end justify-between' style={{ lineHeight: 'initial' }}>
      <a href={edu.website} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <TitleText>{edu.institution}</TitleText>
      </a>
      <ItalicText>
        {edu.startDate} - {edu.endDate}
      </ItalicText>
    </div>
    <div className='flex items-end justify-between'>
      <BoldText>{edu.area}</BoldText>
      <ItalicText>{edu.type}</ItalicText>
      <ItalicText>{edu.score}</ItalicText>
    </div>
  </>
);

const EducationSection = ({ education, styles }: any) => {
  return (
    <FlexTimeline style={styles}>
      {education.map((edu: Education, index: number) => (
        <TimelineItem key={`${edu.institution}-${index}`}>
          <EducationItem edu={edu} />
          <div dangerouslySetInnerHTML={{ __html: mdParser.render(edu.description ?? '') }} />
        </TimelineItem>
      ))}
    </FlexTimeline>
  );
};

export default EducationSection;
