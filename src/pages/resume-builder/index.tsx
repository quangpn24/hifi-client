import { Col, Row } from 'antd';
import LeftNav from 'components/resume-builder/LeftNav';
import Resume from 'components/resume-builder/Resume';
import { NextPage } from 'next';

const ResumeBuilder: NextPage = () => {
  return (
    <div className='contain py-8'>
      <h2>Resume builder</h2>
      <Row gutter={[20, 20]}>
        <Col span={12}>
          <LeftNav />
        </Col>
        <Col span={12}>
          <Resume />
        </Col>
      </Row>
    </div>
  );
};

export default ResumeBuilder;
