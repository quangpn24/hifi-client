import { Tooltip } from 'antd';
import { templates, templatesImage, templatesName } from 'constant/templates';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateTemplate } from 'redux/reducers/templateReducer';
import { selectTemplate } from 'redux/selectors';
import styled from 'styled-components';

const TemplateThumbnailImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  height: auto;
  border: solid 2px transparent;
`;

const TemplateThumbnail = styled.label`
  width: 169px;
  height: 240px;
  object-fit: cover;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.3s;

  .selected {
    border: solid 2px #446ffc;
    border-radius: 8px;
  }
`;

const TemplateSwitch = () => {
  const dispatch = useAppDispatch();
  const templateState = useAppSelector(selectTemplate);
  return (
    <div className='flex flex-col items-center my-4'>
      {templates.map((_: any, index: number) => (
        <Tooltip title={templatesName[index]} key={templatesName[index]}>
          <TemplateThumbnail>
            <TemplateThumbnailImg
              src={templatesImage[index].src}
              alt={templatesName[index]}
              className={templateState.index == index ? 'selected' : ''}
              onClick={() => dispatch(updateTemplate(index))}
            />
          </TemplateThumbnail>
        </Tooltip>
      ))}
    </div>
  );
};

export default TemplateSwitch;
