import MarkdownIt from 'markdown-it';
import { Education } from 'redux/reducers/educationReducer';
import styled from 'styled-components';
import { FlexTimeline, ItalicText, TimelineItem, TitleText } from 'styles/styles';
import { colorHelper } from 'utils';

const BoldText = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: inherit;
  color: ${(props: any) => colorHelper.converHexToRGB(props.theme.text, '0.9')};
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
