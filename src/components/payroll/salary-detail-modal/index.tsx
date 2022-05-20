import { Modal } from 'antd';
import { SalaryDetail } from 'pages/payroll';
import React from 'react';

type Props = {
  isVisible: boolean;
  setIsVisible: Function;
  salaryDetail?: SalaryDetail;
};

export const SalaryDetailModal = ({ isVisible, setIsVisible, salaryDetail }: Props) => {
  return (
    <div className=''>
      <Modal
        title='Salary details'
        visible={isVisible}
        footer={null}
        onCancel={() => setIsVisible(false)}
      >
        <div className='px-4 pb-4 space-y-2'>
          <div className='flex items-center justify-between font-semibold'>
            <p className='mb-0'>GROSS</p>
            <p className='mb-0'>
              {salaryDetail ? salaryDetail.gross.toLocaleString('en-US') : '15,000,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Type of labor</p>
            <p className='mb-0'>{salaryDetail ? salaryDetail.typeOfLabor : 'Trained'}</p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Social insurance</p>
            <p className='mb-0'>
              {salaryDetail
                ? `-${salaryDetail.socialInsurance.toLocaleString('en-US')}`
                : '-1,200,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Health insurance</p>
            <p className='mb-0'>
              {salaryDetail
                ? `-${salaryDetail.healthInsurance.toLocaleString('en-US')}`
                : '-225,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Unemployment</p>
            <p className='mb-0'>
              {salaryDetail ? `-${salaryDetail.unemployment.toLocaleString('en-US')}` : '-150,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Union</p>
            <p className='mb-0'>
              {salaryDetail ? `-${salaryDetail.union.toLocaleString('en-US')}` : '-150,000'}
            </p>
          </div>

          <div className='flex items-center justify-between font-semibold'>
            <p className='mb-0'>Income before tax</p>
            <p className='mb-0'>
              {salaryDetail ? salaryDetail.incomeBeforeTax.toLocaleString('en-US') : '13,276,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Personal deductions</p>
            <p className='mb-0'>
              {salaryDetail
                ? `-${salaryDetail.personalDeductions.toLocaleString('en-US')}`
                : '-11,000,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Family allowances</p>
            <p className='mb-0'>
              {salaryDetail ? `-${salaryDetail.familyAllowances.toLocaleString('en-US')}` : '-0'}
            </p>
          </div>

          <div className='flex items-center justify-between font-semibold'>
            <p className='mb-0'>Income taxes</p>
            <p className='mb-0'>
              {salaryDetail ? salaryDetail.incomeTaxes.toLocaleString('en-US') : '2,276,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Personal income tax</p>
            <p className='mb-0'>
              {salaryDetail
                ? `-${salaryDetail.personalIncomeTax?.toLocaleString('en-US')}`
                : '-113,800'}
            </p>
          </div>

          <div className='flex items-center justify-between font-semibold'>
            <p className='mb-0'>NET</p>
            <p className='mb-0'>
              {salaryDetail ? salaryDetail.net.toLocaleString('en-US') : '13,162,000'}
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <p className='mb-0'>Subsidize</p>
            <p className='mb-0'>
              {salaryDetail ? salaryDetail.subsidize.toLocaleString('en-US') : '2,000,000'}
            </p>
          </div>

          <div className='flex items-center justify-between font-semibold'>
            <p className='mb-0'>Total income</p>
            <p className='mb-0'>
              {salaryDetail ? salaryDetail.totalIncome.toLocaleString('en-US') : '15,162,000'}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
