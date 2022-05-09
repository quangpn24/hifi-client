import MarkdownIt from 'markdown-it';
import { Award } from 'redux/reducers/awardReducer';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const AwardItem = ({ award }: { award: Award }) => (
  <div>
    <div className='text-xs	font-bold text-[#939393]'>{award.date}</div>
    <a href={award.link} target='_blank' rel='noreferrer' style={{ color: 'inherit' }}>
      <div className='text-base mt-1 font-semibold leading-4'>{`${award.title} | ${award.awarder}`}</div>
    </a>
    <div
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
