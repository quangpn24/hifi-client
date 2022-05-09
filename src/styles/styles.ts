import { Timeline } from 'antd';
import styled from 'styled-components';
import { colorHelper } from 'utils';

export const TitleText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  color: ${(props: any) => props.theme.text};
`;

export const ItalicText = styled.div`
  font-style: italic;
  font-size: 0.6rem;
  color: ${(props: any) => colorHelper.converHexToRGB(props.theme.text, '0.9')};
`;

export const NormalText = styled.div`
  font-size: 0.6rem;
  color: ${(props: any) => props.theme.text};
`;

export const FlexTimeline = styled(Timeline)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: 100%;
  color: ${(props: any) => props.theme.text};
  margin-top: 4px;

  ul {
    padding-left: 16px;
    margin-bottom: 0;
    font-size: 0.8rem;
  }
  .ant-timeline-item-head-blue {
    color: ${(props: any) => props.theme.primary};
    border-color: ${(props: any) => props.theme.primary};
  }
  .ant-timeline-item-tail {
    border-color: ${(props: any) => colorHelper.converHexToRGB(props.theme.text, '0.1')};
  }
`;

export const TimelineItem = styled(FlexTimeline.Item)`
  padding-bottom: 0;
  flex-grow: 1;
  padding-bottom: 12px;

  :last-child {
    flex-grow: 0;
    padding-bottom: 0;
  }
`;
