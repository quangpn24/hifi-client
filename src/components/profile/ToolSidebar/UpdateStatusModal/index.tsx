import { message, Modal, Radio } from 'antd';
import userApi from 'api/userApi';
import axios from 'axios';
import DatePicker from 'components/commons/DatePicker';
import { JOBSEEKER_STATUS } from 'constant';
import dayjs from 'dayjs';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { authActions } from 'redux/reducers/authSlice';
import { selectUser } from 'redux/selectors';
import StatusCard from '../StatusCard';

type Props = {
  visible?: boolean;
  onCancel?: () => void;
  preferredStartDate?: Date;
};

const WorkDateOption = [
  { label: 'I can start immediately', value: 'IMMEDIATELY' },
  { label: 'I can start after', value: 'AFTER' },
  { label: 'Not sure yet', value: 'NOT' },
];

const UpdateStatusModal = ({
  visible,
  onCancel,
  preferredStartDate: preferredStartDateData,
}: Props) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [status, setStatus] = React.useState<string | undefined>(user?.candidateStatus);
  const [preferredStartDate, setPreferredStartDate] = React.useState<Date | undefined>(
    preferredStartDateData
  );
  const [workDateOption, setWorkDateOption] = React.useState<string | undefined>(() => {
    return !preferredStartDateData ? 'NOT' : 'IMMEDIATELY';
  });
  const handleOk = async () => {
    if (!status) {
      return;
    }
    try {
      const user = await userApi.updateMe({ candidateStatus: status, preferredStartDate });
      dispatch(
        authActions.update({
          user,
        })
      );
      message.success('Update status successfully!');
      onCancel?.();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        message.error(error?.response?.data.message);
      } else {
        message.error('Failed to update status');
      }
    }
  };

  return (
    <Modal title='STATUS AVAILABILITY ' visible={visible} onOk={handleOk} onCancel={onCancel}>
      {Array.from(JOBSEEKER_STATUS.values()).map((item) => (
        <StatusCard
          key={item.value}
          text={item.label}
          active={status === item.value}
          onClick={() => setStatus(item.value)}
        />
      ))}

      {status === 'I_AM_LOOKING_FOR_JOB' && (
        <div className='mt-2'>
          <p className='text-center my-3' color='#777777'>
            When will you be available to start the new job?*
          </p>
          <Radio.Group
            options={WorkDateOption}
            onChange={(e) => {
              setWorkDateOption(e.target.value);
              e.target.value === 'NOT'
                ? setPreferredStartDate(undefined)
                : setPreferredStartDate(new Date());
            }}
            value={workDateOption}
            optionType='button'
            buttonStyle='solid'
            className='!mb-3'
          />
          <DatePicker
            disabled={workDateOption === 'NOT' || workDateOption === 'IMMEDIATELY'}
            value={preferredStartDate ? dayjs(preferredStartDate) : undefined}
            onChange={(value) => {
              setPreferredStartDate(value?.toDate());
            }}
            disabledDate={(current) => {
              return current && dayjs().isAfter(current, 'day');
            }}
          />
        </div>
      )}
    </Modal>
  );
};

export default UpdateStatusModal;
