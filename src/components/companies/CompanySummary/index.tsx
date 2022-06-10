/* eslint-disable @next/next/no-img-element */
import { Card, Col, Row, Tag, Tooltip } from 'antd';
import { HeroIcon } from 'components/commons/HeroIcon';

type Props = {
  company: Company;
};
type ComponentProps = {
  icon?: React.ReactNode;
  tooltip: string;
  content: any;
};
const Description = (props: ComponentProps) => (
  <div className='flex items-center gap-2'>
    {props.icon}
    <Tooltip title={props.tooltip}>
      <p className='my-0'>{props.content}</p>
    </Tooltip>
  </div>
);

const CompanySummary = ({ company }: Props) => {
  return (
    <Card>
      <Row gutter={[20, 20]}>
        <Col span={4}>
          <img className='w-full h-28 object-contain rounded-md' src={company.logo} alt='logo' />
        </Col>
        <Col span={16}>
          <h4 className='text-2xl font-semibold mb-2'>{company.name}</h4>
          <Row gutter={[20, 12]}>
            <Col span={24}>
              <Description
                icon={<HeroIcon icon='LocationMarkerIcon' outline={false} />}
                tooltip={'Company address'}
                content={company.locations[0]?.address}
              />
            </Col>
            <Col span={24}>
              <Description
                icon={<HeroIcon icon='UserGroupIcon' outline={false} />}
                tooltip={'Company size'}
                content={company.size}
              />
            </Col>
            <Col span={24}>
              <div>
                {company?.industries.map((subcategory) => (
                  <Tag key={subcategory._id} color='geekblue'>
                    {subcategory.name}
                  </Tag>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default CompanySummary;
