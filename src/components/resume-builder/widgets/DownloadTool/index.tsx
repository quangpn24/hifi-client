import { Button } from 'antd';
import AppIcon from 'components/commons/AppIcon';
import React from 'react';
import ReactToPrint from 'react-to-print';

interface IProps {
  componentToPrint: React.MutableRefObject<null>;
}

const DownloadTool = ({ componentToPrint }: IProps) => (
  <ReactToPrint
    trigger={() => (
      <Button
        type='primary'
        style={{ alignItems: 'center', display: 'flex' }}
        icon={
          <AppIcon icon='Ai/AiOutlineCloudDownload' style={{ marginRight: '12px' }} size='16' />
        }
      >
        Download
      </Button>
    )}
    content={() => componentToPrint.current}
  />
);

export default DownloadTool;
