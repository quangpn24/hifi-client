import { Layout, Typography } from 'antd';
import JobPostForm from 'components/recruiter/job_posting/JobPostForm';
import React from 'react';

const { Title, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const JobPostingPage = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content className='justify-center'>
        <div className='px-20 py-10'>
          <div className='flex flex-col items-center'>
            <Title>Creating a job post</Title>
            <Paragraph className='w-30 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Cras purus bibendum diam aliquam donec ultricies pharetra, arcu.
            </Paragraph>
          </div>
          <JobPostForm />
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default JobPostingPage;
