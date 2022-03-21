import { Input } from 'antd';
import React from 'react';
import CheckboxMenu from '../CheckboxMenu';

type Props = {};

const MultiSelection = (props: Props) => {
  return (
    <div className=' text-center'>
      <Input.Group>
        <CheckboxMenu
          options={[
            'Apple',
            'Pear',
            'Orange',
            'Apple1',
            'Pear1',
            'Orange1',
            'Apple2',
            'Pear2',
            'Orange2',
            'Apple3',
            'Pear3',
            'Orange3',
            'Apple4',
            'Pear4',
            'Orange4',
            'Apple5',
            'Pear5',
            'Orange5',
            'Apple6',
            'Pear6',
            'Orange6',
            'Apple7',
            'Pear7',
            'Orange7',
            'Orange6',
            'Apple7',
            'Pear7',
            'Orange7',
            'Orange6',
            'Apple7',
            'Pear7',
            'Orange7',
          ]}
          onChange={() => {}}
        />
      </Input.Group>
    </div>
  );
};

export default MultiSelection;
