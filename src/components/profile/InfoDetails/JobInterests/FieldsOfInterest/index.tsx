import { Row } from 'antd';
import React from 'react';
import Interest from '../Interest';
import Item from '../Item';
import ListItems from '../ListItems';

type Props = {};
const fields = [
  {
    job: 'Busness Development',
    roles: ['Account Executive', 'Business Development Executive', 'Customer Success Manager'],
  },
  {
    job: 'Busness Development',
    roles: [
      'Account Executive',
      'Business Development Executive',
      'Account Manager',
      'Customer Success Manager',
    ],
  },
  {
    job: 'Busness Development',
    roles: [
      'Account Executive',
      'Business Development Executive',
      'Business Development Manager',
      'Customer Success Manager',
    ],
  },
];
const FieldsOfInterest = (props: Props) => {
  return (
    <Interest>
      <Interest.Label>Fields of Interest</Interest.Label>
      <Interest.Body>
        {fields.map((field, index) => (
          <div key={index}>
            <h3>{field.job}</h3>
            <ListItems
              line
              data={field.roles.map((f) => ({
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
