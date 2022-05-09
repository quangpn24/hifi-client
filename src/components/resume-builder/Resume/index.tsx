/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../templates/layout/DefaultLayout';

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
  return (
    // @ts-ignore
    <ResumeContainer ref={(el) => (componentToPrint.current = el)}>
      <DefaultLayout />
    </ResumeContainer>
  );
});

export default Resume;
