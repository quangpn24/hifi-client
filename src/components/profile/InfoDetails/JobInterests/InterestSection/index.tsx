import { Row } from 'antd';
import React from 'react';
import Interest from '../Interest';
import ListItems from '../ListItems';

type Props = {
  label: string;
  data: any;
  type: 'list' | 'text';
};
const InterestSection = ({ data, label, type = 'text' }: Props) => {
  return (
    <Interest>
      <Interest.Label>{label}</Interest.Label>
      <Interest.Body>
        {type === 'list' && <ListItems data={data} />}
        {type === 'text' && <p>{data}</p>}
      </Interest.Body>
    </Interest>
  );
};

export default InterestSection;
