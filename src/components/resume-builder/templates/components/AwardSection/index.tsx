import MarkdownIt from 'markdown-it';
import { Award } from 'redux/reducers/awardReducer';
import styled from 'styled-components';
import { TitleText } from 'styles/styles';
import { colorHelper } from 'utils';

const DateText = styled.div`
  font-size: 0.6rem;
  font-weight: 700;
  color: ${(props: any) => colorHelper.converHexToRGB(props.theme.text, '0.5')};
`;

const DescriptionText = styled.div`
  font-style: italic;
  font-size: 0.8rem;
  color: ${(props: any) => colorHelper.converHexToRGB(props.theme.text, '0.9')};
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

const AwardItem = ({ award }: { award: Award }) => (
  <div>
    <DateText>{award.date}</DateText>
    <a href={award.link} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
      <TitleText style={{ fontWeight: '500' }}>
        {award.title} | {award.awarder}
      </TitleText>
    </a>
    <DescriptionText
      className='text-sm leading-4 mt-2 italic'
      dangerouslySetInnerHTML={{ __html: mdParser.render(award.summary ?? '') }}
    />
  </div>
);

const AwardSection = ({ awards }: any) => (
  <div>
    {awards.map((award: Award, index: number) => (
      <AwardItem award={award} key={`${award.title}-${index}`} />
    ))}
  </div>
);

export default AwardSection;
