import { Timeline } from 'antd';
import MarkdownIt from 'markdown-it';
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

const CompanyName = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

const CompanyRole = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: inherit;
`;

const ItalicText = styled.div`
  font-style: italic;
  font-size: 0.6rem;
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

const Company = ({ company }: any) => (
  <>
    <div className='flex items-end justify-between' style={{ lineHeight: 'initial' }}>
      <a href={company.website} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <CompanyName>{company.name}</CompanyName>
      </a>
      <ItalicText>
        {company.startDate} - {company.endDate}
      </ItalicText>
    </div>
    <div className='flex items-end justify-between'>
      <CompanyRole>{company.position}</CompanyRole>
      <ItalicText>{company.years}</ItalicText>
    </div>
  </>
);

const ExperienceSection = ({ companies, styles }: any) => {
  return (
    <FlexTimeline style={styles}>
      {companies.map((company: any, index: number) => (
        <TimelineItem key={`${company.name}-${index}`}>
          <Company company={company} />
          <div dangerouslySetInnerHTML={{ __html: mdParser.render(company.summary ?? '') }} />
        </TimelineItem>
      ))}
    </FlexTimeline>
  );
};

export default ExperienceSection;
