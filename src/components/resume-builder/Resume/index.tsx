/* eslint-disable react/display-name */
import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectTemplate, selectTheme } from 'redux/selectors';
import styled, { ThemeProvider } from 'styled-components';

const ResumeContainer: any = styled.div`
  width: 210mm;
  height: 296mm;
  background-color: white;
  border: 1px solid ${(props) => props.theme.fontColor};
  margin: 6mm;
  transform-origin: top;
  transform: ${({ zoom }: any) => `scale(${1 + zoom})`};
  margin-bottom: ${({ zoom }: any) => {
    if (zoom < 0) return 260 * zoom;
    if (zoom > 0) return 320 * zoom;
    return 6;
  }}mm;

  @media print {
    border: none;
    overflow: inherit;
    margin: 0;
    transform: none;
  }
`;

interface IProps {
  componentToPrint: React.MutableRefObject<null>;
}

const Resume = React.forwardRef(({ componentToPrint }: IProps) => {
  const theme = useAppSelector(selectTheme);
  const template = useAppSelector(selectTemplate);
  const ResumeLayout = template.template;
  return (
    <ThemeProvider theme={theme}>
      <ResumeContainer ref={(el: null) => (componentToPrint.current = el)}>
        <ResumeLayout />
      </ResumeContainer>
    </ThemeProvider>
  );
});

export default Resume;
