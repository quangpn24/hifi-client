import { Card, Col, Divider, Row } from 'antd';
import companyApi from 'api/companyApi';
import CompanyAbout from 'components/companies/CompanyAbout';
import CompanyImages from 'components/companies/CompanyImages';
import CompanyLocation from 'components/companies/CompanyLocation';
import CompanySummary from 'components/companies/CompanySummary';
import JobCardItem from 'components/JobSeeker/JobList/JobCardItem';
import type { GetServerSideProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

type Props = {
  company: Company;
};

const Companies = ({ company }: Props) => {
  return (
    <div className='contain pb-10 pt-6'>
      <Row gutter={[20, 30]}>
        <Col span={24}>
          <CompanySummary company={company} />
        </Col>
        <Col span={18}>
          <Card>
            {company?.posts?.map((post) => (
              <div className='mb-4' key={post._id}>
                <JobCardItem data={post} />
                <Divider />
              </div>
            ))}
          </Card>
          <Card>
            <CompanyAbout company={company} />
            <CompanyImages images={company?.images} />
          </Card>
        </Col>
        <Col span={6}>
          <CompanyLocation locations={company.locations} />
        </Col>
      </Row>
    </div>
  );
};

export default Companies;

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.params as IParams;
    const res = await companyApi.getOne(id);
    return {
      props: {
        company: res.data.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        company: [],
      },
    };
  }
};
