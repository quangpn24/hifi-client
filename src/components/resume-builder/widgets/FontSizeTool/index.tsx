import { Button, Select } from 'antd';
import AppIcon from 'components/commons/AppIcon';

const { Option } = Select;

const FontSizeTool = () => {
  return (
    <div className='flex gap-2 items-center'>
      <AppIcon icon='Bi/BiFontSize' size='20' />
      <Select defaultValue='default' style={{ width: 100 }}>
        <Option value='small'>Small</Option>
        <Option value='default'>Default</Option>
        <Option value='large'>Large</Option>
      </Select>
    </div>
  );
};

export default FontSizeTool;
