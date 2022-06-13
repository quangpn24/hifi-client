import { Card } from 'antd';
import ApplicationList from 'components/application/ApplicationList';
import StatusSideBar from 'components/application/StatusSideBar';
type Props = {};

const ApplicationsPage = (props: Props) => {
  return (
    <div className='p-8'>
      <h1>My Applications</h1>
      <Card className='min-h-screen bg-white rounded-md py-4' bodyStyle={{ display: 'flex' }}>
        <StatusSideBar />
        <ApplicationList />
      </Card>
    </div>
  );
};

export default ApplicationsPage;
