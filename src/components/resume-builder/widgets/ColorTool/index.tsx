import { Tooltip } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { updateTheme } from 'redux/reducers/themeReducer';
import { selectTheme } from 'redux/selectors';
import styled from 'styled-components';

const ColorContainer = styled.div`
  display: flex;
  width: 200px;
  height: 25px;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
`;

const Color: any = styled.div`
  width: 25%;
  height: 100%;
  background-color: ${(props: any) => props.themeColor};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    // mix-blend-mode: difference;
  }
`;

type PickerProps = {
  key: string;
  title: string;
};

const ColorTool = () => {
  const [type, setType] = useState<string>('');
  const [color, setColor] = useState<string>('');

  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const colorPickers: PickerProps[] = [
    {
      key: 'primary',
      title: 'Primary color',
    },
    {
      title: 'Text color',
      key: 'text',
    },
    {
      title: 'Background color',
      key: 'background',
    },
  ];
  type ThemeKey = keyof typeof theme;

  const handleChangeComplete = (color: any) => {
    dispatch(updateTheme({ type: type, value: color.hex }));
    setColor(color.hex);
  };

  const handleChangeType = (key: string) => {
    setType(key);
    setColor(theme[key as ThemeKey]);
  };
  const ColorPick = () => <ChromePicker color={color} onChangeComplete={handleChangeComplete} />;
  return (
    <ColorContainer>
      {colorPickers.map((picker: PickerProps) => (
        <Tooltip
          key={picker.key}
          placement='bottom'
          title={ColorPick}
          trigger='click'
          color='white'
        >
          <Color
            onClick={() => handleChangeType(picker.key)}
            themeColor={theme[picker.key as ThemeKey]}
          >
            <AppIcon icon='Md/MdColorize' size='16' />
          </Color>
        </Tooltip>
      ))}
    </ColorContainer>
  );
};

export default ColorTool;
