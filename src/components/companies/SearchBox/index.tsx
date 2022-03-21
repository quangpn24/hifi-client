import { Col, Input, Row } from 'antd';
import AppHeading from 'components/commons/AppHeading';

interface Props {
  data: number;
}
const { Search } = Input;

const SearchBox = (props: Props) => {
  return (
    <Row className='py-10'>
      <Col span={24}>
        <AppHeading text='Explore amazing companies' />
      </Col>
      <Col>
        <Search placeholder='Search companies' allowClear enterButton='Search' size='large' />
      </Col>
    </Row>
  );
};

export default SearchBox;
