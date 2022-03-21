import { Button, Card, Col, Divider, Row, Tag } from 'antd';
import React from 'react';
import { HeroIcon } from 'utils/HeroIcon';

type Props = {};

type ItemProps = {
  iconName: string;
  content: string;
  outline?: boolean;
};
const DescriptionItem = (props: ItemProps) => {
  return (
    <div className='flex flex-row items-center'>
      <HeroIcon
        icon={props.iconName}
        outline={props.outline ? props.outline : false}
        size='h-[20px]'
        className='mr-[10px]'
      />
      {props.content}
    </div>
  );
};

const JobDetails = (props: Props) => {
  return (
    <div className='h-screen overflow-auto scrollbar-hide'>
      <Card>
        <Row className='sticky top-0 bg-white z-10'>
          <Col span={18}>
            <span className='text-[24px] font-semibold'>Senior backend developer</span>
          </Col>
          <Col span={6} className='!flex flex-row items-center text-[#685879] justify-end'>
            <HeroIcon
              icon='ShareIcon'
              outline={true}
              className='h-[24px] w-[24px] mr-[10px] border-[1px] border-[#8B7A9F] rounded-[4px] p-[2px]'
            />
            <HeroIcon
              icon='HeartIcon'
              outline={true}
              className='h-[24px] w-[24px] mr-[10px] border-[1px] border-[#8B7A9F] rounded-[4px] p-[2px]'
            />
          </Col>
          <Col span={10}>
            <Button type='primary'>Apply now</Button>
          </Col>
          <Divider className='!mb-0' />
        </Row>
        <Row className='my-[20px]'>
          <Tag className=' !text-[16px] !h-[30px] !flex !items-center !rounded-[4px]'>React </Tag>
          <Tag className=' !text-[16px] !h-[30px] !flex !items-center !rounded-[4px]'>React </Tag>
          <Tag className=' !text-[16px] !h-[30px] !flex !items-center !rounded-[4px]'>React </Tag>
          <Tag className=' !text-[16px] !h-[30px] !flex !items-center !rounded-[4px]'>React </Tag>
        </Row>
        <Row className='text-[16px]'>
          <Row className='text-[#8B7A9F]'>
            <Col span={24}>Netcompany · Ho Chi Minh City, Viet Nam</Col>
            <Col span={24}>On-site · 1 week ago </Col>
          </Row>
          <Row className='text-[#685879] font-normal'>
            <Col span={24}>
              <DescriptionItem
                iconName='CurrencyDollarIcon'
                content='2000 - 5000 $'
                outline={true}
              />
            </Col>
            <Col span={24}>
              <DescriptionItem iconName='BriefcaseIcon' content='FullTime · Senior level' />
            </Col>
            <Col span={24}>
              <DescriptionItem
                iconName='OfficeBuildingIcon'
                content='501-1,000 employees · Software Development'
              />
            </Col>
          </Row>
        </Row>
        <Row className='text-[#685879] mt-[30px]'>
          <h2 className='text-[18px] font-semibold'>Descriptions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis scelerisque arcu, eget
            sed nisl orci suspendisse. Lectus tempor, amet a, fames sit elit venenatis id magna. In
            ullamcorper tellus tempus, condimentum nisl interdum lacus, tristique. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mattis scelerisque arcu, eget sed nisl orci
            suspendisse. Lectus tempor, amet a, fames sit elit venenatis id magna. In ullamcorper
            tellus tempus, condimentum nisl interdum lacus, tristique. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mattis scelerisque arcu, eget sed nisl orci suspendisse.
            Lectus tempor, amet a, fames sit elit venenatis id magna. In ullamcorper tellus tempus,
            condimentum nisl interdum lacus, tristique. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mattis scelerisque arcu, eget sed nisl orci suspendisse. Lectus tempor,
            amet a, fames sit elit venenatis id magna. In ullamcorper tellus tempus, condimentum
            nisl interdum lacus, tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mattis scelerisque arcu, eget sed nisl orci suspendisse. Lectus tempor, amet a, fames
            sit elit venenatis id magna. In ullamcorper tellus tempus, condimentum nisl interdum
            lacus, tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            scelerisque arcu, eget sed nisl orci suspendisse. Lectus tempor, amet a, fames sit elit
            venenatis id magna. In ullamcorper tellus tempus, condimentum nisl interdum lacus,
            tristique.
          </p>
        </Row>
        <Row className='text-[#685879] mt-[30px]'>
          <h2 className='text-[18px] font-semibold'>Requirements</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis scelerisque arcu, eget
            sed nisl orci suspendisse. Lectus tempor, amet a, fames sit elit venenatis id magna. In
            ullamcorper tellus tempus, condimentum nisl interdum lacus, tristique. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Mattis scelerisque arcu, eget sed nisl orci
            suspendisse. Lectus tempor, amet a, fames sit elit venenatis id magna. In ullamcorper
            tellus tempus, condimentum nisl interdum lacus, tristique. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mattis scelerisque arcu, eget sed nisl orci suspendisse.
            Lectus tempor, amet a, fames sit elit venenatis id magna. In ullamcorper tellus tempus,
            condimentum nisl interdum lacus, tristique. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mattis scelerisque arcu, eget sed nisl orci suspendisse. Lectus tempor,
            amet a, fames sit elit venenatis id magna. In ullamcorper tellus tempus, condimentum
            nisl interdum lacus, tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mattis scelerisque arcu, eget sed nisl orci suspendisse. Lectus tempor, amet a, fames
            sit elit venenatis id magna. In ullamcorper tellus tempus, condimentum nisl interdum
            lacus, tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            scelerisque arcu, eget sed nisl orci suspendisse. Lectus tempor, amet a, fames sit elit
            venenatis id magna. In ullamcorper tellus tempus, condimentum nisl interdum lacus,
            tristique.
          </p>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>About the company</Col>
        </Row>
      </Card>
    </div>
  );
};

export default JobDetails;
