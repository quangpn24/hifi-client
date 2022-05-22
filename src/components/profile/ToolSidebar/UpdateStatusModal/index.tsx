import { Modal, Radio } from 'antd';
import DatePicker from 'components/commons/DatePicker';
import dayjs from 'dayjs';
import React from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectUser } from 'redux/selectors';
import StatusCard from '../StatusCard';

type Props = {
  visible?: boolean;
  onCancel?: () => void;
};

const WorkDateOption = [
  { label: 'I can start immediately', value: 'IMMEDIATELY' },
  { label: 'I can start after', value: 'AFTER' },
  { label: 'Not sure yet', value: 'NOT' },
];
const statusOptions = [
  { label: "I'm not open to opportunities", value: 'I_AM_NOT_INTERESTED_IN_JOB' },
  { label: "I'm open to opportunities", value: 'OPEN_FOR_OPPORTUNITIES' },
  { label: "I'm actively looking for job", value: 'I_AM_LOOKING_FOR_JOB' },
];
const UpdateStatusModal = ({ visible, onCancel }: Props) => {
  const user = useAppSelector(selectUser);
  const [status, setStatus] = React.useState<string | undefined>(user?.candidateStatus);
  const [preferredStartDate, setPreferredStartDate] = React.useState<Date | undefined>();
  const [workDateOption, setWorkDateOption] = React.useState<string | undefined>();
  const handleOk = () => {
    console.log('status', status);
    console.log('preferredStartDate', preferredStartDate);
    console.log('workDateOption', workDateOption);
  };

  return (
    <Modal title='STATUS AVAILABILITY ' visible={visible} onOk={handleOk} onCancel={onCancel}>
      {statusOptions.map((item) => (
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
