import MarkdownIt from 'markdown-it';
import styled from 'styled-components';
import { FlexTimeline, ItalicText, NormalText, TimelineItem, TitleText } from 'styles/styles';

const CompanyRole = styled.div`
  font-weight: 500;
  font-size: 0.8rem;
  line-height: inherit;
  color: ${(props: any) => props.theme.text};
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

const Company = ({ company }: any) => (
  <>
    <div className='flex items-end justify-between' style={{ lineHeight: 'initial' }}>
      <a href={company.website} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
        <TitleText>{company.name}</TitleText>
      </a>
      <ItalicText>{company.location}</ItalicText>
    </div>
    <div className='flex items-end justify-between'>
      <CompanyRole>{company.position}</CompanyRole>
      <ItalicText>
        {company.startDate} - {company.endDate}
      </ItalicText>
    </div>
  </>
);

const ExperienceSection = ({ companies, styles }: any) => {
  return (
    <FlexTimeline style={styles}>
      {companies?.map((company: any, index: number) => (
        <TimelineItem key={`${company.name}-${index}`}>
          <Company company={company} />
          <NormalText
            dangerouslySetInnerHTML={{ __html: mdParser.render(company.summary ?? '') }}
          />
        </TimelineItem>
      ))}
    </FlexTimeline>
  );
};

export default ExperienceSection;
