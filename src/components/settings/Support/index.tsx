import { Button, Card } from 'antd';
import React from 'react';

type Props = {};

const Support = (props: Props) => {
  return (
    <div className='px-16'>
      <Card title={'Help & Support'.toUpperCase()}>
        <p>For assistance regarding your Glints account, contact us via the button below.</p>
        <Button className='mt-4' type='primary'>
          Get Help
        </Button>
      </Card>
    </div>
  );
};

export default Support;
