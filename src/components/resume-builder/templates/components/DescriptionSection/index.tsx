import MarkdownIt from 'markdown-it';
import styled from 'styled-components';

const MarkdownHolder = styled.div`
  font-size: 13px;
  line-height: 1.2rem;
  color: ${(props: any) => props.theme.text};

  ul {
    margin: 0;
    list-style-position: inside;
    list-style-type: circle;
    padding-left: 0;
  }
  li {
    margin-bottom: 2px;
  }
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

const DescriptionSection = ({ description }: any) => {
  return <MarkdownHolder dangerouslySetInnerHTML={{ __html: mdParser.render(description) }} />;
};

export default DescriptionSection;
