/* eslint-disable @next/next/no-img-element */
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, Col, Row } from 'antd';
import { CSSProperties } from 'react';

type ComponentProps = {
  className: string;
  style: CSSProperties;
  onClick: any;
};

const SampleNextArrow = (props: ComponentProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715',
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props: ComponentProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
        lineHeight: '1.5715',
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow className={''} style={{}} onClick={undefined} />,
  prevArrow: <SamplePrevArrow className={''} style={{}} onClick={undefined} />,
  autoplay: true,
  swipeToSlide: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type Props = {
  images: string[];
};
const CompanyImages = ({ images }: Props) => {
  return (
    <Row justify='center' className='mt-8'>
      <Col span={12}>
        <Carousel arrows {...settings}>
          {images &&
            images.map((image, index) => (
              <div key={index}>
                <img src={image} alt='image' />
              </div>
            ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default CompanyImages;
