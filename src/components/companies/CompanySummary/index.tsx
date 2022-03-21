import { Card, Col, Row, Tooltip } from 'antd';
import { HeroIcon } from 'components/commons/HeroIcon';

interface Props {
  id: number;
  logoUrl: string;
  companyName: string;
  address: string;
  field: string;
  jobs: number;
}
interface ComponentProps {
  icon?: React.ReactNode;
  tooltip: string;
  content: string;
}
const Description = (props: ComponentProps) => (
  <div className='flex items-center gap-2'>
    {props.icon}
    <Tooltip title={props.tooltip}>
      <p className='my-0'>{props.content}</p>
    </Tooltip>
  </div>
);

const CompanySummary = (props: Props) => {
  return (
    <Card className='!my-8'>
      <Row gutter={[20, 20]}>
        <Col span={4}>
          <img
            className='w-full h-28 object-cover rounded-md'
            src={props.logoUrl}
            alt='fossil-logo'
          />
        </Col>
        <Col span={16}>
          <h4 className='text-2xl font-bold my-2'>{props.companyName}</h4>
          <Row gutter={[20, 8]}>
            <Col span={24}>
              <Description
                icon={<HeroIcon icon='LocationMarkerIcon' outline={false} />}
                tooltip={'Company address'}
                content={'123, duong abc, ho chi minh'}
              />
            </Col>
            <Col span={8}>
              <Description
                icon={<HeroIcon icon='UserGroupIcon' outline={false} />}
                tooltip={'Company size'}
                content={'101 - 499'}
              />
            </Col>
            <Col span={8}>
              <Description
                icon={<HeroIcon icon='UserGroupIcon' outline={false} />}
                tooltip={'Company size'}
                content={'101 - 500'}
              />
            </Col>
            <Col span={8}>
              <Description
                icon={<HeroIcon icon='UserGroupIcon' outline={false} />}
                tooltip={'Company size'}
                content={'101 - 500'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default CompanySummary;
