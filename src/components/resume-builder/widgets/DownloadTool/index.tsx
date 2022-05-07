import { Button } from 'antd';
import AppIcon from 'components/commons/AppIcon';

const FontSizeTool = () => {
  return (
    <Button
      type='primary'
      style={{ alignItems: 'center', display: 'flex' }}
      icon={<AppIcon icon='Ai/AiOutlineCloudDownload' style={{ marginRight: '12px' }} size='16' />}
    >
      Download
    </Button>
  );
};

export default FontSizeTool;
