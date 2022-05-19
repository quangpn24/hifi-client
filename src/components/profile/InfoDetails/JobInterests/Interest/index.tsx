import { Col, Row } from 'antd';
import React from 'react';

interface IInterest {
  children: React.ReactNode | React.ReactNode[];
}

const Interest: React.FC<IInterest> & {
  Label: React.FC;
  Body: React.FC;
} = ({ children }) => {
  const label = React.Children.map(children, (child) =>
    //@ts-ignore
    child?.type.displayName === 'Label' ? child : null
  );
  const body = React.Children.map(children, (child) =>
    //@ts-ignore
    child?.type.displayName === 'Body' ? child : null
  );
  return (
    <Row className='interest' gutter={16}>
      <Col lg={8} sm={24}>
        <h2 className='text-base font-bold mb-0'>{label}</h2>
      </Col>
      <Col lg={12} sm={24}>
        {body}
      </Col>
    </Row>
  );
};

const Label: React.FC & { displayName: string } = ({ children }) => <>{children}</>;
Label.displayName = 'Label';
Interest.Label = Label;

const Body: React.FC & { displayName: string } = ({ children }) => <>{children}</>;
Body.displayName = 'Body';
Interest.Body = Body;

export default Interest;
