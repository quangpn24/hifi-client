import { Button, Card, Checkbox, Col, Form, InputNumber, Row } from 'antd';
import {
  FamilyAllowances,
  Insurance,
  Regions,
  Salary,
  SalaryDetailModal,
} from 'components/payroll';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { removedComma } from 'utils/removedComma';

interface FormData {
  totalSalary: number;
  subsidize: number;
  typeOfLabor: string;
  socialInsurance: number;
  healthInsurance: number;
  unemployment: number;
  union: number;
  region: string;
  minimumValueOfRegion: number;
  unemploymentInsuranceCeiling: number;
  personalDeductions: number;
  familyAllowances: number;
}

export interface SalaryDetail {
  gross: number;
  typeOfLabor: string;
  socialInsurance: number;
  healthInsurance: number;
  unemployment: number;
  union: number;
  incomeBeforeTax: number;
  personalDeductions: number;
  familyAllowances: number;
  incomeTaxes: number;
  personalIncomeTax: number;
  net: number;
  subsidize: number;
  totalIncome: number;
}

const PayrollPage: NextPage = () => {
  const [form] = Form.useForm();
  const [isUnion, setIsUnion] = useState(true);
  const [union, setUnion] = useState(1);
  const [salaryDetail, setSalaryDetail] = useState<SalaryDetail>();
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmitForm = (data: FormData) => {
    const gross = data.totalSalary;
    const typeOfLabor = data.typeOfLabor;
    const socialInsurance =
      (data.totalSalary * data.socialInsurance) / 100 >= 2384000
        ? 2384000
        : (data.totalSalary * data.socialInsurance) / 100;
    const healthInsurance =
      (data.totalSalary * data.healthInsurance) / 100 >= 447000
        ? 447000
        : (data.totalSalary * data.healthInsurance) / 100;
    const unemployment = (data.totalSalary * data.unemployment) / 100;
    const union = 149000;
    const incomeBeforeTax = gross - (socialInsurance + healthInsurance + unemployment + union);
    const incomeTaxes =
      incomeBeforeTax -
        removedComma(data.personalDeductions.toString()) -
        removedComma(data.familyAllowances.toString()) >
      0
        ? incomeBeforeTax -
          removedComma(data.personalDeductions.toString()) -
          removedComma(data.familyAllowances.toString())
        : 0;
    let personalIncomeTax: number = 0;
    if (incomeTaxes <= 0) {
      personalIncomeTax = 0;
    } else if (incomeTaxes > 0 && incomeTaxes <= 5000000) {
      personalIncomeTax = incomeTaxes * 0.05;
    } else if (incomeTaxes > 5000000 && incomeTaxes <= 10000000) {
      personalIncomeTax = incomeTaxes * 0.1 - 250000;
    } else if (incomeTaxes > 10000000 && incomeTaxes <= 18000000) {
      personalIncomeTax = incomeTaxes * 0.15 - 750000;
    } else if (incomeTaxes > 18000000 && incomeTaxes <= 32000000) {
      personalIncomeTax = incomeTaxes * 0.2 - 1650000;
    } else if (incomeTaxes > 32000000 && incomeTaxes <= 52000000) {
      personalIncomeTax = incomeTaxes * 0.25 - 3250000;
    } else if (incomeTaxes > 52000000 && incomeTaxes <= 80000000) {
      personalIncomeTax = incomeTaxes * 0.3 - 5850000;
    } else if (incomeTaxes > 80000000) {
      personalIncomeTax = incomeTaxes * 0.35 - 9850000;
    }
    const net = incomeBeforeTax - personalIncomeTax;
    const totalIncome = net + data.subsidize;

    const salaryDetail: SalaryDetail = {
      gross,
      typeOfLabor,
      socialInsurance,
      healthInsurance,
      unemployment,
      union,
      incomeBeforeTax,
      personalDeductions: removedComma(data.personalDeductions.toString()),
      familyAllowances: removedComma(data.familyAllowances.toString()),
      incomeTaxes,
      personalIncomeTax,
      net,
      subsidize: data.subsidize,
      totalIncome,
    };

    setSalaryDetail(salaryDetail);
    setIsVisible(true);
  };

  useEffect(() => {
    isUnion ? setUnion(1) : setUnion(0);
  }, [form, isUnion]);

  return (
    <div className='max-w-screen-lg mx-auto py-12 '>
      <Form
        form={form}
        onFinish={handleSubmitForm}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
      >
        <Card className='!bg-white' title='BẢNG TÍNH LƯƠNG MẪU (GROSS to NET)'>
          <Salary />

          <p className='uppercase text-[#514cdd] text-base font-bold flex justify-center'>
            Insurance
          </p>

          <Insurance />

          <Form.Item noStyle>
            <Row>
              <Col span={6}>
                <div className='flex justify-end'>
                  <Form.Item>
                    <Checkbox checked={isUnion} onChange={() => setIsUnion(!isUnion)}>
                      Union
                    </Checkbox>
                  </Form.Item>
                </div>
              </Col>

              <Col span={14}>
                <InputNumber
                  className='!w-full'
                  disabled={!isUnion}
                  defaultValue={1.0}
                  value={union}
                  min={0}
                  max={100}
                  step={0.1}
                  formatter={(value) => `${value}%`}
                  parser={(value: any) => value.replace('%', '')}
                />
              </Col>
            </Row>
          </Form.Item>

          <Regions form={form} />

          <p className='uppercase text-[#514cdd] text-base font-bold flex justify-center'>
            Family allowances
          </p>

          <FamilyAllowances form={form} />

          <Form.Item>
            <div className='flex justify-end'>
              <Button type='primary' htmlType='submit' className='!block'>
                Calculate NET
              </Button>
            </div>
          </Form.Item>
        </Card>
      </Form>

      <SalaryDetailModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        salaryDetail={salaryDetail}
      />
    </div>
  );
};

export default PayrollPage;
