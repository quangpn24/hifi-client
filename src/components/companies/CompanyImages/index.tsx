import { Carousel, Col, Row } from 'antd';
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { CSSProperties } from 'react';

interface Props {
  className: string;
  style: CSSProperties;
  onClick: any;
}
// const CarouselArrow = (props: Props) => {
//   return (
//     <div
//       style={{
//         color: 'black',
//         fontSize: '16px',
//         lineHeight: '1.5',
//       }}
//     >
//       {props.isNext ? <RightOutlined /> : <LeftOutlined />}
//     </div>
//   );
// };

const SampleNextArrow = (props: Props) => {
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

const SamplePrevArrow = (props: Props) => {
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

const CompanyImages = () => {
  return (
    <Row justify='center' className='mx-10'>
      <Col span={12}>
        <Carousel arrows {...settings}>
          <div>
            <img src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK1Q4RlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e1cb10dc2b770c51ab76e1fe8f8f54a78562d52b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRSitBbWtDd2dFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--37dacfa8f03d273130813e08b771bc430942de1e/Image%20from%20iOS%20(1).jpg' />
          </div>
          <div>
            <img src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOUQ4RlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2be0c503c7df497621bb612b6106fe179d7546ae/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZmRHOWZabWxzYkZzSGFRSitBbWtDd2dFPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--37dacfa8f03d273130813e08b771bc430942de1e/Amazing%20race%20(172)-min.jpg' />
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default CompanyImages;
