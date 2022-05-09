import MarkdownIt from 'markdown-it';
import styled from 'styled-components';

const RoundedImage = styled.img`
  border-radius: 50%;
  height: 60px;
  width: 60px;
  float: left;
  shape-outside: circle();
  margin-right: 20px;
  margin-bottom: 5px;
  border: 0.5px solid ${(props) => props.theme.fontColor};
`;

const MarkdownHolder = styled.div`
  ul {
    margin: 0;
    padding-left: 1rem;
  }
  li {
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

const mdParser = new MarkdownIt(/* Markdown-it options */);

const DescriptionSection = ({ description, photo }: any) => {
  const image = photo && <RoundedImage src={photo} />;

  return (
    <>
      {image}
      <MarkdownHolder dangerouslySetInnerHTML={{ __html: mdParser.render(description) }} />
    </>
  );
};

export default DescriptionSection;
