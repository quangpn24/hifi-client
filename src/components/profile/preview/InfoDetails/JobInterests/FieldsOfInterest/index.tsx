import { Row } from 'antd';
import React from 'react';
import Interest from '../Interest';
import ListItems from '../ListItems';

type Props = {
  fields: InterestField[];
};

const FieldsOfInterest = ({ fields }: Props) => {
  return (
    <Interest>
      <Interest.Label>Fields of Interest</Interest.Label>
      <Interest.Body>
        {fields.map((field, index) => (
          <div key={index} className='mb-4'>
            <h3 className='mb-2'>{field.job}</h3>
            <ListItems
              line
              data={[field.role].map((f) => ({
                id: f,
                text: f,
              }))}
            />
          </div>
        ))}
      </Interest.Body>
    </Interest>
  );
};

export default FieldsOfInterest;
