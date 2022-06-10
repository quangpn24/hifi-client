import { Col, Row } from 'antd';
import companyApi from 'api/companyApi';
import CompanyCard from 'components/companies/CompanyCard';
import SearchBox from 'components/companies/SearchBox';
import type { GetServerSideProps } from 'next';

const queryParams = '?limit=12';

type Props = {
  companies: Company[];
};

const Companies = ({ companies }: Props) => {
  return (
    <div className='contain pb-8'>
      <SearchBox data={0}></SearchBox>
      <Row className='min-h-fit' justify='center' gutter={[20, 20]}>
        {companies.map((company) => (
          <Col span={8} key={company._id}>
            <CompanyCard company={company} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Companies;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await companyApi.getCompanies();
    return {
      props: {
        companies: res.data.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        companies: [],
      },
    };
  }
};
