import { Card, Col, Image, Row, Tag } from 'antd';
import React, { useState } from 'react';
import { HeroIcon } from 'utils/HeroIcon';

type Props = {};

const JobCardItem = (props: Props) => {
  const [isLike, setIsLike] = useState(false);

  const Like = () => {
    setIsLike(!isLike);
  };
  return (
    <Row className=' mb-[10px] last:mb-0 hover:opacity-90 hover:shadow-lg '>
      <Card className='w-full h-[230px] shadow-sm p-[20px]'>
        <Row>
          <Col span={4}>
            <Image width={90} height={90} className='bg-red-500' />
          </Col>
          <Col span={20} className='font-semibold text-[#8B7A9F] pl-[15px]'>
            <Row>
              <Col span={12} className=' text-base'>
                Microsoft
              </Col>
              <Col span={12} className='!flex justify-end'>
                <div onClick={() => Like()}>
                  <HeroIcon
                    icon='HeartIcon'
                    outline={!isLike}
                    size='h-[24px]'
                    color={isLike ? '!text-[#D82727]' : ''}
                    className=' hover:!text-[#D82727]'
                  />
                </div>
              </Col>
            </Row>
            <Col span={24}>
              <h2 className='text-[20px] font-semibold mb-0'>Senior backend developer</h2>
            </Col>
            <Col span={24} className='text-[14px]  text-[#8B7A9F]'>
              HCM, VietNam
            </Col>
            <Col className='mt-[10px] mb-[10px]' span={24}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper non, sit vitae tortor
              varius at est quis aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Col>
            <Col span={24}>
              <Tag className='!rounded-[4px]'>React</Tag>
              <Tag className='!rounded-[4px]'>React</Tag>
              <Tag className='!rounded-[4px]'>React</Tag>
              <Tag className='!rounded-[4px]'>React</Tag>
              <Tag className='!rounded-[4px]'>React</Tag>
            </Col>
          </Col>
        </Row>
      </Card>
    </Row>
  );
};

export default JobCardItem;
