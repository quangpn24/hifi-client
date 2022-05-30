import { Button, Select } from 'antd';
import AppIcon from 'components/commons/AppIcon';

const { Option } = Select;

const FontFamilyTool = () => {
  return (
    <div className='flex gap-2 items-center'>
      <AppIcon icon='Bi/BiFont' size='20' />
      <Select defaultValue='default' style={{ width: 100 }}>
        <Option value='small'>Arial</Option>
        <Option value='default'>Modern</Option>
        <Option value='large'>Large</Option>
      </Select>
    </div>
  );
};

export default FontFamilyTool;
