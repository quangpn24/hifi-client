import { Form, FormInstance, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';

const numberOfDependents = [
  {
    name: '0',
    value: 0,
    familyAllowances: 0,
  },
  {
    name: '1',
    value: 1,
    familyAllowances: 4400000,
  },
  {
    name: '2',
    value: 2,
    familyAllowances: 8800000,
  },
  {
    name: '3',
    value: 3,
    familyAllowances: 13200000,
  },
  {
    name: '4',
    value: 4,
    familyAllowances: 17600000,
  },
  {
    name: '5',
    value: 5,
    familyAllowances: 22000000,
  },
  {
    name: '6',
    value: 6,
    familyAllowances: 26400000,
  },
  {
    name: '7',
    value: 7,
    familyAllowances: 30800000,
  },
  {
    name: '8',
    value: 8,
    familyAllowances: 35200000,
  },
  {
    name: '9',
    value: 9,
    familyAllowances: 39600000,
  },
  {
    name: '10',
    value: 10,
    familyAllowances: 44000000,
  },
];

const { Option } = Select;

type Props = {
  form: FormInstance;
  setFamilyAllowances?: Function;
};

export const FamilyAllowances = ({ form }: Props) => {
  const [familyAllowances, setFamilyAllowances] = useState(0);

  const dependentOnChange = (value: number) => {
    switch (value) {
      case 0: {
        setFamilyAllowances(0);
        break;
      }
      case 1: {
        setFamilyAllowances(4400000);
        break;
      }
      case 2: {
        setFamilyAllowances(8800000);
        break;
      }
      case 3: {
        setFamilyAllowances(13200000);
        break;
      }
      case 4: {
        setFamilyAllowances(17600000);
        break;
      }
      case 5: {
        setFamilyAllowances(22000000);
        break;
      }
      case 6: {
        setFamilyAllowances(26400000);
        break;
      }
      case 7: {
        setFamilyAllowances(30800000);
        break;
      }
      case 8: {
        setFamilyAllowances(35200000);
        break;
      }
      case 9: {
        setFamilyAllowances(39600000);
        break;
      }
      case 10: {
        setFamilyAllowances(44000000);
        break;
      }
    }
  };

  useEffect(() => {
    const dependentData = {
      familyAllowances: `${familyAllowances.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
    };

    form.setFieldsValue(dependentData);
  }, [form, familyAllowances]);

  return (
    <div>
      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Number of dependents'
        name='numberOfDependents'
        initialValue={0}
      >
        <Select defaultValue={0} onChange={dependentOnChange}>
          {numberOfDependents.map((numberOfDepent) => (
            <Option key={numberOfDepent.value} value={numberOfDepent.value}>
              {numberOfDepent.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Family allowances'
        name='familyAllowances'
        initialValue={0}
      >
        <Input disabled={true} />
      </Form.Item>
    </div>
  );
};
