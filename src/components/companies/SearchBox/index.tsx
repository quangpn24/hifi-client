import { Col, Input, Row } from 'antd';
import AppHeading from 'components/commons/AppHeading';

interface Props {
  data: number;
  setSearchName: Function;
}
const { Search } = Input;

const SearchBox = (props: Props) => {
  const { setSearchName } = props;
  const onChange = (value: string) => {
    setSearchName(value);
  };
  return (
    <Row className='py-10'>
      <Col span={24}>
        <AppHeading text='Explore amazing companies' />
      </Col>
      <Col>
        <Search
          placeholder='Search companies'
          allowClear
          enterButton='Search'
          size='large'
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </Col>
    </Row>
  );
};

export default SearchBox;
