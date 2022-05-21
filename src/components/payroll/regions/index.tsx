import { Form, FormInstance, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';

interface Region {
  name: string;
  value: string;
  minimumValueOfRegion: number;
  unemploymentInsuranceCeiling: number;
  personalDeductions: number;
}

const regions: Region[] = [
  {
    name: 'Region 1',
    value: 'region-1',
    minimumValueOfRegion: 4420000,
    unemploymentInsuranceCeiling: 88400000,
    personalDeductions: 11000000,
  },
  {
    name: 'Region 2',
    value: 'region-2',
    minimumValueOfRegion: 3920000,
    unemploymentInsuranceCeiling: 78400000,
    personalDeductions: 11000000,
  },
  {
    name: 'Region 3',
    value: 'region-3',
    minimumValueOfRegion: 3430000,
    unemploymentInsuranceCeiling: 68600000,
    personalDeductions: 11000000,
  },
  {
    name: 'Region 4',
    value: 'region-4',
    minimumValueOfRegion: 3070000,
    unemploymentInsuranceCeiling: 61400000,
    personalDeductions: 11000000,
  },
];

const { Option } = Select;

type Props = {
  form: FormInstance;
};

export const Regions = ({ form }: Props) => {
  const [minimumValueOfRegion, setMinimumValueOfRegion] = useState(4420000);
  const [unemploymentInsuranceCeiling, setUnemploymentInsuranceCeiling] = useState(88400000);
  const [personalDeductions, setPersonalDeductions] = useState(11000000);

  const regionOnChange = (value: string) => {
    switch (value) {
      case 'region-1': {
        setMinimumValueOfRegion(4420000);
        setUnemploymentInsuranceCeiling(88400000);
        setPersonalDeductions(11000000);
        break;
      }
      case 'region-2': {
        setMinimumValueOfRegion(3920000);
        setUnemploymentInsuranceCeiling(78400000);
        setPersonalDeductions(11000000);
        break;
      }
      case 'region-3': {
        setMinimumValueOfRegion(3430000);
        setUnemploymentInsuranceCeiling(68600000);
        setPersonalDeductions(11000000);
        break;
      }
      case 'region-4': {
        setMinimumValueOfRegion(3070000);
        setUnemploymentInsuranceCeiling(61400000);
        setPersonalDeductions(11000000);
        break;
      }
    }
  };

  useEffect(() => {
    const regionData = {
      minimumValueOfRegion: `${minimumValueOfRegion
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      unemploymentInsuranceCeiling: `${unemploymentInsuranceCeiling
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
      personalDeductions: `${personalDeductions.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
    };

    form.setFieldsValue(regionData);
  }, [form, minimumValueOfRegion, unemploymentInsuranceCeiling, personalDeductions]);

  return (
    <>
      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Region'
        name='region'
        initialValue={'region-1'}
      >
        <Select onChange={regionOnChange} defaultValue={'region-1'}>
          {regions.map((region) => (
            <Option key={region.value} value={region.value}>
              {region.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Minimum Value of Region'
        name='minimumValueOfRegion'
        initialValue={minimumValueOfRegion}
      >
        <Input disabled={true} />
      </Form.Item>
      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Unemployment insurance ceiling'
        name='unemploymentInsuranceCeiling'
        initialValue={unemploymentInsuranceCeiling}
      >
        <Input disabled={true} />
      </Form.Item>
      <Form.Item
        className='!text-sm !text-[#5d677a]'
        label='Personal deductions'
        name='personalDeductions'
        initialValue={personalDeductions}
      >
        <Input disabled={true} />
      </Form.Item>
    </>
  );
};
